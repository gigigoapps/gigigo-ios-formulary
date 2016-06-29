//
//  TextFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

protocol PTextFormField {
    func borrarProtocolo()
}

class TextFormField: FormField {
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var textTextField: UITextField!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    /*
    func borrar() {
        self.delegate!.borrarProtocolo()
     }*/
    
    var viewContainer: UIView!
    
    override init(frame: CGRect) {
        super.init(frame: frame)
         self.awakeFromNib(frame)
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func xibSetup() {
        self.viewContainer = loadViewFromNib()
        self.viewContainer.autoresizingMask = [UIViewAutoresizing.FlexibleWidth, UIViewAutoresizing.FlexibleHeight]
        addSubview(viewContainer)
    }
    
    func loadViewFromNib() -> UIView {
        let bundle = NSBundle(forClass: self.dynamicType)
        let nib = UINib(nibName: "TextFormField", bundle: bundle)
        let view = nib.instantiateWithOwner(self, options: nil)[0] as! UIView
        return view
    }
    
    func awakeFromNib(frame: CGRect) {
        super.awakeFromNib()
        self.xibSetup()
    }
    
    // MARK: Public Method
    
    override func insertData(formFieldM: FormFieldModel) {
        self.titleLabel.text = formFieldM.label
        self.textTextField.placeholder = formFieldM.placeHolder
        self.showMandatory(formFieldM.mandatory)
    }
    
    func showError() {
        
    }
    
    // MARK: Private Method
    
    private func showMandatory(isMandatory: Bool) {
        if (isMandatory) {
            // poner constraint a cero
        }
        else {
            // abrir constraint
        }
    }
}
