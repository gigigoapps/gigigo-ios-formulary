//
//  ThirdTypeVC.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 17/1/17.
//  Copyright © 2017 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary
import GIGFormulary

class ThirdTypeVC: UIViewController, Instantiable, PFormulary  {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let formulary = Formulary.shared
        formulary.start(self.view, jsonFile: "json_formulary.json")
        formulary.delegate = self

    }
    
    
    // MARK: - Instantiable
    
    public static func storyboard() -> String {
        return "External"
    }
    
    public static func identifier() -> String? {
        return "ThirdTypeVCID"
    }
    
    
    // MARK: PFormController
    
    func recoverFormModel(_ formValues: [String : AnyObject]) {
        
    }
    
    func userDidTapLink(_ key: String) {
        
    }
    
    
    // MARK: Actions
    
    @IBAction func closeModalAction(_ sender: Any) {
        self.dismiss(animated: true, completion: nil)
    }
}
