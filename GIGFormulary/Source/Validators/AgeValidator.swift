//
//  AgeValidator.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 19/7/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class AgeValidator: Validator {
    override func validate(value: AnyObject?) -> Bool{
        if (!super.validate(value))  {
            return false
        }
        let date = value as? NSDate
        
        if (date == nil && !self.mandatory) {
            return true
        }
        
        if (date != nil) {
            return self.isValidAge(date!)
        }
        
        return true
    }
    
    // MARK: Private Method
    
    private func isValidAge(birthday: NSDate) -> Bool{
        return calculateAge(birthday) >= self.minAge ? true : false
    }
    
    private func calculateAge (birthday: NSDate) -> NSInteger {        
        let calendar : NSCalendar = NSCalendar.currentCalendar()
        let unitFlags : NSCalendarUnit = [NSCalendarUnit.Year, NSCalendarUnit.Month, NSCalendarUnit.Day]
        let dateComponentNow : NSDateComponents = calendar.components(unitFlags, fromDate: NSDate())
        let dateComponentBirth : NSDateComponents = calendar.components(unitFlags, fromDate: birthday)
        
        if ( (dateComponentNow.month < dateComponentBirth.month) ||
            ((dateComponentNow.month == dateComponentBirth.month) && (dateComponentNow.day < dateComponentBirth.day))
            )
        {
            return dateComponentNow.year - dateComponentBirth.year - 1
        }
        else {
            return dateComponentNow.year - dateComponentBirth.year
        }
    }
}
