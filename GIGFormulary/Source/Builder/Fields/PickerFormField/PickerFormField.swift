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
    
    // MARK: INIT
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.awakeFromNib(frame, classField: self.dynamicType)
        self.initializeView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: Private Method
    
    private func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon")
    }
    
    
    // MARK: Overrride Method
    
    override func insertData(formFieldM: FormFieldModel) {
        
    }
    
    override func validate() -> Bool {
            return true
    }
    
    // MARK: Actions
    
    @IBAction func buttonAction(sender: AnyObject) {
        
    }
}
