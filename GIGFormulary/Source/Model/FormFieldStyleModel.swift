//
//  FormFieldStyleModel.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 29/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class FormFieldStyleModel: NSObject {
    
    var mandatoryIcon: UIImage?
    var backgroundColorField: UIColor?
    var titleColor: UIColor?
    var errorColor: UIColor?
    var sizeTitle: CGFloat?
    var sizeError: CGFloat?
    var acceptColorPicker: UIColor?
    var containerAcceptColorPicker: UIColor?
    var backgroundPickerColorPicker: UIColor?
    
    func parseDictionary(json: [String:AnyObject]) {
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
        
        //== INSERT DATA ==
        if (backgroundColorField != nil) {
            self.backgroundColorField = self.stringToHexColor(backgroundColorField!)
        }
        if (titleColor != nil) {
            self.titleColor = self.stringToHexColor(titleColor!)
        }
        if (errorColor != nil) {
            self.errorColor = self.stringToHexColor(errorColor!)
        }
        if (sizeTitle != nil) {
            self.sizeTitle = sizeTitle
        }
        if (sizeError != nil) {
            self.sizeError = sizeError
        }
        if (acceptColorPicker != nil) {
            self.acceptColorPicker = self.stringToHexColor(acceptColorPicker!)
        }
        if (containerAcceptColorPicker != nil) {
            self.containerAcceptColorPicker = self.stringToHexColor(containerAcceptColorPicker!)
        }
        if (backgroundPickerColorPicker != nil) {
            self.backgroundPickerColorPicker = self.stringToHexColor(backgroundPickerColorPicker!)
        }
        
        if (mandatoryIcon != nil) {
            //self.mandatoryIcon = mandatoryIcon  // TODO EDU , cargar una imagen desde donde????
        }
    }
    
    // MARK: Private Method
    
    private func stringToHexColor(hexString: String) -> UIColor? {  // TODO EDU , esto habria que meterlo en la gigLib
        let hexStringAlpha = "\(hexString)FF"
        let r, g, b, a: CGFloat
        
        if hexStringAlpha.hasPrefix("#") {
            let start = hexStringAlpha.startIndex.advancedBy(1)
            let hexColor = hexStringAlpha.substringFromIndex(start)
            
            if hexColor.characters.count == 8 {
                let scanner = NSScanner(string: hexColor)
                var hexNumber: UInt64 = 0
                
                if scanner.scanHexLongLong(&hexNumber) {
                    r = CGFloat((hexNumber & 0xff000000) >> 24) / 255
                    g = CGFloat((hexNumber & 0x00ff0000) >> 16) / 255
                    b = CGFloat((hexNumber & 0x0000ff00) >> 8) / 255
                    a = CGFloat(hexNumber & 0x000000ff) / 255
                    
                    return UIColor.init(red: r, green: g, blue: b, alpha: a)
                }
            }
        }
        
        return nil
    }
}
