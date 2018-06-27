

window.fieldSelected = ""
window.listFieldsResult = []
window.indexField = 0


window.removeField = function removeField(idRemove){
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
            
window.addField = function addField() {
    if (fieldSelected == "text") {
        validateTextField();
    }
    else if (fieldSelected == "picker") {
        validatePickerField();
    }
    else if (fieldSelected == "datePicker") {
        validateDatePickerField();
    }
    else if (fieldSelected == "boolean") {
        validateBooleanField();
    }
    else if (fieldSelected == "index") {
        validateIndexField();
    }
}

window.resetTypeField = function resetTypeField() {
    clearTypeField()
    $(".selectTypeField").val("None");
}

window.clearTypeField = function clearTypeField(){
    $("#createField").slideUp(function(){
           $("#containterElementField").empty()
    });
}

//======================================
//          ADD NEW FILED             //
//======================================

window.createElementField = function createElementField(typeField) {
    $("#containterElementField").empty()
    fieldSelected = typeField;
    var html = '';
    var htmlFont = getFontPositionZone()
    var htmlImage = getHtmlImageMandatory();
    var htmlRules = getRules();
    var htmlValidators = getValidatorsZone();
    var htmlSelectorCell = getSelectorCell();
    var htmlCustomCell = getHtmlCustomCell();

    if (typeField == "text") {
        html = require('html-loader!../aux/auxText.html')
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "picker") {
        idPickerField = 1; // Reset Picker
        html = require('html-loader!../aux/auxPicker.html')
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "datePicker") {
        html = require('html-loader!../aux/auxDatePicker.html')
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "boolean") {
        htmlImage = getHtmlAllImage();
        html = require('html-loader!../aux/auxBoolean.html')
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "index") {
        html = require('html-loader!../aux/auxIndex.html')
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }

    $("#containterElementField").append(html)

    launchEventColors();
    createEventFont();
    createEventTextCompare();
    createEventRules();
    createEventExpandable();
    showContainerCustomValidate();
}

window.createEventFont = function createEventFont() {
     $("#selectTypeFont").change(function() {
         if (this.value == "custom") {
            $("#custonFont").css("display","block");
         }
         else {
            $("#custonFont").css("display","none");
         }
    });
}


window.createEventExpandable = function createEventExpandable() {
  
     $("#isExpandable").change(function() {
         if (this.checked == true) {
            $("#containerExpandable").css("display","block");
         }
         else {
            $("#containerExpandable").css("display","none");
         }
    });
}


window.createEventRules = function createEventRules() {
  
     $("#rules").change(function() {
         if (this.checked == true) {
            $("#containerRule").css("display","block");
         }
         else {
            $("#containerRule").css("display","none");
         }
    });
}

window.createEventTextCompare = function createEventTextCompare() {
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

window.showContainerCustomValidate = function showContainerCustomValidate() {
     $("#selectTypeValidator").change(function() {
         if (this.value == "customValidator") {
            $("#custonValidator").css("display","block");
         }
         else {
            $("#custonValidator").css("display","none");
         }
         if (this.value == "None") {
            $("#validatorTextError").css("display","none");
         }
         else {
            $("#validatorTextError").css("display","block");
         }

         if (this.value == "lengthText") {
            $("#minMaxValidatorContainer").css("display","block");
         }
         else {
            $("#minMaxValidatorContainer").css("display","none");
         }
    });
}

window.syntaxHighlight = function syntaxHighlight(json) {
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
                    
                    
                    
window.copiarAlPortapapeles = function copiarAlPortapapeles() {
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

                    
window.output = function output(inp) {
     document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}
                 

$(".selectTypeField").change(function() {
     createElementField(this.value)
});             
                    

window.copyList = function copyList(listFields) {
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

    $('html, body').animate({
       scrollTop: $("#containerJsonItemsCreated").offset().top
    }, 1000)
});
 
var idColor = ""           
window.cellColorOpen = function cellColorOpen(idCellColor) {
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



