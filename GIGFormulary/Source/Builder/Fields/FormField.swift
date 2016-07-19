//
//  FormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PFormField: PTextFormField, PPickerFormField {
}

public class FormField: UIView{
    
    public var fieldValue: AnyObject?
    
    //-- LOCAL VAR --
    var viewContainer: UIView!
    var delegate: PFormField?
    var validator: Validator?
    var keyBoard: UIKeyboardType?
    var formFieldM: FormFieldModel?
    
    //-- Init Xib --
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required public init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: Initialize XIBS 
    
    func xibSetup(classField: AnyClass) {
        self.viewContainer = loadViewFromNib(classField)
        
        addSubview(self.viewContainer)
        
        gig_autoresize(self.viewContainer, false)
        gig_layout_fit_horizontal(self.viewContainer);
        gig_layout_top(self.viewContainer, 0);
        gig_layout_bottom(self.viewContainer, 0)
    }
    
    func loadViewFromNib(classField: AnyClass) -> UIView {
        let bundle = NSBundle(forClass: classField)
        let classString = NSStringFromClass(classField)
        let nib = UINib(nibName: classString.componentsSeparatedByString(".").last!, bundle: bundle)
        let view = nib.instantiateWithOwner(self, options: nil)[0] as! UIView
        return view
    }
    
    func awakeFromNib(frame: CGRect, classField: AnyClass) {
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
}
