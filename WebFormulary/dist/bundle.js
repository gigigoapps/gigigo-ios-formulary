/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
 * clipboard.js v1.5.12
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return require(a,!0);if(r)return require(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n?n:t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){var o=t("matches-selector");e.exports=function(t,e,n){for(var i=n?t:t.parentNode;i&&i!==document;){if(o(i,e))return i;i=i.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e,!0),n.delegateTarget&&o.call(t,n)}}var r=t("closest");e.exports=o},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return s(document.body,t,e,n)}var c=t("./is"),s=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t,e){if(r)return r.call(t,e);for(var n=t.parentNode.querySelectorAll(e),o=0;o<n.length;++o)if(n[o]==t)return!0;return!1}var i=Element.prototype,r=i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=o},{}],6:[function(t,e,n){function o(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(t),n.removeAllRanges(),n.addRange(o),e=n.toString()}return e}e.exports=o},{}],7:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;i>o;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;a>r;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if("undefined"!=typeof o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){this.text?this.selectFake():this.target&&this.selectTarget()},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=(0,i.default)(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},a(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:6}],9:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=i(e),u=i(n),f=i(o),d=function(t){function e(n,o){r(this,e);var i=a(this,t.call(this));return i.resolveOptions(o),i.listenClick(n),i}return c(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return s("action",e)},e.prototype.defaultTarget=function t(e){var n=s("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return s("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(u.default);t.exports=d})},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

window.listFonts = 'AcademyEngravedLetPlain,AlNile-Bold,AlNile,AmericanTypewriter,AmericanTypewriter-Bold,AmericanTypewriter-Condensed,AmericanTypewriter-CondensedBold,AmericanTypewriter-CondensedLight,AmericanTypewriter-Light,AppleColorEmoji,AppleSDGothicNeo-Thin,AppleSDGothicNeo-UltraLight,AppleSDGothicNeo-Light,AppleSDGothicNeo-Regular,AppleSDGothicNeo-Medium,AppleSDGothicNeo-SemiBold,AppleSDGothicNeo-Bold,AppleSDGothicNeo-Medium,ArialMT,Arial-BoldItalicMT,Arial-BoldMT,Arial-ItalicMT,ArialHebrew,ArialHebrew-Bold,ArialHebrew-Light,ArialRoundedMTBold,Avenir-Black,Avenir-BlackOblique,Avenir-Book,Avenir-BookOblique,Avenir-Heavy,Avenir-HeavyOblique,Avenir-Light,Avenir-LightOblique,Avenir-Medium,Avenir-MediumOblique,Avenir-Oblique,Avenir-Roman,AvenirNext-Bold,AvenirNext-BoldItalic,AvenirNext-DemiBold,AvenirNext-DemiBoldItalic,AvenirNext-Heavy,AvenirNext-HeavyItalic,AvenirNext-Italic,AvenirNext-Medium,AvenirNext-MediumItalic,AvenirNext-Regular,AvenirNext-UltraLight,AvenirNext-UltraLightItalic,AvenirNextCondensed-Bold,AvenirNextCondensed-BoldItalic,AvenirNextCondensed-DemiBold,AvenirNextCondensed-DemiBoldItalic,AvenirNextCondensed-Heavy,AvenirNextCondensed-HeavyItalic,AvenirNextCondensed-Italic,AvenirNextCondensed-Medium,AvenirNextCondensed-MediumItalic,AvenirNextCondensed-Regular,AvenirNextCondensed-UltraLight,AvenirNextCondensed-UltraLightItalic,BanglaSangamMN,BanglaSangamMN-Bold,Baskerville,Baskerville-Bold,Baskerville-BoldItalic,Baskerville-Italic,Baskerville-SemiBold,Baskerville-SemiBoldItalic,BodoniOrnamentsITCTT,BodoniSvtyTwoITCTT-Bold,BodoniSvtyTwoITCTT-Book,BodoniSvtyTwoITCTT-BookIta,BodoniSvtyTwoOSITCTT-Bold,BodoniSvtyTwoOSITCTT-Book,BodoniSvtyTwoOSITCTT-BookIt,BodoniSvtyTwoSCITCTT-Book,BradleyHandITCTT-Bold,ChalkboardSE-Bold,ChalkboardSE-Light,ChalkboardSE-Regular,Chalkduster,Cochin,Cochin-Bold,Cochin-BoldItalic,Cochin-Italic,Copperplate,Copperplate-Bold,Copperplate-Light,Courier,Courier-Bold,Courier-BoldOblique,Courier-Oblique,CourierNewPS-BoldItalicMT,CourierNewPS-BoldMT,CourierNewPS-ItalicMT,CourierNewPSMT,DINAlternate-Bold,DINCondensed-Bold,DamascusBold,Damascus,DamascusLight,DamascusMedium,DamascusSemiBold,DevanagariSangamMN,DevanagariSangamMN-Bold,Didot,Didot-Bold,Didot-Italic,DiwanMishafi,EuphemiaUCAS,EuphemiaUCAS-Bold,EuphemiaUCAS-Italic,Farah,Futura-CondensedExtraBold,Futura-CondensedMedium,Futura-Medium,Futura-MediumItalic,GeezaPro,GeezaPro-Bold,Georgia,Georgia-Bold,Georgia-BoldItalic,Georgia-Italic,GillSans,GillSans-SemiBold,GillSans-SemiBoldItalic,GillSans-Bold,GillSans-BoldItalic,GillSans-UltraBold,GillSans-Italic,GillSans-Light,GillSans-LightItalic,GujaratiSangamMN,GujaratiSangamMN-Bold,GurmukhiMN,GurmukhiMN-Bold,STHeitiSC-Light,STHeitiSC-Medium,STHeitiTC-Light,STHeitiTC-Medium,Helvetica,Helvetica-Bold,Helvetica-BoldOblique,Helvetica-Light,Helvetica-LightOblique,Helvetica-Oblique,HelveticaNeue,HelveticaNeue-Bold,HelveticaNeue-BoldItalic,HelveticaNeue-CondensedBlack,HelveticaNeue-CondensedBold,HelveticaNeue-Italic,HelveticaNeue-Light,HelveticaNeue-LightItalic,HelveticaNeue-Medium,HelveticaNeue-MediumItalic,HelveticaNeue-UltraLight,HelveticaNeue-UltraLightItalic,HelveticaNeue-Thin,HelveticaNeue-ThinItalic,HiraMinProN-W,HiraMinProN-W,HiraginoSans-W,HiraginoSans-W,HoeflerText-Black,HoeflerText-BlackItalic,HoeflerText-Italic,HoeflerText-Regular,IowanOldStyle-Bold,IowanOldStyle-BoldItalic,IowanOldStyle-Italic,IowanOldStyle-Roman,Kailasa,Kailasa-Bold,KannadaSangamMN,KannadaSangamMN-Bold,KhmerSangamMN,KohinoorBangla-Light,KohinoorBangla-Regular,KohinoorBangla-Semibold,KohinoorDevanagari-Book,KohinoorDevanagari-Light,KohinoorDevanagari-Medium,KohinoorTelugu-Light,KohinoorTelugu-Regular,KohinoorTelugu-Medium,LaoSangamMN,MalayalamSangamMN,MalayalamSangamMN-Bold,Menlo-BoldItalic,Menlo-Regular,Menlo-Bold,Menlo-Italic,MarkerFelt-Thin,MarkerFelt-Wide,Noteworthy-Bold,Noteworthy-Light,Optima-Bold,Optima-BoldItalic,Optima-ExtraBlack,Optima-Italic,Optima-Regular,OriyaSangamMN,OriyaSangamMN-Bold,Palatino-Bold,Palatino-BoldItalic,Palatino-Italic,Palatino-Roman,Papyrus,Papyrus-Condensed,PartyLetPlain,PingFangHK-Ultralight,PingFangHK-Light,PingFangHK-Thin,PingFangHK-Regular,PingFangHK-Medium,PingFangHK-Semibold,PingFangSC-Ultralight,PingFangSC-Light,PingFangSC-Thin,PingFangSC-Regular,PingFangSC-Medium,PingFangSC-Semibold,PingFangTC-Ultralight,PingFangTC-Light,PingFangTC-Thin,PingFangTC-Regular,PingFangTC-Medium,PingFangTC-Semibold,SavoyeLetPlain,SinhalaSangamMN,SinhalaSangamMN-Bold,SnellRoundhand,SnellRoundhand-Black,SnellRoundhand-Bold,Symbol,TamilSangamMN,TamilSangamMN-Bold,TeluguSangamMN,TeluguSangamMN-Bold,Thonburi,Thonburi-Bold,Thonburi-Light,TimesNewRomanPS-BoldItalicMT,TimesNewRomanPS-BoldMT,TimesNewRomanPS-ItalicMT,TimesNewRomanPSMT,Trebuchet-BoldItalic,TrebuchetMS,TrebuchetMS-Bold,TrebuchetMS-Italic,Verdana,Verdana-Bold,Verdana-BoldItalic,Verdana-Italic,ZapfDingbatsITC,Zapfino';

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

