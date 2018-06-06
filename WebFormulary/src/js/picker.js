
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
window.createPickerField = function createPickerField(keyTextField,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing, isHidden, validator) {

    var isEditingCheck = ""
    if (isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover Styles --
    var htmlColorBasic = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlColorPicker = getStyleColorPicker (aceptColor,containerAceptColor,backgroundPickerColor);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlImageMandatory(imageMandatory)
    var htmlValidator = generateHtmlValidator(validator);

    var styles = htmlFontSize + htmlColorBasic + htmlAlingFont + htmlImages + htmlColorPicker;

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

window.savePickerField = function savePickerField(keyTextField,type,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing, isHidden, validator) {
    
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

    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,align,font,imageMandatory,"","");
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    indexField++;
}
