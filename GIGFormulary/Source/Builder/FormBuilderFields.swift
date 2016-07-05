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
    var keyboardTypes = [TypeKeyBoard: UIKeyboardType]()
    var validatorsType = [TypeValidator: Validator.Type]()

    
    init(formController: FormController) {
        self.formController = formController
        
        super.init()
        
        self.initializeTypes()
    }
    
    // MARK: Private Method
    
    private func initializeTypes() {
        self.listTypeFields = [.TEXT_FORM_FIELD: TextFormField.self,
                               .PICKER_FORM_FIELD: PickerFormField.self]
        
        self.keyboardTypes  = [.KEYBOARD_TEXT: .Default,
                              .KEYBOARD_EMAIL: .EmailAddress,
                              .KEYBOARD_NUMBER: .NumbersAndPunctuation,
                              .KEYBOARD_NUMBERPAD: .NumberPad]

        self.validatorsType = [.VALIDATOR_TEXT: StringValidator.self]
    }
    
    private func createField(fieldDic: [String:AnyObject], tag: Int) -> FormField {
        do {
            let formFieldM = FormFieldModel()
            try formFieldM.parseDictionary(fieldDic)
            
            let typeField = self.listTypeFields[TypeField(rawValue: formFieldM.type!)!]
            let field = typeField!.init()
            field.delegate = self.formController
            field.validator = self.validatorToField(formFieldM)
            field.keyBoard = self.keyBoardToField(formFieldM)
            field.insertData(formFieldM)
            field.tag = tag
            return field
        }
        catch {
            let field = FormField()
            return field
        }
    }
    
    private func validatorToField(formFieldM: FormFieldModel) -> Validator?{
        if (formFieldM.validator != nil) {
            let typeValidator = self.validatorsType[TypeValidator(rawValue: formFieldM.validator!)!]
            let validator = typeValidator!.init(mandatory: true)
            validator.mandatory = formFieldM.mandatory
            return validator
        }
        else {
            return Validator(mandatory: formFieldM.mandatory)
        }
    }
    
    private func keyBoardToField(formFieldM: FormFieldModel) -> UIKeyboardType?{
        if (formFieldM.keyBoard != nil) {
            return self.keyboardTypes[TypeKeyBoard(rawValue: formFieldM.keyBoard!)!]
        }
        else {
            return UIKeyboardType.Default
        }
    }
    
    // MARK: Public Method
    
    func fieldsFromJSONFile(file: String) -> [FormField] {
        let listFormDic = NSBundle.mainBundle().loadJSONFile(file, rootNode: "fields") as! [[String: AnyObject]]
        var listFormField = [FormField]()
        var tag = 0
        for fieldDic in listFormDic {
            listFormField.append(self.createField(fieldDic, tag: tag))
            tag += 1
        }
        
        return listFormField
    }
}
