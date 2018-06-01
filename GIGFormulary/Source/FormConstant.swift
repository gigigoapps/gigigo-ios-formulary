//
//  FormConstant.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

// TODO EDU BORRAR: socialRegistration_emailAddress   -> https://d1lqe9temigv1p.cloudfront.net/widget_data/flows/xxzqjkrqn9dutxbrks8wktyy6f/native_app_it/HEAD/it-IT.json

import UIKit

enum TypeField: String {
    case textFormField = "text"
    case pickerFormField = "picker"
    case datePickerFormField = "datePicker"
    case boolFormField = "boolean"
    case indexFormField = "index"
}

enum SubTypeField: String {
    case expandable
}

enum TypeKeyBoard: String {
    case keyboardText = "FormKeyboardTypeText"
    case keyboardEmail = "FormKeyboardTypeEmail"
    case keyboardNumber = "FormKeyboardTypeNumbers"
    case keyboardNumberPad = "FormKeyboardTypeNumberPad"
}

enum TypeValidator: String {
    case validatorText = "text"
    case validatorEmail = "email"
    case validatorLength = "lengthText"
    case validatorNumeric = "numeric"
    case validatorPostalCode = "postalCode"
    case validatorPhone = "phone"
    case validatorBool = "bool"
    case validatorDniNie = "dniNie"
    case validatorAge = "age"
    case validatorCustom = "customValidator"
    case validatorMandatory = "mandatory"
    case validatorCompare = "compare"
}

enum ThrowError: Error {
    case invalidParse
    case mandatoryElementNotFound
    case mandatoryElementEmpty
    case mandatoryElementIncorrectType
}

class FormConstant: NSObject {}
