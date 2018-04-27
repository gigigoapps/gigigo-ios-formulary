//
//  FormFieldRules.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 26/4/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

enum TypeCompare: String {
    case mayorThan = ">"
    case lessThan = "<"
    case equal = "="
    case different = "!="
    case unknow = ""
}
enum TypeBehavior: String {
    case hide
    case show
    case enable
    case disable
    case none
}

struct FormFieldRules {
    var fieldReciver: String
    var compare: TypeCompare
    var value: String
    var behavior: TypeBehavior
    var behaviorElse: TypeBehavior
    
    // MARK: Public methods
 
    static func parseDictionary(_ json: [AnyHashable: Any]) -> FormFieldRules {
        
        return FormFieldRules(
            fieldReciver: json["fieldReciver"] as? String ?? "",
            compare: TypeCompare(rawValue: json["compare"] as? String ?? "") ?? TypeCompare.unknow,
            value: json["value"] as? String ?? "",
            behavior: TypeBehavior(rawValue: json["behavior"] as? String ?? "none") ?? TypeBehavior.none,
            behaviorElse: TypeBehavior(rawValue: json["else"] as? String ?? "none") ?? TypeBehavior.none
        )
    }
}
