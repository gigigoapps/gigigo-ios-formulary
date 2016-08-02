//
//  FormViews.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PFormBuilderViews {
    func sendButtonAction()
}

class FormBuilderViews: NSObject {
    //-- Views --
    let viewContainerFormulary: UIView
    var viewFormulary = UIView()
    var scrollView = UIScrollView()
    var buttonSend = UIButton()
    var viewContainerField = UIView()
    
    //-- Var --
    var delegate: PFormBuilderViews?
    
    init(viewContainerFormulary: UIView, formController: FormController) {
        self.viewContainerFormulary = viewContainerFormulary
        if (viewContainerFormulary.subviews.count > 0) {
            self.viewFormulary = viewContainerFormulary.subviews[0]
            if (self.viewFormulary.subviews.count > 1) {
                self.viewContainerField = self.viewFormulary.subviews[1]
                self.buttonSend = self.viewFormulary.subviews[2] as! UIButton
            }
            else {
                print("❌❌❌ ViewFormFields or Button send Not Found. Create this in StoryBoard")
            }
        }
        else {
            print("❌❌❌ viewContainerFormulary Not Found")
        }

        viewContainerFormulary.removeSubviews()
        
        super.init()
        
        self.prepareFormulary()
        self.delegate = formController
        self.buttonSend.addTarget(self, action: #selector(self.buttonAction), forControlEvents: UIControlEvents.TouchUpInside)
    }
    
    // MARK : Public Method
    
    func updateFormularyContent(listFields: [FormField]) {
        self.viewContainerFormulary.removeFromSuperview()
        self.addFields(listFields)
    }
    
    func scrollRectToVisible(field: FormField) {
        self.scrollView.scrollRectToVisible(field.frame, animated: true)
    }
    
    func changeFocusField(field: FormField?) {
        if (field != nil)
        {
            if (field?.canBecomeFirstResponder() == true) {
                field?.becomeFirstResponder()
            }
            else {
                self.viewContainerFormulary.endEditing(true)
            }
        }
        else
        {
            self.viewContainerFormulary.endEditing(true)
        }
    }
    
    // MARK : Actions
    
    func buttonAction() {
        self.viewContainerFormulary.endEditing(true)
        self.delegate?.sendButtonAction()
    }
    
    // MARK : Private Method
    
    func prepareFormulary() {
        self.scrollView.addSubview(self.viewFormulary)
        self.viewContainerFormulary.addSubview(self.scrollView)        
        
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
            self.viewContainerField.addSubview(field)
            
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
        }
        
        if (self.viewContainerField.subviews.count > 0) {
             gig_layout_bottom(lastView, 0);
        }
    }
}
