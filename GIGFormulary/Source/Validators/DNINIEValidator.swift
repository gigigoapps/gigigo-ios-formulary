//
//  DNINIEValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class DNINIEValidator: StringValidator {
    override func validate(value: AnyObject?) -> Bool{
        if (!super.validate(value))  {
            return false
        }
        let stringValue = value as? String
        
        if (stringValue?.characters.count == 0 && !self.mandatory) {
            return true
        }
        
        if (stringValue != nil) {
            return self.isValidNieNif(stringValue!)
        }
        
        return true
    }
    
    func isValidNieNif(value: String) -> Bool{
        var num: String
        var letter: String
        var letterDni: String
        let valueUpper = value.uppercaseString
        
        if (self.validateCharsForDNI(valueUpper) || self.validateCharsForNIE(valueUpper)) {
            let myRange = valueUpper.startIndex.advancedBy(0)..<valueUpper.startIndex.advancedBy(valueUpper.characters.count - 1)
            num = valueUpper.substringWithRange(myRange)
            num = num.stringByReplacingOccurrencesOfString("X", withString: "0")
            num = num.stringByReplacingOccurrencesOfString("Y", withString: "1")
            num = num.stringByReplacingOccurrencesOfString("Z", withString: "2")
            
            let rangeLetter = valueUpper.startIndex.advancedBy(valueUpper.characters.count - 1)..<valueUpper.startIndex.advancedBy(valueUpper.characters.count)
            letter = valueUpper.substringWithRange(rangeLetter)
                        
            let badCharacters = NSCharacterSet.decimalDigitCharacterSet().invertedSet
            if num.rangeOfCharacterFromSet(badCharacters) == nil {
                var numberInt: Int = Int(num)!
                numberInt = numberInt % 23
                letterDni = "TRWAGMYFPDXBNJZSQVHLCKE"
                let rangeDNI = letterDni.startIndex.advancedBy(numberInt)..<letterDni.startIndex.advancedBy(numberInt + 1)
                letterDni = letterDni.substringWithRange(rangeDNI)
                
                if (letterDni == letter) {
                    return true
                }
                else {
                    return false
                }
            } else {
                return false
            }
        }
        else {
            return false
        }
    }
    
    func validateCharsForDNI(value: String) -> Bool{
        return self.validateRegex(value, regex: "[0-9]{8}[A-Za-z]")
    }
    
    func validateCharsForNIE(value : String) -> Bool {
        return self.validateRegex(value,regex: "^[KkLlMmXxYyZz]{1}[0-9]{7}[a-zA-Z]{1}$")
    }
    
    func validateRegex (value: String, regex: String) -> Bool {
        let regex = NSRegularExpression(pattern: regex)
        return (regex?.matchesString(value))!
    }
}
