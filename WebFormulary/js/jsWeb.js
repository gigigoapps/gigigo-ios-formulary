

var fieldSelected = ""
var listFieldsResult = []
var indexField = 0


function removeField(idRemove){
    var auxListFieldsResult = [];
    
    for (var i=0; i<listFieldsResult.length; i++) {
        
        var find = false;
        
        $.each(listFieldsResult[i], function(index, val) {
            if (index == "tag" && val == idRemove){
                find = true;
            }
        });
        
        if (!find) {
            auxListFieldsResult.push(listFieldsResult[i])
        }
    }
    
    listFieldsResult = auxListFieldsResult;
    
    $("#fieldNumber"+idRemove).slideUp();
}
            
function addField() {
    if (fieldSelected == "Text") {
        validateTextField();
    }
    else if (fieldSelected == "Picker") {
        validatePickerField();
    }
    else if (fieldSelected == "DatePicker") {
        validateDatePickerField();
    }
    else if (fieldSelected == "Boolean") {
        validateBooleanField();
    }
    else if (fieldSelected == "Index") {
        validateIndexField();
    }
}

function resetTypeField() {
    clearTypeField()
    $(".selectTypeField").val("None");
}

function clearTypeField(){
    $("#createField").slideUp(function(){
           $("#containterElementField").empty()
    });
}

//======================================
//          ADD NEW FILED             //
//======================================

