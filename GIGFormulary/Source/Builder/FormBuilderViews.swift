//
//  FormViews.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

class FormBuilderViews: NSObject {
    // -- Views --
    let viewContainerFormulary: UIView
    var viewFormulary = UIView()
    var scrollView = UIScrollView()
    
    init(viewContainerFormulary: UIView) {
        self.viewContainerFormulary = viewContainerFormulary
        
        super.init()
        
        self.prepareFormulary()
    }
    
    // MARK : Public Method
    
    func updateFormularyContent(listFields: [FormField]) {
        self.viewContainerFormulary.removeFromSuperview()
        self.addFields(listFields)
    }
    
    // MARK : Private Method
    
    func prepareFormulary() {
        
        
        //_- TODO EDU borrar
        self.viewFormulary.backgroundColor = UIColor.redColor()
        self.scrollView.backgroundColor = UIColor.greenColor()
        //-- fin borrar
        
        
        self.scrollView.addSubview(viewFormulary)
        self.viewContainerFormulary.addSubview(scrollView)
        
        
        //-- Constraint --
        
        gig_autoresize(self.viewFormulary, false)
        gig_layout_fit_horizontal(self.viewFormulary);
        gig_layout_top(self.viewFormulary, 0);
        gig_layout_bottom(self.viewFormulary, 0)
        
        gig_autoresize(self.scrollView, false)
        gig_layout_fit_horizontal(self.scrollView);
        gig_layout_top(self.scrollView, 0);
        gig_layout_bottom(self.scrollView, 0)
        
        // TODO EDU habria q ver como solucionar esta mierda T_T
         self.scrollView.addConstraints(NSLayoutConstraint.constraintsWithVisualFormat("H:|[viewContainer(==\(self.viewContainerFormulary.frame.width))]|", options: [], metrics: nil, views: ["viewContainer":viewFormulary]))
        
    }
    
    func addFields(listFields: [FormField]) {
        
                
        var lastView = UIView()
        var firstTime = true
        for field in listFields {
            self.viewFormulary.addSubview(field)
            
            gig_autoresize(field, false)
            gig_layout_fit_horizontal(field);
            
            if (!firstTime)
            {
                gig_layout_below(field, lastView, 10);
            }
            else
            {
                gig_layout_top(field, 0);
            }
            
            lastView = field
            firstTime = false
            
            
            // TODO EDU
            field.layoutIfNeeded()
            field.updateConstraints()
        }
        
        if (self.viewFormulary.subviews.count > 0) {
             gig_layout_bottom(lastView, 0);
        }
        
        // TODO EDU
        self.viewFormulary.layoutIfNeeded()
        self.viewFormulary.updateConstraints()
    }
}
