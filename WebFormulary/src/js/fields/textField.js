
//======================================
//               TEXT (YA CREADO)     //  
//======================================
            

window.createField = function createField(values, validator, style) {

    var isPasswordChecked = ""
    if (values.isPassword) {
        isPasswordChecked = "checked"
    }
    var isEditingChecked = ""
    if (values.isEditing) {
        isEditingChecked = "checked"
    } 
    var isHiddenChecked = ""
    if (values.isHidden) {
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


    var html = require('html-loader!../../aux/auxTextCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',values.key)
            .replace('{{title}}',values.label)
            .replace('{{placeHolder}}',values.placeHolder)
            .replace('{{keyboard}}',values.keyboard)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isPasswordChecked}}',isPasswordChecked)
            .replace('{{isEditingChecked}}',isEditingChecked)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveField = function saveField(values, validator, style) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":values.key,
        "type":values.type,
        "label":values.label
    }


    if (values.isEditing) {
        itemSave["isEditing"] = false
    }
    if (values.isHidden) {
        itemSave["isHidden"] = values.isHidden
    }
    if (values.placeHolder.length > 0) {
        itemSave["placeHolder"] = values.placeHolder
    } 
    if (values.keyboard != "None") {
        itemSave["keyboard"] = values.keyboard
    }
    if (values.isPassword) {
        itemSave["isPassword"] = values.isPassword
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
