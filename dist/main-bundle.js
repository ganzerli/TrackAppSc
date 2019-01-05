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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/js/Templates/index.js":
/*!************************************!*\
  !*** ./dist/js/Templates/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Templates; });\n/* harmony import */ var _templatesArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templatesArr */ \"./dist/js/Templates/templatesArr.js\");\n\r\n\r\nclass Templates {\r\n  constructor() {\r\n    this.template = \"\";\r\n  }\r\n\r\n  getAssignedHtml(ph) {\r\n    const toset = ph.getCurrentPage();\r\n    // looping throught an pbject of the templates seeing which has the attribute.. and take the html\r\n    //if assigned html is static all good get it from array\r\n    _templatesArr__WEBPACK_IMPORTED_MODULE_0__[\"templatesArr\"].forEach(templateObj => {\r\n      if (templateObj.name === toset) {\r\n        this.template = templateObj.html;\r\n        return this.template;\r\n      }\r\n    });\r\n\r\n    return this.template;\r\n  }\r\n\r\n  getResultElements(resultSet) {\r\n    this.template = resultSet;\r\n    // somehow pass the obkect and return the template\r\n    return this.template;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/index.js?");

/***/ }),

/***/ "./dist/js/Templates/templatesArr.js":
/*!*******************************************!*\
  !*** ./dist/js/Templates/templatesArr.js ***!
  \*******************************************/
/*! exports provided: templatesArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templatesArr\", function() { return templatesArr; });\nconst templatesArr = [\r\n  {\r\n    name: \"INSERT-DATA\",\r\n    html: `<div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"submit\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>`\r\n  },\r\n  {\r\n    name: \"SEARCH-DATA\",\r\n    html: `<div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"SEARCH SOMETHING\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>`\r\n  }\r\n];\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/templatesArr.js?");

/***/ }),

/***/ "./dist/js/View/index.js":
/*!*******************************!*\
  !*** ./dist/js/View/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _Templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Templates */ \"./dist/js/Templates/index.js\");\n\r\n\r\nclass View {\r\n  constructor() {}\r\n\r\n  fill(array, ph = null) {\r\n    // looping throught the interested elements\r\n    let value;\r\n    array.forEach(x => {\r\n      // removing old elements\r\n      x.innerHTML = \"\";\r\n      // getting the page to send for the tmeplate\r\n      const interestedAttribute = x.attributes[\"loading-id\"].value;\r\n      // see which template matches the attributes and return the right html for this element\r\n      switch (interestedAttribute) {\r\n        case \"result-container\":\r\n          //get dinamic template from object\r\n          // get the template with results from the pages handler\r\n          const resultSet = ph.getResultSet();\r\n          value = _Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getResultElements(resultSet);\r\n          console.log(value);\r\n          value ? (x.innerHTML = value) : undefined;\r\n          //\r\n          break;\r\n        case \"form-commands\":\r\n          // get static templates\r\n          value = _Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getAssignedHtml(ph);\r\n          value ? (x.innerHTML = value) : undefined;\r\n          //\r\n          break;\r\n        default:\r\n          console.log(\"ERROR : switch in View/index.js does not work fine\");\r\n          console.log(\" A VIEW FOR THIS ATTRIBUTE IS NOT SET in class View\");\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/View/index.js?");

/***/ }),

/***/ "./dist/js/actions/index.js":
/*!**********************************!*\
  !*** ./dist/js/actions/index.js ***!
  \**********************************/
/*! exports provided: loadRecords, loadSearchData, loadInsertData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRecords\", function() { return loadRecords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSearchData\", function() { return loadSearchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInsertData\", function() { return loadInsertData; });\n/* harmony import */ var _pages_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/domSelector */ \"./dist/js/pages/domSelector.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ \"./dist/js/View/index.js\");\n/* harmony import */ var _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pageHandler */ \"./dist/js/pages/pageHandler.js\");\n\r\n\r\n\r\n\r\n// actions are called from the event listeners to modify the page\r\nconst loadRecords = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n  ph.setResultSet([\r\n    {\r\n      id: 1,\r\n      title: \"nice title\",\r\n      body: \"nice body for this thing\"\r\n    },\r\n    {\r\n      id: 2,\r\n      title: \"nice title for 2\",\r\n      body: \"nice body for this t wow the second instancehing\"\r\n    }\r\n  ]);\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"LOAD-RESULTS\");\r\n\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n};\r\n\r\nconst loadSearchData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"SEARCH-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n  console.log(\"ACTION CALLED; LOADING FORM FOR Searching\");\r\n};\r\n\r\nconst loadInsertData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"INSERT-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n\r\n  console.log(elementsArray.length + \"elements array\");\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n  console.log(\"ACTION CALLED; LOADING FORM FOR INSERTING\");\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/actions/index.js?");

/***/ }),

