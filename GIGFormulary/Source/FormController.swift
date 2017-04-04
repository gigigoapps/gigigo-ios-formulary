//
//  FormController.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

protocol PFormController {
    func recoverFormModel(_ formValues: [String: AnyObject])
    func userDidTapLink(_ key: String)
    func fieldFocus(_ frame: CGRect)
}

class FormController: NSObject, PFormField, PFormBuilderViews {
    // Public Var
    var delegate: PFormController?
    
    // CLASS
    var formViews: FormBuilderViews?
    
    // VAR
    var formFields = [FormField]()
    var formValues = [String: AnyObject]()
    var bundle = Bundle(for: Formulary.self)
    
    // INIT
    
    init(viewContainerFormulary: UIView, bundle: Bundle?) {
        super.init()
        self.formViews = FormBuilderViews(
            viewContainerFormulary: viewContainerFormulary,
            formController: self
        )
        
        self.loadBundle(bundle)
    }
    
    init(button: UIButton, bundle: Bundle?) {
        super.init()
        self.formViews = FormBuilderViews(
            button: button,
            formController: self
        )
        
        self.loadBundle(bundle)
    }
    
    // MARK: Public Method
    
    func loadFieldsFromJSONFile(_ jsonFile: String) {
        let builder = FormBuilderFields(formController: self, bundle: self.bundle)
        self.formFields = builder.fieldsFromJSONFile(jsonFile)        
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    func loadFieldsFromJSONDictionary(_ listItems: [[String: AnyObject]]) {
        let builder = FormBuilderFields(formController: self, bundle: self.bundle)
        self.formFields = builder.fieldsFromDictionary(listItems)
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    func populateData(_ values: [String:AnyObject]) {
        var _ = values.map {key, value -> [String: AnyObject] in
            var _ = self.formFields.map { formField -> FormField in
                if formField.formFieldM?.key == key {
                    formField.fieldValue = value
                    self.formValues[key] = value as AnyObject?
                }
                return formField
            }
            return [key: value]
        }
    }
    
    func loadError(_ values: [String: String]) {
        var search = true
        for field in self.formFields {
            let _ = values.filter({ (key, value) -> Bool in
                if key == field.formFieldM?.key {
                    field.loadError(error: value)
                    
                    //-- Go to position if first found --
                    self.moveToPositionError(search, field)
                    search = false
                }
                return true
            })
        }
    }
    
    func recoverView() -> UIView {
        return self.formViews!.recoverViewContainer()
    }
    
    func clearFormulary() {
        self.formViews?.clearFormulary()
    }
    
    // MARK: Private Method

    fileprivate func loadBundle(_ bundle: Bundle?) {
        if let bundleForm = bundle {
            self.bundle = bundleForm
        }
    }
    
    fileprivate func nextFieldTo(_ field: FormField) -> FormField? {
        let nextFieldPos =  self.formFields.index(of: field)!+1
        if nextFieldPos < self.formFields.count {
            let nextField = self.formFields[nextFieldPos]
            if nextField.formFieldM?.type == TypeField.INDEX_FORM_FIELD.rawValue {
                return self.nextFieldTo(nextField)
            }
            return nextField
        } else {
            return nil
        }
    }
    
    fileprivate func validateFields() -> Bool {
        var isValid = true
        for field in self.formFields {
            guard let formFieldM = field.formFieldM else {
                return false
            }
            
            if !field.validate() {
                self.moveToPositionError(isValid, field)
                isValid = false
            } else {
                if formFieldM.compare {
                    guard let itemsCompare = formFieldM.itemCompare else {
                        return false
                    }
                    
                    let listValues = self.searchValueItemToCompare(itemsCompare)
  
                    if field.validator!.validateCompare(listValues) {
                        isValid = false
                        field.validateCompare()
                    }
                }
            }
            
            if formFieldM.type != TypeField.INDEX_FORM_FIELD.rawValue {
                if let valueString = field.fieldValue as? String {
                    let value = valueString.trimmingCharacters(in: .whitespaces)
                    self.formValues["\(formFieldM.key!)"] = value as AnyObject?
                } else {
                    self.formValues["\(formFieldM.key!)"] = (field.fieldValue != nil) ? field.fieldValue as AnyObject : "" as AnyObject
                }
            }
        }
        return isValid
    }
    
    fileprivate func moveToPositionError(_ isValid: Bool, _ field: FormField) {
        if isValid {
            self.formViews?.scrollRectToVisible(field)
        }
    }
    
    fileprivate func searchValueItemToCompare(_ itemsCompare: [String]) -> [String] {
        let listValues = itemsCompare.map({ (key: String) -> String in
            let itemFound: [FormField] = self.formFields.filter({ formFieldSearch -> Bool in
                return formFieldSearch.formFieldM?.key == key
            })
            
            if itemFound.count > 0 {
                if itemFound[0].fieldValue != nil {
                    guard let fieldString = itemFound[0].fieldValue as? String else { LogWarn("Parse value to String error"); return "" }
                    return fieldString
                } else {
                    return ""
                }
            }
            return ""
        })
        
        return listValues
    }
 
    // MARK: PFormBuilderViews
    
    func sendButtonAction() {
        if self.validateFields() {
            self.delegate?.recoverFormModel(self.formValues)
        }
    }
    
    // MARK: PTextFormField
    func scrollRectToVisible(_ field: FormField) {
        self.formViews?.scrollRectToVisible(field)
        self.delegate?.fieldFocus(field.frame)
    }
    
    func formFieldDidFinish(_ field: FormField) {
        let nextField = self.nextFieldTo(field)
        self.formViews?.changeFocusField(nextField)
        
        if nextField == nil {
             let _ = self.validateFields()
        }
    }
    
    func userDidTapLink(_ key: String) {
        self.delegate?.userDidTapLink(key)
    }
}
