
window.getSelectorCell = function getSelectorCell() {
	var html = '';
	html += '<select id="selectTypeCell"  onchange="changeSelectioCell()">';
	html += '	<option value="none">Elige tipo de celda</option>';
	html += '	<option value="default">Estandar</option>';
	html += '	<option value="line">En linea</option>';
	html += '	<option value="custom">Vista externa</option>';
	html += '</select> ';

	return html;
}          
                      
window.getHtmlCustomCell = function getHtmlCustomCell() {
	var html = '';
	html += '<p>Nombre de la vista:</p>';
	html += '<input id="nameXib" type="text" name="element">';
	return html;
}


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




// Actions

window.changeSelectioCell = function changeSelectioCell() {
	var selector = document.getElementById("selectTypeCell").value;

	if (selector == "default" || selector == "line") {
    	$(".clasicCell").fadeIn();
    	$(".customCell").fadeOut();
    } else if (selector == "custom") {
    	$(".clasicCell").fadeOut();
    	$(".customCell").fadeIn();
    } else {
    	$(".clasicCell").fadeOut();
    	$(".customCell").fadeOut();
    }
}


//======================================
//               STYLES CELL           //
//======================================

window.getTypeCell = function getTypeCell(style) {
	return '<p class="typeCell"><b>Tipo de celda:</b> '+style.typeCell+'</p>';
}

window.getStyleCustom = function getStyleCustom(style) {
	var html = '';
	html += '<div class="cellContainer">';
	html += '	<p><b>Nombre de la vista:</b> '+style.nameXib+'</p>';
	html += '</div>';

	return html;
}

window.getStyleColor = function getStyleColor(style) {
	var html = '';
    if (style.cellColor != "" || style.titleColor != "" || style.errorColor != "") {
		html += '<div class="colorZone">';
        if (style.cellColor != "") {
            html += '   <p>Color de la celda:</p>';
    		html += '	<div id="cellColor" class="cellColor" style="background-color:'+style.cellColor+'">';
    		html += '		<p id="colorId">'+style.cellColor+'</p>';
    		html += '	</div>';
        }
        if (style.titleColor != "") {
    		html += '	<p class="colorTittleP">Color titulo:</p>';
    		html += '	<div id="titleColor" class="cellColor" style="background-color:'+style.titleColor+'">';
    		html += '		<p id="colorId">'+style.titleColor+'</p>';
    		html += '	</div>';
        }
        if (style.errorColor != "") {
    		html += '	<p class="colorTittleP">Color error:</p>';
    		html += '	<div id="errorColor" class="cellColor" style="background-color:'+style.errorColor+'">';
    		html += '		<p id="colorId">'+style.errorColor+'</p>';
    		html += '	</div>';
        }
		html += '</div>';
    }

    return html;
}

window.getStyleColorPicker = function getStyleColorPicker(style) {
	var html = '';
    if (style.aceptColor != "" || style.containerAceptColor != "" || style.backgroundPickerColor != "") {
    	html += '<div class="colorZone">';
    	html += '	<p class="nextColor">Estilos picker selector</p>';
    	html += '	<p class="colorOKPicker">Color texto OK:</p>';
    	html += '	<div id="aceptColor"class="cellColor" style="background-color:'+style.aceptColor+'">';
    	html += '		<p id="colorId">'+style.aceptColor+'</p>';
    	html += '	</div>';
    	html += '	<p class="colorTittleP">Color contenedor OK:</p>';
    	html += '	<div id="containerAceptColor"class="cellColor"  style="background-color:'+style.containerAceptColor+'">';
    	html += '		<p id="colorId">'+style.containerAceptColor+'</p>';
    	html += '	</div>';
    	html += '	<p class="colorTittleP">Color fondo:</p>';
    	html += '	<div id="backgroundPickerColor" class="cellColor"  style="background-color:'+style.backgroundPickerColor+'">';
    	html += '		<p id="colorId">'+style.backgroundPickerColor+'</p>';
    	html += '	</div>';
		html += '</div>';
    }

    return html;
}

window.getStyleSize = function getStyleSize (style) {
	var html = '';

    if (style.sizeTitle != "" || (style.sizeError != null && style.sizeError != "")) {
    	html += '<div class="sizeZone">';
        if (style.sizeTitle != null && style.sizeTitle != "") {
            html += '   <p>Tamaño titulo:</p>';
            html += '   <input id="sizeTitle"type="text"name="element" disabled readonly value="'+style.sizeTitle+'">';
        }
        if (style.sizeError != null && style.sizeError != "") {
            html += '   <p>Tamaño texto error:</p>';
            html += '   <input id="sizeError"type="text"name="element" disabled readonly value="'+style.sizeError+'">';
        }
        html += '</div>';
    }

    return html;
}