function createElementField(typeField) {
    $("#containterElementField").empty()
    fieldSelected = typeField;
    var html = '';
    var htmlFont = getFontPositionZone()
    var htmlImage = getHtmlImageMandatory();

    if (typeField == "Text") {
        html = '<div class="cellConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div><select id="selectTypeKeyboard"><option value="None">Elegir tipo de teclado</option><option value="FormKeyboardTypeText">Texto</option><option value="FormKeyboardTypeEmail">Email</option><option value="FormKeyboardTypeNumbers">Nuerico</option><option value="FormKeyboardTypeNumberPad">NuericoPad</option></select></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text"name="palceHolderTextField"id="palceHolderTextField"></div><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div><select id="selectTypeValidator"><option value="None">Tipo validador</option><option value="text">Texto</option><option value="email">Email</option><option value="lengthText">Long texto</option><option value="numeric">Numérico</option><option value="postalCode">Código postal</option><option value="phone">Teléfono</option><option value="dniNie">DNI/NIE</option><option value="customValidator">Custom</option></select><input id="custonValidator"placeHolder="Regex Custom"></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"><p>minLength:</p><input class="inputWidth"type="text"name="minLength"id="minLength"><p>maxLength:</p><input class="inputWidth"type="text"name="maxLength"id="maxLength"></div><div class="compareTextField"><input type="checkbox"name="compare"value="compare"id="compare"><p>Active compare?</p><div id="containerCompare"><p>Keys Compare:</p><input type="text"name="compareKeysField"id="compareKeysField"placeholder="key1,key2"><div id="compareTextError"><p>Texto error:</p><input id="compareTextErrorInput"type="text"name="element"></div></div></div><div class="containerPassEdit"><div class="passwordTextField"><input type="checkbox"name="passwordTextField"value="passwordTextField"id="passwordTextField"><p>Es password?</p></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField"><p>Es editable?</p></div><div class="isHiddenTextField"><input type="checkbox"name="isHiddenTextField"value="isHiddenTextField"id="isHiddenTextField"><p>Es visible?</p></div></div><div class="styleField"><h4>Estilos de celda:</h4><div class="colorZone">'+colorBasicZone+'</div><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div>'+htmlFont+''+htmlImage+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd"onclick="addField()"><p>+</p></div></div></div>';

    }
    else if (typeField == "Picker") {
        idPickerField = 1; // Reset Picker
        html = '<div class="cellConstructor pickerConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div></div><div class="containerAcceptEditing"><div class="acceptButtonTextField"><p>Titulo aceptar picker:</p><input type="text"name="acceptButtonTextField"id="acceptButtonTextField"></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField"><p>Es editable?</p></div><div class="isHiddenTextField"><input type="checkbox"name="isHiddenTextField"value="isHiddenTextField"id="isHiddenTextField"><p>Es visible?</p></div></div><div id="valuesOptionsSelector"><div id="containerPickerFieldAdd"><p id="addFieldPickerText">Añadir campos del picker:</p><div id="sumatoryPicker"><p onclick="addContainerPicker()">+</p></div></div><div id="pickerFieldsInsert"><div class="containerPickerField"id="containerPickerField'+idPickerField+'"><input id="inputKeyPickerField0"type="text"name="element"placeholder="Clave Picker"value="KeyNoSelected"disabled readonly><input id="inputValuePickerField0"type="text"name="element"placeholder="Valor picker por defecto"></div></div></div><div class="styleField"><h4>Estilos de celda:</h4><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div>'+htmlFont+''+htmlImage+'<div class="colorZone pickerColorZone">'+colorBasicZone+'<p class="nextColor">Estilos picker selector</p><p class="colorOKPicker">Color texto OK:</p><input type="color"value="#ffffff"id="aceptColor"class="cellColorCreate"><input id="aceptColorHex"class="inputColorHex"placeholder="#ffffff"><p class="colorTittleP">Color contenedor OK:</p><input type="color"value="#ffffff"id="containerAceptColor"class="cellColorCreate"><input id="containerAceptColorHex"class="inputColorHex"placeholder="#ffffff"><p class="colorTittleP">Color fondo:</p><input type="color"value="#ffffff"id="backgroundPickerColor"class="cellColorCreate"><input id="backgroundPickerColorHex"class="inputColorHex"placeholder="#ffffff"></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd buttonAddPicker"onclick="addField()"><p>+</p></div></div></div>';
    }
    else if (typeField == "DatePicker") {
        html = '<div class="cellConstructor pickerConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div></div><div class="acceptButtonTextField"><p>Titulo aceptar picker:</p><input type="text"name="acceptButtonTextField"id="acceptButtonTextField"></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField"><p>Es editable?</p></div><div class="minAgeContainer"><p>Edad minima:</p><input type="text"name="minAgeContainer"id="minAgeContainer"></div><div class="isHiddenTextField"><input type="checkbox"name="isHiddenTextField"value="isHiddenTextField"id="isHiddenTextField"><p>Es visible?</p></div><div class="styleField"><h4>Estilos de celda:</h4><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div>'+htmlFont+''+htmlImage+'<div class="colorZone pickerColorZone"><p>Color de la celda:</p>'+colorBasicZone+'<p class="nextColor">Estilos picker selector</p><p class="colorOKPicker">Color texto OK:</p><input type="color"value="#ffffff"id="aceptColor"class="cellColorCreate"><input id="aceptColorHex"class="inputColorHex"placeholder="#ffffff"><p class="colorTittleP">Color contenedor OK:</p><input type="color"value="#ffffff"id="containerAceptColor"class="cellColorCreate"><input id="containerAceptColorHex"class="inputColorHex"placeholder="#ffffff"><p class="colorTittleP">Color fondo:</p><input type="color"value="#ffffff"id="backgroundPickerColor"class="cellColorCreate"><input id="backgroundPickerColorHex"class="inputColorHex"placeholder="#ffffff"></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd buttonAddPicker"onclick="addField()"><p>+</p></div></div></div>';
    }
    else if (typeField == "Boolean") {
        htmlImage = getHtmlAllImage();
        html = '<div class="cellConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div class="containerTextFieldCenter"><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div><div class="isEditingTextField"><input type="checkbox"name="isEditingTextField"value="isEditingTextField"id="isEditingTextField"><p>Es editable?</p></div><div class="isHiddenTextField"><input type="checkbox"name="isHiddenTextField"value="isHiddenTextField"id="isHiddenTextField"><p>Es visible?</p></div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="styleField"><h4>Estilos de celda:</h4><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div>'+htmlFont+htmlImage+'<div class="colorZone">'+colorBasicZone+'</div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd"onclick="addField()"><p>+</p></div></div></div>';
    }
    else if (typeField == "Index") {
        html = '<div class="cellConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div class="styleField"><h4>Estilos de celda:</h4><div class="colorZone">'+colorBasicZone+'</div><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"></div>'+htmlFont+''+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd"onclick="addField()"><p>+</p></div></div></div>';
    }

    $("#containterElementField").append(html)

    launchEventColors();
    createEventFont();
    createEventTextCompare();
    showContainerCustomValidate();
}

