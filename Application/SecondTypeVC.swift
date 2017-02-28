//
//  SecondTypeVC.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 21/9/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGFormulary
import GIGLibrary

class SecondTypeVC: UIViewController, PFormulary  {
    
    @IBOutlet var button: UIButton!
    @IBOutlet var scrollView: UIScrollView!
    
    let formulary = Formulary.shared
    
    func prepareField() -> [AnyObject] {
        let emailField: [AnyObject] = [
            [
                "key": ("textoKey2" as AnyObject),
                "type": ("text" as AnyObject),
                "label": ("texto2" as AnyObject),
                "mandatory": (true as AnyObject)
                ] as AnyObject,
            [
                "key": ("datePickerKey" as AnyObject),
                "type": ("datePicker" as AnyObject),
                "label": ("datePicker" as AnyObject),
                "mandatory": (true as AnyObject)
                ] as AnyObject,
            [
                "key": ("pickerKey" as AnyObject),
                "type": ("picker" as AnyObject),
                "label": ("picker" as AnyObject),
                "mandatory": true as AnyObject,
                "listOptions": [
                    ["key": "KeyNoSelected",
                     "value": "Select One"],
                    ["key": "GB",
                     "value": "United Kingdom"],
                    ["key": " ",
                     "value": "Other"]
                ]
            ] as AnyObject,
          [
                "key": ("textoKey" as AnyObject),
                "type": ("text" as AnyObject),
                "label": ("texto" as AnyObject),
                "mandatory": (true as AnyObject)
            ] as AnyObject,
            [
                "key": ("booleanoKey" as AnyObject),
                "type": ("boolean" as AnyObject),
                "label": ("Ich akzeptiere die {* legal_acceptance_URL_2 *} und willige – bis auf Widerruf- in die Erhebung, Verarbeitung und Nutzung meiner personenbezogenen Daten gemäß der {* legal_acceptance_URL_1 *} ein." as AnyObject),
                "validator": ("bool" as AnyObject),
                "mandatory": true as AnyObject
                ] as AnyObject,
            [
                "key": ("textoKey99" as AnyObject),
                "type": ("text" as AnyObject),
                "label": ("text99" as AnyObject),
                "mandatory": (true as AnyObject)
                ] as AnyObject,
            [
                "key": ("textoKey88" as AnyObject),
                "type": ("text" as AnyObject),
                "label": ("text88" as AnyObject),
                "mandatory": (true as AnyObject)
                ] as AnyObject,
            [
                "key": ("indexKEY" as AnyObject),
                "type": ("index" as AnyObject),
                "label": ("Ich akzeptiere die {* legal_acceptance_URL_2 *} und willige – bis auf Widerruf- in die Erhebung, Verarbeitung und Nutzung meiner personenbezogenen Daten gemäß der {* legal_acceptance_URL_1 *} ein." as AnyObject)
                ] as AnyObject,
            [
                "key": ("booleanoKey2" as AnyObject),
                "type": ("boolean" as AnyObject),
                "label": ("Bolean sin link" as AnyObject),
                "validator": ("bool" as AnyObject),
                "mandatory": true as AnyObject
                ] as AnyObject
        ]
        
        return emailField
    }


    override func viewDidLoad() {
        super.viewDidLoad()
        
        //-- Create form Type with JSON --
        
       // let formulary = Formulary.shared
       // let viewContainterForm = formulary.start(self.button, jsonFile: "json_formulary.json")
       // formulary.delegate = self
 
        
        //-- Create form Type with Array Dic --
        let fields = self.prepareField() as! [[String: AnyObject]]
        let viewContainterForm = self.formulary.start(self.button, listItems: fields)
        self.formulary.delegate = self
        self.formulary.populateData(
            [
                "textoKey2": "rellenar2" as AnyObject,
                "textoKey": "rellenar" as AnyObject,
                "pickerKey": "GB" as AnyObject,
                "booleanoKey": true as AnyObject,
                "datePickerKey": "12/01/1983" as AnyObject
            ]
        )
        
        //-- Insert in view --
        self.scrollView.addSubview(viewContainterForm)
        
        //-- Autolayout --
        gig_autoresize(viewContainterForm, false)
        gig_layout_fit_horizontal(viewContainterForm);
        gig_constrain_width(viewContainterForm, UIScreen.main.bounds.size.width);
        gig_layout_top(viewContainterForm, 0);
        gig_layout_bottom(viewContainterForm, 0)
    }
    
    // MARK: PFormController
    
    func recoverFormModel(_ formValues: [String : AnyObject]) {
        
    }
    
    func userDidTapLink(_ key: String) {
        print("RECOVER LINK: \(key)")
    }
    
    func fieldFocus(frame: CGRect) {
        print("frame: \(frame)")
    }
    
    // MARK: Actions
    @IBAction func loadError(_ sender: Any) {
        let dicError:[String: AnyObject] = ["pickerKey" : "error 1" as AnyObject,
                                            "key": "error 2" as AnyObject]
        self.formulary.loadError(dicError as! [String : String])
    }
}
