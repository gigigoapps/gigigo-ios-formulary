//
//  RegexValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 5/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class RegexValidator: StringValidator {
    
    var regex: NSRegularExpression?
    
    init(regex: NSRegularExpression, mandatory: Bool) {
        self.regex = regex
        
        super.init(mandatory: mandatory)
    }
    
    init(regexPattern: String?, mandatory: Bool) {
        if (regexPattern != nil) {
            self.regex = NSRegularExpression(pattern: regexPattern)
        }        
        
        super.init(mandatory: mandatory)
    }
    
    required init(mandatory: Bool) {
        super.init(mandatory: mandatory)
    }
    
    // MARK: Public Method

    override func validate(value: AnyObject?) -> Bool{
        if (!super.validate(value))  {
            return false
        }
        
        if (value != nil) {
            let stringValue = value as! String
            
            if (stringValue.characters.count == 0 && !self.mandatory) {
                return true
            }
            return (self.regex?.matchesString(stringValue))!
        }
        else
        {
            return true
        }
    }
}
