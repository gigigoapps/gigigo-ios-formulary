//
//  IndexFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 10/1/17.
//  Copyright © 2017 gigigo. All rights reserved.
//

import UIKit

class IndexFormField: FormField {

    @IBOutlet var indexLabel: UILabel!
    
    
    // MARK: INIT
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.awakeFromNib(frame, classField: type(of: self))
        self.initializeView()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    
    // MARK: Public Method
    
    override func insertData() {
        self.loadData(self.formFieldM!)
        self.loadCustomStyleField(self.formFieldM!)
    }
    
    
    // MARK: Private Method
    
    fileprivate func initializeView() {
        self.indexLabel.numberOfLines = 0
    }
    
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel) {
        self.indexLabel.text = formFieldM.label
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel) {
        let styleField = formFieldM.style
        if (styleField != nil) {
            if (styleField!.backgroundColorField != nil) {
                self.viewContainer.backgroundColor = styleField!.backgroundColorField!
            }
            if (styleField!.titleColor != nil) {
                self.indexLabel.textColor = styleField!.titleColor!
            }

            if (styleField!.fontTitle != nil) {
                self.indexLabel.font = styleField?.fontTitle
            }

            if (styleField!.align != nil) {
                self.indexLabel.textAlignment = styleField!.align!
            }
        }
    }
}
