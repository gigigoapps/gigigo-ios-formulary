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
    
    var bundle: Bundle
    
    //-- Mandatory --
    var key: String?
    var type: String?
    var label: String?
    
    //-- Optional --    
    var placeHolder: String?
    var keyboard: String?
    var options: [FormFieldOptionsModel]?
    var style: FormFieldStyleModel?
    var validator: String?
    var keyBoard: String?
    var textAcceptButton: String?
    var value: AnyObject?
    var isPassword = false
    var textsError = TextsError()
    var isEditing = true
    var isHidden = false

    //-- Validate --
    var minLengthValue: Int?
    var maxLengthValue: Int?
    var minAge: Int?
    var mandatory = false
    var custom: String?
    var isLink = false
    var compare = false
    var itemCompare: [String]?
    
    init(bundle: Bundle) {
        self.bundle = bundle
        super.init()
    }
    
    // MARK: Public Method
    
    func parseDictionary(_ json: [String:AnyObject]) throws {
        //== PREPARE DATA ==
        
        //-- Mandatory --
        guard let type = json["type"] as? String , type.characters.count > 0 else {
            print("❌❌❌ type Not Found")
            throw ThrowError.mandatoryElementNotFound
        }

        guard let key = json["key"] as? String , key.characters.count > 0 else {
            print("❌❌❌ key Not Found")
            throw ThrowError.mandatoryElementNotFound
        }
    
        //-- Optional --
        let label = json["label"] as? String
        let placeHolder = json["placeHolder"] as? String
        let mandatory = json["mandatory"] as? Bool
        let style = json["style"] as? [String: AnyObject]
        let textError = json["textError"] as? String
        let textErrorCompare = json["textErrorCompare"] as? String
        let validator = json["validator"] as? String
        let keyBoard = json["keyboard"] as? String
        let maxLength = json["maxLength"] as? Int
        let minLength = json["minLength"] as? Int
        let minAge = json["minAge"] as? Int
        let textAcceptButton = json["textAcceptButton"] as? String
        let value = json["value"]
        let custom = json["customValidator"] as? String
        let isPassword = json["isPassword"] as? Bool
        let isLink = json["isLink"] as? Bool
        let compare = json["compare"] as? Bool
        let itemCompare = json["itemsCompare"] as? [String]        
        
        if let isEditing = json["isEditing"] as? Bool {
            self.isEditing = isEditing
        }
        
        //== INSERT DATA ==
        //-- Mandatory--
        self.type = type
        self.key = key
        
        //-- Optional--
        
        if (label != nil) {
            self.label = NSLocalizedString(label!, comment: "")
        }
        if (textError != nil) {
            self.textsError.textError = NSLocalizedString(textError!, comment: "")
        }
        else {
            self.textsError.textError = NSLocalizedString("error_generic_field", tableName: nil, bundle: Bundle(for: type(of: self)), value: "", comment: "error_generic_field")
        }
        if (textErrorCompare != nil) {
            self.textsError.textErrorCompare = NSLocalizedString(textErrorCompare!, comment: "")
        }
        else {
            self.textsError.textErrorCompare = NSLocalizedString("error_generic_compare_field", tableName: nil, bundle: Bundle(for: type(of: self)), value: "", comment: "error_generic_compare_field")
        }
        if (placeHolder != nil) {
            self.placeHolder = NSLocalizedString(placeHolder!, comment: "")
        }

        if (json["listOptions"] != nil) {
            guard let listOptions = json["listOptions"] as? [[String: AnyObject]] else {
                print("❌❌❌ listOptions incorrect type")
                throw ThrowError.mandatoryElementIncorrectType
            }
            if listOptions.count == 0 {
                print("❌❌❌ listOptions empty")
                throw ThrowError.mandatoryElementEmpty
            }
            do {
                self.options = try FormFieldOptionsModel.parseListOptionsJson(listOptions)
            }
            catch {
                print("❌❌❌ options Not Found")
                throw ThrowError.mandatoryElementNotFound
            }
        }
        if let styleM = style {
            self.style = FormFieldStyleModel(bundle: self.bundle)
            self.style?.parseDictionary(styleM)
        }
        if (validator != nil) {
            self.validator = validator
        }
        if (keyBoard != nil) {
            self.keyBoard = keyBoard
        }
        if let textAccept = textAcceptButton {
            self.textAcceptButton = NSLocalizedString(textAccept, tableName: nil, bundle: self.bundle, value: "", comment: "")
        }
        else {
            self.textAcceptButton = NSLocalizedString("gig_form_accept_button_picker", tableName: nil, bundle: Bundle(for: type(of: self)), value: "", comment: "gig_form_accept_button_picker")
        }
        if (value != nil) {
            self.value = value
        }
        if (isPassword != nil) {
            self.isPassword = isPassword!
        }
        if (isLink != nil) {
            self.isLink = isLink!
        }
        if let isHidden = json["isHidden"] as? Bool {
            self.isHidden = isHidden
        }
        
        //-- Validate --
        if (maxLength != nil) {
            self.maxLengthValue = maxLength
        }
        if (minLength != nil) {
            self.minLengthValue = minLength
        }
        if (minAge != nil) {
            self.minAge = minAge
        }
        if (mandatory != nil) {
            self.mandatory = mandatory!
        }
        if (custom != nil) {
            self.custom = custom!
        }
        if (compare != nil) {
            self.compare = compare!
        }
        if (itemCompare != nil) {
            self.itemCompare = itemCompare!
        }
    }
}