function createEventFont() {
     $("#selectTypeFont").change(function() {
         if (this.value == "custom") {
            $("#custonFont").css("display","block");
         }
         else {
            $("#custonFont").css("display","none");
         }
    });
}

function createEventTextCompare() {
     $("#compare").change(function() {
         if (this.checked == true) {
            $("#containerCompare").css("display","block");
            $("#compareTextError").css("display","block");
         }
         else {
            $("#containerCompare").css("display","none");
            $("#compareTextError").css("display","none");
         }
    });
}

function showContainerCustomValidate() {
     $("#selectTypeValidator").change(function() {
         if (this.value == "customValidator") {
            $("#custonValidator").css("display","block");
         }
         else {
            $("#custonValidator").css("display","none");
         }
    });
}

function syntaxHighlight(json) {
if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
}
json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                        cls = 'key';
                        } else {
                        cls = 'string';
                        }
                        } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                        } else if (/null/.test(match)) {
                        cls = 'null';
                        }
                        return '<span class="' + cls + '">' + match + '</span>';
                        });
 }
                    
                    
                    
  function copiarAlPortapapeles() {
        var aux = document.createElement("input");
                    
        var recoverJSON = JSON.stringify(listFieldsResult, undefined, 4);
        recoverJSON = '{ \n "fields":'+recoverJSON+' \n}';
                    
        aux.setAttribute("value", recoverJSON);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }




//======================================
//          GENERAR JSON              //
//======================================

                    
function output(inp) {
     document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}
                 

$(".selectTypeField").change(function() {
     createElementField(this.value)
});             
                    

function copyList(listFields) {
    var copyListFields = JSON.parse(JSON.stringify(listFields));

    for (var i = 0; i < copyListFields.length; i++) {
        var field = copyListFields[i];
        delete field["tag"];
        copyListFields[i] = field;
    }

    return copyListFields;
}

$("#buttonGenerateJson").click(function() {
    $("#containerJsonItemsCreated").empty()
    var copyListField = copyList(listFieldsResult);
    var recoverJSON = JSON.stringify(copyListField, undefined, 4);
    recoverJSON = '{ \n "fields":'+recoverJSON+' \n}';
   $("#containerJsonItemsCreated").append("<button class='btn butonCopyPaste' data-clipboard-action='copy' data-clipboard-target='#bar'>Copiar</button><textarea id='bar'>"+recoverJSON+"</textarea><pre>"+syntaxHighlight(recoverJSON)+"</pre>")
});
 
var idColor = ""           
function cellColorOpen(idCellColor) {
	idColor = idCellColor;
    $("#ControlColor").show();
}
                    
$("#closeSaveColor").click(function() {
    $("#ControlColor").hide();
    $("#"+idColor).css("background-color", $("#testPatch").text());
    $("#"+idColor).empty()
    $("#"+idColor).append("<p id='colorId'>"+$("#testPatch").text()+"</p>");
});
                    
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
             console.log("OK");
             console.log(e);
             });

clipboard.on('error', function(e) {
             console.log("OK");
             console.log(e);
             });



//======================================
//               GENERIC              //
//======================================

function getStyleColor(cellColor,titleColor,errorColor) {
    var html = '<div class="colorZone withOutStyle"><p>Sin estilo de color</p><div id="cellColor"></div></div>';
    if (cellColor != "" || titleColor != "" || errorColor != "") {
        html = '<div class="colorZone"><p>Color de la celda:</p><div id="cellColor" class="cellColor" style="background-color:'+cellColor+'"><p id="colorId">'+cellColor+'</p></div><p class="colorTittleP">Color titulo:</p><div id="titleColor" class="cellColor" style="background-color:'+titleColor+'"><p id="colorId">'+titleColor+'</p></div><p class="colorTittleP">Color error:</p><div id="errorColor" class="cellColor" style="background-color:'+errorColor+'"><p id="colorId">'+errorColor+'</p></div></div>';
    }

    return html;
}

