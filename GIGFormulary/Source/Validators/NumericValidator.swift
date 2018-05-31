//
//  NumericValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class NumericValidator: RegexValidator {
    
    required init() {
        super.init(regexPattern: "^([0-9])+$")
    }
    
    required init(custom: String) {
        super.init()
    }
}
