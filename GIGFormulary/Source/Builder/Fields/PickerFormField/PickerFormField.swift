//
//  PickerFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

protocol PickerFormFieldOutPut {
    func launchRule(idField: [String], behaivour: TypeBehavior)
}
// TODO EDU

// probar las imagenes de los mandatory y de los checkbox desde app externa

class PickerFormField: PickerCellInterface, POptionsPickerComponent, PDatePickerComponent {
    
    var pickerOptions: OptionsPickerComponent?
    var pickerDate: DatePickerComponent?
    
    // MARK: INIT
    
    override init(cell: FormFieldStyleModel?) {
        super.init(cell: cell)
        self.awakeFromNib(classField: type(of: self))
        self.initializeView()
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.awakeFromNib(frame, classField: type(of: self))
        self.initializeView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    
    // MARK: GIGFormField (Override)
    
    override var fieldValue: Any? {
        get {
            if self.formFieldM?.type == TypeField.pickerFormField.rawValue {
                return (self.formFieldM!.options![self.pickerOptions!.selectedIndex!]).idOption
            } else {
                if let dateSelected = self.pickerDate?.dateSelected {
                    let dateFormatter = DateFormatter()
                    dateFormatter.dateFormat = "dd/MM/yyyy"
                    return dateFormatter.string(from: dateSelected)
                }
                return ""
            }
        }
        set {
            if self.formFieldM!.type == TypeField.pickerFormField.rawValue {
                let optionFound = self.formFieldM!.options?.filter({ element -> Bool in
                     return element.idOption == newValue as? String
                })
                
                var pos = 0
                if let option = optionFound {
                    if  option.count > 0 {
                       pos = self.formFieldM!.options!.index(of: option[0])!
                    }
                }
                self.pickerOptions?.selectedIndex = pos
            } else {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "dd/MM/yyyy"
                guard let valueString = newValue! as? String else { return LogWarn("Value isnt String") }
                self.pickerDate?.dateSelected = dateFormatter.date(from: valueString)
            }
        }
    }
    
    override func launchRule(behaivour: TypeBehavior) {
        super.launchRule(behaivour: behaivour)
        switch behaivour {
        case .disable:
            self.textTextField.isEnabled = false
        case .enable:
            self.textTextField.isEnabled = true
        case .hide, .show, .none:
            break
        }
    }
    
    // MARK: Private Method
    
    fileprivate func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", in: Bundle(for: type(of: self)), compatibleWith: nil)
    }
    
    fileprivate func showError() {
        if self.heightErrorLabelConstraint.constant == 0 {
            UIView.animate(withDuration: 0.5, animations: {
                self.errorLabel.sizeToFit()
                self.heightErrorLabelConstraint.constant =  self.errorLabel.frame.height
                self.viewPpal?.layoutIfNeeded()
            })
        }
    }
    
    fileprivate func hideError() {
        UIView.animate(withDuration: 0.5, animations: {
            self.heightErrorLabelConstraint.constant = 0
            self.viewPpal?.layoutIfNeeded()
        }) 
    }
    
    // MARK: Overrride Method
    
    override func insertData() {
        super.insertData()
        if self.formFieldM!.type == TypeField.pickerFormField.rawValue {
            let pickerOptions = OptionsPickerComponent()
            pickerOptions.styles = self.formFieldM?.style
            pickerOptions.textAcceptButton = self.formFieldM?.textAcceptButton
            pickerOptions.initTextField(self.textTextField)
            pickerOptions.items = self.formFieldM!.options!
            pickerOptions.populateData(self.formFieldM!.value)
            pickerOptions.delegateOption = self
            self.pickerOptions = pickerOptions
        } else {
            let pickerDate = DatePickerComponent()
            pickerDate.styles = self.formFieldM?.style
            pickerDate.textAcceptButton = self.formFieldM?.textAcceptButton
            pickerDate.initTextField(self.textTextField)
            pickerDate.populateData(self.formFieldM?.value)
            pickerDate.configureRules(self.formFieldM?.rules)
            pickerDate.delegateDate = self
            self.pickerDate = pickerDate
        }
        self.loadData(self.formFieldM)
        self.loadMandatory(self.formFieldM?.isMandatory())
        self.loadCustomStyleField(self.formFieldM)
        self.loadKeyboard()
    }
        
