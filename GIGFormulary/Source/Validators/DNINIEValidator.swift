//
//  DNINIEValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class DNINIEValidator: StringValidator {
    
    override func validate(_ value: Any?) -> Bool {
        if !super.validate(value) {
            return false
        }
        let stringValue = value as? String
        
        if let stringValue = stringValue {
            if !self.mandatory && stringValue.count == 0 {
                return true
            } else {
                return self.isValidNieNif(stringValue)
            }            
        }
        
        return true
    }
    
    func isValidNieNif(_ value: String) -> Bool {
        var num: String
        var letter: String
        var letterDni: String
        let valueUpper = value.uppercased()
        
        if self.validateCharsForDNI(valueUpper) || self.validateCharsForNIE(valueUpper) {
            let myRange = valueUpper.index(valueUpper.startIndex, offsetBy: 0)..<valueUpper.index(valueUpper.startIndex, offsetBy: valueUpper.count - 1)
            num = String(valueUpper[myRange])
            num = num.replacingOccurrences(of: "X", with: "0")
            num = num.replacingOccurrences(of: "Y", with: "1")
            num = num.replacingOccurrences(of: "Z", with: "2")
            
            let rangeLetter = valueUpper.index(valueUpper.startIndex, offsetBy: valueUpper.count - 1)..<valueUpper.index(valueUpper.startIndex, offsetBy: valueUpper.count)
            letter = String(valueUpper[rangeLetter])
                        
            let badCharacters = CharacterSet.decimalDigits.inverted
            if num.rangeOfCharacter(from: badCharacters) == nil {
                var numberInt: Int = Int(num)!
                numberInt = numberInt % 23
                letterDni = "TRWAGMYFPDXBNJZSQVHLCKE"
                let rangeDNI = letterDni.index(letterDni.startIndex, offsetBy: numberInt)..<letterDni.index(letterDni.startIndex, offsetBy: numberInt + 1)
                letterDni = String(letterDni[rangeDNI])
                
                if letterDni == letter {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else {
            return false
        }
    }
    
    func validateCharsForDNI(_ value: String) -> Bool {
        return self.validateRegex(value, regex: "[0-9]{8}[A-Za-z]")
    }
    
    func validateCharsForNIE(_ value: String) -> Bool {
        return self.validateRegex(value, regex: "^[KkLlMmXxYyZz]{1}[0-9]{7}[a-zA-Z]{1}$")
    }
    
    func validateRegex (_ value: String, regex: String) -> Bool {
        guard let regex = try? NSRegularExpression(pattern: regex,
                                                   options: [.caseInsensitive]) else { return false}
        
        
        return (regex.matchesString(value))
    }
}