//======================================
//        BOOLEAN   (YA CREADO)       //
//======================================
            
window.createBooleanField = function createBooleanField(keyTextField,title, isEditing, isHidden, validator, styleM) {

    var isEditingValueCheck = ""
    if (isEditing) {
        isEditingValueCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlAllImage(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);

    var styles;
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages;
    } else if (htmlImages.length > 0) {
        styles = htmlImages;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }

    var html = __webpack_require__(17)
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingValueCheck}}',isEditingValueCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveBooleanField = function saveBooleanField(keyTextField,type,title, isEditing, isHidden, validator, styleM) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title
    }

    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }

    var itemsValidators = generateDicValidator(validator);

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(styleM);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)

    indexField++;
}



/***/ }),
/* 3 */
/***/ (function(module, exports) {

window.colorBasicZone = ' <p>Color de la celda:</p><input type="color" value="#ffffff" id="cellColor" class="cellColorCreate"><input id="cellColorHex" class="inputColorHex" placeholder="#ffffff"> <p class="colorTittleP">Color titulo:</p><input type="color" value="#ffffff" id="titleColor" class="cellColorCreate"><input id="titleColorHex" class="inputColorHex" placeholder="#ffffff"> <p class="colorTittleP">Color Error:</p><input type="color" value="#ffffff" id="errorColor" class="cellColorCreate"><input id="errorColorHex" class="inputColorHex" placeholder="#ffffff">';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

//==============================================//
//               CREATE VALIDATOR               //
//==============================================//
window.idValidatorField = 1
window.addContainerValidators = function addContainerValidators() {

	var html = '';
	html+= '<div class="containerValidatorField" id="containerValidatorField'+idValidatorField+'">';
	html+=  getListValidators(idValidatorField);
	html+= '	<p class="textErrorVal">Texto error:</p>';
	html+= '	<input id="inputValueValidatorField'+idValidatorField+'" type="text" name="element" placeholder="Texto de error">';
	html+= '	<p class="buttonLess" onclick="removeContainerValidator('+idValidatorField+')">-</p>';
    html+= '    <div id="extraFieldsValidator'+idValidatorField+'" class="extraFieldsValidator"></div>';
	html+= '</div>';

    $("#validatorContainerInsert").append(html);
    idValidatorField++;
}

window.removeContainerValidator = function removeContainerValidator(idContainerPicker) {
    $("#containerValidatorField"+idContainerPicker).slideUp(function(){
           $("#containerValidatorField"+idContainerPicker).remove()
    });
}


window.getValidatorsZone = function getValidatorsZone() {
	var html = '';
	html+= '<div id="valuesValidators">';
	html+= '	<div id="containerValidatorFieldAdd">';
	html+= '		<p id="addFieldPickerText">Añadir campos del validador:</p>';
	html+= '		<div id="sumatoryPicker"><p onclick="addContainerValidators()">+</p></div>';
	html+= '	</div>';
	html+= '	<div id="validatorContainerInsert"></div>';
	html+= '</div>';

	return html;
}

window.getListValidators = function getListValidators(idContainerValidator){
	var html = '';
    html+= '              <select id="selectTypeValidator'+idContainerValidator+'" id="otro" class="selectTypeValidator" onchange="changeSelectionValidator('+idContainerValidator+')">';
    html+= '                  <option value="None">Tipo validador</option>';
    html+= '                  <option value="mandatory">Obligatorio</option>';
    html+= '                  <option value="text">Texto</option>';
    html+= '                  <option value="email">Email</option>';
    html+= '                  <option value="lengthText">Long texto</option>';
    html+= '                  <option value="numeric">Numérico</option>';
    html+= '                  <option value="postalCode">Código postal</option>';
    html+= '                  <option value="phone">Teléfono</option>';
    html+= '                  <option value="dniNie">DNI/NIE</option>';
    html+= '                  <option value="customValidator">Custom</option>';
    html+= '                  <option value="compare">Comparador campos</option>';
    html+= '                  <option value="bool">Boleano</option>';
    html+= '                  <option value="age">Edad mínima</option>';
    html+= '              </select>';

	return html;
}


window.changeSelectionValidator = function changeSelectionValidator(idClassValidator) {

    var selectorFound = document.getElementById("selectTypeValidator"+idClassValidator);
    var extraFound = document.getElementById("extraFieldsValidator"+idClassValidator);
    var valueFound = selectorFound.value;

    $("#extraFieldsValidator"+idClassValidator).html();
    extraFound.style.display = "none"; 

    if (valueFound == "customValidator") {
        $("#extraFieldsValidator"+idClassValidator).html('<input id="custonValidator" placeHolder="Regex Custom">');
        extraFound.style.display = "block";
    }

    if (valueFound == "lengthText") {
        var html = '';
        html+= '<div id="minMaxValidatorContainer">';
        html+= '    <p>minLength:</p>';
        html+= '    <input class="inputWidth" type="text" name="minLength"id="minLength">';
        html+= '    <p>maxLength:</p>';
        html+= '    <input class="inputWidth" type="text" name="maxLength"id="maxLength">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }

    if (valueFound == "compare") {
        var html = '';
        html+= '<div id="compareCreateContainer">';
        html+= '    <p>Clave actual:</p>';
        html+= '    <input class="inputWidth" type="text" name="compareKey1" id="compareKey1">';
        html+= '    <p>clave objetivo:</p>';
        html+= '    <input class="inputWidth" type="text" name="compareKey2" id="compareKey2">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }

    if (valueFound == "age") {
        var html = '';
        html+= '<div id="compareCreateContainer">';
        html+= '    <p>Edad mínima:</p>';
        html+= '    <input class="inputWidth" type="text" name="minAge" id="minAge">';
        html+= '</div>';
        $("#extraFieldsValidator"+idClassValidator).html(html);
        extraFound.style.display = "block";
    }
}


window.generateHtmlValidator = function generateHtmlValidator(validator) {
   /* ----------------------- CREATE VALIDATOR HTML ----------------------- */
    var html = "";
    if (validator.length > 0) {        
        html += '<h4>Validadores:</h4>';
    }

    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        html += '<div class="containerValidator" id="containerValidator'+i+'">';  

        if (valElement.type != "None") {

            html += '<div class="errorTextField">';
            html += '      <p class="textErrorP typeValidator">Tipo validador: </p>';
            html += '      <input class="textErrorCreated" type="text" name="typeCompareInput" id="typeCompareInput" disabled value="'+valElement.type+'">';
            html += '      <p class="textErrorP">Texto error:</p>';
            html += '      <input class="textErrorCreated" type="text" name="errorTextField" id="errorTextField" disabled value="'+valElement.text+'">';

            if (valElement.type == "lengthText") {
                if (valElement.minLength.length > 0) {
                    html += '<p>minLength:</p>';
                    html += '<input class="inputWidth" type="text" name="minLength"id="minLength" disabled readonly value="'+valElement.minLength+'">';
                }
                if (valElement.maxLength.length > 0) {
                    html += '<p>maxLength:</p>';
                    html += '<input class="inputWidth" type="text" name="maxLength"id="maxLength" disabled readonly value="'+valElement.maxLength+'">';
                }                  
            }

            if (valElement.type == "customValidator") {
                html += '<p>Custom regex:</p>';
                html += '<input type="text" class="customValidatorCreated" name="customValidatorTextField" id="customValidatorTextField" disabled value="'+valElement.regex+'">'
            }

            if (valElement.type == "compare") {
                html += '<p>Keys Compare:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="'+valElement.compareKey1+','+valElement.compareKey2+'">';
            }
            if (valElement.type == "mandatory") {
                html += '<p>Obligatorio:</p>';
                html += '<input type="text" name="compareKeysField" id="compareKeysField" disabled value="true">';
            }
            if (valElement.type == "age") {
                html += '<p>Edad mínima:</p>';
                html += '<input type="text" class="customValidatorCreated" name="customValidatorTextField" id="customValidatorTextField" disabled value="'+valElement.minAge+'">'
            }
            

            html += '</div>';
        }

        html += '</div>';
    }

    return html;
}


window.generateDicValidator = function generateDicValidator(validator) {
    var itemsValidators = []
    for (var i = 0; i < validator.length; i++) {
        var valElement = validator[i];

        var itemValidate = {}
        itemValidate["type"] = valElement.type;
        itemValidate["textError"] = valElement.text;

        if (valElement.type == "compare") {
            itemValidate["itemsCompare"] = [valElement.compareKey1, valElement.compareKey2];
        }
        if (valElement.type == "age") {
            itemValidate["minAge"] = valElement.minAge;
        }
        if (valElement.type == "customValidator") {
            itemValidate["regex"] = valElement.regex;
        }


        if (valElement.type == "lengthText") {
            if (valElement.minLength.length > 0) {
                itemValidate["minLength"] = valElement.minLength;
            }
            if (valElement.maxLength.length > 0) {
                itemValidate["maxLength"] = valElement.maxLength;
            }
        }

        itemsValidators.push(itemValidate);
    }

    return itemsValidators;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


//======================================
//            DATE   PICKER           //
//======================================


//-- DATE PICKER YA CREADO SOLO MOSTRAR --
window.createDatePickerField = function createDatePickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styleM) {

    var isEditingCheck = ""
    if (isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    var htmlRules = '';
    if (isActiveRule) {
        htmlRules = generateHtmlRulesResult(rules)
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlColorBasic = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlColorPicker = getStyleColorPicker (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlImageMandatory(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);


    var styles = '';
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages + htmlColorPicker;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages + htmlColorPicker;
    } else if (htmlImages.length > 0 || htmlColorPicker.length > 0) {
        styles = htmlImages + htmlColorPicker;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


    var html = __webpack_require__(19)
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isEditingCheck}}',isEditingCheck)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace('{{acceptButtonTextField}}',acceptButtonTextField)
            .replace('{{htmlRules}}',htmlRules)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveDatePickerField = function saveDatePickerField(keyTextField,type,title,acceptButtonTextField,isEditing, isHidden, validator, isActiveRule, rules, styleM) {
    
    //-- MANDATORY FIELDS --

    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title
    }
    
    //-- OPTIONAL FIELDS --

    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }              
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    }                
 
    var itemsValidators = generateDicValidator(validator);
    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }

    if (isActiveRule) {
        itemSave["rules"] = generateDicRules(rules)
    }    

    var styles = getStylesJson(styleM);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
        
    indexField++;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {



window.cellColorEvent;
window.titleColorEvent;
window.errorColorEvent;
window.aceptColorEvent;
window.containerAceptColorEvent;
window.backgroundPickerColorEvent;

window.launchEventColors = function launchEventColors() {
	cellColorEvent = document.getElementById("cellColor");
	titleColorEvent = document.getElementById("titleColor");
	errorColorEvent = document.getElementById("errorColor");
	aceptColorEvent = document.getElementById("aceptColor");
	containerAceptColorEvent = document.getElementById("containerAceptColor");
	backgroundPickerColorEvent = document.getElementById("backgroundPickerColor");

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

	if (aceptColorEvent) {
		aceptColorEvent.addEventListener("input", function() {
		    $("#aceptColorHex").val(aceptColorEvent.value)
		}, false);
	}

	if (containerAceptColorEvent) {
		containerAceptColorEvent.addEventListener("input", function() {
		    $("#containerAceptColorHex").val(containerAceptColorEvent.value)
		}, false);
	}

	if (backgroundPickerColorEvent) {
		backgroundPickerColorEvent.addEventListener("input", function() {
		    $("#backgroundPickerColorHex").val(backgroundPickerColorEvent.value)
		}, false);
	}	
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {


window.getFontPositionZone= function getFontPositionZone() {
    var htmlListFont = createListOptionsFont();
	return '<div class="fontPositionZone"> <p>Alineacion:</p><select id="selectTypeAlign"> <option value="">Por defecto</option> <option value="alignLeft">Izquierda</option> <option value="alignCenter">Centrado</option> <option value="alignRight">Derecha</option> </select> <p>Tipo de Fuente:</p><select id="selectTypeFont"> '+htmlListFont+' </select> <input id="custonFont" placeHolder="Nombre fuente personalizada"> </div>';
}

window.createListOptionsFont = function createListOptionsFont() {
    var htmlListFont = '<option value="">Por defecto</option><option value="custom">Personalizada</option>';
    var arrayListFonts = listFonts.split(","); 

    for (var i = 0; i < arrayListFonts.length; i++) {
        htmlListFont +='<option value="'+arrayListFonts[i]+'">'+arrayListFonts[i]+'</option>';                    
    }
    return htmlListFont;
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

window.getHtmlImageMandatory = function getHtmlImageMandatory() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"></div>';
}

window.getHtmlAllImage = function getHtmlAllImage() {
	return '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element"><p>Imagen checkBox On:</p><input id="imageCheckBoxOn"type="text"name="element"><p>Imagen checkBox Off:</p><input id="imageCheckBoxOff"type="text"name="element"></div>';
}

window.recoverHtmlImageMandatory = function recoverHtmlImageMandatory(style) {

    var htmlImage = '';
    if (style.imageMandatory != "") {
		htmlImage = '<div class="imagesZone"><p>Imagen obligatorio:</p><input id="imageMandatory"type="text"name="element" disabled readonly value="'+style.imageMandatory+'"></div>';
	}

	return htmlImage
}

window.recoverHtmlAllImage = function recoverHtmlAllImage(style) {

    var html = '';
    if (style.imageMandatory != "" || style.imageCheckBoxOn != "" || style.imageCheckBoxOff != "") {
		html += '<div class="imagesZone">';
		html += '	<p>Imagen obligatorio:</p>';
		html += '	<input id="imageMandatory"type="text"name="element" disabled readonly value="'+style.imageMandatory+'">';
		html += '	<p>Imagen checkBox On:</p>';
		html += '	<input id="imageCheckBoxOn"type="text"name="element" disabled readonly value="'+style.imageCheckBoxOn+'">';
		html += '	<p>Imagen checkBox Off:</p>';
		html += '	<input id="imageCheckBoxOff"type="text"name="element" disabled readonly value="'+style.imageCheckBoxOff+'">';
		html += '</div>';
	}

	return html
}





/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


//======================================
//               TEXT (YA CREADO)     //
//======================================

window.createIndexField = function createIndexField(keyTextField, title, styleM) {
    
    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlBackgroundColor = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlCustom = getStyleCustom(styleM);
    

    var styles = '';
    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }

        
    var html = __webpack_require__(21)
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace(/\{\{indexField\}\}/g,indexField)


    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveIndexField = function saveIndexField(keyTextField, type, title, styleM) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":keyTextField,
        "type":type,
        "label":title
    }
    
    
    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(styleM);
    
    if (styles != null) {
        itemSave["style"] = styles
    }
    
    listFieldsResult.push(itemSave)
 
    indexField++;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {



window.fieldSelected = ""
window.listFieldsResult = []
window.indexField = 0


window.removeField = function removeField(idRemove){
    var auxListFieldsResult = [];
    
    for (var i=0; i<listFieldsResult.length; i++) {
        
        var find = false;
        
        $.each(listFieldsResult[i], function(index, val) {
            if (index == "tag" && val == idRemove){
                find = true;
            }
        });
        
        if (!find) {
            auxListFieldsResult.push(listFieldsResult[i])
        }
    }
    
    listFieldsResult = auxListFieldsResult;
    
    $("#fieldNumber"+idRemove).slideUp();
}
            
window.addField = function addField() {
    if (fieldSelected == "Text") {
        validateTextField();
    }
    else if (fieldSelected == "Picker") {
        validatePickerField();
    }
    else if (fieldSelected == "DatePicker") {
        validateDatePickerField();
    }
    else if (fieldSelected == "Boolean") {
        validateBooleanField();
    }
    else if (fieldSelected == "Index") {
        validateIndexField();
    }
}

window.resetTypeField = function resetTypeField() {
    clearTypeField()
    $(".selectTypeField").val("None");
}

window.clearTypeField = function clearTypeField(){
    $("#createField").slideUp(function(){
           $("#containterElementField").empty()
    });
}

//======================================
//          ADD NEW FILED             //
//======================================

window.createElementField = function createElementField(typeField) {
    $("#containterElementField").empty()
    fieldSelected = typeField;
    var html = '';
    var htmlFont = getFontPositionZone()
    var htmlImage = getHtmlImageMandatory();
    var htmlRules = getRules();
    var htmlValidators = getValidatorsZone();
    var htmlSelectorCell = getSelectorCell();
    var htmlCustomCell = getHtmlCustomCell();

    if (typeField == "Text") {
        html = __webpack_require__(24)
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "Picker") {
        idPickerField = 1; // Reset Picker
        html = __webpack_require__(22)
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "DatePicker") {
        html = __webpack_require__(18)
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "Boolean") {
        htmlImage = getHtmlAllImage();
        html = __webpack_require__(16)
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlImage}}',htmlImage)
            .replace('{{htmlRules}}',htmlRules)
            .replace('{{htmlValidators}}',htmlValidators)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }
    else if (typeField == "Index") {
        html = __webpack_require__(20)
            .replace('{{colorBasicZone}}',colorBasicZone)
            .replace('{{htmlFont}}',htmlFont)
            .replace('{{htmlSelectorCell}}',htmlSelectorCell)
            .replace('{{htmlCustomCell}}',htmlCustomCell)
    }

    $("#containterElementField").append(html)

    launchEventColors();
    createEventFont();
    createEventTextCompare();
    createEventRules();
    showContainerCustomValidate();
}

window.createEventFont = function createEventFont() {
     $("#selectTypeFont").change(function() {
         if (this.value == "custom") {
            $("#custonFont").css("display","block");
         }
         else {
            $("#custonFont").css("display","none");
         }
    });
}
// TODO EDU falta el compare

window.createEventRules = function createEventRules() {
  
     $("#rules").change(function() {
         if (this.checked == true) {
            $("#containerRule").css("display","block");
         }
         else {
            $("#containerRule").css("display","none");
         }
    });
}

window.createEventTextCompare = function createEventTextCompare() {
     $("#compare").change(function() {
         if (this.checked == true) {
            $("#containerCompare").css("display","block");
            $("#compareTextError").css("display","block");
         }
         else {
            $("#containerCompare").css("display","none");
            $("#compareTextError").css("display","none");
         }
    });
}

window.showContainerCustomValidate = function showContainerCustomValidate() {
     $("#selectTypeValidator").change(function() {
         if (this.value == "customValidator") {
            $("#custonValidator").css("display","block");
         }
         else {
            $("#custonValidator").css("display","none");
         }
         if (this.value == "None") {
            $("#validatorTextError").css("display","none");
         }
         else {
            $("#validatorTextError").css("display","block");
         }

         if (this.value == "lengthText") {
            $("#minMaxValidatorContainer").css("display","block");
         }
         else {
            $("#minMaxValidatorContainer").css("display","none");
         }
    });
}

window.syntaxHighlight = function syntaxHighlight(json) {
if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2);
}
json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                        cls = 'key';
                        } else {
                        cls = 'string';
                        }
                        } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                        } else if (/null/.test(match)) {
                        cls = 'null';
                        }
                        return '<span class="' + cls + '">' + match + '</span>';
                        });
 }
                    
                    
                    
