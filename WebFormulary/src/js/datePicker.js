
//======================================
//            DATE   PICKER           //
//======================================


//-- DATE PICKER YA CREADO SOLO MOSTRAR --
window.createDatePickerField = function createDatePickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styleM) {

    var isEditingCheck = ""
    if (isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    var htmlRules = '';
    if (isActiveRule) {
        htmlRules = generateHtmlRulesResult(rules)
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlColorBasic = getStyleColor(styleM);
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


    var html = require('html-loader!../aux/auxDatePickerCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingCheck}}',isEditingCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace('{{acceptButtonTextField}}',acceptButtonTextField)
            .replace('{{htmlRules}}',htmlRules)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveDatePickerField = function saveDatePickerField(keyTextField,type,title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styleM) {
    
    //-- MANDATORY FIELDS --

    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title
    }
    
    //-- OPTIONAL FIELDS --

    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }              
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    }                
 
    var itemsValidators = generateDicValidator(validator);
    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }

    if (isActiveRule) {
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
