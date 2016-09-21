//
//  LengthValidator.swift
//  GIGFormulary
//
//  Created by eduardo parada pardo on 6/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
fileprivate func < <T : Comparable>(lhs: T?, rhs: T?) -> Bool {
  switch (lhs, rhs) {
  case let (l?, r?):
    return l < r
  case (nil, _?):
    return true
  default:
    return false
  }
}

fileprivate func > <T : Comparable>(lhs: T?, rhs: T?) -> Bool {
  switch (lhs, rhs) {
  case let (l?, r?):
    return l > r
  default:
    return rhs < lhs
  }
}


class LengthValidator: StringValidator {

    required init(mandatory: Bool) {
        super.init(mandatory: mandatory)
    }
    
    init (minLength: Int?, maxLength: Int?) {
        super.init()
        self.minLength = minLength
        self.maxLength = maxLength
    }
    
    func controlCharacters(_ value: String) -> Bool {
        if (!super.validate(value as AnyObject?))  {
            return false
        }
        
        if (self.maxLength != nil) {
            return !(value.characters.count > self.maxLength);
        }
        
        return true
    }
    
    // MARK: - OVERRIDE (Validator)
    
    override func validate(_ value: AnyObject?) -> Bool{
        if (!super.validate(value))  {
            return false
        }

        let stringValue = value as? String
        
        if (stringValue != nil) {
            if (!self.mandatory && stringValue?.characters.count == 0) {
                return true
            }
            
            if (self.maxLength != nil && self.minLength != nil) {
                return (!(stringValue!.characters.count > self.maxLength) && !(stringValue!.characters.count < self.minLength));
            }
            else if (self.maxLength != nil) {
                return !(stringValue!.characters.count > self.maxLength);
            }
            else if (self.minLength != nil) {
                return !(stringValue!.characters.count < self.minLength);
            }
        }
        return true
    }
}
