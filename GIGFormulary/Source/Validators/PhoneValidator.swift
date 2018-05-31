//
//  PhoneValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class PhoneValidator: RegexValidator {
    required init() {
        super.init(regexPattern: "^(\\+\\d{1,3})?\\d{9}$")
    }
    
    required init(custom: String) {
        super.init()
    }
}
