//
//  IndexFormField.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 10/1/17.
//  Copyright © 2017 gigigo. All rights reserved.
//

import UIKit
import GIGLibrary

protocol PIndexFormField {
    func userDidTapLink(_ key: String)
}

class IndexFormField: IndexCellInterface {
    
    // MARK: INIT
    
    override init(cell: FormFieldStyleModel?) {
        super.init(cell: cell)
        self.awakeFromNib(classField: type(of: self))
        self.initializeView()
    }
    
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
        self.loadData(self.formFieldM)
        self.loadCustomStyleField(self.formFieldM)
    }
    
    
    // MARK: Actions
    
    func labelAction(grTap: UITapGestureRecognizer) {
        guard let key = self.formFieldM?.key else { return LogInfo("Key is nil") }
        self.formFieldOutput?.userDidTapLink(key)
    }
    
    
    // MARK: Private Method
    
    fileprivate func initializeView() {
        self.indexLabel.numberOfLines = 0
    }
    
    
    // MARK: Load data field
    
    fileprivate func loadData(_ formFieldM: FormFieldModel?) {
        guard let formFieldM = formFieldM else { return LogWarn("Model of form is nil") }
        
        self.indexLabel.text = formFieldM.label
        
        if self.existLink(formFieldM.label) {
            let getLinks = self.getListLinks(formFieldM.label)
            
            let attributes = [NSAttributedString.Key.foregroundColor: UIColor.black,
                              NSAttributedString.Key.font: UIFont.preferredFont(forTextStyle: UIFont.TextStyle.headline)]
            self.indexLabel.attributedText = NSAttributedString(string: getLinks.1, attributes: attributes)
            
            //Step 2: Define a selection handler block
            let handler = {
                (hyperLabel: FRHyperLabel?, substring: String?) -> Void in
                if let key = substring {
                    self.formFieldOutput?.userDidTapLink(key)
                }
            }
            
            //Step 3: Add link substrings
            self.indexLabel.setLinksForSubstrings(getLinks.0, withLinkHandler: handler)
            self.indexLabel.font = UIFont.systemFont(ofSize: 16)
        }
    }
    
    fileprivate func loadCustomStyleField(_ formFieldM: FormFieldModel?) {
        guard let styleField = formFieldM?.style else { return LogInfo("Style is nil") }
        
        if let backgroundColor = styleField.backgroundColorField {
            self.viewContainer.backgroundColor = backgroundColor
        }
        if let titleColor = styleField.titleColor {
            self.indexLabel.textColor = titleColor
        }
        if let fontTitle = styleField.fontTitle {
            self.indexLabel.font = fontTitle
        }
        if let align = styleField.align {
            self.indexLabel.textAlignment = align
        }
    }
    
    
    // MARK: Parse
    
    fileprivate func existLink(_ text: String?) -> Bool {
        guard let text = text else { return false }
        if text.firstIndex(of: "{") != nil {
            return true
        }
        return false
    }
    
    fileprivate func getListLinks(_ text: String?) -> ([String], String) {
        guard let text = text else { return ([], "") }
        let newStringKey = text.replacingOccurrences(of: "{* ", with: "{* #", options: .literal, range: nil)
        let firstPart = newStringKey.components(separatedBy: "{* ")
        let localizedStringPieces = self.separeteString(listPart: firstPart)
        
        var listLink = [String]()
        var allWords = ""
        for word in localizedStringPieces {
            if word.hasPrefix("#") {
                let link = word.replacingOccurrences(of: "#", with: "", options: .literal, range: nil)
                listLink.append(link)
                allWords += link
            } else {
                allWords += word
            }
        }
        
        return (listLink, allWords)
    }
    
    fileprivate func separeteString(listPart: [String]) -> [String] {
        var auxList = [String]()
        for text in listPart {
            let findPart = text.components(separatedBy: " *}")
            auxList += findPart
        }
        return auxList
    }
}
