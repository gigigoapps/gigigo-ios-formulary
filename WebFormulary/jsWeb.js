        var fieldSelected = ""
            var listFieldsResult = []
            var indexField = 0
            
            
            function saveField(type,title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor) {
                var style = {}
                var haveStyle = false;
                
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
                
                var itemSave = {
                    "tag":indexField,
                    "type":type,
                    "label":title,
                    "error":error,
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
                
                if (haveStyle) {
                    itemSave["style"] = style
                }
                
                //	alert(itemSave);
                
                listFieldsResult.push(itemSave)
                
                for (var i=0; i<listFieldsResult.length; i++) {
                    $.each(listFieldsResult[i], function(index, val) {
                        console.log("key:"+index+" - value:"+val);
                    });
                }
                
                indexField++;
            }
        
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
            
            
            function createField(title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor) {
                
                var valueCheck = ""
                if (mandatory) {
                    valueCheck = "checked"
                }
                var htmlBackgroundColor = '<div class="colorZone"><p>Color de la celda:</p><div id="cellColor"></div></div>';
                if (cellColor != "") {
                    //htmlBackgroundColor = '<div class="colorZone"><p>Color de la celda:</p><div id="cellColor" style="background-color:'+cellColor+'"><p id="colorId">'+cellColor+'</p></div></div>'
                	htmlBackgroundColor = '<div class="colorZone"><p>Color de la celda:</p><div id="cellColor" class="cellColor" style="background-color:'+cellColor+'"><p id="colorId">'+cellColor+'</p></div><p class="colorTittleP">Color titulo:</p><div id="titleColor" class="cellColor" style="background-color:'+titleColor+'"><p id="colorId">'+titleColor+'</p></div><p class="colorTittleP">Color error:</p><div id="errorColor" class="cellColor" style="background-color:'+errorColor+'"><p id="colorId">'+errorColor+'</p></div></div>';
                }





				var html = '<div class="cellConstructor" id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text" name="titleTextField" id="titleTextField" disabled value="'+title+'"></div><div class="keyboardResult">Keyboard:'+keyboard+'</div></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text" name="palceHolderTextField" id="palceHolderTextField" disabled value="'+placeHolder+'"></div><div class="mandatoryTextField"><input type="checkbox" name="mandatory" value="mandatory" id="mandatory" '+valueCheck+' disabled readonly><p>Es obligatorio?</p></div><div class="validatorResult">Validator:'+validator+'</div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text" name="errorTextField"id="errorTextField" disabled value="'+error+'"><p>minLength:</p><input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+minLength+'"><p>maxLength:</p><input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+maxLength+'"></div><div class="styleField"> <h4>Estilos de celda:</h4>'+htmlBackgroundColor+' </div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove" onclick="removeField('+indexField+')"><p>-</p></div></div></div> ';

				//var html = '<div class="cellConstructor" id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text" name="titleTextField" id="titleTextField" disabled value="'+title+'"></div><div class="keyboardResult">Keyboard:'+keyboard+'</div></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text" name="palceHolderTextField" id="palceHolderTextField" disabled value="'+placeHolder+'"></div><div class="mandatoryTextField"><input type="checkbox" name="mandatory" value="mandatory" id="mandatory" '+valueCheck+' disabled readonly><p>Es obligatorio?</p></div><div class="validatorResult">Validator:'+validator+'</div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text" name="errorTextField"id="errorTextField" disabled value="'+error+'"><p>minLength:</p><input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+minLength+'"><p>maxLength:</p><input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+maxLength+'"></div><div class="styleField"><h4>Estilos de celda:</h4>'+htmlBackgroundColor+'</div<div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove" onclick="removeField('+indexField+')"><p>-</p></div></div></div> ';
                $("#containerListItemsCreated").append(html);
                resetTypeField();
            }
        
            //======================================
            //            VALIDACION              //
            //======================================

            function validateTextField() {
                var title = $("#titleTextField").val()
                var placeHolder = $("#palceHolderTextField").val()
                var error = $("#errorTextField").val()
                var mandatory = $('#mandatory').is(':checked');
                var cellColor = $("#cellColor").text()
                var titleColor = $("#titleColor").text()
                var errorColor = $("#errorColor").text()
                var keyboard = document.getElementById("selectTypeKeyboard").value;
                var validator = document.getElementById("selectTypeValidator").value;
                var minLength = $("#minLength").val()
                var maxLength = $("#maxLength").val()
                
                if (error.length == 0) {
                    error = "error_generic_field"
                }
                
                if (title.length > 0) {
                    createField(title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor);
                    saveField("text",title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor)
                }
                else {
                    alert("Los campos con asterisco son obligatorios");
                }
            }
            
            function addField() {
                if (fieldSelected == "Text") {
                    validateTextField();
                }
                else if (typeField == "Picker") {
                    alert("Picker");
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
                
                fieldSelected = typeField;
                
                if (typeField == "Text") {
                    var html = '<div class="cellConstructor" id="createField"><div class="row"><div class="col-md-10"><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text" name="titleTextField" id="titleTextField"></div><select id="selectTypeKeyboard"><option value="None">Elegir tipo de teclado</option><option value="FormKeyboardTypeText">Texto</option><option value="FormKeyboardTypeEmail">Email</option><option value="FormKeyboardTypeNumbers">Nuerico</option><option value="FormKeyboardTypeNumberPad">NuericoPad</option></select></div><div class="containerTextFieldCenter"><div class="inputTextField"><p>PlaceHolder:</p><input type="text" name="palceHolderTextField" id="palceHolderTextField"></div><div class="mandatoryTextField"><input type="checkbox" name="mandatory" value="mandatory" id="mandatory"><p>Es obligatorio?</p></div><select id="selectTypeValidator"><option value="None">Tipo validador</option><option value="text">Texto</option><option value="email">Email</option><option value="lengthText">Long texto</option><option value="numeric">Numérico</option><option value="postalCode">Código postal</option><option value="phone">Teléfono</option><option value="dniNie">DNI/NIE</option></select>  </div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text" name="errorTextField"id="errorTextField"><p>minLength:</p><input class="inputWidth" type="text" name="minLength"id="minLength"><p>maxLength:</p><input class="inputWidth" type="text" name="maxLength"id="maxLength"></div><div class="styleField"> <h4>Estilos de celda:</h4><div class="colorZone"><p>Color de la celda:</p><div id="cellColor" class="cellColor"  onclick="cellColorOpen(\'cellColor\')"></div><p class="colorTittleP">Color titulo:</p><div id="titleColor" class="cellColor"  onclick="cellColorOpen(\'titleColor\')"></div><p class="colorTittleP">Color Error:</p><div id="errorColor" class="cellColor"  onclick="cellColorOpen(\'errorColor\')"></div></div></div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonAdd" onclick="addField()"><p>+</p></div></div></div>';

                    $("#containterElementField").append(html)
                }
                else if (typeField == "Picker") {
                    
                }
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