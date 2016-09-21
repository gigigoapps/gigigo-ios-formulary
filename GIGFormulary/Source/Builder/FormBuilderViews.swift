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
    let notificationCenter = NotificationCenter.default
    
    //-- Var --
    var delegate: PFormBuilderViews?
    
    // MARK: Init
    
    init(viewContainerFormulary: UIView, formController: FormController) {
        self.viewContainerFormulary = viewContainerFormulary
        
        super.init()
        
        self.prepareFormulary()
        self.initializeConstraints()
        self.events()
        self.notifications()
        self.delegate = formController
    }
    
    // MARK : Public Method
    
    func updateFormularyContent(_ listFields: [FormField]) {
        self.viewContainerFormulary.removeFromSuperview()
        self.addFields(listFields)
    }
    
    func scrollRectToVisible(_ field: FormField) {
        self.scrollView.scrollRectToVisible(field.frame, animated: true)
    }
    
    func changeFocusField(_ field: FormField?) {
        if (field != nil)
        {
            if (field?.canBecomeFirstResponder == true) {
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
    
    fileprivate func prepareFormulary() {
        if (self.viewContainerFormulary.subviews.count > 0) {
            self.viewFormulary = self.viewContainerFormulary.subviews[0]
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
        
        self.viewContainerFormulary.removeSubviews()
    }
    
    fileprivate func notifications() {
        self.notificationCenter.addObserver(self, selector: #selector(self.keyboardWillShow), name: NSNotification.Name.UIKeyboardWillShow, object: nil)
        self.notificationCenter.addObserver(self, selector: #selector(self.keyboardWillHide), name: NSNotification.Name.UIKeyboardWillHide, object: nil)
    }
    
    fileprivate func events() {
        self.buttonSend.addTarget(self, action: #selector(self.buttonAction), for: UIControlEvents.touchUpInside)
        self.scrollView.addGestureRecognizer(UITapGestureRecognizer(target: self, action: #selector(self.hideComponent)))
    }
    
    func hideComponent() {
        self.scrollView.endEditing(true)
    }
    
    fileprivate func initializeConstraints() {
        self.scrollView.addSubview(self.viewFormulary)
        self.viewContainerFormulary.addSubview(self.scrollView)
    
        //-- Constraint --
        gig_autoresize(self.viewFormulary, false)
        gig_layout_fit_horizontal(self.viewFormulary);
        gig_layout_top(self.viewFormulary, 0);
        gig_layout_bottom(self.viewFormulary, 0)
        gig_constrain_width(self.viewFormulary, UIScreen.main.bounds.size.width);
    
        gig_autoresize(self.scrollView, false)
        gig_layout_fit_horizontal(self.scrollView);
        gig_layout_top(self.scrollView, 0);
        gig_layout_bottom(self.scrollView, 0)
    }
    
    func addFields(_ listFields: [FormField]) {
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
    
    // MARK:  NOTIFICATIONS
    
    func keyboardWillShow(_ notification: Notification) {
        let dict:NSDictionary = (notification as NSNotification).userInfo! as NSDictionary
        let s:NSValue = dict.value(forKey: UIKeyboardFrameEndUserInfoKey) as! NSValue
        let keyboardFrame :CGRect = s.cgRectValue
        UIView.animate(withDuration: 0.25, animations: {
            self.scrollView.contentInset = UIEdgeInsetsMake(0, 0, keyboardFrame.size.height, 0);
            self.scrollView.scrollIndicatorInsets = self.scrollView.contentInset;
        }) 
    }
    
    func keyboardWillHide(_ notification: Notification) {
        self.scrollView.contentInset = UIEdgeInsets.zero;
        self.scrollView.scrollIndicatorInsets = self.scrollView.contentInset;
    }
}
