
//======================================
//               TEXT (YA CREADO)     //
//======================================

window.createIndexField = function createIndexField(values, styleM) {
    
    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlCustom = getStyleCustom(styleM);
    

    var styles = '';
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }

        
    var html = require('html-loader!../../aux/auxIndexCreated.html')
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',values.key)
            .replace('{{title}}',values.label)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveIndexField = function saveIndexField(values, styleM) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":values.key,
        "type":values.type,
        "label":values.label
    }
    
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(styleM);
    
    if (styles != null) {
        itemSave["style"] = styles
    }
    
    listFieldsResult.push(itemSave)
 
    indexField++;
}
