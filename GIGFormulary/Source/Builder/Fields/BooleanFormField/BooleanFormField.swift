//
//  BooleanFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 27/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PBooleanFormField {
    func userDidTapLink(_ key: String)
}

class BooleanFormField: BoolCellInterace {    
    //-- Local var --
    private var checkBoxOn: UIImage?
    private var checkBoxOff: UIImage?
    private var auxWidthConstraint: CGFloat = 0
    
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
    
    // MARK: VALIDATE
    
    override func validate(extraValues: Any?) -> Bool {
        let status = super.validate(extraValues: extraValues)
        if !status {
            self.errorLabel.text = self.recoverTextError(value: self.fieldValue)
            self.showError()
        } else {
            self.hideError()
        }
        
        return status
    }
    
    // MARK: Public Method
    
    override func insertData() {
        self.auxWidthConstraint = self.widthMandatoryImageConstraint.constant
        guard let formFieldM = self.formFieldM else { return LogWarn("Model is nil") }
        self.loadCustomStyleField(formFieldM)
        self.loadData(formFieldM)
        self.loadMandatory(formFieldM.isMandatory())
        super.insertData()
    }
        
    override func loadError(error: Any) {
        guard let text = error as? String else { return }
        self.errorLabel.text = text
        self.showError()
    }
    
    // MARK: GIGFormField (Override)
    
    override var fieldValue: Any? {
        get {
            return self.buttonAccept.isSelected as Any?
        }
        set {
            guard let boolValue = newValue as? Bool else {
                self.chooseImage()
                return
            }
            self.buttonAccept.isSelected = boolValue
            self.chooseImage()
        }
    }
    
    override func launchRule(behaivour: TypeBehavior) {
        super.launchRule(behaivour: behaivour)
        switch behaivour {
        case .disable:
            self.buttonAccept.isEnabled = false
        case .enable:
            self.buttonAccept.isEnabled = true
        case .hide, .show, .none:
            break
        }
    }
    
    // MARK: Private Method
    
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
    
    fileprivate func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.checkBoxOn = UIImage(named: "chackBoxOn", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.checkBoxOff = UIImage(named: "checkBox", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        
        self.buttonAccept.addTarget(self, action: #selector(actionButtonAccept), for: .touchUpInside)
        self.buttonAccept.tintColor = UIColor.clear
    }
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.errorLabel.text = self.recoverTextError(value: self.fieldValue)
        if formFieldM.value != nil && (formFieldM.value as? Bool)! {
            self.changeState()
        }
        
        self.buttonAccept.isEnabled = formFieldM.isEditing
        
        //-- Text parse view --
        guard let label = formFieldM.label else { LogInfo("BooleanFormField label is nil"); return }
        if self.existLink(label) {
            let getLinks = self.getListLinks(label)
            
            //Step 1: Styles
            if let styleField = formFieldM.style,
                let titleColor =  styleField.titleColor {
    
                let attributes = [NSAttributedStringKey.foregroundColor: titleColor,
                                  NSAttributedStringKey.font: UIFont.preferredFont(forTextStyle: UIFontTextStyle.headline)]
                self.titleLabel.attributedText = NSAttributedString(string: getLinks.1, attributes: attributes)
                
                self.titleLabel.linkAttributeHighlight = [
                    NSAttributedStringKey.foregroundColor: UIColor.blue,
                    NSAttributedStringKey.underlineStyle: 1
                ]
                
                self.titleLabel.linkAttributeDefault = [
                    NSAttributedStringKey.foregroundColor: titleColor,
                    NSAttributedStringKey.underlineStyle: 1
                ]
                
                self.titleLabel.font = styleField.fontTitle
            } else {
                self.titleLabel.font = UIFont.systemFont(ofSize: 17)
                let attributes = [NSAttributedStringKey.foregroundColor: UIColor.black,
                                  NSAttributedStringKey.font: UIFont.preferredFont(forTextStyle: UIFontTextStyle.headline)]
                self.titleLabel.attributedText = NSAttributedString(string: getLinks.1, attributes: attributes)
            }
            
            //Step 2: Define a selection handler block
            let handler = {
                (hyperLabel: FRHyperLabel?, substring: String?) -> Void in
                if let key = substring {
                    self.formFieldOutput?.userDidTapLink(key)
                }                
            }
            
            //Step 3: Add link substrings
            self.titleLabel.setLinksForSubstrings(getLinks.0, withLinkHandler: handler)
        }
    }
    
    fileprivate func loadMandatory(_ isMandatory: Bool) {
        if isMandatory {
            self.widthMandatoryImageConstraint.constant = self.auxWidthConstraint
        } else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel) {
        guard let styleField = formFieldM.style else { return LogInfo("Styles is nil") }
        
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
        }
        if let fontError = styleField.fontError {
            self.errorLabel.font = fontError
        }
        if let align = styleField.align {
            self.titleLabel.textAlignment = align
        }
        if let checkBoxOn = styleField.checkBoxOn {
            self.checkBoxOn = checkBoxOn
            self.buttonAccept.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        }
        if let checkBoxOff = styleField.checkBoxOff {
            self.checkBoxOff = checkBoxOff
            self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        }
    }
    
    fileprivate func changeState() {
        if self.buttonAccept.isSelected {
            self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        } else {
            self.buttonAccept.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        }
        self.buttonAccept.isSelected = !self.buttonAccept.isSelected
    }
    
    fileprivate func chooseImage() {
        if self.buttonAccept.isSelected {
            self.buttonAccept.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        } else {
            self.buttonAccept.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        }
    }
    
    // MARK: Parse
    
    fileprivate func existLink(_ text: String) -> Bool {
        return text.index(of: "{") != nil
    }
    
    fileprivate func getListLinks(_ text: String) -> ([String], String) {
        let newStringKey = text.replacingOccurrences(of: "{* ", with: "{* #", options: .literal, range: nil)
        let firstPart = newStringKey.components(separatedBy: "{* ")
        let localizedStringPieces = self.separeteString(listPart: firstPart)
        
        var listLink = [String]()
        var allWords = ""
        for word in localizedStringPieces {
            if word.hasPrefix("#") {
                let link = word.replacingOccurrences(of: "#", with: "", options: .literal, range: nil)
                listLink.append(link)
                allWords += link
            } else {
                allWords += word
            }
        }
        
        return (listLink, allWords)
    }
    
    fileprivate func separeteString(listPart: [String]) -> [String] {
        var auxList = [String]()
        for text in listPart {
            let findPart = text.components(separatedBy: " *}")
            auxList += findPart
        }
        return auxList
    }
    
    
    // MARK: Actions
    
    @objc func actionButtonAccept() {
        self.changeState()
        guard
            let formFiled = self.formFieldM,
            let rules = formFiled.rules,
            let valueToCompare = Bool(rules.value)
        else {
            return
        }
        switch rules.compare {
        case .equal where valueToCompare == self.buttonAccept.isSelected:
            self.formFieldOutput?.launchRule(idField: rules.fieldReciver, behaivour: rules.behavior)
        case .different where valueToCompare != self.buttonAccept.isSelected:
            self.formFieldOutput?.launchRule(idField: rules.fieldReciver, behaivour: rules.behavior)
        default:
            break
        }
    }
    
    func labelAction(grTap: UITapGestureRecognizer) {
        self.formFieldOutput?.userDidTapLink((self.formFieldM?.key)!)
    }
    
    // MARK: UIResponser (Overrride)
    override var canBecomeFirstResponder: Bool {
        return false
    }
}
