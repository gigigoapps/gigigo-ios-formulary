//======================================
//        BOOLEAN   (YA CREADO)       //
//======================================
            
window.createBooleanField = function createBooleanField(keyTextField,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff, isEditing, isHidden, validator) {

    var isEditingValueCheck = ""
    if (isEditing) {
        isEditingValueCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlAllImage(imageMandatory,imageCheckBoxOn,imageCheckBoxOff)
    var htmlValidator = generateHtmlValidator(validator);

    var styles =  htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;

    var html = require('html-loader!../aux/auxBooleanCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingValueCheck}}',isEditingValueCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveBooleanField = function saveBooleanField(keyTextField,type,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff, isEditing, isHidden, validator) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title
    }

    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }

    var itemsValidators = generateDicValidator(validator);

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","",align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}

