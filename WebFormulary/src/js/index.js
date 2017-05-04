
//======================================
//               TEXT (YA CREADO)     //
//======================================

window.createIndexField = function createIndexField(keyTextField,title,cellColor,titleColor,sizeTitle,align,font) {
    
    //-- Recover Styles --
    var htmlBackgroundColor = getStyleColor(cellColor,titleColor,"");
    var htmlFontSize = getStyleSize (sizeTitle, "");
    var htmlAlingFont = getAlignFont(align,font)
    
    var styles =  htmlFontSize + htmlBackgroundColor + htmlAlingFont;
    
   // var html = '<div class="cellConstructor"id="fieldNumber'+indexField+'"><div class="row"><div class="col-md-10"><div class="keyTextField"><p>key*:</p><input type="text"name="keyTextField"id="keyTextField"disabled value="'+keyTextField+'"></div><div class="containerTextFieldTop"><div class="titleTextField"><p>Titulo*:</p><input type="text"name="titleTextField"id="titleTextField"disabled value="'+title+'"></div></div><div class="styleField"><h4>Estilos de celda:</h4>'+styles+'</div><div class="spaceSeparate"></div></div><div class="col-md-2 buttonRemove buttonRemoveText"onclick="removeField('+indexField+')"><p>-</p></div></div></div>';
    
    var html = require('html-loader!../aux/auxBooleanCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveIndexField = function saveIndexField(keyTextField,type,title,cellColor,titleColor,sizeTitle,align,font) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":keyTextField,
        "type":type,
        "label":title
    }
    
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(cellColor,titleColor,"",sizeTitle,"","","","",align,font,"","","");
    
    if (styles != null) {
        itemSave["style"] = styles
    }
    
    listFieldsResult.push(itemSave)
 
    indexField++;
}
