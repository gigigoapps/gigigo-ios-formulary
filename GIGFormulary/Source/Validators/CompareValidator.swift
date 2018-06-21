//
//  CompareValidator.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 1/6/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation
import GIGLibrary

class CompareValidator: StringValidator {
    
    override func validate(_ value: Any?) -> Bool {
        guard let valueArray = value as? [String] else {
            return false
        }
        
        if valueArray.count > 0 {
            let first = valueArray[0]
            let compareElement = valueArray.map({ (value: String) -> Bool in
                return value == first
            })
            
            return !compareElement.contains(false)
        }
        return true
    }
}
