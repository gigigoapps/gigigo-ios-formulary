//
//  PhoneValidatorTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class PhoneValidatorTests: XCTestCase {
    
    var validator: PhoneValidator!
    
    override func setUp() {
        super.setUp()
        
        self.validator = PhoneValidator(mandatory: true)
    }
    
    override func tearDown() {
        self.validator = nil
        
        super.tearDown()
    }
    
    // MARK: TESTS
    
    func test_valid_phones() {
        XCTAssertTrue(self.validator.validate("900123123" as AnyObject?))
        XCTAssertTrue(self.validator.validate("+1900123123" as AnyObject?))
        XCTAssertTrue(self.validator.validate("+12900123123" as AnyObject?))
        XCTAssertTrue(self.validator.validate("+123900123123" as AnyObject?))
    }
    
    func test_invalid_phones() {
        XCTAssertFalse(self.validator.validate("1" as AnyObject?))
        XCTAssertFalse(self.validator.validate("+413y9743" as AnyObject?))
        XCTAssertFalse(self.validator.validate("+1239876543210" as AnyObject?))
        XCTAssertFalse(self.validator.validate("98765432" as AnyObject?))
        XCTAssertFalse(self.validator.validate("9876543210" as AnyObject?))
    }
}
