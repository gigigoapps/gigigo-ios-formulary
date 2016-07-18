//
//  OptionsPickerComponent.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 18/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class OptionsPickerComponent: UIPickerView, UIPickerViewDataSource, UIPickerViewDelegate {
    
    var items: [String] = [] {
        didSet {
            self.picker.reloadAllComponents()
        }
    }
    
    var selectedIndex: Int? {
        get {
            return !(self.textField!.text?.isEmpty ?? true) ? self.picker.selectedRowInComponent(0) : nil
        }
        
        set {
            self.picker.selectRow(newValue ?? 0, inComponent: 0, animated: false)
            self.onDoneTap()
        }
    }
    
    var textField: UITextField?
    
    // Private properties
    private let picker = UIPickerView()
    
    // MARK: Public Method
    
    func initTextField(textField: UITextField) {
        self.textField = textField
        self.setupPicker()
        self.setupDoneToolbar()
    }
    
    // MARK: DataSource
    
    func numberOfComponentsInPickerView(pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return self.items.count
    }
    
    func pickerView(pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return self.items[row]
    }
    
    func pickerView(pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        guard !self.items.isEmpty else { return }
        //self.text = self.items[row]
        self.textField?.text = self.items[row]
       // self.delegate?.formUserEndEditingTap(self)
    }
    
    // MARK - Private Helpers

    private func setupPicker() {
        self.picker.dataSource = self
        self.picker.delegate = self
        self.textField!.inputView = self.picker
    }
    
    private func setupDoneToolbar() {
        // datepicker toolbar setup
        let toolBar = UIToolbar()
        toolBar.barStyle = UIBarStyle.Default
        toolBar.translucent = true
        let space = UIBarButtonItem(barButtonSystemItem: UIBarButtonSystemItem.FlexibleSpace, target: nil, action: nil)
        let doneButton = UIBarButtonItem(title: NSLocalizedString("app_name", comment: ""), style: UIBarButtonItemStyle.Done, target: self, action: #selector(onDoneTap))
        doneButton.tintColor = UIColor.blueColor() // TODO EDU, para la hoja de estilos de los picker
        
        // if you remove the space element, the "done" button will be left aligned
        // you can add more items if you want
        toolBar.setItems([space, doneButton], animated: false)
        toolBar.userInteractionEnabled = true
        toolBar.sizeToFit()
        
        self.textField!.inputAccessoryView = toolBar
    }
    
    @objc private func onDoneTap() {
        if !self.items.isEmpty {
            let selectedRow = self.picker.selectedRowInComponent(0)
          //  self.text = self.items[selectedRow]
            self.textField?.text = self.items[selectedRow]
        }
        
        self.endEditing(true)
    }

}