/***/ "./dist/js/eventListeners/index.js":
/*!*****************************************!*\
  !*** ./dist/js/eventListeners/index.js ***!
  \*****************************************/
/*! exports provided: activateFormButton, listenNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateFormButton\", function() { return activateFormButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenNavbar\", function() { return listenNavbar; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./dist/js/actions/index.js\");\n\r\n\r\nconst loadingId = x => document.querySelector(\"[loading-id=\" + x + \"]\");\r\n\r\nconst activateFormButton = () => {\r\n  const form = loadingId(\"form-commands\");\r\n\r\n  if (form) {\r\n    form.addEventListener(\"submit\", () => {\r\n      submitForm();\r\n    });\r\n  }\r\n};\r\n\r\nconst submitForm = () => {\r\n  console.log(\"form submitted\");\r\n  Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadRecords\"])();\r\n  // take the inputs and send a post request to backend for to load the record\r\n};\r\n\r\nconst listenNavbar = () => {\r\n  const navbar = loadingId(\"navbar-commands\");\r\n  if (navbar) {\r\n    navbar.addEventListener(\"click\", e => delegationNavbar(e));\r\n  }\r\n  const delegationNavbar = e => {\r\n    const trgt = e.target.getAttribute(\"loading-id\");\r\n\r\n    if (trgt === \"search-data\") {\r\n      //load form to search\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadSearchData\"])();\r\n      console.log(trgt);\r\n    }\r\n    if (trgt === \"add-data\") {\r\n      // load the form\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadInsertData\"])();\r\n      console.log(trgt);\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/eventListeners/index.js?");

/***/ }),

/***/ "./dist/js/main.js":
/*!*************************!*\
  !*** ./dist/js/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageHandler */ \"./dist/js/pages/pageHandler.js\");\n/* harmony import */ var _pages_domSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/domSelector */ \"./dist/js/pages/domSelector.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ \"./dist/js/View/index.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners */ \"./dist/js/eventListeners/index.js\");\n\r\n\r\n\r\n\r\n//on page loaded\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  // set base to load the components\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const page = ph.getCurrentPage();\r\n  // having the page to load fill the components needed\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_1__[\"domSelector\"])(page); // swithc for to find the layout\r\n  // call view with the page and the elements to load\r\n  view.fill(elementsArray, ph);\r\n  // event listener fr the navbar\r\n  Object(_eventListeners__WEBPACK_IMPORTED_MODULE_3__[\"listenNavbar\"])();\r\n  Object(_eventListeners__WEBPACK_IMPORTED_MODULE_3__[\"activateFormButton\"])();\r\n});\r\n\n\n//# sourceURL=webpack:///./dist/js/main.js?");

/***/ }),

/***/ "./dist/js/pages/domSelector.js":
/*!**************************************!*\
  !*** ./dist/js/pages/domSelector.js ***!
  \**************************************/
/*! exports provided: domSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domSelector\", function() { return domSelector; });\nfunction domSelector(page) {\r\n  let elementsArray = new Array();\r\n  const loadingId = x => document.querySelector(\"[loading-id=\" + x + \"]\");\r\n  switch (page) {\r\n    case \"INSERT-DATA\":\r\n      // return the array of elements that the view needs\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"form-commands\"));\r\n      break;\r\n    case \"LOAD-RESULTS\":\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"result-container\"));\r\n      break;\r\n    case \"SEARCH-DATA\":\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"form-commands\"));\r\n      break;\r\n    default:\r\n      console.log(\"default\");\r\n  }\r\n  return elementsArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/pages/domSelector.js?");

/***/ }),

/***/ "./dist/js/pages/pageHandler.js":
/*!**************************************!*\
  !*** ./dist/js/pages/pageHandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass PageHandler {\r\n  constructor() {\r\n    this.currentPage = \"INSERT-DATA\";\r\n    this.resultSet = [];\r\n  }\r\n\r\n  // SET GET ter for CurrentPage\r\n  getCurrentPage() {\r\n    return this.currentPage;\r\n  }\r\n  setCurrentPage(page) {\r\n    this.currentPage = page;\r\n  }\r\n\r\n  // SET GET ter for resultSet\r\n  getResultSet() {\r\n    return this.resultSet;\r\n  }\r\n  setResultSet(resultSet) {\r\n    this.resultSet = resultSet;\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHandler);\r\n\n\n//# sourceURL=webpack:///./dist/js/pages/pageHandler.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./dist/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/js/main.js */\"./dist/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./dist/js/main.js?");

/***/ })

/******/ });