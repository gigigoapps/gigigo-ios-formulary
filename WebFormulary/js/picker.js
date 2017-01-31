
//======================================
//               PICKER               //
//======================================
var idPickerField = 1
function addContainerPicker() {
    $("#pickerFieldsInsert").append('<div class="containerPickerField" id="containerPickerField'+idPickerField+'"><input id="inputKeyPickerField'+idPickerField+'" type="text" name="element" placeholder="Clave Picker"><input id="inputValuePickerField'+idPickerField+'" type="text" name="element" placeholder="Valor picker"><p onclick="removeContainerPicker('+idPickerField+')">-</p></div>');
    idPickerField++;
}

function removeContainerPicker(idContainerPicker) {
    $("#containerPickerField"+idContainerPicker).slideUp(function(){
           $("#containerPickerField"+idContainerPicker).remove()
    });
}

//-- PICKER YA CREADO SOLO MOSTRAR --
function createPickerField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing) {
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }
    if (isEditing) {
        isEditingCheck = "checked"
    }

    //-- Recover Styles --
    var htmlColorBasic = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlColorPicker = getStyleColorPicker (aceptColor,containerAceptColor,backgroundPickerColor);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlImageMandatory(imageMandatory)

    var styles = htmlFontSize + htmlColorBasic + htmlAlingFont + htmlImages + htmlColorPicker;

    //-- Create options fields --
    var htmlPickerItems = '';
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()

        if (idKey != undefined && idValue != undefined) {
                htmlPickerItems = htmlPickerItems + '<div class="containerPickerField"><input type="text" name="element" value="'+idKey+'" disabled readonly><input type="text" name="element" value="'+idValue+'" disabled readonly></div>';
        }
    }

    var html = '<div class="cellConstructor pickerConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"value="'+title+'"disabled readonly></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled readonly value="'+error+'"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory" '+valueCheck+' disabled readonly><p>Es obligatorio?</p></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField" '+isEditingCheck+' disabled readonly><p>Es editable?</p></div></div><div id="valuesOptionsSelector"><div id="pickerFieldsInsert"><p>Valores creados:</p>'+htmlPickerItems+'</div></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonAddPicker"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function savePickerField(keyTextField,type,title,textError,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing) {
    
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

    if (mandatory) {
        itemSave["mandatory"] = mandatory
    }
    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (textError.length > 0) {
        itemSave["textError"] = textError
    }               
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    } 

    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,align,font,imageMandatory,"","");
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    indexField++;
}
