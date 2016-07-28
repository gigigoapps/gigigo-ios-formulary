

var cellColorEvent;
var titleColorEvent;
var errorColorEvent;

function launchEventColors() {
	cellColorEvent = document.getElementById("cellColor");
	titleColorEvent = document.getElementById("titleColor");
	errorColorEvent = document.getElementById("errorColor");

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
}