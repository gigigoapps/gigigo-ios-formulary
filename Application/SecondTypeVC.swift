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

    override func viewDidLoad() {
        super.viewDidLoad()
        
        //-- Create form Type with JSON --
        
        let formulary = Formulary.shared
        let viewContainterForm = formulary.start(self.button, jsonFile: "json_formulary.json")
        formulary.delegate = self
 
        
        //-- Create form Type with Array Dic --
        /*
        let dic1:[String: AnyObject] = ["key": "a1" as AnyObject,
                                        "type": "text" as AnyObject,
                                        "label": "validador sin" as AnyObject,
                                        "mandatory": true as AnyObject]
        
        let dic2:[String: AnyObject]  = ["key": "a11" as AnyObject,
                                         "type": "text" as AnyObject,
                                         "label": "validador email" as AnyObject,
                                         "validator": "email" as AnyObject,
                                         "mandatory": true as AnyObject]
        
        let dic3:[String: AnyObject]  = ["key": "a2" as AnyObject,
                                         "type": "text" as AnyObject,
                                         "label": "validador custom" as AnyObject,
                                         "validator": "customValidator" as AnyObject,
                                         "customValidator": "^([0-9])+$" as AnyObject,
                                         "mandatory": true as AnyObject]
        
        let style:[String: AnyObject] = ["sizeTitle": 30 as CGFloat as AnyObject] as [String : AnyObject]
        let dic4:[String: AnyObject] = ["key" : "key" as AnyObject,
                                        "label": "label" as AnyObject,
                                        "type" : "index" as AnyObject,
                                        "style": style as AnyObject]
        
        
        let viewContainterForm = self.formulary.start(self.button, listItems: [dic1, dic2, dic4 ,dic3])
        self.formulary.delegate = self
 */
        
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
        
    }
    
    // MARK: Actions
    @IBAction func loadError(_ sender: Any) {
        let dicError:[String: AnyObject] = ["a1" : "error 1" as AnyObject,
                                            "a2": "error 2" as AnyObject]
        self.formulary.loadError(dicError as! [String : String])
    }
}
