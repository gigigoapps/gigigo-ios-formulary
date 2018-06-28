//
//  ExpandibleCellInterface.swift
//  GIGFormulary
//
//  Created by Eduardo Parada on 22/6/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation

class ExpandableCellInterface: FormField {
    @IBOutlet var acceptButton: UIButton!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    @IBOutlet weak var textContainerView: UIView!
    @IBOutlet weak var expandCollapseButton: UIButton!
    
    //-- Constraints --
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
}
