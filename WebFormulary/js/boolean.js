//======================================
//               BOOLEAN              //
//======================================
            
function createBooleanField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font) {    
    var valueCheck = ""
    if (mandatory) {
        valueCheck = "checked"
    }

    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,errorColor);
    var htmlFontSize = getStyleSize (sizeTitle, sizeError);
    var htmlAlingFont = getAlignFont(align,font)
    var styles =  htmlFontSize + htmlBackgroundColor + htmlAlingFont;

    var html = '<div class="cellConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"disabled value="'+keyTextField+'"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"disabled value="'+title+'"></div></div><div class="containerTextFieldCenter"><div class="mandatoryTextField"><input type="checkbox"name="mandatory"value="mandatory"id="mandatory"'+valueCheck+'disabled readonly><p>Es obligatorio?</p></div></div><div class="errorTextField"><p class="textErrorP">Texto error:</p><input type="text"name="errorTextField"id="errorTextField"disabled value="'+error+'"></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonRemoveText"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

function saveBooleanField(keyTextField,type,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "key":keyTextField,
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
    var styles = getStylesJson(cellColor,titleColor,errorColor,sizeTitle,sizeError,"","","",align,font);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}

