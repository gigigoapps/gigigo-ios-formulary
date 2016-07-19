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
    
    var pickerOptions: OptionsPickerComponent?
    var pickerDate: DatePickerComponent?
    
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
    
    // MARK: Overrride Method
    
    override func insertData() {
        if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
            self.pickerOptions = OptionsPickerComponent()
            self.pickerOptions?.styles = self.formFieldM?.style
            self.pickerOptions?.textAcceptButton = self.formFieldM?.textAcceptButton
            self.pickerOptions!.initTextField(self.textTextField)
            self.pickerOptions!.items = self.formFieldM!.options!
        }
        else {
            self.pickerDate = DatePickerComponent()
            self.pickerDate?.styles = self.formFieldM?.style
            self.pickerDate!.initTextField(self.textTextField)
        }
        self.loadData(self.formFieldM!)
        self.loadMandatory(self.formFieldM!.mandatory)
        self.loadCustomStyleField(self.formFieldM!)
        self.loadKeyboard(self.formFieldM!)
    }
    
    override func validate() -> Bool {
        var status = true
        if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
            self.validator = OptionValidator(mandatory: self.formFieldM!.mandatory)
            status = self.validator!.validate(self.pickerOptions?.selectedIndex)
        }
        else {
            status = self.validator!.validate(self.pickerDate?.dateSelected)
        }
        
        if (!status) {
            self.showError()
        }
        else {
            self.hideError()
        }
        
        return status
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
}
