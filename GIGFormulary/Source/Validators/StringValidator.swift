//
//  StringValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class StringValidator: Validator {    
    override func validate(_ value: AnyObject?) -> Bool{
        if (value == nil && self.mandatory)
        {
            return false;
        }
        else if (value != nil)
        {
            if (value is String) {
                let stringValue = value as! String
                if ((stringValue.characters.count == 0) && self.mandatory) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        
        return true;        
    }
}
