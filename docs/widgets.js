/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/widgets/MatchWidget/template.html":
/*!***********************************************!*\
  !*** ./src/widgets/MatchWidget/template.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<div class=\\\"container\\\">\\n  <div class=\\\"header-container\\\">\\n    <div class=\\\"flag\\\"></div>\\n    <img\\n      src=\\\"https://storage.googleapis.com/sportxpert-production-bucket/competition_fbf8bce1-e51a-4c2f-99c6-79aaebcd52a5.png\\\"\\n      height=\\\"18\\\"\\n      alt=\\\"image\\\"\\n    >\\n    <span>Premier League</span>\\n  </div>\\n  <div class=\\\"bagde-container\\\"></div>\\n  <div class=\\\"content-container\\\"></div>\\n  <div class=\\\"footer-container\\\"></div>\\n</div>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://widgets-library/./src/widgets/MatchWidget/template.html?");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/widgets/MatchWidget/style.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/widgets/MatchWidget/style.css ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\".container {\\n  width: 260px;\\n  border-width: 3px 1px 1px;\\n  border-style: solid;\\n  border-color: rgb(8, 142, 25) rgb(236, 236, 236) rgb(236, 236, 236);\\n  border-image: initial;\\n}\\n\\n.header-container {\\n  display: flex;\\n  background-color: rgb(236, 236, 236);\\n  height: 21px;\\n}\\n\\n.header-container *+* {\\n  margin-left: 10px;\\n}\\n\\n.badger-container {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 180px;\\n  height: 24px;\\n  padding: 0px 20px;\\n  margin: 0px auto;\\n  background-color: blue;\\n}\\n\\n.flag {\\n  height: 21px;\\n  width: 40px;\\n  background-image: url(https://storage.googleapis.com/sportxpert-production-bucket/area_80f6e719-d916-4213-8bc2-f96d4c8321f6.jpg);\\n  background-size: cover;\\n}\\n\\n.content-container {\\n  display: flex;\\n  justify-content: space-between;\\n  margin-top: 12px;\\n  padding: 0px 12px 12px;\\n}\\n\\n.footer-container {\\n  padding: 6px 0px;\\n  position: relative;\\n  border-top: 1px solid rgb(236, 236, 236);\\n  z-index: 2;\\n}\\n\");\n\n//# sourceURL=webpack://widgets-library/./src/widgets/MatchWidget/style.css?./node_modules/raw-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst MatchWidget_1 = __webpack_require__(/*! ./widgets/MatchWidget/MatchWidget */ \"./src/widgets/MatchWidget/MatchWidget.ts\");\nwindow.customElements.define('match-widget', MatchWidget_1.MatchWidget);\n\n\n//# sourceURL=webpack://widgets-library/./src/index.ts?");

/***/ }),

/***/ "./src/widgets/MatchWidget/MatchWidget.ts":
/*!************************************************!*\
  !*** ./src/widgets/MatchWidget/MatchWidget.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MatchWidget = void 0;\nconst templateString = (__webpack_require__(/*! ./template.html */ \"./src/widgets/MatchWidget/template.html\")[\"default\"]);\nconst stylesString = (__webpack_require__(/*! raw-loader!./style.css */ \"./node_modules/raw-loader/dist/cjs.js!./src/widgets/MatchWidget/style.css\")[\"default\"]);\nclass MatchWidget extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.render();\n        this.attachStyles();\n    }\n    get props() {\n        return this.getAttributeNames().reduce((acc, attributeName) => {\n            acc[attributeName] = this.getAttribute(attributeName);\n            return acc;\n        }, {});\n    }\n    render() {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = templateString;\n    }\n    attachStyles() {\n        var _a;\n        const style = document.createElement('style');\n        style.innerHTML = stylesString;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(style);\n    }\n}\nexports.MatchWidget = MatchWidget;\n\n\n//# sourceURL=webpack://widgets-library/./src/widgets/MatchWidget/MatchWidget.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});