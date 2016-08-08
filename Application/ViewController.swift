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
        
        let formulary = Formulary.shared
        formulary.start(self.view, jsonFile: "json_formulary.json")
        formulary.delegate = self

        
        //-- Case: Populate data --
        //let dic = ["a1":"eduardo"]
        //formulary.populateData(dic)
    }
    
    // MARK: PFormController
    
    func recoverFormModel(formValues: [String : AnyObject]) {
        
    }
}