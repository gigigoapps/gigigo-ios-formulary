function getHtmlImageMandatory() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"></div>';
}

function getHtmlAllImage() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"><p>Imagen checkBox On:</p><input id="imageCheckBoxOn"type="text"name="element"><p>Imagen checkBox Off:</p><input id="imageCheckBoxOff"type="text"name="element"></div>';
}

function recoverHtmlImageMandatory(imageMandatory) {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element" disabled readonly value="'+imageMandatory+'"></div>';
}

function recoverHtmlAllImage(imageMandatory,imageCheckBoxOn,imageCheckBoxOff) {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element" disabled readonly value="'+imageMandatory+'"><p>Imagen checkBox On:</p><input id="imageCheckBoxOn"type="text"name="element" disabled readonly value="'+imageCheckBoxOn+'"><p>Imagen checkBox Off:</p><input id="imageCheckBoxOff"type="text"name="element" disabled readonly value="'+imageCheckBoxOff+'"></div>';
}



