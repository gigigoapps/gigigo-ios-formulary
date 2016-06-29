//
//  FormBuilder.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class FormBuilderFields: NSObject {
    
    //-- Controller --
    var formController: FormController
        
    //-- Types --
    var listTypeFields = [TypeField: FormField.Type]()

    
    init(formController: FormController) {
        self.formController = formController
        
        super.init()
        
        self.initializeTypes()
    }
    
    // MARK: Private Method
    
    private func initializeTypes() {
        self.listTypeFields = [.TEXT_FORM_FIELD: TextFormField.self,
                               .PICKER_FORM_FIELD: PickerFormField.self]
    }
    
    private func createField(fieldDic: [String:AnyObject]) -> FormField {
        do {
            let formFieldM = FormFieldModel()
            try formFieldM.parseDictionary(fieldDic)
            
            let typeField = self.listTypeFields[TypeField(rawValue: formFieldM.tag!)!]
            let field = typeField!.init()
            field.delegate = self.formController
            field.insertData(formFieldM)
            return field
        }
        catch {
            let field = FormField()
            return field
        }
    }
    
    // MARK: Public Method
    
    func fieldsFromJSONFile(file: String) -> [FormField] {
        
        /*
         NSArray *listFormDic = [self.bundle loadJSONFile:file rootNode:@"fields"];
         */
        
        let listFormDic = [["tag":"text","label":"ejemplo1","type":"fsad","textError":"fsad"],
                           ["tag":"picker","label":"ejemplo2","type":"fsad","textError":"fsad"],
                           ["tag":"text","label":"ejemplo3","type":"fsad","textError":"fsad"]]
        
        
        
        var listFormField = [FormField]()
        
        for fieldDic in listFormDic {
            listFormField .append(self.createField(fieldDic))
        }
        
        return listFormField
    }
}
