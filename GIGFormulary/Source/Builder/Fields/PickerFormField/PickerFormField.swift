//
//  PickerFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class PickerFormField: FormField, POptionsPickerComponent, PDatePickerComponent {
    
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
        self.awakeFromNib(frame, classField: type(of: self))
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
                    let formatter = DateFormatter()
                    formatter.setLocalizedDateFormatFromTemplate("dd/MM/yyyy")
                    return formatter.string(from: self.pickerDate!.dateSelected! as Date) as AnyObject?
                }
                return "" as AnyObject?
            }
        }
        set {
            if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
                self.pickerOptions?.selectedIndex = newValue as? Int
            }
            else {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "dd/MM/yyyy"
                self.pickerDate?.dateSelected = dateFormatter.date(from: newValue! as! String)
            }
        }
    }
    
    // MARK: Private Method
    
    fileprivate func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", in: Bundle(for: type(of: self)), compatibleWith: nil)
    }
    
    fileprivate func showError() {
        UIView.animate(withDuration: 0.5, animations: {
            self.errorLabel.sizeToFit()
            self.heightErrorLabelConstraint.constant =  self.errorLabel.frame.height
            self.layoutIfNeeded()
        }) 
    }
    
    fileprivate func hideError() {
        UIView.animate(withDuration: 0.5, animations: {
            self.heightErrorLabelConstraint.constant = 0
            self.layoutIfNeeded()
        }) 
    }
    
    // MARK: Overrride Method
    
    override func insertData() {
        if (self.formFieldM!.type == TypeField.PICKER_FORM_FIELD.rawValue) {
            self.pickerOptions = OptionsPickerComponent()
            self.pickerOptions?.styles = self.formFieldM?.style
            self.pickerOptions?.textAcceptButton = self.formFieldM?.textAcceptButton
            self.pickerOptions!.initTextField(self.textTextField)
            self.pickerOptions!.items = self.formFieldM!.options!
            self.pickerOptions?.populateData(self.formFieldM!.value)
            self.pickerOptions?.delegateOption = self
        }
        else {
            self.pickerDate = DatePickerComponent()
            self.pickerDate?.styles = self.formFieldM?.style
            self.pickerDate?.textAcceptButton = self.formFieldM?.textAcceptButton
            self.pickerDate!.initTextField(self.textTextField)
            self.pickerDate?.populateData(self.formFieldM?.value)
            self.pickerDate?.delegateDate = self
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
            status = self.validator!.validate(self.pickerOptions?.selectedIndex as AnyObject?)
        }
        else {
            status = self.validator!.validate(self.pickerDate?.dateSelected as AnyObject?)
        }
        
        if (!status) {
            self.showError()
        }
        else {
            self.hideError()
        }
        
        return status
    }
    
    // MARK: POptionsPickerComponent
    
    func formFieldDidFinish() {
        self.delegate?.formFieldDidFinish(self)
    }
    
    // MARK: PDatePickerComponent
    
    func formFieldDidFinishDate() {
        self.delegate?.formFieldDidFinish(self)
    }
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.textTextField.placeholder = formFieldM.placeHolder
        self.errorLabel.text = formFieldM.textError
    }
    
    fileprivate func loadMandatory(_ isMandatory: Bool) {
        if (isMandatory) {
            self.widthMandatoryImageConstraint.constant = 30
        }
        else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadKeyboard(_ formFieldM: FormFieldModel) {
        self.textTextField.keyboardType = self.keyBoard!
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
        }
    }
        
    // MARK: UIResponser (Overrride)
    override var canBecomeFirstResponder : Bool {
        return self.textTextField.canBecomeFirstResponder
    }
    
    override func becomeFirstResponder() -> Bool {
        return self.textTextField.becomeFirstResponder()
    }
    override func resignFirstResponder() -> Bool {
        return self.textTextField.resignFirstResponder()
    }
}
