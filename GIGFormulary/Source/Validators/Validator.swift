//
//  Validator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class Validator:NSObject {
    
    var mandatory: Bool
    
    override init() {        
        self.mandatory = false
        super.init()
    }
    
    required init(mandatory: Bool) {
        self.mandatory = mandatory
        super.init()
    }
    
    
    func validate(value: AnyObject?) -> Bool{
        if (value == nil && self.mandatory) {
            return false
        }
        return true
    }
}
