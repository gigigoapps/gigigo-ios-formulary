window.getHtmlImageMandatory = function getHtmlImageMandatory() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"></div>';
}

window.getHtmlAllImage = function getHtmlAllImage() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"><p>Imagen checkBox On:</p><input id="imageCheckBoxOn"type="text"name="element"><p>Imagen checkBox Off:</p><input id="imageCheckBoxOff"type="text"name="element"></div>';
}

window.recoverHtmlImageMandatory = function recoverHtmlImageMandatory(style) {

    var htmlImage = '';
    if (style.imageMandatory != "") {
		htmlImage = '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element" disabled readonly value="'+style.imageMandatory+'"></div>';
	}

	return htmlImage
}

window.recoverHtmlAllImage = function recoverHtmlAllImage(style) {

    var html = '';
    if (style.imageMandatory != "" || style.imageCheckBoxOn != "" || style.imageCheckBoxOff != "") {
		html += '<div class="imagesZone">';
		html += '	<p>Imagen obligatorio:</p>';
		html += '	<input id="imageMandatory"type="text"name="element" disabled readonly value="'+style.imageMandatory+'">';
		html += '	<p>Imagen checkBox On:</p>';
		html += '	<input id="imageCheckBoxOn"type="text"name="element" disabled readonly value="'+style.imageCheckBoxOn+'">';
		html += '	<p>Imagen checkBox Off:</p>';
		html += '	<input id="imageCheckBoxOff"type="text"name="element" disabled readonly value="'+style.imageCheckBoxOff+'">';
		html += '</div>';
	}

	return html
}



