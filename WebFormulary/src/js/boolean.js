//======================================
//        BOOLEAN   (YA CREADO)       //
//======================================
            
window.createBooleanField = function createBooleanField(keyTextField,title, isEditing, isHidden, validator, styleM) {

    var isEditingValueCheck = ""
    if (isEditing) {
        isEditingValueCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlAllImage(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);

    var styles;
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages;
    } else if (htmlImages.length > 0) {
        styles = htmlImages;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }

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

window.saveBooleanField = function saveBooleanField(keyTextField,type,title, isEditing, isHidden, validator, styleM) {
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
    var styles = getStylesJson(styleM);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}

