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
    html+= '                  <option value="bool">Boleano</option>';
    html+= '                  <option value="age">Edad mínima</option>';
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

    if (valueFound == "age") {
        var html = '';
        html+= '<div id="compareCreateContainer">';
        html+= '    <p>Edad mínima:</p>';
        html+= '    <input class="inputWidth" type="text" name="minAge" id="minAge">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }
}


window.generateHtmlValidator = function generateHtmlValidator(validator) {
   /* ----------------------- CREATE VALIDATOR HTML ----------------------- */
    var html = "";
    if (validator.length > 0) {        
        html += '<h4>Validadores:</h4>';
    }

    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        html += '<div class="containerValidator" id="containerValidator'+i+'">';  

        if (valElement.type != "None") {

            html += '<div class="errorTextField">';
            html += '      <p class="textErrorP typeValidator">Tipo validador: </p>';
            html += '      <input class="textErrorCreated" type="text" name="typeCompareInput" id="typeCompareInput" disabled value="'+valElement.type+'">';
            html += '      <p class="textErrorP">Texto error:</p>';
            html += '      <input class="textErrorCreated" type="text" name="errorTextField" id="errorTextField" disabled value="'+valElement.text+'">';

            if (valElement.type == "lengthText") {
                if (valElement.minLength.length > 0) {
                    html += '<p>minLength:</p>';
                    html += '<input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+valElement.minLength+'">';
                }
                if (valElement.maxLength.length > 0) {
                    html += '<p>maxLength:</p>';
                    html += '<input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+valElement.maxLength+'">';
                }                  
            }

            if (valElement.type == "customValidator") {
                html += '<p>Custom regex:</p>';
                html += '<input type="text" class="customValidatorCreated" name="customValidatorTextField" id="customValidatorTextField" disabled value="'+valElement.regex+'">'
            }

            if (valElement.type == "compare") {
                html += '<p>Keys Compare:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="'+valElement.compareKey1+','+valElement.compareKey2+'">';
            }
            if (valElement.type == "mandatory") {
                html += '<p>Obligatorio:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="true">';
            }
            if (valElement.type == "age") {
                html += '<p>Edad mínima:</p>';
                html += '<input type="text" class="customValidatorCreated" name="customValidatorTextField" id="customValidatorTextField" disabled value="'+valElement.minAge+'">'
            }
            

            html += '</div>';
        }

        html += '</div>';
    }

    return html;
}


window.generateDicValidator = function generateDicValidator(validator) {
    var itemsValidators = []

    if (validator == null) {
        return itemsValidators;
    }

    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        var itemValidate = {}
        itemValidate["type"] = valElement.type;
        itemValidate["textError"] = valElement.text;

        if (valElement.type == "compare") {
            itemValidate["itemsCompare"] = [valElement.compareKey1, valElement.compareKey2];
        }
        if (valElement.type == "age") {
            itemValidate["minAge"] = valElement.minAge;
        }
        if (valElement.type == "customValidator") {
            itemValidate["regex"] = valElement.regex;
        }


        if (valElement.type == "lengthText") {
            if (valElement.minLength.length > 0) {
                itemValidate["minLength"] = valElement.minLength;
            }
            if (valElement.maxLength.length > 0) {
                itemValidate["maxLength"] = valElement.maxLength;
            }
        }

        itemsValidators.push(itemValidate);
    }

    return itemsValidators;
}
