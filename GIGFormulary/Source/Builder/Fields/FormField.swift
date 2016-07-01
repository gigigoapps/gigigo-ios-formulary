//
//  FormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PFormField: PTextFormField, PPickerFormField {
}

public class FormField: UIView{
    
    var delegate: PFormField?
    var validator: Validator?
    public var fieldValue: AnyObject?
    
    //-- Init Xib --
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required public init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
        
    // MARK: Public Method
    
    func insertData(formFieldM: FormFieldModel) {
        
    }
    
    func validate() -> Bool {
        if (self.validator == nil) {
            return true
        }
        return self.validator!.validate(self.fieldValue)
    }
}
