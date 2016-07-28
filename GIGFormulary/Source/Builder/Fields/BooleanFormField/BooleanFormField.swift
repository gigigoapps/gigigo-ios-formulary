//
//  BooleanFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 27/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class BooleanFormField: FormField {

    @IBOutlet var buttonAccept: UIButton!
    
    @IBOutlet var titleLabel: UILabel!
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
    
    // MARK: VALIDATE
    
    override func validate() -> Bool {
        let status = super.validate()
        if (!status) {
            self.showError()
        }
        else {
            self.hideError()
        }
        
        return status
    }
    
    // MARK: Public Method
    
    override func insertData() {
        self.loadData(self.formFieldM!)
        self.loadMandatory(self.formFieldM!.mandatory)
        self.loadCustomStyleField(self.formFieldM!)
    }
    
    // MARK: GIGFormField (Override)
    
    override internal var fieldValue: AnyObject? {
        get {
            return self.buttonAccept.selected
        }
        set {
            self.buttonAccept.selected = fieldValue as! Bool
        }
    }
    
    // MARK: Private Method
    
    private func showError() {
        UIView.animateWithDuration(0.5) {
            self.errorLabel.sizeToFit()
            self.heightErrorLabelConstraint.constant =  self.errorLabel.frame.height
            self.layoutIfNeeded()
        }
    }
    
    private func hideError() {
        UIView.animateWithDuration(0.5) {
            self.heightErrorLabelConstraint.constant = 0
            self.layoutIfNeeded()
        }
    }
    
    private func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon")
    }
    
    // MARK: Load data field
    
    private func loadData(formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.errorLabel.text = formFieldM.textError
    }
    
    private func loadMandatory(isMandatory: Bool) {
        if (isMandatory) {
            self.widthMandatoryImageConstraint.constant = 30
        }
        else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    private func loadCustomStyleField(formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        if (styleField != nil) {
            if (styleField!.mandatoryIcon != nil) {
                self.mandotoryImage.image = UIImage() // TODO EDU, aqui habria q cargar la imagen q fuera
            }
            if (styleField!.backgroundColorField != nil) {
                self.viewContainer.backgroundColor = styleField!.backgroundColorField!
            }
            if (styleField!.titleColor != nil) {
                self.titleLabel.textColor = styleField!.titleColor!
            }
            if (styleField!.errorColor != nil) {
                self.errorLabel.textColor = styleField!.errorColor!
            }
            if (styleField!.sizeTitle != nil) {
                self.titleLabel.font = UIFont.systemFontOfSize(styleField!.sizeTitle!)
                //  self.titleLabel.font = UIFont(name: <#T##String#>, size: styleField!.sizeTitle!)  TODO EDU AMPLIACION
            }
            if (styleField!.sizeError != nil) {
                self.errorLabel.font = UIFont.systemFontOfSize(styleField!.sizeError!)
            }
        }
    }
    
    
    // MARK: Actions
    
    @IBAction func actionButtonAccept(sender: AnyObject) {
        if (self.buttonAccept.selected) {
            self.buttonAccept.setBackgroundImage(UIImage(named: "checkBox"), forState: UIControlState.Normal)
        }
        else {
            self.buttonAccept.setBackgroundImage(UIImage(named: "chackBoxOn"), forState: UIControlState.Selected)
        }
        self.buttonAccept.selected = !self.buttonAccept.selected
    }
}