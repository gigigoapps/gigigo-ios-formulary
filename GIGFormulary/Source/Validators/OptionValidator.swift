//
//  OptionValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 19/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class OptionValidator: Validator {
    override func validate(value: AnyObject?) -> Bool{
        if (!super.validate(value)) {
            return false
        }        
        
        if (value is Int) {            
            let valueInt = value as! Int
            if(valueInt == 0 && !self.mandatory) {
                return true
            }
            else {
                return valueInt == 0 ? false : true
            }
        }
        
        return true
    }
}
