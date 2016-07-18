//
//  PickerFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PPickerFormField {
    func borrarProtocolo2()
}

class PickerFormField: FormField {
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var textTextField: UITextField!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    
    //-- VAR --
    
    var viewContainer: UIView!
    
    // MARK: Overrride Method
    
    override func insertData(formFieldM: FormFieldModel) {
        
    }
    
    override func validate() -> Bool {
            return true
    }    
}
