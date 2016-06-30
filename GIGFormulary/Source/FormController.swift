//
//  FormController.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class FormController: NSObject, PFormField {
    
    // CLASS
    var formViews: FormBuilderViews?
    
    // VAR
    var formFields = [FormField]()
    var formValues = [String: String]()
    
    init(viewContainerFormulary: UIView) {        
        super.init()
        
        self.formViews = FormBuilderViews(viewContainerFormulary: viewContainerFormulary)
    }
    
    // MARK: Public Method
    
    func loadFieldsFromJSONFile(jsonFile: String) {
        let builder = FormBuilderFields(formController: self)
        self.formFields = builder.fieldsFromJSONFile(jsonFile)
        
        self.formViews!.updateFormularyContent(self.formFields)
    }
    
    // MARK: Private Method

    func nextFieldTo(field: FormField) -> FormField?{
        let nextField =  self.formFields.indexOf(field)!+1
        if (nextField < self.formFields.count) {
            return self.formFields[nextField]
        }
        else {
            return nil
        }
    }
    
    // MARK: PFormField
    
    
    // MARK: PTextFormField
    func scrollRectToVisible(field: FormField) {
        self.formViews?.scrollRectToVisible(field)
    }
    
    func didChangeValue(field: FormField, text: String) {
        self.formValues["\(field.tag)"] = text
    }
    
    func formFieldDidFinish(field: FormField) {
        let nextField = self.nextFieldTo(field)
        self.formViews?.changeFocusField(nextField)
        
        if (nextField != nil) {
            // [self validateFields];  // TODO EDU lanzar toda la validacion
        }
    }
    
    //MARK: PPickerFormField
    
    func borrarProtocolo2() {
        
    }
}
