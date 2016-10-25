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
    

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let formulary = Formulary.shared
        let viewContainterForm = formulary.start(self.button, jsonFile: "json_formulary.json")
        formulary.delegate = self
        

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
}
