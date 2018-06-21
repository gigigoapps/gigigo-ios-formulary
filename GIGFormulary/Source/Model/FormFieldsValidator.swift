//
//  FormFieldsValidators.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 31/5/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation
import GIGLibrary

class FormFieldsValidator: NSObject {
    
    var type: String?
    var textError: String?
    var minLengthValue: Int?
    var maxLengthValue: Int?
    var minAge: Int?
    var itemCompare: [String]?
    var custom: String?
    
    // MARK: Public methods
    
    class func parseListValidatorJson(_ json: [[AnyHashable: Any]]) throws ->[FormFieldsValidator] {
        do {
            return try (json.map(parseValidatorJson))
        } catch let throwError {
            throw throwError
        }
    }
    
    class func parseValidatorJson(_ json: [AnyHashable: Any]) throws -> FormFieldsValidator {
        let activity = FormFieldsValidator()
        
        do {
            return try self.parseOption(json, activity: activity)
        } catch let throwError {
            throw throwError
        }
    }
    
    class func parseOption(_ json: [AnyHashable: Any], activity: FormFieldsValidator) throws ->  FormFieldsValidator {
        
        //== PREPARE DATA ==

        guard let type = json["type"] as? String else {
            LogWarn("type value on validator Not Found")
            throw ThrowError.mandatoryElementNotFound
        }
        
        //== INSERT DATA ==
        
        //-- Mandatory--
        activity.type = type
        
        //-- Optional --
        if let textError = json["textError"] as? String {
            activity.textError = NSLocalizedString(textError, comment: "")
        }        
        if let maxLength = json["maxLength"] as? Int {
            activity.maxLengthValue = maxLength
        }
        if let minLength = json["minLength"] as? Int {
            activity.minLengthValue = minLength
        }
        if let minAge = json["minAge"] as? Int {
            activity.minAge = minAge
        } else  if let stringAge = json["minAge"] as? String, let minAge = Int(stringAge) {
            activity.minAge = minAge
        }

        if let itemCompare = json["itemsCompare"] as? [String] {
            activity.itemCompare = itemCompare
        }
        if let custom = json["regex"] as? String {
            activity.custom = custom
        }
        
        return activity
    }
}
