
window.getRules= function getRules() {  
	return '<div class="fontPositionZone"> <p>Alineacion:</p><select id="selectTypeAlign"> <option value="">Por defecto</option> <option value="alignLeft">Izquierda</option> <option value="alignCenter">Centrado</option> <option value="alignRight">Derecha</option> </select> <p>Tipo de Fuente:</p><select id="selectTypeFont"> '+htmlListFont+' </select> <input id="custonFont" placeHolder="Nombre fuente personalizada"> </div>';
}