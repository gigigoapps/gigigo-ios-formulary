//
//  FormViews.swift
//  GIGFormulary
//
//  Created by  Eduardo Parada on 28/6/16.
//  Copyright © 2016 gigigo. All rights reserved.
//

import UIKit

class FormBuilderViews: NSObject {
    // -- Views --
    let viewContainerFormulary: UIView
    var viewFormulary = UIView()
    var scrollView = UIScrollView()
    
    init(viewContainerFormulary: UIView) {
        self.viewContainerFormulary = viewContainerFormulary
        
        super.init()
        
        self.prepareFormulary()
    }
    
    // MARK : Public Method
    
    func updateFormularyContent(listFields: [FormField]) {
        self.viewContainerFormulary.removeFromSuperview()
        self.addFields(listFields)
    }
    
    // MARK : Private Method
    
    func prepareFormulary() {
        
        
        //_- borrar
        self.viewFormulary.backgroundColor = UIColor.redColor()
        self.scrollView.backgroundColor = UIColor.greenColor()
        //-- fin borrar
        
        //-- TODO EDU, añadir constraint
        self.scrollView.addSubview(viewFormulary)
        self.viewContainerFormulary.addSubview(scrollView)
    }
    
    func addFields(listFields: [FormField]) {
        
                
        var lastView: UIView
        for field in listFields {
            
            self.viewFormulary.addSubview(field)
            
            // TODO EDU CONSTRAINT DE FIELD
            
            lastView = field
        }
        
        if (self.viewFormulary.subviews.count > 0) {
            // TODO EDU CONSTRAINT DE PIE DE VISTA
        }

        
        /*
         UIView *lastView = nil;
         
         for (GIGFormField *field in self.formFields)
         {
         field.formController = self;
         [self.fieldsContentView addSubview:field];
         
         gig_autoresize(field, NO);
         gig_layout_fit_horizontal(field);
         
         if (lastView != nil)
         {
         gig_layout_below(field, lastView, self.fieldsMargin);
         }
         else
         {
         gig_layout_top(field, 0);
         }
         
         lastView = field;
         }
         
         if (lastView != nil)
         {
         gig_layout_bottom(lastView, 0);
         }
         
         */
    }
}
