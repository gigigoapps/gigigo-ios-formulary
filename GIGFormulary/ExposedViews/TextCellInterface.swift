//
//  TextCell.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 22/6/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation

class TextCellInterface: FormField {
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var textTextField: UITextField!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    @IBOutlet var heightLabelConstraint: NSLayoutConstraint!
}
