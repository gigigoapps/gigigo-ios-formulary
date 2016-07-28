//
//  FormController.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PFormController {
    func recoverFormModel(formValues: [String: String])
}

class FormController: NSObject, PFormField, PFormBuilderViews {
    // Public Var
    var delegate: PFormController?
    
    // CLASS
    var formViews: FormBuilderViews?
    
    // VAR
    var formFields = [FormField]()
    var formValues = [String: String]()
    
    init(viewContainerFormulary: UIView) {        
        super.init()
        
        self.formViews = FormBuilderViews(viewContainerFormulary: viewContainerFormulary,formController: self)
    }
    
    // MARK: Public Method
    
    func loadFieldsFromJSONFile(jsonFile: String) {
        let builder = FormBuilderFields(formController: self)
        self.formFields = builder.fieldsFromJSONFile(jsonFile)        
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    // MARK: Private Method

    private func nextFieldTo(field: FormField) -> FormField?{
        let nextField =  self.formFields.indexOf(field)!+1
        if (nextField < self.formFields.count) {
            return self.formFields[nextField]
        }
        else {
            return nil
        }
    }
    
    private func validateFields() -> Bool {
        var valid = true
        for field in self.formFields {
            valid = field.validate()
            self.formValues["\(field.formFieldM!.key!)"] = field.fieldValue as? String
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
    func scrollRectToVisible(field: FormField) {
        self.formViews?.scrollRectToVisible(field)
    }
    
    func formFieldDidFinish(field: FormField) {
        let nextField = self.nextFieldTo(field)
        self.formViews?.changeFocusField(nextField)
        
        if (nextField == nil) {
             self.validateFields()
        }
    }
}
