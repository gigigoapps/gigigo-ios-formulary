
//======================================
//         RECOVER    FIELDS          //
//======================================


window.getRecoverField = function getRecoverField() {
    var fieldValue = new fieldResult();
    fieldValue.type = document.getElementById("selectTypeField").value;
    fieldValue.key = $("#keyTextField").val()
    fieldValue.label = $("#titleTextField").val()
    fieldValue.placeHolder = $("#palceHolderTextField").val()
    if (document.getElementById("selectTypeKeyboard") != null) {
        fieldValue.keyboard = document.getElementById("selectTypeKeyboard").value;
    }    
    fieldValue.isPassword = $('#passwordTextField').is(':checked');
    fieldValue.isEditing = $('#isEditingTextField').is(':checked');
    fieldValue.isHidden = $('#isHiddenTextField').is(':checked');
    fieldValue.acceptButtonTextField = $("#acceptButtonTextField").val()
    fieldValue.isActiveRule = $('#rules').is(':checked');
    fieldValue.isExpandable = $('#isExpandable').is(':checked');
    if (fieldValue.isExpandable) {
        fieldValue.subtype = "expandable";
        fieldValue.description = $("#descripcionExpan").val()
        fieldValue.textbuttonReadMore = $("#expandText").val()
        fieldValue.textbuttonReadLess = $("#collapseText").val()
    }
    

    return fieldValue;
}


//======================================
//         RECOVER    RULES           //
//======================================


window.getRecoverRules = function getRecoverRules(isActiveRule) {
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


window.getRecoverValidations = function getRecoverValidations() {

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


window.getRecoverStyles = function getRecoverStyles() {
    var styles = new styleResult();
    var selector = document.getElementById("selectTypeCell").value;

    styles.typeCell = selector;
    styles.imageMandatory = $("#imageMandatory").val()
    styles.imageCheckBoxOff = $("#imageCheckBoxOff").val()
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


