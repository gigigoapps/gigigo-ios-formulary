//
//  PickerFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

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
    
    
    // MARK: GIGFormField (Override)
    
    override internal var fieldValue: AnyObject? {
        get {
            if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
                return (self.formFieldM!.options![self.pickerOptions!.selectedIndex!]).idOption
            }
            else {
                if (self.pickerDate!.dateSelected != nil) {
                    let dateFormatter = NSDateFormatter()
                    dateFormatter.dateFormat = "dd-MM-yyyy"
                    return dateFormatter.stringFromDate(self.pickerDate!.dateSelected!)
                }
                return self.pickerDate!.dateSelected
            }
        }
        set {
          //  self.buttonAccept.selected = fieldValue as! Bool
            if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
                self.pickerOptions?.selectedIndex = fieldValue as? Int
            }
            else {
               // self.pickerDate?.dateSelected // TODO EDU falta meter aqui el valor de tipo DATE
            }
        }
    }
    
    // MARK: Private Method
    
    private func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", inBundle: NSBundle(forClass: self.dynamicType), compatibleWithTraitCollection: nil)
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
            self.pickerDate?.textAcceptButton = self.formFieldM?.textAcceptButton
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
            if (styleField!.fontTitle != nil) {
                self.titleLabel.font = styleField?.fontTitle
            }
            if (styleField!.fontError != nil) {
                self.errorLabel.font = styleField?.fontError
            }
            if (styleField!.align != nil) {
                self.titleLabel.textAlignment = styleField!.align!
            }
        }
    }
}
