

//======================================
//            VALIDATION              //
//======================================


//=== TEXTFIELD ===
window.validateTextField = function validateTextField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var placeHolder = $("#palceHolderTextField").val()
    var keyboard = document.getElementById("selectTypeKeyboard").value;
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    var isPassword = $('#passwordTextField').is(':checked');
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');
       

    if (controlError(title, keyTextField, styles)) {
        window.idValidatorField = 0;
        createField(keyTextField,title,placeHolder,keyboard,validator,isPassword, isEditing, isHidden, styles);
        saveField(keyTextField,"text",title,placeHolder,keyboard,validator,isPassword, isEditing, isHidden, styles);
    }
}

//=== DATE PICKER ===
window.validateDatePickerField = function validateDatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();
    var rules = getRecoverRules(isActiveRule);

    var acceptButtonTextField = $("#acceptButtonTextField").val()
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');
    var isActiveRule = $('#rules').is(':checked');


    if (controlError(title,keyTextField,styles)) {
        createDatePickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styles);
        saveDatePickerField(keyTextField,"datePicker",title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styles);
    }
}

//=== PICKER ===
window.validatePickerField = function validatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();

    var acceptButtonTextField = $("#acceptButtonTextField").val()
    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');


    if (controlError(title,keyTextField, styles)) {
        if (allPickerIsComplete()) {
            createPickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, styles);
            savePickerField(keyTextField,"picker",title,acceptButtonTextField, isEditing, isHidden, validator, styles);
        }
        else {
            alert("Los campos de clave y valor de los picker deben estar todos rellenos");
        }
    }
}


//=== BOOLEAN ===
window.validateBooleanField = function validateBooleanField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var validator = getRecoverValidations();
    var styles = getRecoverStyles();


    var isEditing = $('#isEditingTextField').is(':checked');
    var isHidden = $('#isEditingTextField').is(':checked');


    if (controlError(title,keyTextField,styles)) {
        createBooleanField(keyTextField,title,isEditing, isHidden, validator, styles);
        saveBooleanField(keyTextField,"boolean",title,isEditing, isHidden, validator, styles)
    }
}


//=== INDEX ===
window.validateIndexField = function validateIndexField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var styles = getRecoverStyles();
    

    if (controlError(title,keyTextField,styles)) {
        createIndexField(keyTextField,title)
        saveIndexField(keyTextField,"index",title)
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

window.controlError = function controlError(title, keyTextField, style) {
    if (title.length > 0 &&  keyTextField.length > 0) {
        if (style.font != null) {
            if (style.sizeTitle != null && style.sizeError != null) {
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


//======================================
//         RECOVER    STYLES          //
//======================================


function getRecoverStyles() {
    var styles = new styleResult();
    var selector = document.getElementById("selectTypeCell").value;

    styles.typeCell = selector;
    styles.imageMandatory = $("#imageMandatory").val()
    styles.imageMandatory = $("#imageMandatory").val()
    styles.imageCheckBoxOn = $("#imageCheckBoxOn").val()
    styles.aceptColor = $("#aceptColorHex").val()
    styles.containerAceptColor = $("#containerAceptColorHex").val()
    styles.backgroundPickerColor = $("#backgroundPickerColorHex").val()


    if (selector == "default" || selector == "line") {
        styles.cellColor = $("#cellColorHex").val()
        styles.titleColor = $("#titleColorHex").val()
        styles.errorColor = $("#errorColorHex").val()
        styles.sizeTitle = $("#sizeTitle").val()
        styles.sizeError = $("#sizeError").val()
        styles.align = document.getElementById("selectTypeAlign").value;
        styles.font = document.getElementById("selectTypeFont").value;

        if (styles.font == "custom") {
            styles.font = $("#custonFont").val()
        }
    } else if (selector == "custom") {
        styles.nameXib = $("#nameXib").val();
    } 

    return styles;
}


//======================================
//              MODELS                //
//======================================


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

function styleResult() {
    var cellColor = "";
    var titleColor = "";
    var errorColor = "";
    var sizeTitle = "";
    var sizeError = "";
    var align = "";
    var font = "";
    var typeCell = "";
    var nameXib = "";
    var imageMandatory = "";
    var imageCheckBoxOn = ""
    var imageCheckBoxOff = ""
    var aceptColor = "";
    var containerAceptColor = "";
    var backgroundPickerColor = "";
}
