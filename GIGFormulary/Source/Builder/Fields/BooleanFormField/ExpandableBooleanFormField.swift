//
//  ExpandableBooleanFormField.swift
//  GIGFormulary
//
//  Created by José Estela on 23/4/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation
import GIGLibrary

struct ExpandableInfo {
    let collapseText: String
    let expandText: String
}

@available(iOS 9, *)
class ExpandableBooleanFormField: ExpandableCellInterface, HyperlinkTextViewDelegate {
    // MARK: - Private attributes
    private var checkBoxOn: UIImage?
    private var checkBoxOff: UIImage?
    private var expandableTextView: ExpandableTextView?
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
        guard let formField = self.formFieldM else { return LogWarn("Model is nil") }
        self.loadCustomStyleField(formField)
        self.loadData(formField)
        self.loadMandatory(formField.isMandatory())
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
            return self.acceptButton.isSelected as Any?
        }
        set {
            guard let boolValue = newValue as? Bool else {
                self.chooseImage()
                return
            }
            self.acceptButton.isSelected = boolValue
            self.chooseImage()
        }
    }
    
    override func launchRule(behaivour: TypeBehavior) {
        super.launchRule(behaivour: behaivour)
        switch behaivour {
        case .disable:
            self.disable()
        case .enable:
            self.enable()
        case .hide:
            if self.acceptButton.isSelected {
                self.actionButtonAccept()
            }
        case .show, .none:
            break
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
        self.errorLabel.numberOfLines = 0
        self.checkBoxOn = UIImage(named: "chackBoxOn", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.checkBoxOff = UIImage(named: "checkBox", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon", in: Bundle(for: type(of: self)), compatibleWith: nil)
        self.acceptButton.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        
        self.acceptButton.addTarget(self, action: #selector(actionButtonAccept), for: .touchUpInside)
        self.acceptButton.tintColor = UIColor.clear
        self.expandCollapseButton.addTarget(self, action: #selector(expandCollapseButtonTapped), for: .touchUpInside)
    }
    
    fileprivate func disable() {
        self.acceptButton.isSelected = false
        self.acceptButton.setBackgroundImage(self.checkBoxOff, for: .normal)
        self.acceptButton.isEnabled = false
        self.alpha = 0.5
    }
    
    fileprivate func enable() {
        self.acceptButton.isEnabled = true
        self.alpha = 1.0
    }
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.errorLabel.text = self.recoverTextError(value: self.fieldValue)
        if formFieldM.value is Bool {
            self.changeState()
        }
        if !formFieldM.isEditing {
            self.disable()
        } else {
            self.enable()
        }
        var fieldDescription = formFieldM.fieldDescription
        if let strings = formFieldM.fieldDescription?.find(pattern: "\\{\\* [a-zA-Z0-9_]* \\*\\}") {
            strings.forEach {
                let valueWithoutKeys = $0.value.replacingOccurrences(of: "{* ", with: "").replacingOccurrences(of: " *}", with: "")
                fieldDescription = fieldDescription?.replacingOccurrences(of: $0.value, with: "<a href=\"\(valueWithoutKeys)\">\(valueWithoutKeys)</a>")
            }
        }
        self.expandCollapseButton.setTitle(self.formFieldM?.expandableInfo?.expandText, for: .normal)
        self.expandableTextView = ExpandableTextView.instantiate(
            shortText: formFieldM.label ?? "",
            longText: fieldDescription ?? "",
            hyperlinkDelegate: self
        )
        if let expandableTextView = self.expandableTextView {
            self.textContainerView.addSubviewWithAutolayout(expandableTextView)
        }
        let tap = UITapGestureRecognizer(target: self, action: #selector(textViewTapped))
        tap.numberOfTapsRequired = 1
        self.addGestureRecognizer(tap)
    }
    
    fileprivate func loadMandatory(_ isMandatory: Bool) {
        if isMandatory {
            self.widthMandatoryImageConstraint.constant = self.auxWidthConstraint
        } else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        if styleField?.mandatoryIcon != nil {
            self.mandotoryImage.image = styleField?.mandatoryIcon
        }
        self.viewContainer.backgroundColor = styleField?.backgroundColorField
        self.expandableTextView?.hyperlinkTextView.textColor = styleField?.titleColor
        self.errorLabel.textColor = styleField?.errorColor
        self.expandableTextView?.hyperlinkTextView.font = styleField?.fontTitle
        self.errorLabel.font = styleField?.fontError
        self.expandCollapseButton.titleLabel?.lineBreakMode = .byWordWrapping
        self.expandCollapseButton.titleLabel?.numberOfLines = 2
        self.expandCollapseButton.titleLabel?.textAlignment = .left
        self.expandCollapseButton.sizeToFit()
        self.expandCollapseButton.titleLabel?.font = styleField?.expandCollapseButtonFont
        self.expandCollapseButton.setTitleColor(styleField?.expandCollapseButtonTextColor, for: .normal)
        if let alignment = styleField?.align {
            self.expandableTextView?.hyperlinkTextView.textAlignment = alignment
        }
        if let checkBoxOn = styleField?.checkBoxOn {
            self.checkBoxOn = checkBoxOn
            self.acceptButton.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        }
        if let checkBoxOff = styleField?.checkBoxOff {
            self.checkBoxOff = checkBoxOff
            self.acceptButton.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        }
        self.layoutIfNeeded()
    }
    
    fileprivate func changeState() {
        if self.acceptButton.isSelected {
            self.acceptButton.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        } else {
            self.acceptButton.setBackgroundImage(self.checkBoxOn, for: UIControlState())
            self.acceptButton.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        }
        self.acceptButton.isSelected = !self.acceptButton.isSelected
    }
    
    fileprivate func chooseImage() {
        if self.acceptButton.isSelected {
            self.acceptButton.setBackgroundImage(self.checkBoxOn, for: UIControlState.selected)
        } else {
            self.acceptButton.setBackgroundImage(self.checkBoxOff, for: UIControlState())
        }
    }
    
    // MARK: - Actions
    
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
        case .equal where valueToCompare == self.acceptButton.isSelected:
            self.formFieldOutput?.launchRule(idField: rules.fieldReciver, behaivour: rules.behavior)
        case .different where valueToCompare != self.acceptButton.isSelected:
            self.formFieldOutput?.launchRule(idField: rules.fieldReciver, behaivour: rules.behavior)
        default:
            self.formFieldOutput?.launchRule(idField: rules.fieldReciver, behaivour: rules.behaviorElse)
        }
    }
    
    @objc func expandCollapseButtonTapped() {
        self.textViewTapped()
    }
    
    @objc func textViewTapped() {
        guard let expandableTextView = self.expandableTextView else { return }
        if expandableTextView.isCollapsed {
            self.expandCollapseButton.setTitle(self.formFieldM?.expandableInfo?.collapseText, for: .normal)
            expandableTextView.expand()
        } else {
            self.expandCollapseButton.setTitle(self.formFieldM?.expandableInfo?.expandText, for: .normal)
            expandableTextView.collapse()
        }
    }
    
    // MARK: - UIResponser (Overrride)
    
    override var canBecomeFirstResponder: Bool {
        return false
    }
    
    // MARK: - HyperlinkTextViewDelegate
    
    func didTapOnHyperlink(URL: URL) {
        self.formFieldOutput?.userDidTapLink(URL.lastPathComponent)
    }
}
