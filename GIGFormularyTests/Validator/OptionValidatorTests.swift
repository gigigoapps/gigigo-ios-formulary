//
//  OptionValidatorTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 19/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class OptionValidatorTests: XCTestCase {
    
    var validator: OptionValidator!
    
    override func setUp() {
        super.setUp()
        
        self.validator = OptionValidator(mandatory: true)
    }
    
    override func tearDown() {
        self.validator = nil
        
        super.tearDown()
    }
    
    // MARK: TESTS
    
    func test_verify_mandatory() {
        XCTAssertFalse(self.validator.validate(nil))
    }
    
    func test_correct_option_mandatory() {
        XCTAssertTrue(self.validator.validate(1 as AnyObject?))
        XCTAssertTrue(self.validator.validate(2 as AnyObject?))
        XCTAssertTrue(self.validator.validate(3 as AnyObject?))
        XCTAssertTrue(self.validator.validate(4 as AnyObject?))
        XCTAssertTrue(self.validator.validate(5 as AnyObject?))
    }
    
    func test_incorrect_option_mandatory() {
        XCTAssertFalse(self.validator.validate(0 as AnyObject?))
    }
    
    func test_verify_optional() {
        self.validator.mandatory = false
        XCTAssertTrue(self.validator.validate(nil))
        XCTAssertTrue(self.validator.validate(0 as AnyObject?))
        XCTAssertTrue(self.validator.validate(1 as AnyObject?))
        XCTAssertTrue(self.validator.validate(2 as AnyObject?))
    }
}
