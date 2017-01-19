//
//  FormController.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PFormController {
    func recoverFormModel(_ formValues: [String: AnyObject])
    func userDidTapLink(_ key: String)
}

class FormController: NSObject, PFormField, PFormBuilderViews {
    // Public Var
    var delegate: PFormController?
    
    // CLASS
    var formViews: FormBuilderViews?
    
    // VAR
    var formFields = [FormField]()
    var formValues = [String: AnyObject]()
    
    init(viewContainerFormulary: UIView) {
        super.init()
        self.formViews = FormBuilderViews(viewContainerFormulary: viewContainerFormulary,
                                                  formController: self)
    }
    
    init(button: UIButton) {
        super.init()
        self.formViews = FormBuilderViews(button: button, formController: self)
    }
    
    // MARK: Public Method
    
    func loadFieldsFromJSONFile(_ jsonFile: String) {
        let builder = FormBuilderFields(formController: self)
        self.formFields = builder.fieldsFromJSONFile(jsonFile)        
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    func loadFieldsFromJSONDictionary(_ listItems: [[String: AnyObject]]) {
        let builder = FormBuilderFields(formController: self)
        self.formFields = builder.fieldsFromDictionary(listItems)
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    func populateData(_ values: [String:AnyObject]) {
        var _ = values.map {key, value -> [String: AnyObject] in
            var _ = self.formFields.map { formField -> FormField in
                if (formField.formFieldM?.key == key) {
                    formField.fieldValue = value
                    self.formValues[key] = value as? String as AnyObject?
                }
                return formField
            }
            return [key: value]
        }
    }
    
    func loadError(_ values: [String: String]) {
        for field in self.formFields {            
            let _ = values.filter({ (key, value) -> Bool in
                if (key == field.formFieldM?.key) {
                    field.loadError(error: value)
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

    fileprivate func nextFieldTo(_ field: FormField) -> FormField?{
        let nextFieldPos =  self.formFields.index(of: field)!+1
        if (nextFieldPos < self.formFields.count) {
            let nextField = self.formFields[nextFieldPos]
            if nextField.formFieldM?.type == TypeField.INDEX_FORM_FIELD.rawValue {
                return self.nextFieldTo(nextField)
            }
            return nextField
        }
        else {
            return nil
        }
    }
    
    fileprivate func validateFields() -> Bool {
        var isValid = true
        for field in self.formFields {
            guard let formFieldM = field.formFieldM else {
                return false
            }
            
            if (!field.validate()) {
                isValid = false
            }
            else {
                if formFieldM.compare {
                    guard let itemsCompare = formFieldM.itemCompare else {
                        return false
                    }
                    
                    let listValues = self.searchValueItemToCompare(itemsCompare)
  
                    if (field.validator!.validateCompare(listValues)) {
                        isValid = false
                        field.validateCompare()
                    }
                }
            }
            
            if formFieldM.type != TypeField.INDEX_FORM_FIELD.rawValue {
                let value = field.fieldValue?.trimmingCharacters(in: .whitespaces)
                self.formValues["\(formFieldM.key!)"] =  value as AnyObject
                //self.formValues["\(field.formFieldM!.key!)"] =  (field.formFieldM != nil) ? field.formFieldM as AnyObject : "" as AnyObject
            }
        }
        return isValid
    }
    
    fileprivate func searchValueItemToCompare(_ itemsCompare: [String]) -> [String] {
        let listValues = itemsCompare.map({ (key: String) -> String in
            let itemFound: [FormField] = self.formFields.filter({ formFieldSearch -> Bool in
                return formFieldSearch.formFieldM?.key == key
            })
            
            if itemFound.count > 0 {
                if itemFound[0].fieldValue != nil {
                    return itemFound[0].fieldValue as! String
                }
                else {
                    return ""
                }
            }
            return ""
        })
        
        return listValues
    }
 
    // MARK: PFormBuilderViews
    
    func sendButtonAction() {
        if (self.validateFields()) {
            self.delegate?.recoverFormModel(self.formValues)
        }
    }
    
    // MARK: PTextFormField
    func scrollRectToVisible(_ field: FormField) {
        self.formViews?.scrollRectToVisible(field)
    }
    
    func formFieldDidFinish(_ field: FormField) {
        let nextField = self.nextFieldTo(field)
        self.formViews?.changeFocusField(nextField)
        
        if (nextField == nil) {
             let _ = self.validateFields()
        }
    }
    
    func userDidTapLink(_ key: String) {
        self.delegate?.userDidTapLink(key)
    }
}
