//
//  Formulary.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/8/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

public protocol PFormulary {
    func recoverFormModel(_ formValues: [AnyHashable: Any])
    func userDidTapLink(_ key: String)
    func fieldFocus(frame: CGRect, key: String?)
    func invalidForm()
}

public extension PFormulary {
    func userDidTapLink(_ key: String) {}
    func fieldFocus(frame: CGRect, key: String?) {}
    func invalidForm() {}
}

open class Formulary: PFormController {
    public static let shared = Formulary()
    open var formularyOutput: PFormulary?
    
    //-- Private Var --
    var formController: FormController?
    
    // MARK: Start
    
    public init() {
        
    }
    
    open func start(_ viewContainerFormulary: UIView, jsonFile: String, bundle: Bundle = Bundle(for: Formulary.self)) {
        self.formController = FormController(
            viewContainerFormulary: viewContainerFormulary,
            bundle: bundle
        )
        self.formController?.loadFieldsFromJSONFile(jsonFile)
        self.formController?.formControllerOutput = self
    }
    
    open func start(_ viewContainerFormulary: UIView, listItems: [[AnyHashable: Any]], bundle: Bundle = Bundle(for: Formulary.self)) {
        self.formController = FormController(
            viewContainerFormulary: viewContainerFormulary,
            bundle: bundle
        )
        self.formController?.loadFieldsFromJSONDictionary(listItems)
        self.formController?.formControllerOutput = self
    }
    
    open func start(_ button: UIButton, jsonFile: String, bundle: Bundle = Bundle(for: Formulary.self)) -> UIView {
        self.formController = FormController(
            button: button,
            bundle: bundle
        )
        self.formController?.loadFieldsFromJSONFile(jsonFile)
        self.formController?.formControllerOutput = self
        
        guard let formController = self.formController else { return UIView() }
        return formController.recoverView()
    }
    
    open func start(_ button: UIButton, listItems: [[AnyHashable: Any]], bundle: Bundle = Bundle(for: Formulary.self)) -> UIView {
        self.formController = FormController(
            button: button,
            bundle: bundle
        )
        self.formController?.loadFieldsFromJSONDictionary(listItems)
        self.formController?.formControllerOutput = self
        
        guard let formController = self.formController else { return UIView() }
        return formController.recoverView()
    }
    
    
    // MARK: Public Method
    
    // Populate

    open func populateData(_ values: [AnyHashable: Any]) {
        guard let form = self.formController else {
            return
        }
        form.populateData(values)
    }
    
    // Insert error
    
    open func loadError(_ values: [AnyHashable: Any]) {
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
    
    // MARK: PFormulary

    open func recoverFormModel(_ formValues: [AnyHashable: Any]) {
        self.formularyOutput?.recoverFormModel(formValues)
    }
    
    open func userDidTapLink(_ key: String) {
        self.formularyOutput?.userDidTapLink(key)
    }
    
    open func fieldFocus(frame: CGRect, key: String?) {
        self.formularyOutput?.fieldFocus(frame: frame, key: key)
    }
    
    open func invalidForm() {
        self.formularyOutput?.invalidForm()
    }
}
