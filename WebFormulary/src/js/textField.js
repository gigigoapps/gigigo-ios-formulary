
//======================================
//               TEXT (YA CREADO)     //  
//======================================
            

window.createField = function createField(keyTextField,title,placeHolder,keyboard,validator, isPassword, isEditing, isHidden, style) {

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

    //-- Recover HTML --
    var htmlTypeCell = getTypeCell(style);
    var htmlBackgroundColor = getStyleColor(style);
    var htmlFontSize = getStyleSize (style);
    var htmlAlingFont = getAlignFont(style)
    var htmlImages = recoverHtmlImageMandatory(style)    
    var htmlCustom = getStyleCustom(style);
    var htmlValidator = generateHtmlValidator(validator);
    

    var styles;
    if (style.typeCell == "default" || style.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;
    } else if (style.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages;
    } else if (htmlImages.length > 0) {
        styles = htmlImages;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


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

window.saveField = function saveField(keyTextField,type,title,placeHolder,keyboard,validator, isPassword, isEditing, isHidden, style) {
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
    var styles = getStylesJson(style);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    
    indexField++;
}
