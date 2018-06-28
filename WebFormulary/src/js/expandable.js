
//======================================
//    		    GET JSON       	      //
//======================================

window.generateDicExpandable = function generateDicExpandable(values) {
    if (values.isExpandable == false) {
    	return null;
    }

    var itemsExpandable = {}
    itemsExpandable["description"] = values.description
    itemsExpandable["textButtonReadMore"] = values.textbuttonReadMore
    itemsExpandable["textButtonReadLess"] = values.textbuttonReadLess
    return itemsExpandable;
}

//======================================
//    		    GET HTML       	      //
//======================================

window.getExpandableResult = function getExpandableResult(values) {
    var html = '';

    if (values.isExpandable) {
        html += '<div id="containerExpandable" class="containerExpandableActive">';
        html += '    <div class="descriptionExpan">';
        html += '        <p>Descripción*:</p>';
        html += '        <input type="text" name="descripcionExpan" id="descripcionExpan" disabled readonly value="'+values.description+'">';
        html += '    </div>';
        html += '    <div class="expandTextExpan">';
        html += '        <p>Botón leer más*:</p>';
        html += '        <input type="text" name="expandText" id="expandText" disabled readonly value="'+values.textbuttonReadMore+'">';
        html += '    </div>';
        html += '    <div class="collapseTextExpan">';
        html += '        <p>Botón leer menos*:</p>';
        html += '        <input type="text" name="collapseText" id="collapseText" disabled readonly value="'+values.textbuttonReadLess+'">';
        html += '    </div>';
        html += '</div>';
    }

    return html;
}

window.getExpandableStyleResult = function getExpandableStyleResult(values,styles) {
    var html = '';

    if (values.isExpandable && (styles.expandCollapseButtonTextColor != null && styles.expandCollapseButtonTextColor.length > 0) || (styles.expandCollapseButtonFontSize != null && styles.expandCollapseButtonFontSize.length > 0)) {
    	html += '<div id="containerStyleExpandable">';
        html += '	<h4 id="titleExpandable">Estilos de vista expandida:</h4>';
        if (styles.expandCollapseButtonTextColor != null && styles.expandCollapseButtonTextColor.length > 0) {
        	html += '	<p><b>Color texto:</b> '+styles.expandCollapseButtonTextColor+'</p>';
        }
        if (styles.expandCollapseButtonFontSize != null && styles.expandCollapseButtonFontSize.length > 0) {
        	html += '	<p><b>Tamaño fuente:</b> '+styles.expandCollapseButtonFontSize+'</p>';
        }
        html += '</div>';
	}

    return html;
}
