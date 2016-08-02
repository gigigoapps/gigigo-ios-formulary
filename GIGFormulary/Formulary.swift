//
//  Formulary.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/8/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

public protocol PFormulary {
    func recoverFormModel(formValues: [String: String])
}

public class Formulary: PFormController {
    public static let shared = Formulary()
    public var delegate: PFormulary?
    
    // MARK: Start
    
    public func start(viewContainerFormulary: UIView, jsonFile: String) {
        let formController = FormController(viewContainerFormulary: viewContainerFormulary)
        formController.loadFieldsFromJSONFile(jsonFile)
        formController.delegate = self
    }
    
    // MARK: PFormulary

    public func recoverFormModel(formValues: [String : String]) {
        self.delegate?.recoverFormModel(formValues)
    }
}
