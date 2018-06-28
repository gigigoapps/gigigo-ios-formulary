//
//  BoolCellInterface.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 22/6/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation

public class BoolCellInterace: FormField {    
    @IBOutlet var buttonAccept: UIButton!
    @IBOutlet var titleLabel: FRHyperLabel!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    //-- Constraints --
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
}
