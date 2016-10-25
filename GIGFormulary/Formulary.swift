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
    
    open func start(_ button: UIButton, jsonFile: String) -> UIView {
        self.formController = FormController(button: button)
        self.formController!.loadFieldsFromJSONFile(jsonFile)
        self.formController!.delegate = self
        
        return self.formController!.recoverView()
    }
    
    open func populateData(_ values: [String:String]) {
        self.formController!.populateData(values as [String : AnyObject])
    }
    
    // MARK: PFormulary

    open func recoverFormModel(_ formValues: [String : AnyObject]) {
        self.delegate?.recoverFormModel(formValues)
    }
}
