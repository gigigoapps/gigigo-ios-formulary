//
//  StringValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class StringValidator: Validator {
    
    override func validate(_ value: Any?) -> Bool {
        if value == nil {
            return false
        } else if value is String {
            guard let stringValue = value as? String else { LogWarn("Parse value String Error, return false"); return false }
            if stringValue.count == 0 {
                return false
            }
        } else {
            return false
        }
        
        return true
    }
}
