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

/***/ "./dist/js/Calls/Calls.js":
/*!********************************!*\
  !*** ./dist/js/Calls/Calls.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calls; });\n/* harmony import */ var _ClientDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClientDb */ \"./dist/js/ClientDb/index.js\");\n\r\n\r\nclass Calls {\r\n  constructor() {\r\n    this.response = [];\r\n  }\r\n\r\n  // functions for fetching the local storage\r\n  getDataFromIndexedDb() {\r\n    const db = new _ClientDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.response = db.getRecords();\r\n    console.log(this.response);\r\n    return this.response;\r\n  }\r\n  pushDataToIndexedDb() {}\r\n  // functions to get something from remote storage\r\n  getDataFromBackend() {}\r\n  pushDataToBackend() {}\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/Calls/Calls.js?");

/***/ }),

/***/ "./dist/js/ClientDb/index.js":
/*!***********************************!*\
  !*** ./dist/js/ClientDb/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ClientDb; });\nclass ClientDb {\r\n  constructor() {\r\n    this.set = [\r\n      { id: 1, title: \"some title\", body: \"some body\" },\r\n      { id: 2, title: \"another title\", body: \"somebody 2\" }\r\n    ];\r\n  }\r\n\r\n  insertRecord(record) {\r\n    // taking the record and push into array\r\n    return this.set;\r\n  }\r\n  getRecords() {\r\n    // getting all records and make an array\r\n    return this.set;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/ClientDb/index.js?");

/***/ }),

/***/ "./dist/js/Templates/functionTemplates.js":
/*!************************************************!*\
  !*** ./dist/js/Templates/functionTemplates.js ***!
  \************************************************/
/*! exports provided: fillResultFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillResultFromObject\", function() { return fillResultFromObject; });\nconst fillResultFromObject = recordObj => {\r\n  // takes the object and returns a template\r\n  return `\r\n  <div class=\"result-record-container\" loading-id=\"result-record\">\r\n    <h3 class=\"result-record-title\"> ${recordObj.title} </h3>\r\n    <p class=\"result-record-body\"> ${recordObj.body} </p>\r\n  </div>\r\n  `;\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/functionTemplates.js?");

/***/ }),

/***/ "./dist/js/Templates/index.js":
/*!************************************!*\
  !*** ./dist/js/Templates/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Templates; });\n/* harmony import */ var _templatesArr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templatesArr */ \"./dist/js/Templates/templatesArr.js\");\n/* harmony import */ var _functionTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionTemplates */ \"./dist/js/Templates/functionTemplates.js\");\n\r\n\r\n\r\nclass Templates {\r\n  constructor() {\r\n    this.template = \"\";\r\n  }\r\n\r\n  //looking in the templates array the right template for this element of the current page\r\n  matchTemplate(templatesArr, toset) {\r\n    // looping throught an pbject of the templates seeing which has the attribute.. and take the html\r\n    templatesArr.forEach(templateObj => {\r\n      if (templateObj.name === toset) {\r\n        this.template = templateObj.html;\r\n        return this.template;\r\n      }\r\n    });\r\n    // if no template found in the array of templatesArr return the template\r\n    return this.template;\r\n  }\r\n\r\n  getAssignedHtml(ph) {\r\n    // taking current page to match the name of the template in templatesArray\r\n    const toset = ph.getCurrentPage();\r\n    return this.matchTemplate(_templatesArr__WEBPACK_IMPORTED_MODULE_0__[\"templatesArr\"], toset);\r\n  }\r\n\r\n  // resultSet comes from the action, passed with ph in the view, in case of result component to update passes the result set\r\n  getResultElements(resultSet) {\r\n    // getting the result set from the page handler, loop throught the array and generate tempplate for each element,\r\n    this.template = \"\";\r\n    resultSet.forEach(obj => {\r\n      this.template += Object(_functionTemplates__WEBPACK_IMPORTED_MODULE_1__[\"fillResultFromObject\"])(obj);\r\n      // somehow pass the obkect and return the template\r\n    });\r\n    console.log(this.template);\r\n    return this.template;\r\n  }\r\n\r\n  refreshSubtitle(page) {\r\n    this.template = page;\r\n    return this.template;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/index.js?");