window.copiarAlPortapapeles = function copiarAlPortapapeles() {
        var aux = document.createElement("input");
                    
        var recoverJSON = JSON.stringify(listFieldsResult, undefined, 4);
        recoverJSON = '{ \n "fields":'+recoverJSON+' \n}';
                    
        aux.setAttribute("value", recoverJSON);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }




//======================================
//          GENERAR JSON              //
//======================================

                    
window.output = function output(inp) {
     document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}
                 

$(".selectTypeField").change(function() {
     createElementField(this.value)
});             
                    

window.copyList = function copyList(listFields) {
    var copyListFields = JSON.parse(JSON.stringify(listFields));

    for (var i = 0; i < copyListFields.length; i++) {
        var field = copyListFields[i];
        delete field["tag"];
        copyListFields[i] = field;
    }

    return copyListFields;
}

$("#buttonGenerateJson").click(function() {
    $("#containerJsonItemsCreated").empty()
    var copyListField = copyList(listFieldsResult);
    var recoverJSON = JSON.stringify(copyListField, undefined, 4);
    recoverJSON = '{ \n "fields":'+recoverJSON+' \n}';
    $("#containerJsonItemsCreated").append("<button class='btn butonCopyPaste' data-clipboard-action='copy' data-clipboard-target='#bar'>Copiar</button><textarea id='bar'>"+recoverJSON+"</textarea><pre>"+syntaxHighlight(recoverJSON)+"</pre>")

    $('html, body').animate({
       scrollTop: $("#containerJsonItemsCreated").offset().top
    }, 1000)
});
 
