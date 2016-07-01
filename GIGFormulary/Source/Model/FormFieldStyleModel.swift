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
    
    
    func parseDictionary(json: [String:AnyObject]) {
        //== PREPARE DATA ==
        let mandatoryIcon = json["mandatoryIcon"] as? String
        let backgroundColorField = json["backgroundColorField"] as? String
        
        //== INSERT DATA ==
        if (backgroundColorField != nil) {
        //    let string = "ff"
        //    let value = UInt8(strtoul(string, nil, 16))
        //    let value2 = UInt8(strtoul(backgroundColorField!, nil, 16))
            
            
            
       /*
            
            
            //UIColor.redColor()
            let str = "239A23F"
            let num = Int(str, radix: 16)
            
            let scanner = NSScanner(string: str)
            var result : UInt32 = 0
            if scanner.scanHexInt(&result) {
               // println(result) // 37331519
                
                var a = 0
                a = a+1
            }
            */
            self.backgroundColorField = self.stringToHexColor(backgroundColorField!)
            
        //    var a = 0
        //    a = a+1
        }
        
        
        if (mandatoryIcon != nil) {
            //self.mandatoryIcon = mandatoryIcon  // TODO EDU , cargar una imagen desde donde????
        }
    }
    
    
    func stringToHexColor(hexString: String) -> UIColor? {
        
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
