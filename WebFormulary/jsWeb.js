

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

                if (typeField == "Text") {
                    html = '<div class="cellConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div><select id="selectTypeKeyboard"><option value="None">Elegir tipo de teclado</option><option value="FormKeyboardTypeText">Texto</option><option value="FormKeyboardTypeEmail">Email</option><option value="FormKeyboardTypeNumbers">Nuerico</option><option value="FormKeyboardTypeNumberPad">NuericoPad</option></select></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text"name="palceHolderTextField"id="palceHolderTextField"></div><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div><select id="selectTypeValidator"><option value="None">Tipo validador</option><option value="text">Texto</option><option value="email">Email</option><option value="lengthText">Long texto</option><option value="numeric">Numérico</option><option value="postalCode">Código postal</option><option value="phone">Teléfono</option><option value="dniNie">DNI/NIE</option></select></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"><p>minLength:</p><input class="inputWidth"type="text"name="minLength"id="minLength"><p>maxLength:</p><input class="inputWidth"type="text"name="maxLength"id="maxLength"></div><div class="styleField"><h4>Estilos de celda:</h4><div class="colorZone"><p>Color de la celda:</p><div id="cellColor"class="cellColor"onclick="cellColorOpen(\'cellColor\')"></div><p class="colorTittleP">Color titulo:</p><div id="titleColor"class="cellColor"onclick="cellColorOpen(\'titleColor\')"></div><p class="colorTittleP">Color Error:</p><div id="errorColor"class="cellColor"onclick="cellColorOpen(\'errorColor\')"></div></div><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd"onclick="addField()"><p>+</p></div></div></div>';
                }
                else if (typeField == "Picker") {
                    idPickerField = 1; // Reset Picker
                    html = '<div class="cellConstructor pickerConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div></div><div class="acceptButtonTextField"><p>Titulo aceptar picker:</p><input type="text"name="acceptButtonTextField"id="acceptButtonTextField"></div><div id="valuesOptionsSelector"><div id="containerPickerFieldAdd"><p id="addFieldPickerText">Añadir campos del picker:</p><div id="sumatoryPicker"><p onclick="addContainerPicker()">+</p></div></div><div id="pickerFieldsInsert"><div class="containerPickerField"id="containerPickerField'+idPickerField+'"><input id="inputKeyPickerField0"type="text"name="element"placeholder="Clave Picker"value="KeyNoSelected"disabled readonly><input id="inputValuePickerField0"type="text"name="element"placeholder="Valor picker por defecto"></div></div></div><div class="styleField"><h4>Estilos de celda:</h4><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div><div class="colorZone pickerColorZone"><p>Color de la celda:</p><div id="cellColor"class="cellColor"onclick="cellColorOpen(\'cellColor\')"></div><p class="colorTittleP">Color titulo:</p><div id="titleColor"class="cellColor"onclick="cellColorOpen(\'titleColor\')"></div><p class="colorTittleP">Color Error:</p><div id="errorColor"class="cellColor"onclick="cellColorOpen(\'errorColor\')"></div><p class="nextColor">Estilos picker selector</p><p class="colorOKPicker">Color texto OK:</p><div id="aceptColor"class="cellColor"onclick="cellColorOpen(\'aceptColor\')"></div><p class="colorTittleP">Color contenedor OK:</p><div id="containerAceptColor"class="cellColor"onclick="cellColorOpen(\'containerAceptColor\')"></div><p class="colorTittleP">Color fondo:</p><div id="backgroundPickerColor"class="cellColor"onclick="cellColorOpen(\'backgroundPickerColor\')"></div></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd buttonAddPicker"onclick="addField()"><p>+</p></div></div></div>';
                }
                else if (typeField == "DatePicker") {
                    html = '<div class="cellConstructor pickerConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div></div><div class="acceptButtonTextField"><p>Titulo aceptar picker:</p><input type="text"name="acceptButtonTextField"id="acceptButtonTextField"></div><div class="minAgeContainer"><p>Edad minima:</p><input type="text"name="minAgeContainer"id="minAgeContainer"></div><div class="styleField"><h4>Estilos de celda:</h4><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div><div class="colorZone pickerColorZone"><p>Color de la celda:</p><div id="cellColor"class="cellColor"onclick="cellColorOpen(\'cellColor\')"></div><p class="colorTittleP">Color titulo:</p><div id="titleColor"class="cellColor"onclick="cellColorOpen(\'titleColor\')"></div><p class="colorTittleP">Color Error:</p><div id="errorColor"class="cellColor"onclick="cellColorOpen(\'errorColor\')"></div><p class="nextColor">Estilos picker selector</p><p class="colorOKPicker">Color texto OK:</p><div id="aceptColor"class="cellColor"onclick="cellColorOpen(\'aceptColor\')"></div><p class="colorTittleP">Color contenedor OK:</p><div id="containerAceptColor"class="cellColor"onclick="cellColorOpen(\'containerAceptColor\')"></div><p class="colorTittleP">Color fondo:</p><div id="backgroundPickerColor"class="cellColor"onclick="cellColorOpen(\'backgroundPickerColor\')"></div></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd buttonAddPicker"onclick="addField()"><p>+</p></div></div></div>';
                }
                else if (typeField == "Boolean") {
                    html = '<div class="cellConstructor"id="createField"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"></div></div><div class="containerTextFieldCenter"><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"><p>Es obligatorio?</p></div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"></div><div class="styleField"><h4>Estilos de celda:</h4><div class="colorZone"><p>Color de la celda:</p><div id="cellColor"class="cellColor"onclick="cellColorOpen(\'cellColor\')"></div><p class="colorTittleP">Color titulo:</p><div id="titleColor"class="cellColor"onclick="cellColorOpen(\'titleColor\')"></div><p class="colorTittleP">Color Error:</p><div id="errorColor"class="cellColor"onclick="cellColorOpen(\'errorColor\')"></div></div><div class="sizeZone"><p>Tamaño titulo:</p><input id="sizeTitle"type="text"name="element"><p>Tamaño texto error:</p><input id="sizeError"type="text"name="element"></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd"onclick="addField()"><p>+</p></div></div></div>';
                }

                $("#containterElementField").append(html)
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
                                
            function output(inp) {
                 document.body.appendChild(document.createElement('pre')).innerHTML = inp;
            }
                                
                                
        
            $(".selectTypeField").change(function() {
                 createElementField(this.value)
            });
            
            $("#buttonGenerateJson").click(function() {
                $("#containerJsonItemsCreated").empty()
                var recoverJSON = JSON.stringify(listFieldsResult, undefined, 4);
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

function getStylesJson(cellColor,titleColor,errorColor,sizeTitle, sizeError,aceptColor,containerAceptColor,backgroundPickerColor) {
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

    if (haveStyle) {
        return style;
    }
    else {
        return null;
    }
}

//======================================
//               TEXT                 //
//======================================
            
function createField(title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError) {    
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var styles =  htmlFontSize + htmlBackgroundColor;

    var html = '<div class="cellConstructor" id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text" name="titleTextField" id="titleTextField" disabled value="'+title+'"></div><div class="keyboardResult">Keyboard:'+keyboard+'</div></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text" name="palceHolderTextField" id="palceHolderTextField" disabled value="'+placeHolder+'"></div><div class="mandatoryTextField"><input type="checkbox" name="mandatory" value="mandatory" id="mandatory" '+valueCheck+' disabled readonly><p>Es obligatorio?</p></div><div class="validatorResult">Validator:'+validator+'</div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text" name="errorTextField"id="errorTextField" disabled value="'+error+'"><p>minLength:</p><input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+minLength+'"><p>maxLength:</p><input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+maxLength+'"></div><div class="styleField"> <h4>Estilos de celda:</h4>'+styles+' </div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonRemoveText" onclick="removeField('+indexField+')"><p>-</p></div></div></div> ';

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveField(type,title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "type":type,
        "label":title,
        "textError":error,
        "mandatory":mandatory,
    }
    
    if (placeHolder.length > 0) {
        itemSave["placeHolder"] = placeHolder
    }                
    if (minLength.length > 0) {
        itemSave["minLength"] = parseInt(minLength)
    }                
    if (maxLength.length > 0) {
        itemSave["maxLength"] = parseInt(maxLength)
    }                
    if (keyboard != "None") {
        itemSave["keyboard"] = keyboard
    }                
    if (validator != "None") {
        itemSave["validator"] = validator
    }
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","");

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    for (var i=0; i<listFieldsResult.length; i++) {
        $.each(listFieldsResult[i], function(index, val) {
            console.log("key:"+index+" - value:"+val);
        });
    }
    
    indexField++;
}

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
function createPickerField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField) {
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlColorBasic = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlColorPicker = getStyleColorPicker (aceptColor,containerAceptColor,backgroundPickerColor);
    var styles = htmlFontSize + htmlColorBasic + htmlColorPicker;

    //-- Create options fields --
    var htmlPickerItems = '';
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()

        if (idKey != undefined && idValue != undefined) {
                htmlPickerItems = htmlPickerItems + '<div class="containerPickerField"><input type="text" name="element" value="'+idKey+'" disabled readonly><input type="text" name="element" value="'+idValue+'" disabled readonly></div>';
        }
    }

    var html = '<div class="cellConstructor pickerConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"value="'+title+'"disabled readonly></div></div><div class="acceptButtonTextField editVersionAccept"><p>Titulo aceptar picker:</p><input type="text"name="acceptButtonTextField"id="acceptButtonTextField"disabled readonly value="'+acceptButtonTextField+'"></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled readonly value="'+error+'"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+'disabled readonly><p>Es obligatorio?</p></div></div><div id="valuesOptionsSelector"><div id="pickerFieldsInsert"><p>Valores creados:</p>'+htmlPickerItems+'</div></div><div class="styleField stylePicker"><h4>Estilos de celda:</h4>'+styles+'</div></div><div class="col-md-2 buttonRemove buttonAddPicker"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';
    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function savePickerField(type,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField) {
    
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
        "tag":indexField,
        "type":type,
        "label":title,
        "textError":error,
        "mandatory":mandatory,
        "listOptions":listOptions
    }
    
    //-- OPTIONAL FIELDS --
              
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    }  

    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    for (var i=0; i<listFieldsResult.length; i++) {
        $.each(listFieldsResult[i], function(index, val) {
            console.log("key:"+index+" - value:"+val);
        });
    }
    
    indexField++;
}

