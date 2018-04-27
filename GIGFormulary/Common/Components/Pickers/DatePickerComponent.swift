//
//  DatePickerComponent.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 18/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PDatePickerComponent {
    func formFieldDidFinishDate()
    func rulesDidLaunched(idField: [String], behaivour: TypeBehavior)
}

class DatePickerComponent: UIDatePicker {
    
    // Public properties
    var delegateDate: PDatePickerComponent?
    var textField: UITextField?
    var styles: FormFieldStyleModel?
    var textAcceptButton: String?
    var rules: FormFieldRules?
    
    var dateSelected: Date? {
        get {
            return !(self.textField!.text?.isEmpty ?? true) ? self.datePicker.date : nil
        }
        
        set {
            if let value = newValue {
                self.datePicker.date = value
                self.textField?.text = self.dateFormatter.string(from: value)
            }
        }
    }
    
    // MARK: Private properties
   
    private let datePicker = UIDatePicker()
    private var dateFormatter: DateFormatter {
        let formatter = DateFormatter()
        formatter.dateFormat = "dd/MM/yyyy"
        formatter.timeZone = TimeZone(identifier: "UTC")
        return formatter
    }
    
    private func triggerRule() {
        if let rule = self.rules {
            let ageSelected = AgeValidator().calculateAge(self.datePicker.date)
            let age = Int(rule.value) ?? 0
            
            switch rule.compare {
            case .equal where ageSelected == age:
                self.delegateDate?.rulesDidLaunched(idField: rule.fieldReciver, behaivour: rule.behavior)
            case .different where ageSelected != age:
                self.delegateDate?.rulesDidLaunched(idField: rule.fieldReciver, behaivour: rule.behavior)
            case .lessThan where ageSelected < age:
                self.delegateDate?.rulesDidLaunched(idField: rule.fieldReciver, behaivour: rule.behavior)
            case .mayorThan where ageSelected > age:
                self.delegateDate?.rulesDidLaunched(idField: rule.fieldReciver, behaivour: rule.behavior)
            default:
                self.delegateDate?.rulesDidLaunched(idField: rule.fieldReciver, behaivour: rule.behaviorElse)
            }
        }
    }
    
    // MARK: Public Method
    
    func initTextField(_ textField: UITextField) {
        self.textField = textField
        self.setupDatePicker()
        self.setupDoneToolbar()
    }
    
    func configureRules(_ rules: FormFieldRules?) {
        self.rules = rules
    }
    
    func populateData(_ value: Any?) {
        guard let dateValue = value as? String else {
            return
        }
        self.dateSelected = self.dateFormatter.date(from: dateValue)
    }
    
    // MARK: - Private Helpers
    
    fileprivate func setupDatePicker() {
        self.datePicker.datePickerMode = UIDatePickerMode.date
        self.datePicker.addTarget(
            self,
            action: #selector(onDatePickerValueChanged),
            for: UIControlEvents.valueChanged
        )
        self.textField!.inputView = self.datePicker
    }
    
    fileprivate func setupDoneToolbar() {
        // datepicker toolbar setup
        let toolBar = UIToolbar()
        toolBar.barStyle = UIBarStyle.default
        toolBar.isTranslucent = true
        let space = UIBarButtonItem(barButtonSystemItem: UIBarButtonSystemItem.flexibleSpace, target: nil, action: nil)
        let doneButton = UIBarButtonItem(title: self.textAcceptButton, style: UIBarButtonItemStyle.done, target: self, action: #selector(onDoneTap))
        doneButton.tintColor = self.styles?.acceptColorPicker
        toolBar.setItems([space, doneButton], animated: false)
        toolBar.isUserInteractionEnabled = true
        toolBar.sizeToFit()
        
        toolBar.backgroundColor = self.styles?.containerAcceptColorPicker
        self.datePicker.backgroundColor = self.styles?.backgroundPickerColorPicker
        
        self.textField!.inputAccessoryView = toolBar
    }
    
    @objc fileprivate func onDatePickerValueChanged(_ value: UIDatePicker) {
        self.textField?.text = self.dateFormatter.string(from: value.date)
    }
    
    @objc fileprivate func onDoneTap() {
        self.onDatePickerValueChanged(self.datePicker)
        self.textField?.endEditing(true)
        self.triggerRule()
        self.delegateDate?.formFieldDidFinishDate()
    }
}