/***/ }),

/***/ "./dist/js/Templates/templatesArr.js":
/*!*******************************************!*\
  !*** ./dist/js/Templates/templatesArr.js ***!
  \*******************************************/
/*! exports provided: templatesArr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templatesArr\", function() { return templatesArr; });\nconst templatesArr = [\r\n  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM\r\n  {\r\n    name: \"INSERT-DATA\",\r\n    html: `\r\n    <div class=\"form-wrap\" loading-id=\"INSERT-DATA\"> \r\n    <div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" placeholder=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"body\" placeholder=\"body\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"submit\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>\r\n    </div>\r\n    `\r\n  },\r\n  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM\r\n  {\r\n    name: \"SEARCH-DATA\",\r\n    html: `\r\n    <div class=\"form-wrap\" loading-id=\"SEARCH-DATA\"> \r\n    <div class=\"form-group form-group-input\">\r\n        <input type=\"text\" name=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"SEARCH SOMETHING\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>\r\n    </div>\r\n    `\r\n  }\r\n];\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/templatesArr.js?");

/***/ }),

/***/ "./dist/js/View/index.js":
/*!*******************************!*\
  !*** ./dist/js/View/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\n/* harmony import */ var _Templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Templates */ \"./dist/js/Templates/index.js\");\n\r\n\r\nclass View {\r\n  constructor() {}\r\n\r\n  fill(array, ph = null) {\r\n    // looping throught the interested elements\r\n    let value;\r\n    array.forEach(x => {\r\n      // removing old elements\r\n      x.innerHTML = \"\";\r\n      // getting the page to send for the tmeplate\r\n      const interestedAttribute = x.attributes[\"loading-id\"].value;\r\n      // see which template matches the attributes and return the right html for this element\r\n      switch (interestedAttribute) {\r\n        case \"result-container\":\r\n          //get dinamic template from object\r\n          // get the template with results from the pages handler\r\n          const resultSet = ph.getResultSet();\r\n          value = _Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getResultElements(resultSet);\r\n          console.log(value);\r\n          value ? (x.innerHTML = value) : undefined;\r\n\r\n          break;\r\n        case \"form-commands\":\r\n          // get static templates\r\n          value = _Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getAssignedHtml(ph);\r\n          value ? (x.innerHTML = value) : undefined;\r\n\r\n          break;\r\n        case \"subtitle\":\r\n          // get static templates\r\n          const page = ph.getCurrentPage();\r\n          value = _Templates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.refreshSubtitle(page);\r\n          value ? (x.innerHTML = value) : undefined;\r\n\r\n          break;\r\n        default:\r\n          console.log(\"ERROR : switch in View/index.js does not work fine\");\r\n          console.log(\" A VIEW FOR THIS ATTRIBUTE IS NOT SET in class View\");\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/View/index.js?");

/***/ }),

/***/ "./dist/js/actions/index.js":
/*!**********************************!*\
  !*** ./dist/js/actions/index.js ***!
  \**********************************/
/*! exports provided: loadRecords, loadSearchData, loadInsertData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRecords\", function() { return loadRecords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSearchData\", function() { return loadSearchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInsertData\", function() { return loadInsertData; });\n/* harmony import */ var _pages_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/domSelector */ \"./dist/js/pages/domSelector.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ \"./dist/js/View/index.js\");\n/* harmony import */ var _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pageHandler */ \"./dist/js/pages/pageHandler.js\");\n/* harmony import */ var _Calls_Calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Calls/Calls */ \"./dist/js/Calls/Calls.js\");\n\r\n\r\n\r\n\r\n\r\n// actions are called from the event listeners, must initiate an instance of view and ph to pass to the vieew changing the page\r\n\r\n/**\r\n *  THE PAGEHANDLER KEEPS THE PAGE AND THE RESULT SET; SO WHEN PASSED TO THE VIEW, THE VIEW HAS THE INFO TO GIVE TO THE SELECTED COMPONENTS\r\n * IN THE WAY HOW THE TEMPLATE IS IMPLEMENTED\r\n */\r\n\r\nconst loadRecords = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const call = new _Calls_Calls__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n  const data = call.getDataFromIndexedDb();\r\n  //result set must be  in the format [{id title body},{},...]\r\n  ph.setResultSet(data);\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"LOAD-RESULTS\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n};\r\n\r\n/** IN DOM SELECTOR ARE DEFINED WHICH ELEMENTS ARE TO RELOAD WHEN CHANGING THE VIEW, ADDING SIMPLY AN ELEMENT TO THE ARRAY,\r\n * AND SPECIFYING IN THE VIEW HOW TO GET THE TEMPLATE.\r\n */\r\n\r\nconst loadSearchData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"SEARCH-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n  console.log(\"ACTION CALLED; LOADING FORM FOR Searching\");\r\n};\r\n\r\nconst loadInsertData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"INSERT-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n\r\n  console.log(elementsArray.length + \"elements array\");\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n  console.log(\"ACTION CALLED; LOADING FORM FOR INSERTING\");\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/actions/index.js?");

