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
}

enum TypeKeyBoard: String {
    case KEYBOARD_TEXT = "FormKeyboardTypeText"
    case KEYBOARD_EMAIL = "FormKeyboardTypeEmail"
    case KEYBOARD_NUMBER = "FormKeyboardTypeNumbers"
    case KEYBOARD_NUMBERPAD = "FormKeyboardTypeNumberPad"
}

enum TypeValidator: String {
    case VALIDATOR_TEXT = "text"
}




enum ThrowError: ErrorType {
    case InvalidParse
    case MandatoryElementNotFound
    case MandatoryElementEmpty
}

class FormConstant: NSObject {
    

    
}
