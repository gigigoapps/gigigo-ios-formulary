//
//  TextFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PTextFormField {
    func scrollRectToVisible(field: FormField)
    func didChangeValue(field: FormField, text: String)
    func formFieldDidFinish(field: FormField)
}


class TextFormField: FormField, UITextFieldDelegate {
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var textTextField: UITextField!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    
    //-- VAR -- 
    
    var viewContainer: UIView!
    
    // MARK: INIT
    
    override init(frame: CGRect) {
        super.init(frame: frame)
         self.awakeFromNib(frame)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func xibSetup() {
        self.viewContainer = loadViewFromNib()
        
        addSubview(self.viewContainer)
        
        gig_autoresize(self.viewContainer, false)
        gig_layout_fit_horizontal(self.viewContainer);
        gig_layout_top(self.viewContainer, 0);
        gig_layout_bottom(self.viewContainer, 0)
        
        self.initializeView()
    }
    
    func loadViewFromNib() -> UIView {
        let bundle = NSBundle(forClass: self.dynamicType)
        let classString = NSStringFromClass(self.dynamicType)
        let nib = UINib(nibName: classString.componentsSeparatedByString(".").last!, bundle: bundle)
        let view = nib.instantiateWithOwner(self, options: nil)[0] as! UIView
        return view
    }
    
    func awakeFromNib(frame: CGRect) {
        super.awakeFromNib()
        self.xibSetup()
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
    
    override func insertData(formFieldM: FormFieldModel) {
        self.loadData(formFieldM)
        self.loadMandatory(formFieldM.mandatory)
        self.loadCustomStyleField(formFieldM)
        self.loadKeyboard(formFieldM)
    }
    
    // MARK: GIGFormField (Override)
    
    override internal var fieldValue: AnyObject? {
        get {
            return self.textTextField.text?.characters.count > 0 ? self.textTextField.text : nil
        }
        set {
            self.textTextField.text = "\(self.fieldValue)"
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
        self.textTextField.delegate = self
    }
    
    // MARK: Load data field
    
    private func loadData(formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.textTextField.placeholder = formFieldM.placeHolder
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
    
    private func loadKeyboard(formFieldM: FormFieldModel) {
        self.textTextField.keyboardType = self.keyBoard!
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
        }
    }
    
    // MARK: UITextFieldDelegate
    
    func textFieldDidBeginEditing(textField: UITextField) {
        self.delegate!.scrollRectToVisible(self)
    }
    
    func textFieldDidEndEditing(textField: UITextField) {
        self.delegate?.didChangeValue(self, text: textField.text!)
    }
    
    func textFieldShouldReturn(textField: UITextField) -> Bool {
        self.delegate?.formFieldDidFinish(self)
        return false
    }
    
    func textField(textField: UITextField, shouldChangeCharactersInRange range: NSRange, replacementString string: String) -> Bool {        
        let textFieldText: NSString = textField.text ?? ""
        let finalString = textFieldText.stringByReplacingCharactersInRange(range, withString: string)
    
        if (self.validator != nil && (self.validator is LengthValidator)) {
            return self.validator!.validate(finalString)
        }
        else {
            let lengthValidator = LengthValidator(minLength: self.formFieldM!.minLengthValue, maxLength: self.formFieldM!.maxLengthValue)
            return lengthValidator.validate(finalString)
        }
    }
    
    // MARK: UIResponser (Overrride)
    override func canBecomeFirstResponder() -> Bool {
        return self.textTextField.canBecomeFirstResponder()
    }
    
    override func becomeFirstResponder() -> Bool {
        return self.textTextField.becomeFirstResponder()
    }
    override func resignFirstResponder() -> Bool {
        return self.textTextField.resignFirstResponder()
    }
}
