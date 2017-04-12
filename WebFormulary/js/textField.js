
//======================================
//               TEXT (YA CREADO)     //  
//======================================
            
function createField(keyTextField,title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,customValidator, isPassword, isCompare, compareKeysField, textErrorCompare,isEditing, isHidden) {
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }
    var isPasswordChecked = ""
    if (isPassword) {
        isPasswordChecked = "checked"
    }
    var isCompareChecked = ""
    if (isCompare) {
        isCompareChecked = "checked"
    }
    var isEditingChecked = ""
    if (isEditing) {
        isEditingChecked = "checked"
    } 
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }
    
    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlImageMandatory(imageMandatory)
    
    var styles =  htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;

    var htmlCustomValidator = ""
    if (validator == "customValidator") {
        htmlCustomValidator = '<input type="text"name="customValidatorTextField"id="customValidatorTextField"disabled value="'+customValidator+'">'
    }
    var htmlTextErrorCompare = ""
    if (isCompare) {
        htmlTextErrorCompare = '<p>Text Error</p><input type="text"name="textErrorCompareFix"id="textErrorCompareFix"disabled value="'+textErrorCompare+'">'
    }

    var html  = '<div class="cellConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"disabled value="'+keyTextField+'"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"disabled value="'+title+'"></div><div class="keyboardResult">Keyboard:'+keyboard+'</div></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text"name="palceHolderTextField"id="palceHolderTextField"disabled value="'+placeHolder+'"></div><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+' disabled readonly><p>Es obligatorio?</p></div><div class="validatorResult">Validator:'+validator+htmlCustomValidator+'</div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled value="'+error+'"><p>minLength:</p><input class="inputWidth"type="text"name="minLength"id="minLength" disabled readonly value="'+minLength+'"><p>maxLength:</p><input class="inputWidth"type="text"name="maxLength"id="maxLength" disabled readonly value="'+maxLength+'"></div><div class="compareTextField"><input type="checkbox"name="compare"value="compare"id="compare"'+isCompareChecked+' disabled readonly><p>Active compare?</p><p>Keys Compare:</p><input type="text"name="compareKeysField"id="compareKeysField"disabled value="'+compareKeysField+'">'+htmlTextErrorCompare+'</div><div class="containerPassEdit"><div class="passwordTextField"><input type="checkbox"name="passwordTextField"value="passwordTextField"id="passwordTextField"'+isPasswordChecked+' disabled readonly><p>Es password?</p></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField"'+isEditingChecked+' disabled readonly><p>Es editable?</p></div><div class="isHiddenTextField"><input type="checkbox"name="isHiddenTextField"value="isHiddenTextField"id="isHiddenTextField"'+isHiddenChecked+' disabled readonly><p>Es visible?</p></div></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonRemoveText"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';
    
   // $("#containerListItemsCreated").load('borrar.html');
    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveField(keyTextField,type,title,placeHolder,textError,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,customValidator, isPassword, isCompare, compareKeysField, textErrorCompare,isEditing, isHidden) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":keyTextField,
        "type":type,
        "label":title
    }

    if (mandatory) {
        itemSave["mandatory"] = mandatory
    }
    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }
    if (textError.length > 0) {
        itemSave["textError"] = textError
    }    
    if (placeHolder.length > 0) {
        itemSave["placeHolder"] = placeHolder
    }                
    if (minLength.length > 0) {
        itemSave["minLength"] = parseInt(minLength)
    }                
    if (maxLength.length > 0) {
        itemSave["maxLength"] = parseInt(maxLength)
    }                
    if (keyboard != "None") {
        itemSave["keyboard"] = keyboard
    }
    if (isPassword) {
        itemSave["isPassword"] = isPassword
    }
    if (validator != "None") {
        itemSave["validator"] = validator
        if (validator == "customValidator") {
            itemSave["customValidator"] = customValidator
        }
    }
    if (isCompare) {
        itemSave["compare"] = isCompare
        itemSave["itemsCompare"] = compareKeysField.split(","); 
        console.log(textErrorCompare);
        itemSave["textErrorCompare"] = textErrorCompare;
    }
    
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","",align,font,imageMandatory,"","");

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    /*
    for (var i=0; i<listFieldsResult.length; i++) {
        $.each(listFieldsResult[i], function(index, val) {
            console.log("key:"+index+" - value:"+val);
        });
    }*/
    
    indexField++;
}
