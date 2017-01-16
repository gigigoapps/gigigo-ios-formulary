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
}

open class Formulary: PFormController {
    open static let shared = Formulary()
    open var delegate: PFormulary?
    
    //-- Private Var --
    var formController: FormController?
    
    // MARK: Start
    
    open func start(_ viewContainerFormulary: UIView, jsonFile: String) {
        self.formController = FormController(viewContainerFormulary: viewContainerFormulary)
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
    }
    
    open func start(_ viewContainerFormulary: UIView, listItems: [[String: AnyObject]]) {
        self.formController = FormController(viewContainerFormulary: viewContainerFormulary)
        self.formController!.loadFieldsFromJSONDictionary(listItems)
        self.formController!.delegate = self
    }
    
    open func start(_ button: UIButton, jsonFile: String) -> UIView {
        self.formController = FormController(button: button)
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
        
        return self.formController!.recoverView()
    }
    
    open func start(_ button: UIButton, listItems: [[String: AnyObject]]) -> UIView  {
        self.formController = FormController(button: button)
        self.formController!.loadFieldsFromJSONDictionary(listItems)
        self.formController!.delegate = self
        
        return self.formController!.recoverView()
    }
    
    // MARK: Populate

    open func populateData(_ values: [String: String]) {
        self.formController!.populateData(values as [String : AnyObject])
    }
    
    // MARK: Insert error
    
    open func loadError(_ values: [String: String]) {
        self.formController!.loadError(values)
    }
    
    // MARK: PFormulary

    open func recoverFormModel(_ formValues: [String : AnyObject]) {
        self.delegate?.recoverFormModel(formValues)
    }
    
    open func userDidTapLink(_ key: String) {
        self.delegate?.userDidTapLink(key)
    }
}
