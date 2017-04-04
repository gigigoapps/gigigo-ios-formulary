//
//  FormConstant.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit


enum TypeField: String {
    case TEXT_FORM_FIELD = "text"
    case PICKER_FORM_FIELD = "picker"
    case DATEPICKER_FORM_FIELD = "datePicker"
    case BOOLEAN_FORM_FIELD = "boolean"
    case INDEX_FORM_FIELD = "index"
}

enum TypeKeyBoard: String {
    case KEYBOARD_TEXT = "FormKeyboardTypeText"
    case KEYBOARD_EMAIL = "FormKeyboardTypeEmail"
    case KEYBOARD_NUMBER = "FormKeyboardTypeNumbers"
    case KEYBOARD_NUMBERPAD = "FormKeyboardTypeNumberPad"
}

enum TypeValidator: String {
    case VALIDATOR_TEXT = "text"
    case VALIDATOR_EMAIL = "email"
    case VALIDATOR_LENGTH = "lengthText"
    case VALIDATOR_NUMERIC = "numeric"
    case VALIDATOR_POSTALCODE = "postalCode"
    case VALIDATOR_PHONE = "phone"
    case VALIDATOR_BOOL = "bool"
    case VALIDATOR_DNINIE = "dniNie"
    case VALIDATOR_AGE = "age"
    case VALIDATOR_CUSTOM = "customValidator"
}

enum ThrowError: Error {
    case invalidParse
    case mandatoryElementNotFound
    case mandatoryElementEmpty
    case mandatoryElementIncorrectType
}

class FormConstant: NSObject {}
