//
//  Validator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class Validator: NSObject {
    
    var minLength: Int?
    var maxLength: Int?
    var minAge: Int?
    var custom: String?
    var type: String?
    var textError: String?
    
    required override init() {
        super.init()
    }
    
    required init (custom: String) {
        self.custom = custom
        super.init()
    }
    
    // MARK: Public Method    
    
    func validate(_ value: Any?) -> Bool {
        return true
    }
    
    func validateCompare(_ value: [String]) -> Bool {
        if value.count > 0 {
            let first = value[0]
            let compareElement = value.map({ (value: String) -> Bool in
                return value == first
            })
            
            return compareElement.contains(false)
        }
        return true
    }
    
    func isTextErrorGeneric(_ value: Any?) -> Bool {
        return value == nil
    }
}
