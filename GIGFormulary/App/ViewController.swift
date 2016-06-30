//
//  ViewController.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class ViewController: UIViewController {
    
    
    var viewFormulary = UIView()
    var scrollView = UIScrollView()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        let formController = FormController(viewContainerFormulary: self.view)
        formController.loadFieldsFromJSONFile("json_formulary.json")

        /*
        
        let otro = UIView()
        
        let algo = UILabel()
        algo.text = "SDFSDF"
        
        otro.addSubview(algo)
        
        self.viewFormulary.backgroundColor = UIColor.purpleColor()
        self.scrollView.backgroundColor = UIColor.greenColor()
        //-- fin borrar
        
        //-- TODO EDU, añadir constraint
        self.viewFormulary.addSubview(otro)
        
        self.scrollView.addSubview(self.viewFormulary)
        self.view.addSubview(self.scrollView)
        
        gig_autoresize(self.scrollView, false)
        gig_layout_fit_horizontal(self.scrollView);
        gig_layout_top(self.scrollView, 0);
        gig_layout_bottom(self.scrollView, 0)
        
        gig_autoresize(self.viewFormulary, false)
        gig_layout_fit_horizontal(self.viewFormulary);
        gig_layout_top(self.viewFormulary, 0);
        gig_layout_bottom(self.viewFormulary, 0)
        
        gig_autoresize(algo, false)
        gig_layout_fit_horizontal(algo);
        gig_layout_top(algo, 40);
        gig_layout_bottom(algo, 0)
        
   //     gig_layout_center_vertical(algo, 40)

        gig_autoresize(otro, false)
        gig_layout_fit_horizontal(otro);
        gig_layout_top(otro, 40);
        //gig_layout_center_vertical(otro, 40)
        gig_layout_bottom(otro, 0)
         */
        
    }
}

/*

 
 
 
 
 */

