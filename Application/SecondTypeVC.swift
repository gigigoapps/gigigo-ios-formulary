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
    @IBOutlet var viewContain: UIView!
    

    override func viewDidLoad() {
        super.viewDidLoad()
        
        let formulary = Formulary.shared
        let viewContainterForm = formulary.start(self.button, jsonFile: "json_formulary.json")
        formulary.delegate = self
        
        
        
        viewContainterForm.frame = CGRect(x: viewContainterForm.frame.origin.x,
                                          y: viewContainterForm.frame.origin.y,
                                          width: self.view.frame.size.width,
                                          height: 300)
        

        //-- Insert in view --
        self.viewContain.addSubview(viewContainterForm)
        gig_autoresize(self.viewContain, false)
        gig_layout_fit_horizontal(self.viewContain);
        gig_layout_top(self.viewContain, 0);
        //gig_layout_bottom(self.viewContain, 0)
    }
    
    // MARK: PFormController
    
    func recoverFormModel(_ formValues: [String : AnyObject]) {
        
    }
}
