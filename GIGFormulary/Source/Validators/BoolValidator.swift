//
//  BoolValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class BoolValidator: Validator {
    override func validate(_ value: AnyObject?) -> Bool{
        if (!super.validate(value)) {
            return false
        }
        
        if (value is Bool) {
            return value as! Bool
        }
        
        return true
    }
}