var idColor = ""           
window.cellColorOpen = function cellColorOpen(idCellColor) {
	idColor = idCellColor;
    $("#ControlColor").show();
}
                    
$("#closeSaveColor").click(function() {
    $("#ControlColor").hide();
    $("#"+idColor).css("background-color", $("#testPatch").text());
    $("#"+idColor).empty()
    $("#"+idColor).append("<p id='colorId'>"+$("#testPatch").text()+"</p>");
});
                    
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
             console.log("OK");
             console.log(e);
             });

clipboard.on('error', function(e) {
             console.log("OK");
             console.log(e);
             });





/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


//======================================
//               PICKER               //
//======================================
window.idPickerField = 1
window.addContainerPicker = function addContainerPicker() {
    $("#pickerFieldsInsert").append('<div class="containerPickerField" id="containerPickerField'+idPickerField+'"><input id="inputKeyPickerField'+idPickerField+'" type="text" name="element" placeholder="Clave Picker"><input id="inputValuePickerField'+idPickerField+'" type="text" name="element" placeholder="Valor picker"><p onclick="removeContainerPicker('+idPickerField+')">-</p></div>');
    idPickerField++;
}

window.removeContainerPicker = function removeContainerPicker(idContainerPicker) {
    $("#containerPickerField"+idContainerPicker).slideUp(function(){
           $("#containerPickerField"+idContainerPicker).remove()
    });
}

