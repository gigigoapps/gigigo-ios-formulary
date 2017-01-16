//
//  BooleanFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 27/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit


protocol PBooleanFormField {
    func userDidTapLink(_ key: String)
}

class BooleanFormField: FormField {

    @IBOutlet var buttonAccept: UIButton!
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    
    //-- Local var --
    var checkBoxOn: UIImage?
    var checkBoxOff: UIImage?
    
    // MARK: INIT
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.awakeFromNib(frame, classField: type(of: self))
        self.initializeView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    // MARK: VALIDATE
    
    override func validate() -> Bool {
        let status = super.validate()
        if (!status) {
            self.errorLabel.text = self.formFieldM?.textsError.textError
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
        
    override func loadError(error: String) {
        self.errorLabel.text = error
        self.showError()
    }
    
    // MARK: GIGFormField (Override)
    
    override internal var fieldValue: AnyObject? {
        get {
            return self.buttonAccept.isSelected as AnyObject?
        }
        set {
            self.buttonAccept.isSelected = newValue as! Bool
        }
    }
    
    // MARK: Private Method
    
    fileprivate func showError() {
        UIView.animate(withDuration: 0.5, animations: {
            self.errorLabel.sizeToFit()
            self.heightErrorLabelConstraint.constant =  self.errorLabel.frame.height
            self.viewPpal?.layoutIfNeeded()
        }) 
    }
    
    fileprivate func hideError() {
        UIView.animate(withDuration: 0.5, animations: {
            self.heightErrorLabelConstraint.constant = 0
            self.viewPpal?.layoutIfNeeded()
        }) 
    }
    
    fileprivate func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.checkBoxOn = UIImage(named: "chackBoxOn", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.checkBoxOff = UIImage(named: "checkBox", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
    }
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.errorLabel.text = formFieldM.textsError.textError
        if (formFieldM.value != nil && (formFieldM.value as? Bool)!) {
            self.changeState()
        }
        if (formFieldM.isLink) {
            let tap = UITapGestureRecognizer(target: self, action: #selector(self.labelAction))
            self.titleLabel.isUserInteractionEnabled = true
            self.titleLabel.addGestureRecognizer(tap)
        }
    }
    
    fileprivate func loadMandatory(_ isMandatory: Bool) {
        if (isMandatory) {
            self.widthMandatoryImageConstraint.constant = 30
        }
        else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        if (styleField != nil) {
            if (styleField!.mandatoryIcon != nil) {
                self.mandotoryImage.image = styleField?.mandatoryIcon
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
            if (styleField!.fontTitle != nil) {
                self.titleLabel.font = styleField?.fontTitle
            }
            if (styleField!.fontError != nil) {
                self.errorLabel.font = styleField?.fontError
            }
            if (styleField!.align != nil) {
                self.titleLabel.textAlignment = styleField!.align!
            }
            if (styleField!.checkBoxOn != nil) {
                self.checkBoxOn = styleField!.checkBoxOn!
            }
            if (styleField!.checkBoxOff != nil) {
                self.checkBoxOff = styleField!.checkBoxOff!
                self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
            }
        }
    }
    
    fileprivate func changeState() {
        if (self.buttonAccept.isSelected) {
            self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        }
        else {
            self.buttonAccept.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        }
        self.buttonAccept.isSelected = !self.buttonAccept.isSelected
    }
    
    // MARK: Actions
    
    @IBAction func actionButtonAccept(_ sender: AnyObject) {
        self.changeState()
    }
    
    func labelAction(gr:UITapGestureRecognizer)
    {
        self.delegate?.userDidTapLink((self.formFieldM?.key)!)
    }
    
    // MARK: UIResponser (Overrride)
    override var canBecomeFirstResponder : Bool {
        return false
    }
}
