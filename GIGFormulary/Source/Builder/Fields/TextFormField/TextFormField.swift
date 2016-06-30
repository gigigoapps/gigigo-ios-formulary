//
//  TextFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary


protocol PTextFormField {
    func borrarProtocolo()
}


class TextFormField: FormField {
    
    @IBOutlet var titleLabel: UILabel!
    @IBOutlet var textTextField: UITextField!
    @IBOutlet var mandotoryImage: UIImageView!
    @IBOutlet var errorLabel: UILabel!
    
    @IBOutlet weak var heightErrorLabelConstraint: NSLayoutConstraint!
    @IBOutlet weak var widthMandatoryImageConstraint: NSLayoutConstraint!
    
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
        
        addSubview(self.viewContainer)
        
        gig_autoresize(self.viewContainer, false)
        gig_layout_fit_horizontal(self.viewContainer);
        gig_layout_top(self.viewContainer, 0);
        gig_layout_bottom(self.viewContainer, 0)
        
        self.initializeView()
    }
    
    func loadViewFromNib() -> UIView {
        let bundle = NSBundle(forClass: self.dynamicType)
        let classString = NSStringFromClass(self.dynamicType)
        let nib = UINib(nibName: classString.componentsSeparatedByString(".").last!, bundle: bundle)
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
        self.errorLabel.text = formFieldM.textError
        self.showMandatory(formFieldM.mandatory)
        self.loadCustomStyleField(formFieldM)
    }
    
    func showError() {
        self.errorLabel.sizeToFit()
        UIView.animateWithDuration(1.0) {  // TODO EDU, ver pq leches no se hace animado
            self.heightErrorLabelConstraint.constant = self.errorLabel.frame.height
            self.errorLabel.layoutIfNeeded()
        }
    }
    
    // MARK: Private Method
    
    private func showMandatory(isMandatory: Bool) {
        if (isMandatory) {
            self.widthMandatoryImageConstraint.constant = 30
        }
        else {
            self.widthMandatoryImageConstraint.constant = 0
        }
    }
    
    private func loadCustomStyleField(formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        if (styleField != nil) {
            if (styleField?.mandatoryIcon != nil) {
                self.mandotoryImage.image = UIImage() // TODO EDU, aqui habria q cargar la imagen q fuera
            }
        }
    }
    
    private func initializeView() {
        self.titleLabel.numberOfLines = 0
        self.errorLabel.numberOfLines = 0
        self.mandotoryImage.image = UIImage(named: "mandatoryIcon")
        
        NSTimer.scheduledTimerWithTimeInterval(5, target: self, selector: #selector(self.borrar), userInfo: nil, repeats: true)
    }
    
    
    // must be internal or public.
    func borrar() {
        self.showError()
    }
}