//-- PICKER YA CREADO SOLO MOSTRAR --
window.createPickerField = function createPickerField(keyTextField,title,acceptButtonTextField,isEditing, isHidden, validator, styleM) {

    var isEditingCheck = ""
    if (isEditing) {
        isEditingCheck = "checked"
    }
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover Styles --
    var htmlTypeCell = getTypeCell(styleM);
    var htmlColorBasic = getStyleColor(styleM);
    var htmlFontSize = getStyleSize (styleM);
    var htmlColorPicker = getStyleColorPicker (styleM);
    var htmlAlingFont = getAlignFont(styleM)
    var htmlImages = recoverHtmlImageMandatory(styleM)
    var htmlValidator = generateHtmlValidator(validator);
    var htmlCustom = getStyleCustom(styleM);


    if (styleM.typeCell == "default" || styleM.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages + htmlColorPicker;
    } else if (styleM.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages + htmlColorPicker;
    } else if (htmlImages.length > 0 || htmlColorPicker.length > 0) {
        styles = htmlImages + htmlColorPicker;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


    //-- Create options fields --
    var htmlPickerItems = '';
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()

        if (idKey != undefined && idValue != undefined) {
            var html = '';
            html += '<div class="containerPickerField">';
            html += '   <input type="text" name="element" value="'+idKey+'" disabled readonly>';
            html += '   <input type="text" name="element" value="'+idValue+'" disabled readonly>';
            html += '</div>';
            htmlPickerItems = htmlPickerItems + html;
        }
    }

    var html = __webpack_require__(23)
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace('{{htmlPickerItems}}',htmlPickerItems) 
            .replace('{{isEditingChecked}}',isEditingCheck)
            .replace('{{acceptButtonTextField}}',acceptButtonTextField)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.savePickerField = function savePickerField(keyTextField,type,title,acceptButtonTextField,isEditing, isHidden, validator, styleM) {
    
    //-- MANDATORY FIELDS --
    var listOptions = [];
    for (var i = 0; i < idPickerField; i++) {
        var idKey = $("#inputKeyPickerField"+i).val()
        var idValue = $("#inputValuePickerField"+i).val()
        var options = {
            "key": idKey,
            "value":idValue
        }
        if (idKey != undefined && idValue != undefined) {
            listOptions.push(options)
        }        
    }

    var itemSave = {
        "key":keyTextField,
        "tag":indexField,
        "type":type,
        "label":title,
        "listOptions":listOptions
    }
    
    //-- OPTIONAL FIELDS --

    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }             
    if (acceptButtonTextField.length > 0) {
        itemSave["textAcceptButton"] = acceptButtonTextField
    } 
    
    var itemsValidators = generateDicValidator(validator);

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }

    var styles = getStylesJson(styleM);
    if (styles != null) {
        itemSave["style"] = styles
    }    

    //-- SAVE ITEMS --
    listFieldsResult.push(itemSave)
    
    indexField++;
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {


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



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


//======================================
//               TEXT (YA CREADO)     //  
//======================================
            

window.createField = function createField(keyTextField,title,placeHolder,keyboard,validator, isPassword, isEditing, isHidden, style) {

    var isPasswordChecked = ""
    if (isPassword) {
        isPasswordChecked = "checked"
    }
    var isEditingChecked = ""
    if (isEditing) {
        isEditingChecked = "checked"
    } 
    var isHiddenChecked = ""
    if (isHidden) {
        isHiddenChecked = "checked"
    }

    //-- Recover HTML --
    var htmlTypeCell = getTypeCell(style);
    var htmlBackgroundColor = getStyleColor(style);
    var htmlFontSize = getStyleSize (style);
    var htmlAlingFont = getAlignFont(style)
    var htmlImages = recoverHtmlImageMandatory(style)    
    var htmlCustom = getStyleCustom(style);
    var htmlValidator = generateHtmlValidator(validator);
    

    var styles;
    if (style.typeCell == "default" || style.typeCell == "line") {
        styles =  htmlTypeCell + htmlFontSize + htmlBackgroundColor + htmlAlingFont + htmlImages;
    } else if (style.typeCell == "custom") {
        styles =  htmlTypeCell + htmlCustom + htmlImages;
    } else if (htmlImages.length > 0) {
        styles = htmlImages;
    } else {
        styles = '<p class="styleDefault">Estilos por defecto</p>';
    }


    var html = __webpack_require__(25)
            .replace('{{styles}}',styles)
            .replace('{{keyTextField}}',keyTextField)
            .replace('{{title}}',title)
            .replace('{{placeHolder}}',placeHolder)
            .replace('{{keyboard}}',keyboard)
            .replace('{{htmlValidator}}',htmlValidator)
            .replace('{{isPasswordChecked}}',isPasswordChecked)
            .replace('{{isEditingChecked}}',isEditingChecked)
            .replace('{{isHiddenChecked}}',isHiddenChecked)
            .replace(/\{\{indexField\}\}/g,indexField)

    $("#containerListItemsCreated").append(html);
    resetTypeField();
}

window.saveField = function saveField(keyTextField,type,title,placeHolder,keyboard,validator, isPassword, isEditing, isHidden, style) {
    //-- Mandatory Fiedls --
    var itemSave = {
        "tag":indexField,
        "key":keyTextField,
        "type":type,
        "label":title
    }


    if (isEditing) {
        itemSave["isEditing"] = isEditing
    }
    if (isHidden) {
        itemSave["isHidden"] = isHidden
    }
    if (placeHolder.length > 0) {
        itemSave["placeHolder"] = placeHolder
    } 
    if (keyboard != "None") {
        itemSave["keyboard"] = keyboard
    }
    if (isPassword) {
        itemSave["isPassword"] = isPassword
    }

    var itemsValidators = generateDicValidator(validator);

    if (itemsValidators.length > 0) {
        itemSave["validator"] = itemsValidators;
    }

    //-- OPTIONAL FIELDS --
    var styles = getStylesJson(style);

    if (styles != null) {
        itemSave["style"] = styles
    } 
    
    listFieldsResult.push(itemSave)
    
    
    indexField++;
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {


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


//======================================
//               STYLES CELL           //
//======================================

window.getTypeCell = function getTypeCell(style) {
	return '<p class="typeCell"><b>Tipo de celda:</b> '+style.typeCell+'</p>';
}

window.getStyleCustom = function getStyleCustom(style) {
	var html = '';
	html += '<div class="cellContainer">';
	html += '	<p><b>Nombre de la vista:</b> '+style.nameXib+'</p>';
	html += '</div>';

	return html;
}

window.getStyleColor = function getStyleColor(style) {
	var html = '';
    if (style.cellColor != "" || style.titleColor != "" || style.errorColor != "") {
		html += '<div class="colorZone">';
        if (style.cellColor != "") {
            html += '   <p>Color de la celda:</p>';
    		html += '	<div id="cellColor" class="cellColor" style="background-color:'+style.cellColor+'">';
    		html += '		<p id="colorId">'+style.cellColor+'</p>';
    		html += '	</div>';
        }
        if (style.titleColor != "") {
    		html += '	<p class="colorTittleP">Color titulo:</p>';
    		html += '	<div id="titleColor" class="cellColor" style="background-color:'+style.titleColor+'">';
    		html += '		<p id="colorId">'+style.titleColor+'</p>';
    		html += '	</div>';
        }
        if (style.errorColor != "") {
    		html += '	<p class="colorTittleP">Color error:</p>';
    		html += '	<div id="errorColor" class="cellColor" style="background-color:'+style.errorColor+'">';
    		html += '		<p id="colorId">'+style.errorColor+'</p>';
    		html += '	</div>';
        }
		html += '</div>';
    }

    return html;
}

window.getStyleColorPicker = function getStyleColorPicker(style) {
	var html = '';
    if (style.aceptColor != "" || style.containerAceptColor != "" || style.backgroundPickerColor != "") {
    	html += '<div class="colorZone">';
    	html += '	<p class="nextColor">Estilos picker selector</p>';
    	html += '	<p class="colorOKPicker">Color texto OK:</p>';
    	html += '	<div id="aceptColor"class="cellColor" style="background-color:'+style.aceptColor+'">';
    	html += '		<p id="colorId">'+style.aceptColor+'</p>';
    	html += '	</div>';
    	html += '	<p class="colorTittleP">Color contenedor OK:</p>';
    	html += '	<div id="containerAceptColor"class="cellColor"  style="background-color:'+style.containerAceptColor+'">';
    	html += '		<p id="colorId">'+style.containerAceptColor+'</p>';
    	html += '	</div>';
    	html += '	<p class="colorTittleP">Color fondo:</p>';
    	html += '	<div id="backgroundPickerColor" class="cellColor"  style="background-color:'+style.backgroundPickerColor+'">';
    	html += '		<p id="colorId">'+style.backgroundPickerColor+'</p>';
    	html += '	</div>';
		html += '</div>';
    }

    return html;
}

window.getStyleSize = function getStyleSize (style) {
	var html = '';

    if (style.sizeTitle != "" || (style.sizeError != null && style.sizeError != "")) {
    	html += '<div class="sizeZone">';
        if (style.sizeTitle != null && style.sizeTitle != "") {
            html += '   <p>Tamaño titulo:</p>';
            html += '   <input id="sizeTitle"type="text"name="element" disabled readonly value="'+style.sizeTitle+'">';
        }
        if (style.sizeError != null && style.sizeError != "") {
            html += '   <p>Tamaño texto error:</p>';
            html += '   <input id="sizeError"type="text"name="element" disabled readonly value="'+style.sizeError+'">';
        }
        html += '</div>';
    }

    return html;
}

window.getAlignFont = function getAlignFont(style) {
	var html = '';
    if (style.align != "" || style.font != "") {
        html = '<div class="sizeZone alignZone">';
        if (style.align != "") {
        	html += '	<p>Alineación:</p>';
        	html += '	<input id="alignTitle" type="text"name="element" disabled readonly value="'+style.align+'">';
        }
        if (style.font != "") {
        	html += '	<p>Fuente:</p>';
        	html += '	<input id="fontField"type="text"name="element" disabled readonly value="'+style.font+'">';
        }
    	html += '</div>';
    }

    return html;
}

window.getStylesJson = function getStylesJson(styleModel) {
    var style = {}
    var haveStyle = false;
    
    //-- STYLES --
    if (styleModel.cellColor != null && styleModel.cellColor.length > 0) {
        style["backgroundColorField"] = styleModel.cellColor
        haveStyle = true;
    }
    if (styleModel.titleColor != null && styleModel.titleColor.length > 0) {
        style["titleColor"] = styleModel.titleColor
        haveStyle = true;
    }
    if (styleModel.errorColor != null && styleModel.errorColor.length > 0) {
        style["errorColor"] = styleModel.errorColor
        haveStyle = true;
    }
    if (styleModel.sizeTitle != null && styleModel.sizeTitle.length > 0) {
        style["sizeTitle"] = parseInt(styleModel.sizeTitle)
        haveStyle = true;
    }
    if (styleModel.sizeError != null && styleModel.sizeError.length > 0) {
        style["sizeError"] = parseInt(styleModel.sizeError)
        haveStyle = true;
    }
    if (styleModel.aceptColor != null && styleModel.aceptColor.length > 0) {
        style["acceptColorPicker"] = styleModel.aceptColor
        haveStyle = true;
    }
    if (styleModel.containerAceptColor != null && styleModel.containerAceptColor.length > 0) {
        style["containerAcceptColorPicker"] = styleModel.containerAceptColor
        haveStyle = true;
    }
    if (styleModel.backgroundPickerColor != null && styleModel.backgroundPickerColor.length > 0) {
        style["backgroundPickerColorPicker"] = styleModel.backgroundPickerColor
        haveStyle = true;
    }
    if (styleModel.align != null && styleModel.align.length > 0) {
        style["align"] = styleModel.align
        haveStyle = true;
    }
    if (styleModel.font != null && styleModel.font.length > 0) {
        style["font"] = styleModel.font
        haveStyle = true;
    }
    if (styleModel.imageMandatory != null && styleModel.imageMandatory.length > 0) {
        style["mandatoryIcon"] = styleModel.imageMandatory
        haveStyle = true;
    }
    if (styleModel.imageCheckBoxOn != null && styleModel.imageCheckBoxOff != null && styleModel.imageCheckBoxOn.length > 0 && styleModel.imageCheckBoxOff.length > 0) {
        var checkBox = {}
        checkBox["checkBoxOn"] = styleModel.imageCheckBoxOn
        checkBox["checkBoxOff"] = styleModel.imageCheckBoxOff
        style["checkBox"] = checkBox
        haveStyle = true;
    }

    if (styleModel.typeCell != null) {
    	if (styleModel.typeCell == "line" || styleModel.typeCell == "custom") {    		
    		style["styleCell"] = styleModel.typeCell

    		if (styleModel.typeCell == "custom") {
    			style["nameXib"] = styleModel.nameXib
    		}

    		haveStyle = true;
    	}
    } 

    if (haveStyle) {
        return style;
    }
    else {
        return null;
    }
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {



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
       

    if (controlError(title, keyTextField, styles, "text")) {
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


    if (controlError(title,keyTextField,styles, "datePicker")) {
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


    if (controlError(title,keyTextField, styles, "picker")) {
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


    if (controlError(title,keyTextField,styles, "boolean")) {
        createBooleanField(keyTextField,title,isEditing, isHidden, validator, styles);
        saveBooleanField(keyTextField,"boolean",title,isEditing, isHidden, validator, styles)
    }
}


//=== INDEX ===
window.validateIndexField = function validateIndexField() {
    var keyTextField = $("#keyTextField").val()
    var title = $("#titleTextField").val()
    var styles = getRecoverStyles();
    

    if (controlError(title,keyTextField,styles, "index")) {
        createIndexField(keyTextField,title, styles)
        saveIndexField(keyTextField,"index",title, styles)
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

window.controlError = function controlError(title, keyTextField, style, type) {
    if (title.length > 0 &&  keyTextField.length > 0) {
        if (style.font != null) {
            if (style.sizeTitle != null && style.sizeError != null) {
                return true;
            }
            else {
                if (style.sizeError == null && type == "index") {
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


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"cellConstructor\" id=\"createField\">\n     <div class=\"row\">\n         <div class=\"col-md-10\">\n            <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\">\n            </div>         \n             <div class=\"containerTextFieldTop\">\n                 <div class=\"titleTextField\">\n                     <p>Titulo*:</p>\n                     <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\">\n                  </div>         \n             </div>\n\n\n            {{htmlValidators}}\n\n             <div class=\"containerTextFieldCenter optionalBooleanContainer\">                  \n                  <div class=\"isEditingTextField\">\n                      <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\">\n                      <p>Es editable?</p>\n                  </div>\n                  \n                 <div class=\"isHiddenTextField\">\n                     <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\">\n                     <p>Es visible?</p>\n                  </div>\n             </div>\n             \n              <div class=\"styleField\"> \n                <h4>Estilos de celda:</h4>\n                  {{htmlSelectorCell}}\n\n                    <div class=\"containerTypeCell\"> \n                        <div class=\"clasicCell\">      \n                            <div class=\"colorZone\">\n                              {{colorBasicZone}}\n                           </div>                             \n                           <div class=\"sizeZone\">\n                              <p>Tamaño titulo:</p>\n                              <input id=\"sizeTitle\" type=\"text\" name=\"element\">\n                              <p>Tamaño texto error:</p>\n                              <input id=\"sizeError\" type=\"text\" name=\"element\">\n                           </div>\n                           \n                           {{htmlFont}}\n                        </div>\n                        <div class=\"customCell\">\n                          {{htmlCustomCell}}\n                        </div>\n                    </div>\n                \n                 {{htmlImage}}\n\n              </div>\n              <div class=\"spaceSeparate\"></div>\n         </div>\n         <div class=\"col-md-2 buttonAdd\" onclick=\"addField()\">\n             <p>+</p>\n         </div>\n     </div>\n </div>\n";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cellConstructor\" id=\"fieldNumber{{indexField}}\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n             <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\" disabled value=\"{{keyTextField}}\">\n            </div>\n            <div class=\"containerTextFieldTop\">\n                <div class=\"titleTextField\">\n                    <p>Titulo*:</p>\n                    <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\" disabled value=\"{{title}}\">\n                </div>\n            </div>\n            <div class=\"containerTextFieldCenter optionalBooleanContainer\">\n                <div class=\"isEditingTextField\">\n                    <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\" {{isEditingValueCheck}} disabled readonly >\n                    <p>Es editable?</p>\n                </div>\n\n                <div class=\"isHiddenTextField\">\n                    <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\" {{isHiddenChecked}} disabled readonly>\n                    <p>Es visible?</p>\n                </div>\n            </div>\n\n            <div class=\"validatorContainer validatorCreated\">\n                 {{htmlValidator}}\n            </div>\n\n            <div class=\"styleField\"> \n                <h4>Estilos de celda:</h4>\n                {{styles}} \n            </div>\n            <div class=\"spaceSeparate\"></div>\n        </div>\n        <div class=\"col-md-2 buttonRemove buttonRemoveText\" onclick=\"removeField({{indexField}})\"><p>-</p></div>\n    </div>\n</div> \n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor pickerConstructor\" id=\"createField\">\n   <div class=\"row\">\n       <div class=\"col-md-10\">\n            <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\">\n            </div>\n           <div class=\"containerTextFieldTop\">\n               <div class=\"titleTextField\">\n                   <p>Titulo*:</p>\n                   <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\">                                       \n                </div>                                 \n           </div>\n           <div class=\"acceptButtonTextField\">\n               <p>Titulo aceptar picker:</p>\n               <input type=\"text\" name=\"acceptButtonTextField\" id=\"acceptButtonTextField\">\n             </div>  \n\n            <div id=\"containerOptionalDatePicker\">\n                <div class=\"isHiddenTextField\">\n                   <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\">\n                   <p>Es visible?</p>\n                </div>\n                <div class=\"isEditingTextField\">\n                   <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\">\n                   <p>Es editable?</p>\n                </div>               \n            </div>\n\n            {{htmlValidators}}\n\n            {{htmlRules}}\n\n\n            <div class=\"styleField\"> \n              <h4>Estilos de celda:</h4>\n                  {{htmlSelectorCell}}\n\n                  <div class=\"containerTypeCell\"> \n                      <div class=\"clasicCell\">\n\n                           <div class=\"colorZone\">\n                              {{colorBasicZone}}\n                           </div>       \n                        \n                           <div class=\"sizeZone\">\n                              <p>Tamaño titulo:</p>\n                              <input id=\"sizeTitle\" type=\"text\" name=\"element\">\n                              <p>Tamaño texto error:</p>\n                              <input id=\"sizeError\" type=\"text\" name=\"element\">\n                           </div>\n\n                           {{htmlFont}}\n                      </div>\n                      <div class=\"customCell\">\n                          {{htmlCustomCell}}\n                      </div>\n                  </div>\n\n\n                 {{htmlImage}}\n\n                <div class=\"colorZone pickerColorZone\">\n                   <p class=\"nextColor\">Estilos picker selector</p>\n                   <p class=\"colorOKPicker\">Color texto OK:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"aceptColor\" class=\"cellColorCreate\"><input id=\"aceptColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n                   <p class=\"colorTittleP\">Color contenedor OK:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"containerAceptColor\" class=\"cellColorCreate\"><input id=\"containerAceptColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n                   <p class=\"colorTittleP\">Color fondo:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"backgroundPickerColor\" class=\"cellColorCreate\"><input id=\"backgroundPickerColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n\n               </div>\n            </div>\n            <div class=\"spaceSeparate\"></div>\n       </div>\n       <div class=\"col-md-2 buttonAdd buttonAddPicker\" onclick=\"addField()\">\n           <p>+</p>\n       </div>\n   </div>\n</div> \n\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor pickerConstructor\" id=\"fieldNumber{{indexField}}\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\" disabled value=\"{{keyTextField}}\">\n            </div>\n            <div class=\"containerTextFieldTop\">\n                <div class=\"titleTextField\">\n                    <p>Titulo*:</p>\n                    <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\" value=\"{{title}}\" disabled readonly>\n                </div>\n            </div>\n            \n           <div class=\"acceptButtonTextField\">\n               <p>Titulo aceptar picker:</p>\n               <input type=\"text\" name=\"acceptButtonTextField\" id=\"acceptButtonTextField\" value=\"{{acceptButtonTextField}}\">                                       \n            </div>  \n            \n\n            <div id=\"containerOptionalDatePicker\">\n                <div class=\"isEditingTextField\">\n                    <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\" {{isEditingCheck}} disabled readonly>\n                        <p>Es editable?</p>\n                </div>\n                        \n                <div class=\"isHiddenTextField\">\n                    <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\" {{isHiddenChecked}} disabled readonly>\n                    <p>Es visible?</p>\n                </div>\n            </div>\n\n            <div class=\"validatorContainer validatorCreated\">\n                 {{htmlValidator}}\n            </div>\n\n            {{htmlRules}}\n\n            <div class=\"styleField\">\n                <h4>Estilos de celda:</h4>\n                {{styles}}\n            </div>\n            <div class=\"spaceSeparate\"></div>\n        </div>\n        <div class=\"col-md-2 buttonRemove buttonAddPicker\"onclick=\"removeField({{indexField}})\">\n            <p>-</p>\n        </div>\n    </div>\n </div>\n";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor\" id=\"createField\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\">\n                    </div>\n            <div class=\"containerTextFieldTop\">\n                <div class=\"titleTextField\">\n                    <p>Titulo*:</p>\n                    <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\">\n                        </div>\n            </div>\n            <div class=\"styleField\">\n                <h4>Estilos de celda:</h4>\n                  {{htmlSelectorCell}}\n\n\n                  <div class=\"containerTypeCell\"> \n                      <div class=\"clasicCell\">\n                            <div class=\"colorZone\">\n                                {{colorBasicZone}}\n                            </div>\n                            <div class=\"sizeZone\">\n                                <p>Tamaño titulo:</p>\n                                <input id=\"sizeTitle\" type=\"text\" name=\"element\">\n                            </div>\n                            \n                            {{htmlFont}}\n                      </div>\n                      <div class=\"customCell\">\n                      {{htmlCustomCell}}\n                      </div>\n                  </div>\n                \n            </div>\n            <div class=\"spaceSeparate\"></div>\n        </div>\n        <div class=\"col-md-2 buttonAdd\" onclick=\"addField()\">\n            <p>+</p>\n        </div>\n    </div>\n</div>\n\n\n\n";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor\" id=\"fieldNumber{{indexField}}\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\" disabled value=\"{{keyTextField}}\">\n            </div>\n            <div class=\"containerTextFieldTop\">\n                <div class=\"titleTextField\">\n                    <p>Titulo*:</p>\n                    <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\" disabled value=\"{{title}}\">\n                </div>\n            </div>\n\n            <div class=\"styleField\">\n                <h4>Estilos de celda:</h4>\n                {{styles}}\n            </div>\n            <div class=\"spaceSeparate\"></div>\n        </div>\n        <div class=\"col-md-2 buttonRemove buttonRemoveText\" onclick=\"removeField({{indexField}})\"><p>-</p></div>\n    </div>\n</div> ";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor pickerConstructor\" id=\"createField\">\n   <div class=\"row\">\n       <div class=\"col-md-10\">\n           <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\">\n           </div>\n           <div class=\"containerTextFieldTop\">\n               <div class=\"titleTextField\">\n                   <p>Titulo*:</p>\n                   <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\">                                       \n                </div>                                 \n           </div>\n           <div class=\"containerAcceptEditing\">\n               <div class=\"acceptButtonTextField\">\n                   <p>Titulo aceptar picker:</p>\n                   <input type=\"text\" name=\"acceptButtonTextField\" id=\"acceptButtonTextField\">\n               </div>\n           </div>\n\n\n          {{htmlValidators}}\n\n\n           <div class=\"containerOptionalPicker\">    \n               <div class=\"isEditingTextField\">\n                   <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\">\n                   <p>Es editable?</p>\n               </div>\n\n               <div class=\"isHiddenTextField\">\n                   <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\">\n                   <p>Es visible?</p>\n               </div>\n           </div>\n           \n\n           <div id=\"valuesOptionsSelector\"> \n              <div id=\"containerPickerFieldAdd\">\n                 <p id=\"addFieldPickerText\">Añadir campos del picker:</p> \n                 <div id=\"sumatoryPicker\">\n                      <p onclick=\"addContainerPicker()\">+</p>\n                </div>\n              </div>\n\n              <div id=\"pickerFieldsInsert\">\n                  <div class=\"containerPickerField\" id=\"containerPickerField'+idPickerField+'\">\n                      <input id=\"inputKeyPickerField0\" type=\"text\" name=\"element\" placeholder=\"Clave Picker\" value=\"KeyNoSelected\"  disabled readonly>\n                      <input id=\"inputValuePickerField0\" type=\"text\" name=\"element\" placeholder=\"Valor picker por defecto\">\n                  </div>\n              </div>\n            </div> \n\n            <div class=\"styleField\"> \n              <h4>Estilos de celda:</h4>\n                  {{htmlSelectorCell}}\n\n\n\n                  <div class=\"containerTypeCell\"> \n                      <div class=\"clasicCell\">   \n                         <div class=\"colorZone\">\n                            {{colorBasicZone}}\n                         </div>                       \n                         <div class=\"sizeZone\">\n                            <p>Tamaño titulo:</p>\n                            <input id=\"sizeTitle\" type=\"text\" name=\"element\">\n                            <p>Tamaño texto error:</p>\n                            <input id=\"sizeError\" type=\"text\" name=\"element\">\n                         </div>\n                       \n                         {{htmlFont}}\n                      </div>\n                      <div class=\"customCell\">\n                          {{htmlCustomCell}}\n                      </div>\n                  </div>\n\n\n\n                 {{htmlImage}}\n\n\n                <div class=\"colorZone pickerColorZone\">\n                   <p class=\"nextColor\">Estilos picker selector</p>\n                   <p class=\"colorOKPicker\">Color texto OK:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"aceptColor\" class=\"cellColorCreate\"><input id=\"aceptColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n                   <p class=\"colorTittleP\">Color contenedor OK:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"containerAceptColor\" class=\"cellColorCreate\"><input id=\"containerAceptColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n                   <p class=\"colorTittleP\">Color fondo:</p>\n                   <input type=\"color\" value=\"#ffffff\" id=\"backgroundPickerColor\" class=\"cellColorCreate\"><input id=\"backgroundPickerColorHex\" class=\"inputColorHex\" placeholder=\"#ffffff\">\n               </div>\n\n            </div>\n            <div class=\"spaceSeparate\"></div>\n       </div>\n       <div class=\"col-md-2 buttonAdd buttonAddPicker\" onclick=\"addField()\">\n           <p>+</p>\n       </div>\n   </div>\n</div> \n\n\n                   \n";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "\n   <div class=\"cellConstructor pickerConstructor\" id=\"fieldNumber{{indexField}}\">\n           <div class=\"row\">\n               <div class=\"col-md-10\">\n                   <div class=\"containerTextFieldTop\">\n                        <div class=\"keyTextField\">\n                            <p>key*:</p>\n                            <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\" value=\"{{keyTextField}}\" disabled readonly>\n                       </div>\n                         <div class=\"titleTextField\">\n                             <p>Titulo*:</p>\n                             <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\" value=\"{{title}}\" disabled readonly>                                       \n                          </div>                                 \n                   </div>\n\n                 <div class=\"containerAcceptEditing\">\n                     <div class=\"acceptButtonTextField\">\n                         <p>Titulo aceptar picker:</p>\n                         <input type=\"text\" name=\"acceptButtonTextField\" id=\"acceptButtonTextField\" disabled readonly value=\"{{acceptButtonTextField}}\" >\n                     </div>\n                 </div>\n\n                   <div class=\"containerOptionalPicker\">                                     \n                        <div class=\"isEditingTextField\">\n                            <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\" {{isEditingChecked}} disabled readonly>\n                            <p>Es editable?</p>\n                        </div>\n\n                        <div class=\"isHiddenTextField\">\n                            <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\" {{isHiddenChecked}} disabled readonly>\n                            <p>Es visible?</p>\n                        </div>\n                   </div>\n\n                  <div class=\"validatorContainer validatorCreated\">\n                       {{htmlValidator}}\n                  </div>\n\n                   <div id=\"valuesOptionsSelector\">     \n                      <div id=\"pickerFieldsInsert\">\n                          <p>Valores creados:</p>\n                          {{htmlPickerItems}}\n                      </div>\n                    </div> \n\n                  <div class=\"styleField\"> \n                      <h4>Estilos de celda:</h4>\n                        {{styles}}\n                  </div>\n                    <div class=\"spaceSeparate\"></div>\n               </div>\n               <div class=\"col-md-2 buttonRemove buttonAddPicker\" onclick=\"removeField({{indexField}})\">\n                  <p>-</p>\n               </div>\n           </div>\n      </div>\n";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor\" id=\"createField\">\n     <div class=\"row\">\n         <div class=\"col-md-10\">\n             <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\">\n            </div>\n             <div class=\"containerTextFieldTop\">\n                 <div class=\"titleTextField\">\n                     <p>Titulo*:</p>\n                     <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\">\n                  </div>       \n                  <select id=\"selectTypeKeyboard\">\n                      <option value=\"None\">Elegir tipo de teclado</option>\n                      <option value=\"FormKeyboardTypeText\">Texto</option>\n                      <option value=\"FormKeyboardTypeEmail\">Email</option>\n                      <option value=\"FormKeyboardTypeNumbers\">Nuerico</option>\n                      <option value=\"FormKeyboardTypeNumberPad\">NuericoPad</option>\n                  </select>                                   \n             </div>\n             <div class=\"containerTextFieldCenter\">\n                 <div class=\"inputTextField\">\n                     <p>PlaceHolder:</p>\n                     <input type=\"text\" name=\"palceHolderTextField\" id=\"palceHolderTextField\">\n                 </div>\n             </div>\n             \n\n          {{htmlValidators}}\n\n\n             <div class=\"containerPassEdit\">\n                 <div class=\"passwordTextField\">\n                     <input type=\"checkbox\" name=\"passwordTextField\" value=\"passwordTextField\" id=\"passwordTextField\">\n                     <p>Es password?</p>\n                 </div>\n                 \n                 <div class=\"isEditingTextField\">\n                     <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\">\n                     <p>Es editable?</p>\n                  </div>\n                 \n                 <div class=\"isHiddenTextField\">\n                     <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\">\n                     <p>Es visible?</p>\n                  </div>\n             </div>\n\n\n             \n              <div class=\"styleField\">\n                  <h4>Estilos de celda:</h4>\n                  {{htmlSelectorCell}}\n\n                  <div class=\"containerTypeCell\"> \n                      <div class=\"clasicCell\">\n                          <div class=\"colorZone\">\n                              {{colorBasicZone}}\n                          </div>                                   \n                          <div class=\"sizeZone\">\n                              <p>Tamaño titulo:</p>\n                              <input id=\"sizeTitle\" type=\"text\" name=\"element\">\n                              <p>Tamaño texto error:</p>\n                              <input id=\"sizeError\" type=\"text\" name=\"element\">\n                          </div>\n\n                          {{htmlFont}}\n                      </div>\n                      <div class=\"customCell\">\n                          {{htmlCustomCell}}\n                      </div>\n                  </div>\n\n                  {{htmlImage}}\n              </div>\n\n              <div class=\"spaceSeparate\"></div>\n         </div>\n         <div class=\"col-md-2 buttonAdd\" onclick=\"addField()\">\n             <p>+</p>\n         </div>\n     </div>\n </div>";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cellConstructor\" id=\"fieldNumber{{indexField}}\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n             <div class=\"keyTextField\">\n                <p>key*:</p>\n                <input type=\"text\" name=\"keyTextField\" id=\"keyTextField\" disabled value=\"{{keyTextField}}\">\n            </div>\n            <div class=\"containerTextFieldTop\">\n                <div class=\"titleTextField\">\n                    <p>Titulo*:</p>\n                    <input type=\"text\" name=\"titleTextField\" id=\"titleTextField\" disabled value=\"{{title}}\">\n                </div>\n                <div class=\"keyboardResult\">Keyboard:{{keyboard}}</div>\n            </div>\n            <div class=\"containerTextFieldCenter\">\n                <div class=\"inputTextField\">\n                    <p>PlaceHolder:</p>\n                    <input type=\"text\" name=\"palceHolderTextField\" id=\"palceHolderTextField\" disabled value=\"{{placeHolder}}\">\n                </div>                   \n            </div>\n\n            <div class=\"containerPassEdit\">\n                <div class=\"passwordTextField\">\n                    <input type=\"checkbox\" name=\"passwordTextField\" value=\"passwordTextField\" id=\"passwordTextField\" {{isPasswordChecked}} disabled readonly>\n                    <p>Es password?</p>\n                </div>\n                \n                <div class=\"isEditingTextField\">\n                    <input type=\"checkbox\" name=\"isEditingTextField\" value=\"isEditingTextField\" id=\"isEditingTextField\" {{isEditingChecked}} disabled readonly>\n                    <p>Es editable?</p>\n                </div>\n                \n                <div class=\"isHiddenTextField\">\n                    <input type=\"checkbox\" name=\"isHiddenTextField\" value=\"isHiddenTextField\" id=\"isHiddenTextField\" {{isHiddenChecked}} disabled readonly>\n                    <p>Es visible?</p>\n                </div>\n            </div>\n            \n\n            <div class=\"validatorContainer validatorCreated\">\n                 {{htmlValidator}}\n            </div>\n        \n            \n            <div class=\"styleField\"> \n                <h4>Estilos de celda:</h4>\n                {{styles}}\n            </div>\n            <div class=\"spaceSeparate\"></div>\n        </div>\n        <div class=\"col-md-2 buttonRemove buttonRemoveText\" onclick=\"removeField({{indexField}})\"><p>-</p></div>\n    </div>\n</div> \n\n";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* PASOS: Arrancar desde la ruta donde esta webpack.config.js y abrir consola y poner: npm start  */

window.Clipboard = __webpack_require__(0)
__webpack_require__(1)
__webpack_require__(7)
__webpack_require__(3)
__webpack_require__(8)
__webpack_require__(6)
__webpack_require__(15)
__webpack_require__(13)
__webpack_require__(11)
__webpack_require__(5)
__webpack_require__(2)
__webpack_require__(12)
__webpack_require__(9)
__webpack_require__(10)
__webpack_require__(4)
__webpack_require__(14)

/***/ })
/******/ ]);