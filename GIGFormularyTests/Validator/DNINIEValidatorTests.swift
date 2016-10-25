//
//  DNINIEValidatorTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class DNINIEValidatorTests: XCTestCase {
    
    var validator: DNINIEValidator!
    
    override func setUp() {
        super.setUp()
        
        self.validator = DNINIEValidator(mandatory: true)
    }
    
    override func tearDown() {
        self.validator = nil
        
        super.tearDown()
    }
    
    // MARK: TESTS
    
    func test_verify_mandatory() {
        XCTAssertFalse(self.validator.validate("" as AnyObject?))
        XCTAssertFalse(self.validator.validate(nil))
    }
    
    func test_correct_dni_mandatory() {
        //-- NIFs --
        XCTAssertTrue(self.validator.validate("50756778x" as AnyObject?))
        XCTAssertTrue(self.validator.validate("48206795Z" as AnyObject?))
        XCTAssertTrue(self.validator.validate("18056396Q" as AnyObject?))
        XCTAssertTrue(self.validator.validate("42669453Z" as AnyObject?))
        XCTAssertTrue(self.validator.validate("90254243N" as AnyObject?))
        XCTAssertTrue(self.validator.validate("04566186L" as AnyObject?))
        XCTAssertTrue(self.validator.validate("09564232G" as AnyObject?))
    }
    
    func test_correct_nie_mandatory() {
        //-- NIEs --
        XCTAssertTrue(self.validator.validate("Z7238334D" as AnyObject?))
        XCTAssertTrue(self.validator.validate("X5041537Y" as AnyObject?))
        XCTAssertTrue(self.validator.validate("X6423966C" as AnyObject?))
        XCTAssertTrue(self.validator.validate("Y5942178G" as AnyObject?))
        XCTAssertTrue(self.validator.validate("X8104930Y" as AnyObject?))
    }
    
    func test_incorrect_dni_mandatory() {
        XCTAssertFalse(self.validator.validate("50756778" as AnyObject?))
        XCTAssertFalse(self.validator.validate("507567y" as AnyObject?))
        XCTAssertFalse(self.validator.validate("5sx" as AnyObject?))
        XCTAssertFalse(self.validator.validate("" as AnyObject?))
    }
    
    func test_incorrect_nie_mandatory() {
        XCTAssertFalse(self.validator.validate("X2258819J" as AnyObject?))
        XCTAssertFalse(self.validator.validate("X225819J" as AnyObject?))
        XCTAssertFalse(self.validator.validate("X2258819" as AnyObject?))
        XCTAssertFalse(self.validator.validate("2258819J" as AnyObject?))
        XCTAssertFalse(self.validator.validate("X225568819J" as AnyObject?))
    }
    
    func test_verify_optional() {
        self.validator.mandatory = false
        XCTAssertTrue(self.validator.validate("" as AnyObject?))
        XCTAssertTrue(self.validator.validate(nil))
        XCTAssertFalse(self.validator.validate("5sx" as AnyObject?))
        XCTAssertTrue(self.validator.validate("50756778x" as AnyObject?))
    }
}