function getStyleColorPicker(aceptColor,containerAceptColor,backgroundPickerColor) {
    var html = '<div class="colorZone withOutStyle"><p>Sin estilo de color del picker</p><div id="cellColor"></div></div>';
    if (aceptColor != "" ||containerAceptColor != "" || backgroundPickerColor != "") {
        html = '<div class="colorZone"><p class="nextColor">Estilos picker selector</p><p class="colorOKPicker">Color texto OK:</p><div id="aceptColor"class="cellColor" style="background-color:'+aceptColor+'"><p id="colorId">'+aceptColor+'</p></div><p class="colorTittleP">Color contenedor OK:</p><div id="containerAceptColor"class="cellColor"  style="background-color:'+containerAceptColor+'"><p id="colorId">'+containerAceptColor+'</p></div><p class="colorTittleP">Color fondo:</p><div id="backgroundPickerColor" class="cellColor"  style="background-color:'+backgroundPickerColor+'"><p id="colorId">'+backgroundPickerColor+'</p></div></div>';
    }

    return html;
}

function getStyleSize (sizeTitle, sizeError) {
    var htmlFontSize =  '<div class="colorZone withOutStyle"><p>Sin estilo de fuente de tamaño</p></div>';
    if (sizeTitle != "" || sizeError != "") {
        htmlFontSize = '<div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element" disabled readonly value="'+sizeTitle+'"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element" disabled readonly value="'+sizeError+'"></div>';
    }

    return htmlFontSize;
}

function getAlignFont(align,font) {
    var htmlAlignFont =  '<div class="colorZone withOutStyle"><p>Sin estilo de alineación o tipo de fuente</p></div>';
    if (align != "" || font != "") {
        htmlAlignFont = '<div class="sizeZone alignZone"><p>Alineación:</p><input id="alignTitle" type="text"name="element" disabled readonly value="'+align+'"><p>Fuente:</p><input id="fontField"type="text"name="element" disabled readonly value="'+font+'"></div>';
    }

    return htmlAlignFont;
}

function getStylesJson(cellColor,titleColor,errorColor,sizeTitle, sizeError,aceptColor,containerAceptColor,backgroundPickerColor,align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff) {
    var style = {}
    var haveStyle = false;
    
    //-- STYLES --
    if (cellColor.length > 0) {
        style["backgroundColorField"] = cellColor
        haveStyle = true;
    }
    if (titleColor.length > 0) {
        style["titleColor"] = titleColor
        haveStyle = true;
    }
    if (errorColor.length > 0) {
        style["errorColor"] = errorColor
        haveStyle = true;
    }
    if (sizeTitle.length > 0) {
        style["sizeTitle"] = parseInt(sizeTitle)
        haveStyle = true;
    }
    if (sizeError.length > 0) {
        style["sizeError"] = parseInt(sizeError)
        haveStyle = true;
    }
    if (aceptColor.length > 0) {
        style["acceptColorPicker"] = aceptColor
        haveStyle = true;
    }
    if (containerAceptColor.length > 0) {
        style["containerAcceptColorPicker"] = containerAceptColor
        haveStyle = true;
    }
    if (backgroundPickerColor.length > 0) {
        style["backgroundPickerColorPicker"] = backgroundPickerColor
        haveStyle = true;
    }
    if (align.length > 0) {
        style["align"] = align
        haveStyle = true;
    }
    if (font.length > 0) {
        style["font"] = font
        haveStyle = true;
    }
    if (imageMandatory.length > 0) {
        style["mandatoryIcon"] = imageMandatory
        haveStyle = true;
    }
    if (imageCheckBoxOn.length > 0 && imageCheckBoxOff.length > 0) {
        var checkBox = {}
        checkBox["checkBoxOn"] = imageCheckBoxOn
        checkBox["checkBoxOff"] = imageCheckBoxOff
        style["checkBox"] = checkBox
        haveStyle = true;
    }
    if (haveStyle) {
        return style;
    }
    else {
        return null;
    }
}

