//
//  FormFieldOptionsModel.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 29/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class FormFieldOptionsModel: NSObject {
    var idOption: String?
    var textOption: String?
    
    // MARK: Public methods
    
    class func parseListOptionsJson(json:[[String: AnyObject]]) throws ->[FormFieldOptionsModel] {
        do {
            return try (json.map(parseOptionsJson))              
        }
        catch (let throwError){
            throw throwError
        }
    }
    
    class func parseOptionsJson(json: [String: AnyObject]) throws -> FormFieldOptionsModel{
        let activity = FormFieldOptionsModel()
        
        do {
            return try self.parseOption(json, activity: activity)
        }
        catch (let throwError){
            throw throwError
        }
    }
    
    class func parseOption(json: [String: AnyObject], activity: FormFieldOptionsModel) throws ->  FormFieldOptionsModel {
        
        //== PREPARE DATA ==
        //-- Mandatory --
        guard let key = json["key"] as? String where key.characters.count > 0 else {
            print("❌❌❌ key value Not Found")
            throw ThrowError.MandatoryElementNotFound
        }
        guard let value = json["value"] as? String where value.characters.count > 0 else {
            print("❌❌❌ value Options Not Found")
            throw ThrowError.MandatoryElementNotFound
        }
        
        //== INSERT DATA ==
        //-- Mandatory--
        activity.idOption = key
        activity.textOption = NSLocalizedString(value, comment: "")

        return activity
    }
}
