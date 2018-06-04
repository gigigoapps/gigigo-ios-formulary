//==============================================//
//               CREATE VALIDATOR               //
//==============================================//
window.idValidatorField = 1
window.addContainerValidators = function addContainerValidators() {

	var html = '';
	html+= '<div class="containerValidatorField" id="containerValidatorField'+idValidatorField+'">';
	html+=  getListValidators(idValidatorField);
	html+= '	<p class="textErrorVal">Texto error:</p>';
	html+= '	<input id="inputValueValidatorField'+idValidatorField+'" type="text" name="element" placeholder="Texto de error">';
	html+= '	<p class="buttonLess" onclick="removeContainerValidator('+idValidatorField+')">-</p>';
    html+= '    <div id="extraFieldsValidator'+idValidatorField+'" class="extraFieldsValidator"></div>';
	html+= '</div>';

    $("#validatorContainerInsert").append(html);
    idValidatorField++;
}

window.removeContainerValidator = function removeContainerValidator(idContainerPicker) {
    $("#containerValidatorField"+idContainerPicker).slideUp(function(){
           $("#containerValidatorField"+idContainerPicker).remove()
    });
}


window.getValidatorsZone = function getValidatorsZone() {
	var html = '';
	html+= '<div id="valuesValidators">';
	html+= '	<div id="containerValidatorFieldAdd">';
	html+= '		<p id="addFieldPickerText">Añadir campos del validador:</p>';
	html+= '		<div id="sumatoryPicker"><p onclick="addContainerValidators()">+</p></div>';
	html+= '	</div>';
	html+= '	<div id="validatorContainerInsert"></div>';
	html+= '</div>';

	return html;
}

window.getListValidators = function getListValidators(idContainerValidator){
	var html = '';
    html+= '              <select id="selectTypeValidator'+idContainerValidator+'" id="otro" class="selectTypeValidator" onchange="changeSelectionValidator('+idContainerValidator+')">';
    html+= '                  <option value="None">Tipo validador</option>';
    html+= '                  <option value="mandatory">Obligatorio</option>';
    html+= '                  <option value="text">Texto</option>';
    html+= '                  <option value="email">Email</option>';
    html+= '                  <option value="lengthText">Long texto</option>';
    html+= '                  <option value="numeric">Numérico</option>';
    html+= '                  <option value="postalCode">Código postal</option>';
    html+= '                  <option value="phone">Teléfono</option>';
    html+= '                  <option value="dniNie">DNI/NIE</option>';
    html+= '                  <option value="customValidator">Custom</option>';
    html+= '                  <option value="compare">Comparador campos</option>';
    html+= '              </select>';

	return html;
}

window.changeSelectionValidator = function changeSelectionValidator(idClassValidator) {

    var selectorFound = document.getElementById("selectTypeValidator"+idClassValidator);
    var extraFound = document.getElementById("extraFieldsValidator"+idClassValidator);
    var valueFound = selectorFound.value;

    $("#extraFieldsValidator"+idClassValidator).html();
    extraFound.style.display = "none"; 

    if (valueFound == "customValidator") {
        $("#extraFieldsValidator"+idClassValidator).html('<input id="custonValidator" placeHolder="Regex Custom">');
        extraFound.style.display = "block";
    }

    if (valueFound == "lengthText") {
        var html = '';
        html+= '<div id="minMaxValidatorContainer">';
        html+= '    <p>minLength:</p>';
        html+= '    <input class="inputWidth" type="text" name="minLength"id="minLength">';
        html+= '    <p>maxLength:</p>';
        html+= '    <input class="inputWidth" type="text" name="maxLength"id="maxLength">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }

    if (valueFound == "compare") {
        var html = '';
        html+= '<div id="compareCreateContainer">';
        html+= '    <p>Clave actual:</p>';
        html+= '    <input class="inputWidth" type="text" name="compareKey1" id="compareKey1">';
        html+= '    <p>clave objetivo:</p>';
        html+= '    <input class="inputWidth" type="text" name="compareKey2" id="compareKey2">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }


}
