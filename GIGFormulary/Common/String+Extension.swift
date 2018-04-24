//
//  String+Extension.swift
//  GIGFormulary
//
//  Created by José Estela on 23/4/18.
//  Copyright © 2018 gigigo. All rights reserved.
//

import Foundation

extension String {
    
    /// Try to find in the current string the pattern given. For example, if you have "The car is yellow", you can find the "yellow" by calling this method with the following pattern: "The car is (.*)"
    ///
    /// - Parameter pattern: The pattern to find the word
    /// - Returns: The found word (or nil if no results)
    func find(pattern: String) -> [(value: String, range: NSRange)] {
        do {
            let regex = try NSRegularExpression(pattern: pattern, options: NSRegularExpression.Options.caseInsensitive)
            let matches = regex.matches(in: self, options: [], range: NSRange(location: 0, length: self.utf16.count))
            return matches.compactMap { (result: NSTextCheckingResult) -> (value: String, range: NSRange)? in
                let range = result.range(at: 0)
                if let swiftRange = Range(range, in: self) {
                    let stringValue = String(self[swiftRange])
                    return (value: stringValue, range: range)
                }
                return nil
            }
        } catch {
            return []
        }
    }
}
