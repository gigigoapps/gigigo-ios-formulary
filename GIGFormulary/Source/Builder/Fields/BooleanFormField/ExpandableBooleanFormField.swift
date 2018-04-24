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
class ExpandableBooleanFormField: FormField, HyperlinkTextViewDelegate {
    
    // MARK: - IBOutlets
    
    @IBOutlet var acceptButton: UIButton!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    @IBOutlet weak var textContainerView: UIView!
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    @IBOutlet weak var expandCollapseButton: UIButton!
    
    // MARK: - Private attributes
    
    private var checkBoxOn: UIImage?
    private var checkBoxOff: UIImage?
    private var expandableTextView: ExpandableTextView?
    
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
        if !status {
            if self.isErrorGeneric() {
                self.errorLabel.text = self.formFieldM?.textsError.textError
            } else {
                self.errorLabel.text = self.formFieldM?.textsError.textErrorValidate
            }
            self.showError()
        } else {
            self.hideError()
        }
        
        return status
    }
    
    // MARK: Public Method
    
    override func insertData() {
        super.insertData()
        guard let formField = self.formFieldM else { return }
        self.loadCustomStyleField(formField)
        self.loadData(formField)
        self.loadMandatory(formField.mandatory)
    }
    
    override func loadError(error: Any) {
        guard let text = error as? String else { return }
        self.errorLabel.text = text
        self.showError()
    }
    
    // MARK: GIGFormField (Override)
    
    override internal var fieldValue: Any? {
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
    }
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.errorLabel.text = formFieldM.textsError.textError
        if formFieldM.value is Bool {
            self.changeState()
        }
        self.acceptButton.isEnabled = formFieldM.isEditing
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
            self.widthMandatoryImageConstraint.constant = 30
        } else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        self.mandotoryImage.image = styleField?.mandatoryIcon
        self.viewContainer.backgroundColor = styleField?.backgroundColorField
        self.expandableTextView?.hyperlinkTextView.textColor = styleField?.titleColor
        self.errorLabel.textColor = styleField?.errorColor
        self.expandableTextView?.hyperlinkTextView.font = styleField?.fontTitle
        self.errorLabel.font = styleField?.fontError
        self.expandCollapseButton.titleLabel?.font = styleField?.fontTitle
        self.expandCollapseButton.setTitleColor(styleField?.titleColor, for: .normal)
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
    
    @IBAction func acceptButtonTapped(_ sender: AnyObject) {
        self.changeState()
    }
    
    @IBAction func expandCollapseButtonTapped(_ sender: UIButton) {
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
