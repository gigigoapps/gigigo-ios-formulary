//
//  LengthValidator.swift
//  GIGFormulary
//
//  Created by eduardo parada pardo on 6/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class LengthValidator: StringValidator {

    required init(mandatory: Bool) {
        super.init(mandatory: mandatory)
    }
    
    init (minLength: Int?, maxLength: Int?) {
        super.init()
        self.minLength = minLength
        self.maxLength = maxLength
    }
    
    
    // MARK: - OVERRIDE (Validator)
    
    override func validate(value: AnyObject?) -> Bool{
        if (!super.validate(value))  {
            return false
        }

        let stringValue = value as! String
            
        if (stringValue.characters.count == 0 && !self.mandatory) {
            return true
        }
        
        if (self.maxLength != nil && self.minLength != nil) {
            return (!(value!.length > self.maxLength) && !(value!.length < self.minLength));
        }
        else if (self.maxLength != nil) {
            return !(value!.length > self.maxLength);
        }
        else if (self.minLength != nil) {
            return !(value!.length < self.minLength);
        }
        
        return true
    }
}
