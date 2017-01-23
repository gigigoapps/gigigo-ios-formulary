//
//  FormFieldModelTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 1/8/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class FormFieldModelTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        
    }
    
    override func tearDown() {
        
        super.tearDown()
    }
    
    // MARK: Parse Json Tests
    
    // MARK: Mandatory generic  -  FormFieldModel

    func test_parseJson_FormFieldModel_with_json_not_valid(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(["":("" as AnyObject?)!]))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_No_All_Mandatory_Element(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(["template":("" as AnyObject?)!]))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_All_Mandatory_Element_empty(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let dic:[String: AnyObject] = ["type":("" as AnyObject?)!,
                       "label":"" as AnyObject,
                       "key":"" as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_All_Mandatory_Element_with_incorrect_type(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let dic:[String: AnyObject] = ["type":0 as AnyObject,
                                           "label":"aa" as AnyObject,
                                           "key":"aa" as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
        do {            
            let key = ["asa":"asdas"] as [String : Any]
            let dic2:[String: AnyObject] = ["type":"aa" as AnyObject,
                                           "label":"aa" as AnyObject,
                                           "key": key as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic2))
        }
    }

    func test_parseJson_FormFieldModel_with_json_Valid_And_All_Mandatory_Element(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject]
            
            XCTAssertNotNil(try formFieldModelResult.parseDictionary(dic))
        }
    }
    
    // MARK: Styles
    
    func test_parseJson_FormFieldModel_with_json_valid_And_All_Mandatory_Element_with_styles_empty(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let styles = [AnyObject]()
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "style":styles as AnyObject]
            
            XCTAssertNotNil(try formFieldModelResult.parseDictionary(dic))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_valid_And_All_Mandatory_Element_with_styles(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let styles = ["backgroundColorField":"#ff374b",
                          "sizeTitle":12] as [String : Any]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "style":styles as AnyObject]
            
            XCTAssertNotNil(try formFieldModelResult.parseDictionary(dic))
            XCTAssertTrue(formFieldModelResult.style?.backgroundColorField == UIColor(fromHexString: "#ff374b"))
        }
    }
    
    // MARK: Options
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_All_Mandatory_Element_options_empty(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let listOptions = [[]]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_All_Mandatory_Element_options_incorrect_type(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let listOptions = ["aa"]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_not_valid_And_All_Mandatory_Element_options_element_empty(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let listOptions = [["key":""]]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
        do {
            let listOptions = ["value":""]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic))
        }
        do {
            let listOptions = ["key":"",
                               "value":""]
            
            let dic1:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                            "label":"titulo" as AnyObject,
                                            "key":"clave" as AnyObject,
                                            "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic1))
        }
        do {
            let listOptions = [["key":"KeyNoSelected","value":""],
                               ["key":"clave1","value":"titulo primer elemento"]]
            
            let dic1:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                            "label":"titulo" as AnyObject,
                                            "key":"clave" as AnyObject,
                                            "listOptions":listOptions as AnyObject]
            
            XCTAssertThrowsError(try formFieldModelResult.parseDictionary(dic1))
        }
    }
    
    func test_parseJson_FormFieldModel_with_json_valid_And_All_Mandatory_Element_options(){
        let formFieldModelResult = FormFieldModel(bundle: Bundle())
        do {
            let listOptions = [["key":"KeyNoSelected","value":"elige un elemento"],
                               ["key":"clave1","value":"titulo primer elemento"]]
            
            let dic:[String: AnyObject] = ["type":"tipo" as AnyObject,
                                           "label":"titulo" as AnyObject,
                                           "key":"clave" as AnyObject,
                                           "listOptions":listOptions as AnyObject]
            
            XCTAssertNotNil(try formFieldModelResult.parseDictionary(dic))
        }
    }
}
