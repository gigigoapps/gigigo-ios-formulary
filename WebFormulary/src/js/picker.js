
//======================================
//               PICKER               //
//======================================
window.idPickerField = 1
window.addContainerPicker = function addContainerPicker() {
    $("#pickerFieldsInsert").append('<div class="containerPickerField" id="containerPickerField'+idPickerField+'"><input id="inputKeyPickerField'+idPickerField+'" type="text" name="element" placeholder="Clave Picker"><input id="inputValuePickerField'+idPickerField+'" type="text" name="element" placeholder="Valor picker"><p onclick="removeContainerPicker('+idPickerField+')">-</p></div>');
    idPickerField++;
}

window.removeContainerPicker = function removeContainerPicker(idContainerPicker) {
    $("#containerPickerField"+idContainerPicker).slideUp(function(){
           $("#containerPickerField"+idContainerPicker).remove()
    });
}

//-- PICKER YA CREADO SOLO MOSTRAR --
window.createPickerField = function createPickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, styleM) {

    var isEditingCheck = ""
    if (isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
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


    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages + htmlColorPicker;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages + htmlColorPicker;
    } else if (htmlImages.length > 0 || htmlColorPicker.length > 0) {
        styles = htmlImages + htmlColorPicker;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


    //-- Create options fields --
    var htmlPickerItems = '';
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()

        if (idKey != undefined && idValue != undefined) {
            var html = '';
            html += '<div class="containerPickerField">';
            html += '   <input type="text" name="element" value="'+idKey+'" disabled readonly>';
            html += '   <input type="text" name="element" value="'+idValue+'" disabled readonly>';
            html += '</div>';
            htmlPickerItems = htmlPickerItems + html;
        }
    }

    var html = require('html-loader!../aux/auxPickerCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace('{{htmlPickerItems}}',htmlPickerItems) 
            .replace('{{isEditingChecked}}',isEditingCheck)
            .replace('{{acceptButtonTextField}}',acceptButtonTextField)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.savePickerField = function savePickerField(keyTextField,type,title,acceptButtonTextField,isEditing, isHidden, validator, styleM) {
    
    //-- MANDATORY FIELDS --
    var listOptions = [];
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()
        var options = {
            "key": idKey,
            "value":idValue
        }
        if (idKey != undefined && idValue != undefined) {
            listOptions.push(options)
        }        
    }

    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title,
        "listOptions":listOptions
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

    var styles = getStylesJson(styleM);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    indexField++;
}
