//
//  RegexValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 5/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class RegexValidator: StringValidator {
    
    var regex: NSRegularExpression?
    
    init(regex: NSRegularExpression) {
        self.regex = regex
        
        super.init()
    }
    
    init(regexPattern: String?) {
        if regexPattern != nil {
            self.regex = NSRegularExpression(pattern: regexPattern!)
        }        
        
        super.init()
    }
    
    required init() {
        super.init()
    }
        
    required init(custom: String) {
        super.init()
    }
    
    // MARK: Public Method

    override func validate(_ value: Any?) -> Bool {
        if !super.validate(value) {
            return false
        }
        
        if value != nil {
            guard let stringValue = value as? String else { LogWarn("Parse value String Error, return false"); return false }
            guard let regex = self.regex  else { LogWarn("Regex is nil"); return false }
            
            return regex.matchesString(stringValue)
        } else {
            return true
        }
    }
}
