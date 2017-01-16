//
//  FormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PFormField: PTextFormField, PBooleanFormField {
}

open class FormField: UIView{
    
    open var fieldValue: AnyObject?
    
    //-- LOCAL VAR --
    var viewContainer: UIView!
    var delegate: PFormField?
    var validator: Validator?
    var keyBoard: UIKeyboardType?
    var formFieldM: FormFieldModel?
    var viewPpal: UIView?
    
    //-- Init Xib --
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required public init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: Initialize XIBS 
    
    func xibSetup(_ classField: AnyClass) {
        self.viewContainer = loadViewFromNib(classField)
        
        addSubview(self.viewContainer)
        
        gig_autoresize(self.viewContainer, false)
        gig_layout_fit_horizontal(self.viewContainer);
        gig_layout_top(self.viewContainer, 0);
        gig_layout_bottom(self.viewContainer, 0)
    }
    
    func loadViewFromNib(_ classField: AnyClass) -> UIView {
        let bundle = Bundle(for: classField)
        let classString = NSStringFromClass(classField)
        let nib = UINib(nibName: classString.components(separatedBy: ".").last!, bundle: bundle)
        let view = nib.instantiate(withOwner: self, options: nil)[0] as! UIView
        return view
    }
    
    func awakeFromNib(_ frame: CGRect, classField: AnyClass) {
        super.awakeFromNib()
        self.xibSetup(classField)
    }
        
    // MARK: Public Method
    
    func insertData() {
        // TODO nothing
    }
    
    func validate() -> Bool {
        if (self.validator == nil) {
            return true
        }
        return self.validator!.validate(self.fieldValue)
    }
    
    func loadError(error: String) {
        // TODO nothing
    }
    
    func validateCompare() {
        // TODO nothing
    }
}
