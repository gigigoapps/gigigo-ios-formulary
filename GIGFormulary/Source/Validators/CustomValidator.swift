//
//  CustomValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 26/10/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class CustomValidator: RegexValidator {
    
    required init() {
        super.init()
    }
    
    required init( custom: String) {
        do {
            let regex = try NSRegularExpression(pattern: custom, options: NSRegularExpression.Options.caseInsensitive)
            super.init(regex: regex)
        } catch {
            super.init(regexPattern: custom)
        }
    }
}
