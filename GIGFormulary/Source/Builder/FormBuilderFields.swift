//
//  FormBuilder.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class FormBuilderFields: NSObject {
    
    //-- Controller --
    var formController: FormController
        
    //-- Types --
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
    
    
    // MARK: Public Method
    
    func fieldsFromJSONFile(_ file: String) -> [FormField] {
        var listFormField = [FormField]()
        let jsonRecover = Bundle.main.loadJSONFile(file, rootNode: "fields")
        if jsonRecover != nil {
            guard let listFormDic = jsonRecover as? [[AnyHashable: Any]] else { LogWarn("Parse error [[AnyHashable: Any]]"); return [] }
            for fieldDic in listFormDic {
                listFormField.append(self.createField(fieldDic))
            }
        } else {
            LogWarn("json fields Not Found or Bad format")
        }
        
        return listFormField
    }
    
    func fieldsFromDictionary(_ listItems: [[AnyHashable: Any]]) -> [FormField] {
        var listFormField = [FormField]()
        for fieldDic in listItems {
            listFormField.append(self.createField(fieldDic))
        }
        return listFormField
    }
    
    
    // MARK: Private Method
    
    fileprivate func initializeTypes() {
        self.keyboardTypes  = [.keyboardText: .default,
                              .keyboardEmail: .emailAddress,
                              .keyboardNumber: .numbersAndPunctuation,
                              .keyboardNumberPad: .numberPad]

        self.validatorsType = [.validatorText: StringValidator.self,
                               .validatorEmail: MailValidator.self,
                               .validatorLength: LengthValidator.self,
                               .validatorNumeric: NumericValidator.self,
                               .validatorPostalCode: PostalCodeValidator.self,
                               .validatorPhone: PhoneValidator.self,
                               .validatorBool: BoolValidator.self,
                               .validatorDniNie: DNINIEValidator.self,
                               .validatorAge: AgeValidator.self,
                               .validatorCustom: CustomValidator.self,
                               .validatorMandatory: MandatoryValidator.self,
                               .validatorCompare: CompareValidator.self]
    }
    
    fileprivate func createField(_ fieldDic: [AnyHashable: Any]) -> FormField {
        do {
            let formFieldM = FormFieldModel(bundle: self.bundle)
            try formFieldM.parseDictionary(fieldDic)
            guard let type = formFieldM.type else {
                LogWarn("type for field not found")
                return FormField()
            }
            let field = self.fieldType(for: type, subtype: formFieldM.subtype)
            field.formFieldM = formFieldM
            field.formFieldOutput = self.formController
            field.validator = self.validatorToField(formFieldM)
            field.keyBoard = self.keyboardToField(formFieldM)
            field.insertData()
            return field
        } catch {
            let field = FormField()
            return field
        }
    }
    
    fileprivate func validatorToField(_ formFieldM: FormFieldModel) -> [Validator]? {
        guard let validates = formFieldM.validator else { return nil }
        
        var validatorFound: [Validator] = []
        
        for validate in validates {
            if let type = validate.type, let typeValidate = TypeValidator(rawValue: type) {
                let typeValidator = self.validatorsType[typeValidate]
                let validator: Validator
                if let custom = formFieldM.custom {
                    validator = typeValidator!.init(custom: custom)
                } else {
                    validator = typeValidator!.init()
                }
                validator.minLength = validate.minLengthValue
                validator.maxLength = validate.maxLengthValue
                validator.minAge = validate.minAge
                validator.textError = validate.textError
                
                validatorFound.append(validator)
            }
        }

        return validatorFound
    }
    
    fileprivate func keyboardToField(_ formFieldM: FormFieldModel) -> UIKeyboardType? {
        if formFieldM.keyBoard != nil {
            return self.keyboardTypes[TypeKeyBoard(rawValue: formFieldM.keyBoard!)!]
        } else {
            return UIKeyboardType.default
        }
    }
    
    fileprivate func fieldType(for type: String, subtype: String? = nil) -> FormField {
        guard let type = TypeField(rawValue: type) else { return FormField() }
        let subtype = SubTypeField(rawValue: subtype ?? "")
        switch (type, subtype) {
        case (.textFormField, _):
            return TextFormField()
        case (.boolFormField, nil):
            return BooleanFormField()
        case (.boolFormField, .expandable?):
            if #available(iOS 9.0, *) {
                return ExpandableBooleanFormField()
            } else {
                return BooleanFormField()
            }
        case (.pickerFormField, _):
            return PickerFormField()
        case (.datePickerFormField, _):
            return PickerFormField()
        case (.indexFormField, _):
            return IndexFormField()
        }
    }
}