//======================================
//            DATE   PICKER           //
//======================================


//-- DATE PICKER YA CREADO SOLO MOSTRAR --
function createDatePickerField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer) {
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlColorBasic = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlColorPicker = getStyleColorPicker (aceptColor,containerAceptColor,backgroundPickerColor);
    var styles = htmlFontSize + htmlColorBasic + htmlColorPicker;


    var html = '<div class="cellConstructor pickerConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"value="'+title+'"disabled readonly></div></div><div id="containerErrorMandatoryPicker"><div class="errorTextField errorTextFieldPicker"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled readonly value="'+error+'"></div><div class="mandatoryTextField optionModel"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+'disabled readonly><p>Es obligatorio?</p></div></div><div class="minAgeContainer"><p>Edad minima:</p><input type="text"name="minAgeContainer"id="minAgeContainer"value="'+minAgeContainer+'"disabled readonly></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonAddPicker"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';
       $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveDatePickerField(type,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer) {
    
    //-- MANDATORY FIELDS --

    var itemSave = {
        "tag":indexField,
        "type":type,
        "label":title,
        "textError":error,
        "mandatory":mandatory
    }
    
    //-- OPTIONAL FIELDS --
              
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    }  
              
    if (minAgeContainer.length > 0) {
        itemSave["minAge"] = parseInt(minAgeContainer) 
        itemSave["validator"] = "age"
    }  

    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    for (var i=0; i<listFieldsResult.length; i++) {
        $.each(listFieldsResult[i], function(index, val) {
            console.log("key:"+index+" - value:"+val);
        });
    }
    
    indexField++;
}

