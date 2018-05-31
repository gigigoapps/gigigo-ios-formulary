//
//  FormFieldsValidators.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 31/5/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation
import GIGLibrary

class FormFieldsValidator: NSObject  {
    
    var type: String?
    var textError: String?
    
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
        //-- Mandatory --
        guard let type = json["type"] as? String else {
            LogWarn("type value on validator Not Found")
            throw ThrowError.mandatoryElementNotFound
        }
        
        guard let textError = json["textError"] as? String else {
            LogWarn("textError value on validator Not Found")
            throw ThrowError.mandatoryElementNotFound
        }
        
        //== INSERT DATA ==
        //-- Mandatory--
        activity.type = type
        activity.textError = NSLocalizedString(textError, comment: "")
        
        return activity
    }
}
