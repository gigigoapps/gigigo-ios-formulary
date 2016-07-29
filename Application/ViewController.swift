//
//  ViewController.swift
//  Application
//
//  Created by  Eduardo Parada on 29/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGFormulary

class ViewController: UIViewController, PFormController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let formController = FormController(viewContainerFormulary: self.view)
        formController.loadFieldsFromJSONFile("json_formulary.json")
        formController.delegate = self
    }
    
    // MARK: PFormController
    
    func recoverFormModel(formValues: [String : String]) {
        
    }
}