//
//  FormFieldModel.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 29/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class FormFieldModel: NSObject {
    
    //-- Mandatory --
    var type: String?
    var label: String?
    var textError: String?
    
    //-- Optional --    
    var placeHolder: String?
    var maxLength: String?
    var mandatory = false
    var keyboard: String?
    var options: [FormFieldOptionsModel]?
    var style: FormFieldStyleModel?
    var validator: String?
       
    // MARK: Public Method
    
    func parseDictionary(json: [String:AnyObject]) throws {
        //== PREPARE DATA ==
        //-- Mandatory --
        guard let type = json["type"] as? String else {
            print("❌❌❌ type Not Found")
            throw ThrowError.MandatoryElementNotFound
        }
        guard let label = json["label"] as? String else {
            print("❌❌❌ label Not Found")
            throw ThrowError.MandatoryElementNotFound
        }
        
        //-- Optional --
        let placeHolder = json["placeHolder"] as? String
        let maxLength = json["maxLength"] as? String
        let mandatory = json["mandatory"] as? Bool
        let keyboard = json["keyboard"] as? String
        let options = json["options"] as? [String: AnyObject]
        let style = json["style"] as? [String: AnyObject]
        let textError = json["textError"] as? String
        let validator = json["validator"] as? String
        
        
        //== INSERT DATA ==
        //-- Mandatory--
        self.type = type
        self.label = label
        
        //-- Optional--
        if (textError != nil) {
            self.textError = textError
        }
        else {
            self.textError = NSLocalizedString("error_generic_field", comment: "")
        }

        if (placeHolder != nil) {
            /*  self.bodyBottom = BodyBottomDetailModel()
             try self.bodyBottom?.parseJson(bodyBottom!)
             self.listViewsCreate.append("BodyBottom")*/
        }
        if (maxLength != nil) {
            
        }
        if (mandatory != nil) {
            self.mandatory = mandatory!
        }
        if (keyboard != nil) {
            
        }
        if (options != nil) {
            
        }
        if (style != nil) {
            self.style = FormFieldStyleModel()
            self.style?.parseDictionary(style!)
        }
        if (validator != nil) {
            self.validator = validator
        }
    }
}
