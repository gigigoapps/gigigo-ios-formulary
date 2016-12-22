//
//  ViewController.swift
//  Application
//
//  Created by  Eduardo Parada on 29/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGFormulary

class ViewController: UIViewController, PFormulary {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        //-- Create form Type with JSON --
        
        // let formulary = Formulary.shared
        // formulary.start(self.view, jsonFile: "json_formulary.json")
        // formulary.delegate = self

        
        //-- Create form Type with Array Dic --
        
        let dic1:[String: AnyObject] = ["key": "a1" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador sin" as AnyObject,
                    "mandatory": true as AnyObject]
        
        let dic2:[String: AnyObject]  = ["key": "a2" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador email" as AnyObject,
                    "validator": "email" as AnyObject,
                    "mandatory": true as AnyObject]
        
        let dic3:[String: AnyObject]  = ["key": "a3" as AnyObject,
                    "type": "text" as AnyObject,
                    "label": "validador custom" as AnyObject,
                    "validator": "customValidator" as AnyObject,
                    "customValidator": "^([0-9])+$" as AnyObject,
                    "mandatory": true as AnyObject]
        
        let formulary = Formulary.shared
        formulary.start(self.view, listItems: [dic1, dic2, dic3])
        formulary.delegate = self
        
        
        
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
    
    // MARK: PFormController
    
    func recoverFormModel(_ formValues: [String : AnyObject]) {
        
    }
}
