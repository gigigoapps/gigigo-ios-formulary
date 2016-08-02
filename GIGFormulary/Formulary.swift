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
    
    //-- Private Var --
    var formController: FormController?
    
    // MARK: Start
    
    public func start(viewContainerFormulary: UIView, jsonFile: String) {
        self.formController = FormController(viewContainerFormulary: viewContainerFormulary)
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
    }
    
    public func populateData(values: [String:String]) {
        self.formController!.populateData(values)
    }
    
    // MARK: PFormulary

    public func recoverFormModel(formValues: [String : String]) {
        self.delegate?.recoverFormModel(formValues)
    }
}