window.getAlignFont = function getAlignFont(style) {
	var html = '';
    if (style.align != "" || style.font != "") {
        html = '<div class="sizeZone alignZone">';
        if (style.align != "") {
        	html += '	<p>Alineación:</p>';
        	html += '	<input id="alignTitle" type="text"name="element" disabled readonly value="'+style.align+'">';
        }
        if (style.font != "") {
        	html += '	<p>Fuente:</p>';
        	html += '	<input id="fontField"type="text"name="element" disabled readonly value="'+style.font+'">';
        }
    	html += '</div>';
    }

    return html;
}

window.getStylesJson = function getStylesJson(styleModel) {
    if (styleModel == null) {
        return null;
    }

    var style = {}
    var haveStyle = false;
    
    //-- STYLES --


    if (styleModel.expandCollapseButtonTextColor != null && styleModel.expandCollapseButtonTextColor.length > 0) {
        style["expandCollapseButtonTextColor"] = styleModel.expandCollapseButtonTextColor
        haveStyle = true;
    }
    if (styleModel.expandCollapseButtonFontSize != null && styleModel.expandCollapseButtonFontSize.length > 0) {
        style["expandCollapseButtonFontSize"] = styleModel.expandCollapseButtonFontSize
        haveStyle = true;
    }
    if (styleModel.cellColor != null && styleModel.cellColor.length > 0) {
        style["backgroundColorField"] = styleModel.cellColor
        haveStyle = true;
    }
    if (styleModel.titleColor != null && styleModel.titleColor.length > 0) {
        style["titleColor"] = styleModel.titleColor
        haveStyle = true;
    }
    if (styleModel.errorColor != null && styleModel.errorColor.length > 0) {
        style["errorColor"] = styleModel.errorColor
        haveStyle = true;
    }
    if (styleModel.sizeTitle != null && styleModel.sizeTitle.length > 0) {
        style["sizeTitle"] = parseInt(styleModel.sizeTitle)
        haveStyle = true;
    }
    if (styleModel.sizeError != null && styleModel.sizeError.length > 0) {
        style["sizeError"] = parseInt(styleModel.sizeError)
        haveStyle = true;
    }
    if (styleModel.aceptColor != null && styleModel.aceptColor.length > 0) {
        style["acceptColorPicker"] = styleModel.aceptColor
        haveStyle = true;
    }
    if (styleModel.containerAceptColor != null && styleModel.containerAceptColor.length > 0) {
        style["containerAcceptColorPicker"] = styleModel.containerAceptColor
        haveStyle = true;
    }
    if (styleModel.backgroundPickerColor != null && styleModel.backgroundPickerColor.length > 0) {
        style["backgroundPickerColorPicker"] = styleModel.backgroundPickerColor
        haveStyle = true;
    }
    if (styleModel.align != null && styleModel.align.length > 0) {
        style["align"] = styleModel.align
        haveStyle = true;
    }
    if (styleModel.font != null && styleModel.font.length > 0) {
        style["font"] = styleModel.font
        haveStyle = true;
    }
    if (styleModel.imageMandatory != null && styleModel.imageMandatory.length > 0) {
        style["mandatoryIcon"] = styleModel.imageMandatory
        haveStyle = true;
    }
    if (styleModel.imageCheckBoxOn != null && styleModel.imageCheckBoxOff != null && styleModel.imageCheckBoxOn.length > 0 && styleModel.imageCheckBoxOff.length > 0) {
        var checkBox = {}
        checkBox["checkBoxOn"] = styleModel.imageCheckBoxOn
        checkBox["checkBoxOff"] = styleModel.imageCheckBoxOff
        style["checkBox"] = checkBox
        haveStyle = true;
    }

    if (styleModel.typeCell != null) {
    	if (styleModel.typeCell == "line" || styleModel.typeCell == "custom") {    		
    		style["styleCell"] = styleModel.typeCell

    		if (styleModel.typeCell == "custom") {
    			style["nameXib"] = styleModel.nameXib
    		}

    		haveStyle = true;
    	}
    } 

    if (haveStyle) {
        return style;
    }
    else {
        return null;
    }
}
