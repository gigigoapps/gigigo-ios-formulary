//======================================
//        BOOLEAN   (YA CREADO)       //
//======================================
            
window.createBooleanField = function createBooleanField(values, validator, styleM) {

    var isEditingValueCheck = ""
    if (values.isEditing) {
        isEditingValueCheck = "checked"
    }
    var isHiddenChecked = ""
    if (values.isHidden) {
        isHiddenChecked = "checked"
    }
    var isExpandedChecked = ""
    if (values.isExpandable) {
        isExpandedChecked = "checked"
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlAllImage(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);
    var htmlExpandable = getExpandableResult(values);
    var htmlExpandableStyle = getExpandableStyleResult(values, styleM);

    var styles;
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages + htmlExpandableStyle;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages;
    } else if (htmlImages.length > 0) {
        styles = htmlImages + htmlExpandableStyle;
    } else if (htmlExpandableStyle.length > 0) {
        styles = htmlExpandableStyle;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }

    var html = require('html-loader!../../aux/auxBooleanCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',values.key)
            .replace('{{title}}',values.label)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingValueCheck}}',isEditingValueCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)
            .replace('{{isExpandableChecked}}',isExpandedChecked)
            .replace('{{htmlExpandable}}',htmlExpandable)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveBooleanField = function saveBooleanField(values, validator, styleM) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "key":values.key,
        "tag":indexField,
        "type":values.type,
        "label":values.label
    }

    if (values.isEditing) {
        itemSave["isEditing"] = false
    }
    if (values.isHidden) {
        itemSave["isHidden"] = values.isHidden
    }
    if (values.isExpandable) {
        itemSave["subtype"] = "expandable"
    }

    var itemsValidators = generateDicValidator(validator);
    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }
    
    var itemsExpandable = generateDicExpandable(values);
    if (itemsExpandable != null) { 
        itemSave["expandableInfo"] = itemsExpandable;
    }

    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(styleM);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}

