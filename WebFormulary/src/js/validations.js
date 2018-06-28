

//======================================
//            TEXTFIELD               //
//======================================

window.validateTextField = function validateTextField() {
    var values = getRecoverField();
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    if (controlError(values, styles)) {
        window.idValidatorField = 0;
        createField(values, validator, styles);
        saveField(values, validator, styles);
    }
}


//======================================
//            DATE PICKER             //
//======================================


window.validateDatePickerField = function validateDatePickerField() {
    var values = getRecoverField();
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();
    var rules = getRecoverRules(values.isActiveRule);

    if (controlError(values, styles)) {
        createDatePickerField(values, validator, rules, styles);
        saveDatePickerField(values, validator, rules, styles);
    }
}


//======================================
//               PICKER               //
//======================================


window.validatePickerField = function validatePickerField() {
    var values = getRecoverField();
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    if (controlError(values, styles)) {
        if (allPickerIsComplete()) {
            createPickerField(values, validator, styles);
            savePickerField(values, validator, styles);
        }
        else {
            alert("Los campos de clave y valor de los picker deben estar todos rellenos");
        }
    }
}


//======================================
//              BOOLEAN               //
//======================================


window.validateBooleanField = function validateBooleanField() {
    var values = getRecoverField();
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    if (controlError(values, styles)) {
        createBooleanField(values, validator, styles);
        saveBooleanField(values, validator, styles)
    }
}


//======================================
//            EXPANDED BOOLEAN        //
//======================================


window.validateExpandedBooleanField = function validateExpandedBooleanField() {
    var values = getRecoverField();
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    if (controlError(values, styles)) {
        createBooleanField(values, validator, styles);
        saveBooleanField(values, validator, styles)
    }
}


//======================================
//              INDEX                 //
//======================================


window.validateIndexField = function validateIndexField() {
    var values = getRecoverField();
    var styles = getRecoverStyles();    

    if (controlError(values,styles)) {
        createIndexField(values, styles)
        saveIndexField(values, styles)
    }
}




//======================================
//              PRIVATE               //
//======================================

window.allPickerIsComplete = function allPickerIsComplete() {
    var isComplete = true
    if (idPickerField == 0) {
        isComplete = false
    }
    for (var i = 0 ; i < idPickerField; i++) {
        var picker = $("#containerPickerField"+i)
        if (picker) {
            var key = $("#inputKeyPickerField"+i).val()
            var value = $("#inputValuePickerField"+i).val()
            if (key != null && value != null) {
                if (key.length == 0 || value.length == 0) {
                    isComplete = false
                }
            }
        }
    }
    return isComplete
}

window.controlError = function controlError(values, style) {
    if (values.label.length > 0 &&  values.key.length > 0) {
        if (values.subtype != null && values.subtype.length > 0 && values.subtype == "expandable") {
            if (values.description.length == 0 || values.textbuttonReadMore.length == 0 || values.textbuttonReadLess.length == 0) {
                alert("Es necesario rellenar todos los campos con asterisco, estos son obligatorios");
                return false;
            } 
        } 

        if (style.font != null) {
            if (style.sizeTitle != null && style.sizeError != null) {
                return true;
            }
            else {
                if (style.sizeError == null && values.type == "index") {
                     return true;
                } else {
                    alert("Si define un tipo de fuente debe elegir el tamaño de fuente para el titulo y el error");
                    return false;
                }
            }
        } 
        else {
            return true;
        }        
    }
    else {
        alert("Los campos con asterisco son obligatorios");
        return false;
    }
}



