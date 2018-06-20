//
//  MandatoryValidator.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 31/5/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation
import GIGLibrary

class MandatoryValidator: StringValidator {
    
    override func validate(_ value: Any?) -> Bool {
        if !super.validate(value) {
            if value is Bool {
                guard let valueBool = value as? Bool else {LogWarn("Parse value Bool Error, return false"); return false }
                return valueBool
            }
            if value is Date && value != nil {
                return true
            }
            return false
        } else {
            return true
        }
    }
}
