
window.getSelectorCell = function getSelectorCell() {
	var html = '';
	html += '<select id="selectTypeCell"  onchange="changeSelectioCell()">';
	html += '	<option value="none">Elige tipo de celda</option>';
	html += '	<option value="default">Estandar</option>';
	html += '	<option value="line">En linea</option>';
	html += '	<option value="custom">Vista externa</option>';
	html += '</select> ';

	return html;
}

                  
                      
window.getHtmlCustomCell = function getHtmlCustomCell() {
	var html = '';
	html += '<p>Nombre de la vista:</p>';
	html += '<input id="nameXib" type="text" name="element">';
	return html;
}



// Actions

window.changeSelectioCell = function changeSelectioCell() {
	var selector = document.getElementById("selectTypeCell").value;

	if (selector == "default" || selector == "line") {
    	$(".clasicCell").fadeIn();
    	$(".customCell").fadeOut();
    } else if (selector == "custom") {
    	$(".clasicCell").fadeOut();
    	$(".customCell").fadeIn();
    } else {
    	$(".clasicCell").fadeOut();
    	$(".customCell").fadeOut();
    }

}