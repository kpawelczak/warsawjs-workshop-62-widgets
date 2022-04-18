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
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MatchWidget = void 0;\nclass MatchWidget extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        this.attachStyles();\n        this.render();\n    }\n    get props() {\n        return this.getAttributeNames().reduce((acc, attributeName) => {\n            acc[attributeName] = this.getAttribute(attributeName);\n            return acc;\n        }, {});\n    }\n    render() {\n        var _a;\n        const template = document.createElement('div');\n        template.classList.add('container');\n        const headerContainer = document.createElement('div');\n        headerContainer.classList.add('header-container');\n        const flag = document.createElement('div');\n        flag.classList.add('flag');\n        const leagueImg = document.createElement('img');\n        leagueImg.setAttribute('src', 'https://storage.googleapis.com/sportxpert-production-bucket/competition_fbf8bce1-e51a-4c2f-99c6-79aaebcd52a5.png');\n        leagueImg.setAttribute('height', '18');\n        const leagueName = document.createElement('span');\n        leagueName.innerHTML = 'Premier League';\n        headerContainer.appendChild(flag);\n        headerContainer.appendChild(leagueImg);\n        headerContainer.appendChild(leagueName);\n        const badgeContainer = document.createElement('div');\n        badgeContainer.classList.add('bagde-container');\n        const contentContainer = document.createElement('div');\n        contentContainer.classList.add('content-container');\n        const footerContainer = document.createElement('div');\n        footerContainer.classList.add('footer-container');\n        template.appendChild(headerContainer);\n        template.appendChild(badgeContainer);\n        template.appendChild(contentContainer);\n        template.appendChild(footerContainer);\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template);\n    }\n    attachStyles() {\n        var _a;\n        const style = document.createElement('style');\n        style.innerHTML = `\n      .container {\n        width: 260px;\n        border-width: 3px 1px 1px;\n        border-style: solid;\n        border-color: rgb(8, 142, 25) rgb(236, 236, 236) rgb(236, 236, 236);\n        border-image: initial;\n      }\n      .header-container {\n        display: flex;\n        background-color: rgb(236, 236, 236);\n        height: 21px;\n      }\n      .header-container * + * {\n        margin-left: 10px;\n      }\n      .badger-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 180px;\n        height: 24px;\n        padding: 0px 20px;\n        margin: 0px auto;\n        background-color: blue;\n      }\n      .flag {\n        height: 21px;\n        width: 40px;\n        background-image: url(https://storage.googleapis.com/sportxpert-production-bucket/area_80f6e719-d916-4213-8bc2-f96d4c8321f6.jpg);\n        background-size: cover;\n      }\n      .content-container {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 12px;\n        padding: 0px 12px 12px;\n      }\n      .footer-container {\n        padding: 6px 0px;\n        position: relative;\n        border-top: 1px solid rgb(236, 236, 236);\n        z-index: 2;\n      }\n    `;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(style);\n    }\n}\nexports.MatchWidget = MatchWidget;\n\n\n//# sourceURL=webpack://widgets-library/./src/widgets/MatchWidget/MatchWidget.ts?");

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