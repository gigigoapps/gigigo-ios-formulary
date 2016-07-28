//======================================
//            VALIDATION              //
//======================================

//=== TEXTFIELD ===
function validateTextField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var placeHolder = $("#palceHolderTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');
    var keyboard = document.getElementById("selectTypeKeyboard").value;
    var validator = document.getElementById("selectTypeValidator").value;
    var minLength = $("#minLength").val()
    var maxLength = $("#maxLength").val()
    // Style
    var cellColor = $("#cellColorHex").val()
    var titleColor = $("#titleColorHex").val()
    var errorColor = $("#errorColorHex").val()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var align = document.getElementById("selectTypeAlign").value;
    var font = document.getElementById("selectTypeFont").value;

    if (font == "custom") {
        font = $("#custonFont").val()
    }
    
    if (error.length == 0) {
        error = "error_generic_field"
    }
    
    if (title.length > 0 &&  keyTextField.length > 0) {
        if (font.length > 0) {
            if (sizeTitle.length > 0 && sizeError.length > 0) {
                createField(keyTextField,title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font);
                saveField(keyTextField,"text",title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font)
            }
            else {
                alert("Si define un tipo de fuente debe elegir el tamaño de fuente para el titulo y el error");
            }
        } 
        else {
            createField(keyTextField,title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font);
            saveField(keyTextField,"text",title,placeHolder,error,mandatory,cellColor,keyboard,validator,minLength,maxLength,titleColor,errorColor,sizeTitle,sizeError,align,font)
        }
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

//=== DATE PICKER ===
function validateDatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()
    var minAgeContainer = $("#minAgeContainer").val()    

    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColor").text()
    var containerAceptColor = $("#containerAceptColor").text()
    var backgroundPickerColor = $("#backgroundPickerColor").text()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }

    if (title.length > 0 &&  keyTextField.length > 0){
        createDatePickerField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer);
        saveDatePickerField(keyTextField,"datePicker",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField,minAgeContainer);
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

//=== PICKER ===
function validatePickerField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');

    // Optional
    var acceptButtonTextField = $("#acceptButtonTextField").val()

    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    var aceptColor = $("#aceptColor").text()
    var containerAceptColor = $("#containerAceptColor").text()
    var backgroundPickerColor = $("#backgroundPickerColor").text()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }

    if (title.length > 0 &&  keyTextField.length > 0) {
        if (allPickerIsComplete()) {
            createPickerField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField);
            savePickerField(keyTextField,"picker",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError,aceptColor,containerAceptColor,backgroundPickerColor,acceptButtonTextField);
        }
        else {
            alert("Los campos de clave y valor de los picker deben estar todos rellenos");
        }
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}

function allPickerIsComplete() {
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
function validateBooleanField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var error = $("#errorTextField").val()
    var mandatory = $('#mandatory').is(':checked');
    // Style
    var cellColor = $("#cellColor").text()
    var titleColor = $("#titleColor").text()
    var errorColor = $("#errorColor").text()
    var sizeTitle = $("#sizeTitle").val()
    var sizeError = $("#sizeError").val()
    
    if (error.length == 0) {
        error = "error_generic_field"
    }
    
    if (title.length > 0 &&  keyTextField.length > 0) {
        createBooleanField(keyTextField,title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError);
        saveBooleanField(keyTextField,"boolean",title,error,mandatory,cellColor,titleColor,errorColor,sizeTitle,sizeError)
    }
    else {
        alert("Los campos con asterisco son obligatorios");
    }
}
