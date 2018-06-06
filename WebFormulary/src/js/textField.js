
//======================================
//               TEXT (YA CREADO)     //  
//======================================
            

window.createField = function createField(keyTextField,title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden) {

    var isPasswordChecked = ""
    if (isPassword) {
        isPasswordChecked = "checked"
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
    var htmlValidator = generateHtmlValidator(validator);


    var html = require('html-loader!../aux/auxTextCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{placeHolder}}',placeHolder)
            .replace('{{keyboard}}',keyboard)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isPasswordChecked}}',isPasswordChecked)
            .replace('{{isEditingChecked}}',isEditingChecked)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveField = function saveField(keyTextField,type,title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":keyTextField,
        "type":type,
        "label":title
    }


    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }
    if (placeHolder.length > 0) {
        itemSave["placeHolder"] = placeHolder
    } 
    if (keyboard != "None") {
        itemSave["keyboard"] = keyboard
    }
    if (isPassword) {
        itemSave["isPassword"] = isPassword
    }

    var itemsValidators = generateDicValidator(validator);

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","",align,font,imageMandatory,"","");

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    
    indexField++;
}
