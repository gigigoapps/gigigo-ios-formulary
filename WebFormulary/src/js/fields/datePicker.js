
//======================================
//            DATE   PICKER           //
//======================================


//-- DATE PICKER YA CREADO SOLO MOSTRAR --
window.createDatePickerField = function createDatePickerField(values, validator, rules, styleM) {

    var isEditingCheck = ""
    if (values.isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (values.isHidden) {
        isHiddenChecked = "checked"
    }

    var htmlRules = '';
    if (values.isActiveRule) {
        htmlRules = generateHtmlRulesResult(rules)
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlColorPicker = getStyleColorPicker (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlImageMandatory(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);


    var styles = '';
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages + htmlColorPicker;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages + htmlColorPicker;
    } else if (htmlImages.length > 0 || htmlColorPicker.length > 0) {
        styles = htmlImages + htmlColorPicker;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


    var html = require('html-loader!../../aux/auxDatePickerCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',values.key)
            .replace('{{title}}',values.label)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingCheck}}',isEditingCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace('{{acceptButtonTextField}}',values.acceptButtonTextField)
            .replace('{{htmlRules}}',htmlRules)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveDatePickerField = function saveDatePickerField(values, validator, rules, styleM) {
    
    //-- MANDATORY FIELDS --

    var itemSave = {
        "key":values.key,
        "tag":indexField,
        "type":values.type,
        "label":values.label
    }
    
    //-- OPTIONAL FIELDS --

    if (values.isEditing) {
        itemSave["isEditing"] = false
    }
    if (values.isHidden) {
        itemSave["isHidden"] = values.isHidden
    }              
    if (values.acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = values.acceptButtonTextField
    }                
 
    var itemsValidators = generateDicValidator(validator);
    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }

    if (values.isActiveRule) {
        itemSave["rules"] = generateDicRules(rules)
    }    

    var styles = getStylesJson(styleM);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
        
    indexField++;
}
