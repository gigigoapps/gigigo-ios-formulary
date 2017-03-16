//
//  Formulary.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/8/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

public protocol PFormulary {
    func recoverFormModel(_ formValues: [String: AnyObject])
    func userDidTapLink(_ key: String)
    func fieldFocus(frame: CGRect)
}

public extension PFormulary {
    func userDidTapLink(_ key: String) {}
    func fieldFocus(frame: CGRect) {}
}

open class Formulary: PFormController {
    open static let shared = Formulary()
    open var delegate: PFormulary?
    
    //-- Private Var --
    var formController: FormController?
    var bundle: Bundle?
    
    // MARK: Start
    
    public init() {
        
    }
    
    open func start(_ viewContainerFormulary: UIView, jsonFile: String) {
        self.formController = FormController(
            viewContainerFormulary: viewContainerFormulary,
            bundle: self.bundle
        )
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
    }
    
    open func start(_ viewContainerFormulary: UIView, listItems: [[String: AnyObject]]) {
        self.formController = FormController(
            viewContainerFormulary: viewContainerFormulary,
            bundle: self.bundle
        )
        self.formController!.loadFieldsFromJSONDictionary(listItems)
        self.formController!.delegate = self
    }
    
    open func start(_ button: UIButton, jsonFile: String) -> UIView {
        self.formController = FormController(
            button: button,
            bundle: self.bundle
        )
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
        
        return self.formController!.recoverView()
    }
    
    open func start(_ button: UIButton, listItems: [[String: AnyObject]]) -> UIView  {
        self.formController = FormController(
            button: button,
            bundle: self.bundle
        )
        self.formController!.loadFieldsFromJSONDictionary(listItems)
        self.formController!.delegate = self
        
        return self.formController!.recoverView()
    }
    
    
    // MARK: Public Method
    
    // Populate

    open func populateData(_ values: [String: AnyObject]) {
        guard let form = self.formController else {
            return
        }
        form.populateData(values as [String : AnyObject])
    }
    
    // Insert error
    
    open func loadError(_ values: [String: String]) {
        guard let form = self.formController else {
            return
        }
        form.loadError(values)
    }
    
    //  Clean
    
    open func clearFormulary() {
        guard let form = self.formController else {
            return
        }
        form.clearFormulary()
    }
    
    // Bundle
    
    open func loadBundle(_ bundle: Bundle) {
        self.bundle = bundle
    }
    
    // MARK: PFormulary

    open func recoverFormModel(_ formValues: [String : AnyObject]) {
        self.delegate?.recoverFormModel(formValues)
    }
    
    open func userDidTapLink(_ key: String) {
        self.delegate?.userDidTapLink(key)
    }
    
    open func fieldFocus(_ frame: CGRect) {
        self.delegate?.fieldFocus(frame: frame)
    }
}
