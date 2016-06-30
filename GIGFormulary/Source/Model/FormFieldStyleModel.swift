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
    
    
    func parseDictionary(json: [String:AnyObject]) throws {
        //== PREPARE DATA ==
        //-- Mandatory --

        
        //-- Optional --
        let mandatoryIcon = json["mandatoryIcon"] as? String
        
        //== INSERT DATA ==
        //-- Mandatory--

        
        
        //-- Optional--
        if (mandatoryIcon != nil) {
            //self.mandatoryIcon = mandatoryIcon  // TODO EDU , cargar una imagen desde donde????
        }
    }

}
