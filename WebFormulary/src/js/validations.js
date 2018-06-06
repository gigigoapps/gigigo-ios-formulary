// http://www.danstools.com/javascript-minify/ 
//======================================
//            VALIDATION              //
//======================================

window.controlError = function controlError(title,keyTextField,font,sizeTitle,sizeError) {
    if (title.length > 0 &&  keyTextField.length > 0) {
        if (font.length > 0) {
            if (sizeTitle.length > 0 && sizeError.length > 0) {
                return true;
            }
            else {
                alert("Si define un tipo de fuente debe elegir el tamaño de fuente para el titulo y el error");
                return false;
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


//=== TEXTFIELD ===
window.validateTextField = function validateTextField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var placeHolder = $("#palceHolderTextField").val()
    var keyboard = document.getElementById("selectTypeKeyboard").value;
    var validator = getRecoverValidations();

    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var errorColor = $("#errorColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;
    var imageMandatory = $("#imageMandatory").val()
    var isPassword = $('#passwordTextField').is(':checked');
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');

        
    if (font == "custom") {
        font = $("#custonFont").val()
    }
        
    if (controlError(title,keyTextField,font,sizeTitle,sizeError)) {
        window.idValidatorField = 0;
        createField(keyTextField,title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden);
        saveField(keyTextField,"text",title,placeHolder,cellColor,keyboard,validator,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory, isPassword, isEditing, isHidden)
    }
}

//=== DATE PICKER ===
window.validateDatePickerField = function validateDatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()

    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var errorColor = $("#errorColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColorHex").val()
    var containerAceptColor = $("#containerAceptColorHex").val()
    var backgroundPickerColor = $("#backgroundPickerColorHex").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;
    var imageMandatory = $("#imageMandatory").val()
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');
    var isActiveRule = $('#rules').is(':checked');

    var rules = getRecoverRules(isActiveRule);

    if (font == "custom") {
        font = $("#custonFont").val()
    }

    if (controlError(title,keyTextField,font,sizeTitle,sizeError)) {
        createDatePickerField(keyTextField,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing, isHidden, validator, isActiveRule, rules);
        saveDatePickerField(keyTextField,"datePicker",title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing, isHidden, validator, isActiveRule, rules);
    }
}

//=== PICKER ===
window.validatePickerField = function validatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()

    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var errorColor = $("#errorColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColorHex").val()
    var containerAceptColor = $("#containerAceptColorHex").val()
    var backgroundPickerColor = $("#backgroundPickerColorHex").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;    
    var imageMandatory = $("#imageMandatory").val()
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');

    if (font == "custom") {
        font = $("#custonFont").val()
    }

    if (controlError(title,keyTextField,font,sizeTitle,sizeError)) {
        if (allPickerIsComplete()) {
            createPickerField(keyTextField,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory,isEditing, isHidden, validator);
            savePickerField(keyTextField,"picker",title,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,align,font,imageMandatory, isEditing, isHidden, validator);
        }
        else {
            alert("Los campos de clave y valor de los picker deben estar todos rellenos");
        }
    }
}

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

//=== BOOLEAN ===
window.validateBooleanField = function validateBooleanField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();

    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var errorColor = $("#errorColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;
    var imageMandatory = $("#imageMandatory").val()
    var imageCheckBoxOn = $("#imageCheckBoxOn").val()
    var imageCheckBoxOff = $("#imageCheckBoxOff").val()
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');

    if (font == "custom") {
        font = $("#custonFont").val()
    }
    
    if (controlError(title,keyTextField,font,sizeTitle,sizeError)) {
        createBooleanField(keyTextField,title,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff,isEditing, isHidden, validator);
        saveBooleanField(keyTextField,"boolean",title,cellColor,titleColor,errorColor,sizeTitle,sizeError,align,font,imageMandatory,imageCheckBoxOn,imageCheckBoxOff,isEditing, isHidden, validator)
    }
}

//=== INDEX ===
window.validateIndexField = function validateIndexField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;
    
    if (font == "custom") {
        font = $("#custonFont").val()
    }
    
    if (controlError(title,keyTextField,font,sizeTitle,10)) {
        createIndexField(keyTextField,title,cellColor,titleColor,sizeTitle,align,font);
        saveIndexField(keyTextField,"index",title,cellColor,titleColor,sizeTitle,align,font)
    }
}

//======================================
//         RECOVER    RULES           //
//======================================


function getRecoverRules(isActiveRule) {
    if (isActiveRule) {
        var rules = new rulesResult;
        rules.fieldReciver1 = $("#fieldReciver1").val();
        rules.fieldReciver2 = $("#fieldReciver2").val();
        rules.typeCompare = document.getElementById("selectTypeRuleCompare").value;
        rules.valueCompare = $("#valueRule").val();
        rules.behaviorCompare = document.getElementById("selectTypeRuleBehavior").value;
        rules.elseCompare = document.getElementById("selectTypeRuleElseBehavior").value; 
        return rules;
    }
}

//======================================
//        RECOVER    VALIDATION       //
//======================================

function getRecoverValidations() {

    var listValidatorResult = [];

    for (var i = 0; i <= window.idValidatorField; i++) {
        if ($("#containerValidatorField"+i).length > 0) {

            var select = document.getElementById("selectTypeValidator"+i);    
            var validatorRes = new validatorResult;
            validatorRes.type = select.value;
            validatorRes.text = $("#inputValueValidatorField"+i).val()

            if ($("#extraFieldsValidator"+i).length > 0) {
                validatorRes.minLength = $("#minLength").val();
                validatorRes.maxLength = $("#maxLength").val();
                validatorRes.regex = $("#custonValidator").val();
                validatorRes.compareKey1 = $("#compareKey1").val();
                validatorRes.compareKey2 = $("#compareKey2").val();
                validatorRes.minAge = $("#minAge").val();
            }

            listValidatorResult.push(validatorRes);
        }
    }

    return listValidatorResult;
}

function validatorResult() {
    var type = "";
    var text = "";
    var minLength = "";
    var maxLength = "";
    var regex = ""; 
    var compareKey1 = "";
    var compareKey2 = "";
    var minAge = 0;
}

function rulesResult() {
    var fieldReciver1 = "";
    var fieldReciver2 = "";
    var typeCompare = "";
    var valueCompare = "";
    var behaviorCompare = "";
    var elseCompare = "";
}
