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

    //-- Var --
    var bundle: Bundle
    
    //-- INIT --
    
    init(formController: FormController, bundle: Bundle) {
        self.formController = formController
        self.bundle = bundle
        
        super.init()
        
        self.initializeTypes()
    }
    
    // MARK: Private Method
    
    fileprivate func initializeTypes() {
        self.listTypeFields = [.TEXT_FORM_FIELD: TextFormField.self,
                               .PICKER_FORM_FIELD: PickerFormField.self,
                               .DATEPICKER_FORM_FIELD: PickerFormField.self,
                               .BOOLEAN_FORM_FIELD: BooleanFormField.self,
                               .INDEX_FORM_FIELD: IndexFormField.self]
        
        self.keyboardTypes  = [.KEYBOARD_TEXT: .default,
                              .KEYBOARD_EMAIL: .emailAddress,
                              .KEYBOARD_NUMBER: .numbersAndPunctuation,
                              .KEYBOARD_NUMBERPAD: .numberPad]

        self.validatorsType = [.VALIDATOR_TEXT: StringValidator.self,
                               .VALIDATOR_EMAIL: MailValidator.self,
                               .VALIDATOR_LENGTH: LengthValidator.self,
                               .VALIDATOR_NUMERIC: NumericValidator.self,
                               .VALIDATOR_POSTALCODE: PostalCodeValidator.self,
                               .VALIDATOR_PHONE: PhoneValidator.self,
                               .VALIDATOR_BOOL: BoolValidator.self,
                               .VALIDATOR_DNINIE: DNINIEValidator.self,
                               .VALIDATOR_AGE: AgeValidator.self,
                               .VALIDATOR_CUSTOM: CustomValidator.self]
    }
    
    fileprivate func createField(_ fieldDic: [String:AnyObject]) -> FormField {
        do {
            let formFieldM = FormFieldModel(bundle: self.bundle)
            try formFieldM.parseDictionary(fieldDic)
            
            guard let typeFieldFound = TypeField(rawValue: formFieldM.type!) else {
                print("❌❌❌ typeFieldFound not found")
                return FormField()
            }
            let typeField = self.listTypeFields[typeFieldFound]
            let field = typeField!.init()
            field.formFieldM = formFieldM
            field.delegate = self.formController
            field.validator = self.validatorToField(formFieldM)
            field.keyBoard = self.keyboardToField(formFieldM)
            field.insertData()
            return field
        }
        catch {
            let field = FormField()
            return field
        }
    }
    
    fileprivate func validatorToField(_ formFieldM: FormFieldModel) -> Validator?{        
        guard
            let validate = formFieldM.validator,
            let typeValidate = TypeValidator(rawValue: validate)
            else {
                return Validator(mandatory: formFieldM.mandatory)
        }
        
        let typeValidator = self.validatorsType[typeValidate]
        let validator: Validator
        if let custom = formFieldM.custom {
            validator = typeValidator!.init(mandatory: formFieldM.mandatory, custom: custom)
        }
        else {
            validator = typeValidator!.init(mandatory: formFieldM.mandatory)
        }
        validator.minLength = formFieldM.minLengthValue
        validator.maxLength = formFieldM.maxLengthValue
        validator.minAge = formFieldM.minAge
        return validator
    }
    
    fileprivate func keyboardToField(_ formFieldM: FormFieldModel) -> UIKeyboardType?{
        if (formFieldM.keyBoard != nil) {
            return self.keyboardTypes[TypeKeyBoard(rawValue: formFieldM.keyBoard!)!]
        }
        else {
            return UIKeyboardType.default
        }
    }
    
    // MARK: Public Method
    
    func fieldsFromJSONFile(_ file: String) -> [FormField] {
        var listFormField = [FormField]()
        let jsonRecover = Bundle.main.loadJSONFile(file, rootNode: "fields")
        if (jsonRecover != nil) {
            let listFormDic = jsonRecover as! [[String: AnyObject]]
            for fieldDic in listFormDic {
                listFormField.append(self.createField(fieldDic))
            }
        }
        else {
            print("❌❌❌ json fields Not Found")
        }
        
        return listFormField
    }
    
    func fieldsFromDictionary(_ listItems: [[String: AnyObject]]) -> [FormField] {
        var listFormField = [FormField]()
        for fieldDic in listItems {
            listFormField.append(self.createField(fieldDic))
        }
        return listFormField
    }
}
