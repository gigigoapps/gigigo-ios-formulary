//
//  NumericValidatorTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class NumericValidatorTests: XCTestCase {
    
    var validator: NumericValidator!
    
    override func setUp() {
        super.setUp()
        
        self.validator = NumericValidator(mandatory: true)
    }
    
    override func tearDown() {
        self.validator = nil
        
        super.tearDown()
    }
    
    // MARK: TESTS
    
    func test_validation_mandatory() {
        XCTAssertFalse(self.validator.validate(nil))
        XCTAssertFalse(self.validator.validate("" as AnyObject?))
        let dic = [String: String]()
        XCTAssertFalse(self.validator.validate(dic as AnyObject?));
    }
    
    func test_validation_optional() {
        self.validator.mandatory = false
        XCTAssertTrue(self.validator.validate(nil))
        XCTAssertTrue(self.validator.validate("" as AnyObject?))
        let dic = [String: String]()
        XCTAssertFalse(self.validator.validate(dic as AnyObject?));
    }
    
    func test_numeric_validation() {
        XCTAssertTrue(self.validator.validate("1" as AnyObject?))
        XCTAssertTrue(self.validator.validate("123456789" as AnyObject?))
        XCTAssertFalse(self.validator.validate("ab" as AnyObject?))
        XCTAssertFalse(self.validator.validate("123456789 " as AnyObject?))
    }
}
