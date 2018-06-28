var html = '';
html += '<p>Color de la celda:</p>';
html += '<input type="color" value="#ffffff" id="cellColor" class="cellColorCreate">';
html += '<input id="cellColorHex" class="inputColorHex" placeholder="#ffffff">';
html += '<p class="colorTittleP">Color titulo:</p>';
html += '<input type="color" value="#ffffff" id="titleColor" class="cellColorCreate">';
html += '<input id="titleColorHex" class="inputColorHex" placeholder="#ffffff">';
html += '<p class="colorTittleP">Color Error:</p>';
html += '<input type="color" value="#ffffff" id="errorColor" class="cellColorCreate">';
html += '<input id="errorColorHex" class="inputColorHex" placeholder="#ffffff">';

window.colorBasicZone = html;