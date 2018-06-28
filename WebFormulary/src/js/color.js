

window.cellColorEvent;
window.titleColorEvent;
window.errorColorEvent;
window.aceptColorEvent;
window.containerAceptColorEvent;
window.backgroundPickerColorEvent;
window.expandedColorEvent;

window.launchEventColors = function launchEventColors() {
	cellColorEvent = document.getElementById("cellColor");
	titleColorEvent = document.getElementById("titleColor");
	errorColorEvent = document.getElementById("errorColor");
	aceptColorEvent = document.getElementById("aceptColor");
	containerAceptColorEvent = document.getElementById("containerAceptColor");
	backgroundPickerColorEvent = document.getElementById("backgroundPickerColor");
	backgroundPickerColorEvent = document.getElementById("backgroundPickerColor");
	expandedColorEvent = document.getElementById("expandedColor");

	if (cellColorEvent) {
		cellColorEvent.addEventListener("input", function() {
	    	$("#cellColorHex").val(cellColorEvent.value)
		}, false);
	}

	if (cellColorEvent) {
		titleColorEvent.addEventListener("input", function() {
		    $("#titleColorHex").val(titleColorEvent.value)
		}, false);
	}

	if (cellColorEvent) {
		errorColorEvent.addEventListener("input", function() {
		    $("#errorColorHex").val(errorColorEvent.value)
		}, false);
	}

	if (aceptColorEvent) {
		aceptColorEvent.addEventListener("input", function() {
		    $("#aceptColorHex").val(aceptColorEvent.value)
		}, false);
	}

	if (containerAceptColorEvent) {
		containerAceptColorEvent.addEventListener("input", function() {
		    $("#containerAceptColorHex").val(containerAceptColorEvent.value)
		}, false);
	}

	if (backgroundPickerColorEvent) {
		backgroundPickerColorEvent.addEventListener("input", function() {
		    $("#backgroundPickerColorHex").val(backgroundPickerColorEvent.value)
		}, false);
	}	

	if (expandedColorEvent) {
		expandedColorEvent.addEventListener("input", function() {
		    $("#expandedColorHex").val(expandedColorEvent.value)
		}, false);
	}
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