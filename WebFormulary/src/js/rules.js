
window.getRules= function getRules() {  
	var html = '';
	html += '<div class="zoneRule">';
	html += '	<input type="checkbox"name="rules"value="rules"id="rules">';
	html += '	<p id="textActiteRule">Active rule?</p>';
	html += '	<div id="containerRule">';
	html += '		<div id="fieldCompareRules">';
	html += '			<p>Keys Compare:</p>';
	html += '			<input type="text" name="fieldReciver" id="fieldReciver1" placeholder="key actual" class="fieldReciver">';
	html += '			<input type="text" name="fieldReciver" id="fieldReciver2" placeholder="otra key" class="fieldReciver">';
	html += '		</div>';
	html += '		<div id="compareRule">';
	html += '			<p>Tipo:</p>';
	html += '			<select class="selectTypeRuleCompare" id="selectTypeRuleCompare">';
	html += '				<option value="none">Elegir tipo de comparacion</option>';
	html += '				<option value="<">Menor que</option>';
	html += '				<option value=">">Mayor que</option>';
	html += '				<option value="=">igual</option>';
	html += '				<option value="!=">distinto</option>';
	html += '			</select>';
	html += '		</div>';
	html += '		<div id="valueRuleContainer">';
	html += '			<p>Valor a comparar:</p>';
	html += '			<input type="text" name="valueRule" id="valueRule">';
	html += '		</div>';
	html += '		<div id="behaviorRule">';
	html += '			<p>Comportamiento si cumple la regla:</p>';
	html += '			<select class="selectTypeRuleBehavior" id="selectTypeRuleBehavior">';
	html += '				<option value="">Elegir tipo de comportamiento</option>';
	html += '				<option value="show">Mostrar</option>';
	html += '				<option value="hide">Ocultar</option>';
	html += '				<option value="enable">Activo</option>';
	html += '				<option value="disable">Desactivo</option>';
	html += '			</select>';
	html += '		</div>';
	html += '		<div id="elseBehaviorRule">';
	html += '			<p>Comportamiento si NO cumple la regla:</p>';
	html += '			<select class="selectTypeRuleElseBehavior" id="selectTypeRuleElseBehavior">';
	html += '				<option value="">Elegir tipo de comportamiento</option>';
	html += '				<option value="show">Mostrar</option>';
	html += '				<option value="hide">Ocultar</option>';
	html += '				<option value="enable">Activo</option>';
	html += '				<option value="disable">Desactivo</option>';
	html += '			</select>';
	html += '		</div>';
	html += '	</div>';
	html += '</div>';
	return html;
}


window.generateHtmlRulesResult = function generateHtmlRulesResult(rules) {
	var html = '';
	html += '<div class="zoneRuleResult">';
    html += '	<h4>Reglas:</h4>';
    html += '	<p>keys:</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.fieldReciver1+'">';
    html += '	<p class="specialSpaceRule">,</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.fieldReciver2+'">';
    html += '	<p>Tipo:</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.typeCompare+'">';
    html += '	<p>Valor a Comparar:</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.valueCompare+'">';
    html += '	<div id="clearRule"></div>';
    html += '	<p>Si cumple la regla:</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.behaviorCompare+'">';
    html += '	<p>Si no cumple la regla:</p>';
    html += '	<input type="text" name="compareType" id="compareType" disabled value="'+rules.elseCompare+'">';
	html += '</div>';

	return html;
}


window.generateDicRules = function generateDicRules(rules) {
    var itemsRule = {}
    itemsRule["fieldReciver"] = [rules.fieldReciver1, rules.fieldReciver2];
    itemsRule["compare"] = rules.typeCompare;
    itemsRule["value"] = rules.valueCompare;
    itemsRule["behavior"] = rules.behaviorCompare;
    itemsRule["else"] = rules.elseCompare;
    return itemsRule;
}

