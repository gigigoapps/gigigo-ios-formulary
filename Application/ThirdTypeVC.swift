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
    
    let formulary = Formulary.shared
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.formulary.start(self.view, jsonFile: "json_formulary.json")
        self.formulary.delegate = self

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
        print(formValues)
    }
    
    func userDidTapLink(_ key: String) {
        print(key)
    }
    
    
    // MARK: Actions
    
    @IBAction func closeModalAction(_ sender: Any) {
        self.dismiss(animated: true, completion: nil)
    }
    
    @IBAction func populateAction(_ sender: Any) {
        self.formulary.populateData(
            [
                "a": "rellenar2" as AnyObject,
                "b": "rellenar" as AnyObject,
                "c": "GB" as AnyObject,
                "asd": true as AnyObject,
                "d": "rellenar" as AnyObject,
                "e": "rellenar" as AnyObject,
                "f": "rellenar" as AnyObject,
                "g": "rellenar" as AnyObject,
                "h": "rellenar" as AnyObject,
                "i": "rellenar" as AnyObject,
                "j": "a1" as AnyObject,
                "k": true as AnyObject,
                "l": "12/01/1983" as AnyObject,
                "m": "rellenar" as AnyObject
            ]
        )
    }
}