//======================================
//               BOOLEAN              //
//======================================
            
function createBooleanField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError) {    
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var styles =  htmlFontSize + htmlBackgroundColor;

    var html = '<div class="cellConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"disabled value="'+title+'"></div></div><div class="containerTextFieldCenter"><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+'disabled readonly><p>Es obligatorio?</p></div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled value="'+error+'"></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonRemoveText"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveBooleanField(type,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "type":type,
        "label":title,
        "textError":error,
        "mandatory":mandatory,
    }
              
    if (mandatory) {
        itemSave["validator"] = "bool"
    }  
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","");

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}


//======================================
//            VALIDATION              //
//======================================

//=== TEXTFIELD ===
function validateTextField() {
    var title = $("#titleTextField").val()
    var placeHolder = $("#palceHolderTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');
    var keyboard = document.getElementById("selectTypeKeyboard").value;
    var validator = document.getElementById("selectTypeValidator").value;
    var minLength = $("#minLength").val()
    var maxLength = $("#maxLength").val()
    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }
    
    if (title.length > 0) {
        createField(title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError);
        saveField("text",title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError)
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

//=== DATE PICKER ===
function validateDatePickerField() {
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()
    var minAgeContainer = $("#minAgeContainer").val()    

    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColor").text()
    var containerAceptColor = $("#containerAceptColor").text()
    var backgroundPickerColor = $("#backgroundPickerColor").text()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }

    if (title.length > 0) {
        createDatePickerField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer);
        saveDatePickerField("datePicker",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer);
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

//=== PICKER ===
function validatePickerField() {
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()

    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColor").text()
    var containerAceptColor = $("#containerAceptColor").text()
    var backgroundPickerColor = $("#backgroundPickerColor").text()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }

    if (title.length > 0) {
        if (allPickerIsComplete()) {
            createPickerField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField);
            savePickerField("picker",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField);
        }
        else {
            alert("Los campos de clave y valor de los picker deben estar todos rellenos");
        }
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

function allPickerIsComplete() {
    var isComplete = true
    if (idPickerField == 0) {
        isComplete = false
    }
    for (var i = 0 ; i < idPickerField; i++) {
        var picker = $("#containerPickerField"+i)
        if (picker) {
            var key = $("#inputKeyPickerField"+i).val()
            var value = $("#inputValuePickerField"+i).val()
            if (key != null && value != null) {
                if (key.length == 0 || value.length == 0) {
                    isComplete = false
                }
            }
        }
    }
    return isComplete
}

//=== BOOLEAN ===
function validateBooleanField() {
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');
    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }
    
    if (title.length > 0) {
        createBooleanField(title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError);
        saveBooleanField("boolean",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError)
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

