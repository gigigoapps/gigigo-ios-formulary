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
    
    func recoverView() -> UIView {
        return self.formViews!.recoverViewContainer()
    }
    
    // MARK: Private Method

    fileprivate func nextFieldTo(_ field: FormField) -> FormField?{
        let nextField =  self.formFields.index(of: field)!+1
        if (nextField < self.formFields.count) {
            return self.formFields[nextField]
        }
        else {
            return nil
        }
    }
    
    fileprivate func validateFields() -> Bool {
        var valid = true
        for field in self.formFields {
            valid = field.validate()
            let value = field.fieldValue as? String            
            self.formValues["\(field.formFieldM!.key!)"] =  (value != nil) ? value as AnyObject? : "" as AnyObject?
        }
        return valid
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
}
