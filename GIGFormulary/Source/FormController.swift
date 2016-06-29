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
    var listFields = [FormField]()
    
    init(viewContainerFormulary: UIView) {        
        super.init()
        
        self.formViews = FormBuilderViews(viewContainerFormulary: viewContainerFormulary)
    }
    
    // MARK: Public Method
    
    func loadFieldsFromJSONFile(jsonFile: String) {
        let builder = FormBuilderFields(formController: self)
        self.listFields = builder.fieldsFromJSONFile(jsonFile)
        
        self.formViews!.updateFormularyContent(self.listFields)
    }
    
    
    // MARK: Private Method
    
    
    
    // MARK: PTextFormField
    func borrarProtocolo() {
        
    }
    
    //MARK: PPickerFormField
    
    func borrarProtocolo2() {
        
    }
}
