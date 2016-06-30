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

class FormField: UIView{
    
    var delegate: PFormField?
    
    //-- Init Xib --
    override init(frame: CGRect) {
        super.init(frame: frame)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
        
    // MARK: Public Method
    
    func insertData(formFieldM: FormFieldModel) {
        
    }
}
