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
    var key: String?
    var type: String?
    var label: String?
    
    //-- Optional --    
    var placeHolder: String?
    var textError: String?
    var mandatory = false
    var keyboard: String?
    var options: [FormFieldOptionsModel]?
    var style: FormFieldStyleModel?
    var validator: String?
    var keyBoard: String?
    var minLengthValue: Int?
    var maxLengthValue: Int?
    var minAge: Int?
    var textAcceptButton: String?
       
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
        guard let key = json["key"] as? String else {
            print("❌❌❌ key Not Found")
            throw ThrowError.MandatoryElementNotFound
        }
        
        //-- Optional --
        let placeHolder = json["placeHolder"] as? String
        let mandatory = json["mandatory"] as? Bool
        let options = json["listOptions"] as? [[String: AnyObject]]
        let style = json["style"] as? [String: AnyObject]
        let textError = json["textError"] as? String
        let validator = json["validator"] as? String
        let keyBoard = json["keyboard"] as? String
        let maxLength = json["maxLength"] as? Int
        let minLength = json["minLength"] as? Int
        let minAge = json["minAge"] as? Int
        let textAcceptButton = json["textAcceptButton"] as? String
        
        
        //== INSERT DATA ==
        //-- Mandatory--
        self.type = type
        self.label = label
        self.key = key
        
        //-- Optional--
        if (textError != nil) {
            self.textError = NSLocalizedString(textError!, comment: "")
        }
        else {
            self.textError = NSLocalizedString("error_generic_field", comment: "")
        }
        if (placeHolder != nil) {
            self.placeHolder = placeHolder
        }
        if (mandatory != nil) {
            self.mandatory = mandatory!
        }
        if (options != nil) {
            do {
                self.options = try FormFieldOptionsModel.parseListOptionsJson(options!)
            }
            catch {
                print("❌❌❌ options Not Found")
                throw ThrowError.MandatoryElementNotFound
            }
        }
        if (style != nil) {
            self.style = FormFieldStyleModel()
            self.style?.parseDictionary(style!)
        }
        if (validator != nil) {
            self.validator = validator
        }
        if (keyBoard != nil) {
            self.keyBoard = keyBoard
        }
        if (maxLengthValue != nil) {
            self.maxLengthValue = maxLength
        }
        if (minLengthValue != nil) {
            self.minLengthValue = minLength
        }
        if (minAge != nil) {
            self.minAge = minAge
        }
        if (textAcceptButton != nil) {
            self.textAcceptButton = NSLocalizedString(textAcceptButton!, comment: "")
        }
        else {
            self.textAcceptButton = NSLocalizedString("gig_form_accept_button_picker", comment: "")
        }
    }
}