/***/ }),

/***/ "./dist/js/eventListeners/index.js":
/*!*****************************************!*\
  !*** ./dist/js/eventListeners/index.js ***!
  \*****************************************/
/*! exports provided: activateFormButton, listenNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateFormButton\", function() { return activateFormButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenNavbar\", function() { return listenNavbar; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./dist/js/actions/index.js\");\n\r\n\r\nconst loadingId = x => document.querySelector(\"[loading-id=\" + x + \"]\");\r\n\r\nconst activateFormButton = () => {\r\n  const form = loadingId(\"form-commands\");\r\n\r\n  if (form) {\r\n    form.addEventListener(\"submit\", e => {\r\n      e.preventDefault();\r\n      submitForm(e);\r\n    });\r\n  }\r\n};\r\n\r\nconst submitForm = e => {\r\n  // GETTING THE VALUE FROM THE FIRST DIV IN THE TEMPLATE\r\n  const submitted = e.target.firstChild.nextSibling.getAttribute(\"loading-id\");\r\n  console.log(submitted);\r\n  // initiate a class that handles the calls\r\n  switch (submitted) {\r\n    case \"SEARCH-DATA\":\r\n      console.log(submitted);\r\n      // displaying the result set\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadRecords\"])();\r\n      // calling action to query api and fill the new view of the result\r\n      break;\r\n    case \"INSERT-DATA\":\r\n      //loadRecords();\r\n      console.log(\"inserting data to db\");\r\n      console.log(submitted);\r\n      break;\r\n    default:\r\n      console.log(\"default value of switch for form event listener\");\r\n  }\r\n\r\n  // take the inputs and send a post request to backend for to load the record\r\n};\r\n\r\nconst listenNavbar = () => {\r\n  const navbar = loadingId(\"navbar-commands\");\r\n  if (navbar) {\r\n    navbar.addEventListener(\"click\", e => delegationNavbar(e));\r\n  }\r\n  const delegationNavbar = e => {\r\n    const trgt = e.target.getAttribute(\"loading-id\");\r\n\r\n    if (trgt === \"search-data\") {\r\n      //load form to search\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadSearchData\"])();\r\n      console.log(trgt);\r\n    }\r\n    if (trgt === \"add-data\") {\r\n      // load the form\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadInsertData\"])();\r\n      console.log(trgt);\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/eventListeners/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"domSelector\", function() { return domSelector; });\nfunction domSelector(page) {\r\n  let elementsArray = new Array();\r\n  const loadingId = x => document.querySelector(\"[loading-id=\" + x + \"]\");\r\n  switch (page) {\r\n    case \"INSERT-DATA\":\r\n      // return the array of elements that the view needs\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"form-commands\"));\r\n      elementsArray.push(loadingId(\"subtitle\"));\r\n      break;\r\n    case \"LOAD-RESULTS\":\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"result-container\"));\r\n      break;\r\n    case \"SEARCH-DATA\":\r\n      elementsArray = [];\r\n      elementsArray.push(loadingId(\"form-commands\"));\r\n      elementsArray.push(loadingId(\"subtitle\"));\r\n      break;\r\n    default:\r\n      console.log(\"default\");\r\n  }\r\n  return elementsArray;\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/pages/domSelector.js?");

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