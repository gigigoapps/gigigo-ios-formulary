//
//  FormFieldStyleModel.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 29/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

enum TypeStyleCell: String {
    case defaultStyle = "default"
    case lineStyle = "line"
}

class FormFieldStyleModel: NSObject {
    
    var bundle: Bundle
    
    //-- Styles --
    var mandatoryIcon: UIImage?
    var backgroundColorField: UIColor?
    var titleColor: UIColor?
    var errorColor: UIColor?
    var acceptColorPicker: UIColor?
    var containerAcceptColorPicker: UIColor?
    var backgroundPickerColorPicker: UIColor?
    var fontTitle: UIFont?
    var fontError: UIFont?
    var align: NSTextAlignment?
    var checkBoxOn: UIImage?
    var checkBoxOff: UIImage?
    var styleCell: TypeStyleCell?
    
    init(bundle: Bundle) {
        self.bundle = bundle
        super.init()
    }
    
    func parseDictionary(_ json: [String:AnyObject]) {
        //== PREPARE DATA ==
        let mandatoryIcon = json["mandatoryIcon"] as? String
        let backgroundColorField = json["backgroundColorField"] as? String
        let titleColor = json["titleColor"] as? String
        let errorColor = json["errorColor"] as? String
        let sizeTitle = json["sizeTitle"] as? CGFloat
        let sizeError = json["sizeError"] as? CGFloat
        let acceptColorPicker = json["acceptColorPicker"] as? String
        let containerAcceptColorPicker = json["containerAcceptColorPicker"] as? String
        let backgroundPickerColorPicker = json["backgroundPickerColorPicker"] as? String
        let align = json["align"] as? String
        let font = json["font"] as? String
        let checkBox = json["checkBox"] as? [String:String]
        let styleCustom = json["styleCell"] as? String

        //== INSERT DATA ==
        if (styleCustom != nil) {
            self.styleCell = TypeStyleCell(rawValue: styleCustom!)
        }
        if (backgroundColorField != nil) {
            self.backgroundColorField = UIColor(fromHexString: backgroundColorField!)
        }
        if (titleColor != nil) {
            self.titleColor = UIColor(fromHexString: titleColor!)
        }
        if (errorColor != nil) {
            self.errorColor = UIColor(fromHexString: errorColor!)
        }
        if (acceptColorPicker != nil) {
            self.acceptColorPicker = UIColor(fromHexString: acceptColorPicker!)
        }
        else {
            self.acceptColorPicker = UIColor.black
        }
        if (containerAcceptColorPicker != nil) {
            self.containerAcceptColorPicker = UIColor(fromHexString: containerAcceptColorPicker!)
        }
        else {
            self.containerAcceptColorPicker = UIColor.gray
        }
        if (backgroundPickerColorPicker != nil) {
            self.backgroundPickerColorPicker = UIColor(fromHexString: backgroundPickerColorPicker!)
        }
        else {
            self.containerAcceptColorPicker = UIColor.gray
        }
        if (font != nil) {
            if (sizeTitle != nil) {
                self.fontTitle = UIFont (name: font!, size: sizeTitle!)
            }
            if (self.fontTitle == nil) {  // control if font no found
                print("🌀🌀🌀 Font in title no found")
                self.fontTitle = UIFont.systemFont(ofSize: sizeTitle!)
            }
            if (sizeError != nil) {
                self.fontError = UIFont (name: font!, size: sizeError!)
            }
            if (self.fontError == nil) {  // control if font no found
                print("🌀🌀🌀 Font in error no found")
                self.fontError = UIFont.systemFont(ofSize: sizeError!)
            }
        }
        else {
            if (sizeTitle != nil) {
                self.fontTitle = UIFont.systemFont(ofSize: sizeTitle!)
            }
            if (sizeError != nil) {
                self.fontError = UIFont.systemFont(ofSize: sizeError!)
            }
        }
        if (align != nil) {
            switch align! {
                case "alignCenter": self.align = NSTextAlignment.center
                case "alignRight": self.align = NSTextAlignment.right
                case "alignLeft": self.align = NSTextAlignment.left
                default: self.align = NSTextAlignment.center
            }
        }
        if let mandatoryImage = mandatoryIcon {
            self.mandatoryIcon = UIImage(named: mandatoryImage, in: self.bundle, compatibleWith: nil)
        }
        if let check = checkBox {
            if let checkOn = check["checkBoxOn"]  {
                self.checkBoxOn = UIImage(named: checkOn, in: self.bundle, compatibleWith: nil)
            }
            if let checkOff = check["checkBoxOff"] {
                self.checkBoxOff = UIImage(named: checkOff, in: self.bundle, compatibleWith: nil)
            }
        }
    }
}
