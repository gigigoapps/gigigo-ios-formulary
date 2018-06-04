
//======================================
//               TEXT (YA CREADO)     //  
//======================================
            

window.createField = function createField(keyTextField,title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden) {

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

    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlAlingFont = getAlignFont(align,font)
    var htmlImages = recoverHtmlImageMandatory(imageMandatory)    
    var styles =  htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;


    /* ----------------------- CREATE VALIDATOR HTML ----------------------- */
    var html = "";
        html += '<h4>Validadores:</h4>';

    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        html += '<div class="containerValidator" id="containerValidator'+i+'">';  

        if (valElement.type != "None") {

            html += '<div class="errorTextField">';
            html += '      <p class="textErrorP typeValidator">Tipo validador: </p>';
            html += '      <input class="textErrorCreated" type="text" name="typeCompareInput" id="typeCompareInput" disabled value="'+valElement.type+'">';
            html += '      <p class="textErrorP">Texto error:</p>';
            html += '      <input class="textErrorCreated" type="text" name="errorTextField" id="errorTextField" disabled value="'+valElement.text+'">';

            if (valElement.type == "lengthText") {
                html += '<p>minLength:</p>';
                html += '<input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+valElement.minLength+'">';
                html += '<p>maxLength:</p>';
                html += '<input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+valElement.maxLength+'">';
                  
            }

            if (valElement.type == "customValidator") {
                html += '<p>Custom regex:</p>';
                html += '<input type="text" class="customValidatorCreated" name="customValidatorTextField" id="customValidatorTextField" disabled value="'+valElement.regex+'">'
            }

            if (valElement.type == "compare") {
                html += '<p>Keys Compare:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="'+valElement.compareKey1+','+valElement.compareKey2+'">';
            }
            if (valElement.type == "mandatory") {
                html += '<p>Obligatorio:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="true">';
            }

            html += '</div>';
        }

        html += '</div>';
    }


    var html = require('html-loader!../aux/auxTextCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{placeHolder}}',placeHolder)
            .replace('{{keyboard}}',keyboard)
            .replace('{{htmlValidator}}',html)
            .replace('{{isPasswordChecked}}',isPasswordChecked)
            .replace('{{isEditingChecked}}',isEditingChecked)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveField = function saveField(keyTextField,type,title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden) {
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

    var itemsValidators = []
    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        var itemValidate = {}
        itemValidate["type"] = valElement.type;
        itemValidate["textError"] = valElement.text;

        if (valElement.type == "compare") {
            itemValidate["itemsCompare"] = [valElement.compareKey1, valElement.compareKey2];
        }
        if (valElement.type == "age") {
            itemValidate["minAge"] = valElement.minAge;
        }
        if (valElement.type == "lengthText") {
            itemValidate["minLength"] = valElement.minLength;
            itemValidate["maxLength"] = valElement.maxLength;
        }

        itemsValidators.push(itemValidate);
    }

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","",align,font,imageMandatory,"","");

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    
    indexField++;
}
