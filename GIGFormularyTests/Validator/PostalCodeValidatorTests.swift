//
//  PostalCodeValidatorTests.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 11/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import XCTest
@testable import GIGFormulary

class PostalCodeValidatorTests: XCTestCase {
    
    var validator: PostalCodeValidator!
    
    override func setUp() {
        super.setUp()
        
        self.validator = PostalCodeValidator(mandatory: true)
    }
    
    override func tearDown() {
        self.validator = nil
        
        super.tearDown()
    }
    
    // MARK: TESTS
    
    func test_valid_postal_codes() {
        XCTAssertTrue(self.validator.validate("1234" as AnyObject?))
        XCTAssertTrue(self.validator.validate("01234" as AnyObject?))
        XCTAssertTrue(self.validator.validate("12345" as AnyObject?))
    }
    
    func test_invalid_postal_codes() {
        XCTAssertFalse(self.validator.validate("0234" as AnyObject?))
        XCTAssertFalse(self.validator.validate("123" as AnyObject?))
        XCTAssertFalse(self.validator.validate("" as AnyObject?))
        XCTAssertFalse(self.validator.validate("1" as AnyObject?))
        XCTAssertFalse(self.validator.validate("123456" as AnyObject?))
        XCTAssertFalse(self.validator.validate("00123" as AnyObject?))
        XCTAssertFalse(self.validator.validate("123a" as AnyObject?))
    }
}
