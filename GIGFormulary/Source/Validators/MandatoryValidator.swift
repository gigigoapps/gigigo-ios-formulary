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
            return false
        } else {
            return true
        }
    }
}
