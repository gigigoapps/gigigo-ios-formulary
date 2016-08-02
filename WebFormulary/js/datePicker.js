
//======================================
//            DATE   PICKER           //
//======================================


//-- DATE PICKER YA CREADO SOLO MOSTRAR --
function createDatePickerField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer,align,font,imageMandatory) {
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlColorBasic = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlColorPicker = getStyleColorPicker (aceptColor,containerAceptColor,backgroundPickerColor);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlImageMandatory(imageMandatory)

    var styles = htmlFontSize + htmlColorBasic + htmlAlingFont + htmlImages + htmlColorPicker;

    var html = '<div class="cellConstructor pickerConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"disabled value="'+keyTextField+'"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"value="'+title+'"disabled readonly></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled readonly value="'+error+'"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+'disabled readonly><p>Es obligatorio?</p></div></div><div class="minAgeContainer"><p>Edad minima:</p><input type="text"name="minAgeContainer"id="minAgeContainer"value="'+minAgeContainer+'"disabled readonly></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonAddPicker"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveDatePickerField(keyTextField,type,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer,align,font,imageMandatory) {
    
    //-- MANDATORY FIELDS --

    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title
    }
    
    //-- OPTIONAL FIELDS --

    if (mandatory) {
        itemSave["mandatory"] = mandatory
    }   
    if (textError.length > 0) {
        itemSave["textError"] = textError
    }               
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    }                
    if (minAgeContainer.length > 0) {
        itemSave["minAge"] = parseInt(minAgeContainer) 
        itemSave["validator"] = "age"
    }  

    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,align,font,imageMandatory,"","");
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
        
    indexField++;
}