    override func loadError(error: Any) {
        guard let text = error as? String else { return }
        self.errorLabel.text = text
        self.showError()
    }
    
    override func validate(extraValues: Any?) -> Bool {
        let status = super.validate(extraValues: self.pickerDate?.dateSelected)
        
        if !status {
            if self.formFieldM!.type == TypeField.pickerFormField.rawValue {
                self.errorLabel.text = self.recoverTextError(value: self.pickerOptions?.selectedIndex)
            } else {
                self.errorLabel.text = self.recoverTextError(value: self.pickerDate?.dateSelected)
            }
            
            self.showError()
        } else {
            self.hideError()
        }
        
        return status
    }
    
    // MARK: POptionsPickerComponent
    
    func formFieldDidFinish() {
        self.formFieldOutput?.formFieldDidFinish(self)
    }
    
    // MARK: PDatePickerComponent
    
    func formFieldDidFinishDate() {
        self.formFieldOutput?.formFieldDidFinish(self)
    }
    
    func rulesDidLaunched(idField: [String], behaivour: TypeBehavior) {
        self.formFieldOutput!.launchRule(idField: idField, behaivour: behaivour)
    }
    
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel?) {
        guard let formFieldM = formFieldM else { return LogWarn("Field model is nil") }
        self.titleLabel.text = formFieldM.label
        self.textTextField.placeholder = formFieldM.placeHolder
        if self.formFieldM!.type == TypeField.pickerFormField.rawValue {
            self.errorLabel.text = self.recoverTextError(value: self.pickerOptions?.selectedIndex)
        } else {
            self.errorLabel.text = self.recoverTextError(value: self.pickerDate?.dateSelected)
        }
        self.textTextField.isEnabled = formFieldM.isEditing
    }
    
    fileprivate func loadMandatory(_ isMandatory: Bool?) {
        guard let isMandatory = isMandatory else {
            return
        }
        if isMandatory {
            self.widthMandatoryImageConstraint.constant = 30
        } else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadKeyboard() {
        guard let keyBoard = self.keyBoard else { return LogInfo("keyBoard is nil") }
        self.textTextField.keyboardType = keyBoard
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel?) {
        guard let styleField = formFieldM?.style else { return LogInfo("Style is nil") }

        if let mandatoryIcon = styleField.mandatoryIcon {
            self.mandotoryImage.image = mandatoryIcon
        }
        if let backgroundColorField = styleField.backgroundColorField {
            self.viewContainer.backgroundColor = backgroundColorField
        }
        if let titleColor = styleField.titleColor {
            self.titleLabel.textColor = titleColor
        }
        if let errorColor = styleField.errorColor {
            self.errorLabel.textColor = errorColor
        }
        if let fontTitle = styleField.fontTitle {
            self.titleLabel.font = fontTitle
            self.textTextField.font = fontTitle
        }
        if let fontError = styleField.fontError {
            self.errorLabel.font = fontError
        }
        if let align = styleField.align {
            self.titleLabel.textAlignment = align
        }
        if let styleCell = styleField.styleCell {
            switch styleCell {
            case .defaultStyle, .custom:
                // TODO nothing
                break
            case .lineStyle:
                self.customizeCell()
            }
        }
    }
    
    fileprivate func customizeCell() {
        self.textTextField.borderStyle = UITextBorderStyle.none
        let border = CALayer()
        let width = CGFloat(1.0)
        border.borderColor = UIColor.lightGray.cgColor
        border.frame = CGRect(x: 0, y: self.textTextField.frame.size.height - width, width: UIScreen.main.bounds.width, height: self.textTextField.frame.size.height)
        
        border.borderWidth = width
        self.textTextField.layer.addSublayer(border)
        self.textTextField.layer.masksToBounds = true
    }
        
    // MARK: UIResponser (Overrride)
    override var canBecomeFirstResponder: Bool {
        return self.textTextField.canBecomeFirstResponder
    }
    
    override func becomeFirstResponder() -> Bool {
        return self.textTextField.becomeFirstResponder()
    }
    
    override func resignFirstResponder() -> Bool {
        return self.textTextField.resignFirstResponder()
    }
}
