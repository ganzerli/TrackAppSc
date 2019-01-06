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

/***/ "../../AppData/Roaming/npm/node_modules/webpack/node_modules/path-browserify/index.js":
/*!*******************************************************!*\
  !*** (webpack)/node_modules/path-browserify/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n// resolves . and .. elements in a path array with directory names there\n// must be no slashes, empty elements, or device names (c:\\) in the array\n// (so also no leading and trailing slashes - it does not distinguish\n// relative and absolute paths)\nfunction normalizeArray(parts, allowAboveRoot) {\n  // if the path tries to go above the root, `up` ends up > 0\n  var up = 0;\n  for (var i = parts.length - 1; i >= 0; i--) {\n    var last = parts[i];\n    if (last === '.') {\n      parts.splice(i, 1);\n    } else if (last === '..') {\n      parts.splice(i, 1);\n      up++;\n    } else if (up) {\n      parts.splice(i, 1);\n      up--;\n    }\n  }\n\n  // if the path is allowed to go above the root, restore leading ..s\n  if (allowAboveRoot) {\n    for (; up--; up) {\n      parts.unshift('..');\n    }\n  }\n\n  return parts;\n}\n\n// Split a filename into [root, dir, basename, ext], unix version\n// 'root' is just a slash, or nothing.\nvar splitPathRe =\n    /^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;\nvar splitPath = function(filename) {\n  return splitPathRe.exec(filename).slice(1);\n};\n\n// path.resolve([from ...], to)\n// posix version\nexports.resolve = function() {\n  var resolvedPath = '',\n      resolvedAbsolute = false;\n\n  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n    var path = (i >= 0) ? arguments[i] : process.cwd();\n\n    // Skip empty and invalid entries\n    if (typeof path !== 'string') {\n      throw new TypeError('Arguments to path.resolve must be strings');\n    } else if (!path) {\n      continue;\n    }\n\n    resolvedPath = path + '/' + resolvedPath;\n    resolvedAbsolute = path.charAt(0) === '/';\n  }\n\n  // At this point the path should be resolved to a full absolute path, but\n  // handle relative paths to be safe (might happen when process.cwd() fails)\n\n  // Normalize the path\n  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {\n    return !!p;\n  }), !resolvedAbsolute).join('/');\n\n  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';\n};\n\n// path.normalize(path)\n// posix version\nexports.normalize = function(path) {\n  var isAbsolute = exports.isAbsolute(path),\n      trailingSlash = substr(path, -1) === '/';\n\n  // Normalize the path\n  path = normalizeArray(filter(path.split('/'), function(p) {\n    return !!p;\n  }), !isAbsolute).join('/');\n\n  if (!path && !isAbsolute) {\n    path = '.';\n  }\n  if (path && trailingSlash) {\n    path += '/';\n  }\n\n  return (isAbsolute ? '/' : '') + path;\n};\n\n// posix version\nexports.isAbsolute = function(path) {\n  return path.charAt(0) === '/';\n};\n\n// posix version\nexports.join = function() {\n  var paths = Array.prototype.slice.call(arguments, 0);\n  return exports.normalize(filter(paths, function(p, index) {\n    if (typeof p !== 'string') {\n      throw new TypeError('Arguments to path.join must be strings');\n    }\n    return p;\n  }).join('/'));\n};\n\n\n// path.relative(from, to)\n// posix version\nexports.relative = function(from, to) {\n  from = exports.resolve(from).substr(1);\n  to = exports.resolve(to).substr(1);\n\n  function trim(arr) {\n    var start = 0;\n    for (; start < arr.length; start++) {\n      if (arr[start] !== '') break;\n    }\n\n    var end = arr.length - 1;\n    for (; end >= 0; end--) {\n      if (arr[end] !== '') break;\n    }\n\n    if (start > end) return [];\n    return arr.slice(start, end - start + 1);\n  }\n\n  var fromParts = trim(from.split('/'));\n  var toParts = trim(to.split('/'));\n\n  var length = Math.min(fromParts.length, toParts.length);\n  var samePartsLength = length;\n  for (var i = 0; i < length; i++) {\n    if (fromParts[i] !== toParts[i]) {\n      samePartsLength = i;\n      break;\n    }\n  }\n\n  var outputParts = [];\n  for (var i = samePartsLength; i < fromParts.length; i++) {\n    outputParts.push('..');\n  }\n\n  outputParts = outputParts.concat(toParts.slice(samePartsLength));\n\n  return outputParts.join('/');\n};\n\nexports.sep = '/';\nexports.delimiter = ':';\n\nexports.dirname = function(path) {\n  var result = splitPath(path),\n      root = result[0],\n      dir = result[1];\n\n  if (!root && !dir) {\n    // No dirname whatsoever\n    return '.';\n  }\n\n  if (dir) {\n    // It has a dirname, strip trailing slash\n    dir = dir.substr(0, dir.length - 1);\n  }\n\n  return root + dir;\n};\n\n\nexports.basename = function(path, ext) {\n  var f = splitPath(path)[2];\n  // TODO: make this comparison case-insensitive on windows?\n  if (ext && f.substr(-1 * ext.length) === ext) {\n    f = f.substr(0, f.length - ext.length);\n  }\n  return f;\n};\n\n\nexports.extname = function(path) {\n  return splitPath(path)[3];\n};\n\nfunction filter (xs, f) {\n    if (xs.filter) return xs.filter(f);\n    var res = [];\n    for (var i = 0; i < xs.length; i++) {\n        if (f(xs[i], i, xs)) res.push(xs[i]);\n    }\n    return res;\n}\n\n// String.prototype.substr - negative index don't work in IE8\nvar substr = 'ab'.substr(-1) === 'b'\n    ? function (str, start, len) { return str.substr(start, len) }\n    : function (str, start, len) {\n        if (start < 0) start = str.length + start;\n        return str.substr(start, len);\n    }\n;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///(webpack)/node_modules/path-browserify/index.js?");

/***/ }),

/***/ "../../AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///(webpack)/node_modules/process/browser.js?");

/***/ }),

/***/ "./dist/js/Calls/Calls.js":
/*!********************************!*\
  !*** ./dist/js/Calls/Calls.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Calls; });\n/* harmony import */ var _ClientDb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClientDb */ \"./dist/js/ClientDb/index.js\");\n\r\n\r\nclass Calls {\r\n  constructor() {\r\n    this.response = [];\r\n  }\r\n\r\n  // functions for fetching the local storage\r\n\r\n  getDataFromIndexedDb() {\r\n    let resp;\r\n    const db = new _ClientDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    resp = db.getRecords();\r\n\r\n    return resp;\r\n    // return this.response;\r\n  }\r\n\r\n  // called from the action of the form to add an element\r\n  pushDataToIndexedDb(data) {\r\n    const db = new _ClientDb__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    return db.insertRecord(data);\r\n  }\r\n  // functions to get something from remote storage\r\n  getDataFromBackend() {}\r\n  pushDataToBackend() {}\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/Calls/Calls.js?");

/***/ }),

/***/ "./dist/js/ClientDb/index.js":
/*!***********************************!*\
  !*** ./dist/js/ClientDb/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ClientDb; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"../../AppData/Roaming/npm/node_modules/webpack/node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass ClientDb {\r\n  constructor() {\r\n    this.set = [];\r\n    this.storeArray = [];\r\n    this.DB; //needed for the indexed db result\r\n    //setup the transaction type\r\n    //\r\n    // connection to db\r\n    // instanciate a new indexed database with name and version\r\n    this.recordsDb = window.indexedDB.open(\"recordsDb\", 1);\r\n\r\n    // this method runs only once when instanciated\r\n    /**\r\n     * IN THE TOOLBOX OF THE BROWSER SELECTING APPLICATION STORAGE INDEXED DB IS POSSIBLE TO DELETE AN INSTANCIATED DB IN THE BROWSER;\r\n     *  DELETING THE DB USED; WHEN THE NEW DB GET CREATED THIS METHOD RUNS AGAIN; ONLY ONCE PER DB\r\n     */\r\n    this.recordsDb.onupgradeneeded = e => {\r\n      // IDBDatabase {name: \"recordsDb\", version: 1, objectStoreNames: DOMStringList, onabort: null, onclose: null, …}\r\n      let db = e.target.result;\r\n      // ####################### INDEXED DB   -  S C H E M A  -\r\n      // keyPath is the indexes\r\n      let objectStore = db.createObjectStore(\"recordsDb\", {\r\n        keyPath: \"key\",\r\n        autoIncrement: true\r\n      });\r\n      // create the Index 1) field name, 2) keypath 3)options\r\n      objectStore.createIndex(\"title\", \"title\", { unique: false });\r\n      objectStore.createIndex(\"body\", \"body\", { unique: false });\r\n      objectStore.createIndex(\"date\", \"date\", { unique: false });\r\n      objectStore.createIndex(\"checked\", \"checked\", { unique: false });\r\n\r\n      console.log(\"database ready first time running\");\r\n    };\r\n  }\r\n\r\n  // methods of this class must get set in the db and map to this.set\r\n  fetchRecordsFromIndexedDb() {\r\n    return new Promise(resolve => {\r\n      // load the connection\r\n      // SUCCESS opening\r\n      this.recordsDb.onsuccess = () => {\r\n        this.DB = this.recordsDb.result;\r\n        // set transaction and get the object store from the store of transaction in thid db\r\n        let objectStore = this.DB.transaction(\"recordsDb\").objectStore(\r\n          \"recordsDb\"\r\n        );\r\n        // this is the method to use to get the data\r\n        objectStore.openCursor().onsuccess = e => {\r\n          // assing the cursor\r\n          // the cursor has the forst key and a proprty move next\r\n          let cursor = e.target.result;\r\n          if (cursor) {\r\n            cursor.continue();\r\n            const respObj = {\r\n              title: cursor.value.title,\r\n              body: cursor.value.body,\r\n              date: cursor.value.date,\r\n              checked: cursor.value.checked\r\n            };\r\n            this.storeArray.push(respObj);\r\n          } else {\r\n            // when the cursor has finished , then return!!\r\n            resolve(this.storeArray);\r\n          }\r\n        };\r\n      };\r\n      //errors on connection\r\n      this.recordsDb.onerror = e => {\r\n        console.log(\"error\" + e);\r\n      };\r\n    });\r\n  }\r\n\r\n  async loadSetFromIndexedDb() {\r\n    let result;\r\n    await this.fetchRecordsFromIndexedDb().then(res => {\r\n      result = [...res];\r\n    });\r\n\r\n    return result;\r\n  }\r\n  /**\r\n   * INSERT RECORT MIST SUPPLY TO THE INDEXED DB AN OBJECT WITH THE PROPS SET AS THE SCHEMA FOR TTHE DB\r\n   *\r\n   */\r\n  async insertRecord(record) {\r\n    // taking the record and push into array\r\n    const theRecord = record;\r\n    // load the set\r\n    let result = await this.loadSetFromIndexedDb();\r\n\r\n    // activate db\r\n    // ERROR on open\r\n    this.recordsDb.onerror = e => {\r\n      console.log(\"error\" + e);\r\n    };\r\n\r\n    // SUCCESS opening\r\n    this.recordsDb.onsuccess = () => {\r\n      this.DB = this.recordsDb.result;\r\n      // then\r\n      let transaction = this.DB.transaction([\"recordsDb\"], \"readwrite\");\r\n      // objectStore has the keypath\r\n      let objectStore = transaction.objectStore(\"recordsDb\");\r\n      // make the request to the db\r\n      let request = objectStore.add(theRecord);\r\n      // SUCCESS\r\n      request.onsuccess = () => {\r\n        // if refresh form needed or something\r\n      };\r\n      transaction.oncomplete = () => {\r\n        console.log(\"the record is been added\");\r\n      };\r\n      transaction.onerror = () => {\r\n        console.log(\"something went wrong\");\r\n      };\r\n      // SET THE SET!!\r\n      this.set.push(record);\r\n    };\r\n    // returns the set after new element is been pushed\r\n    return result;\r\n  }\r\n\r\n  async getRecords() {\r\n    let a = await this.loadSetFromIndexedDb();\r\n    return a;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./dist/js/ClientDb/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templatesArr\", function() { return templatesArr; });\nconst templatesArr = [\r\n  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM\r\n  {\r\n    name: \"INSERT-DATA\",\r\n    html: `\r\n    <div class=\"form-wrap\" loading-id=\"INSERT-DATA\"> \r\n    <div class=\"form-group form-group-input\">\r\n        <input loading-id=\"title\" type=\"text\" name=\"title\" placeholder=\"title\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-input\">\r\n        <input loading-id=\"body\" type=\"text\" name=\"body\" placeholder=\"body\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"submit\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>\r\n    </div>\r\n    `\r\n  },\r\n  // FIRST WRAPPER MUST HAVE THE LOADING-ID ATTRIBUTE TO CALL THE FUNCTION FROM THE FORM\r\n  {\r\n    name: \"SEARCH-DATA\",\r\n    html: `\r\n    <div class=\"form-wrap\" loading-id=\"SEARCH-DATA\"> \r\n    <div class=\"form-group form-group-input\">\r\n        <input loading-id=\"search\" type=\"text\" name=\"search\" class=\"form-input-text\" />\r\n    </div>\r\n    <div class=\"form-group form-group-submit\">\r\n        <input\r\n        type=\"submit\"\r\n        name=\"submit\"\r\n        value=\"SEARCH SOMETHING\"\r\n        class=\"form-input-submit\"\r\n        />\r\n    </div>\r\n    </div>\r\n    `\r\n  }\r\n];\r\n\n\n//# sourceURL=webpack:///./dist/js/Templates/templatesArr.js?");

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
/*! exports provided: loadRecords, insertRecord, loadSearchData, loadInsertData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadRecords\", function() { return loadRecords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertRecord\", function() { return insertRecord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSearchData\", function() { return loadSearchData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadInsertData\", function() { return loadInsertData; });\n/* harmony import */ var _pages_domSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/domSelector */ \"./dist/js/pages/domSelector.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ \"./dist/js/View/index.js\");\n/* harmony import */ var _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/pageHandler */ \"./dist/js/pages/pageHandler.js\");\n/* harmony import */ var _Calls_Calls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Calls/Calls */ \"./dist/js/Calls/Calls.js\");\n\r\n\r\n\r\n\r\n\r\n// actions are called from the event listeners, must initiate an instance of view and ph to pass to the vieew changing the page\r\n\r\n/**\r\n *  THE PAGEHANDLER KEEPS THE PAGE AND THE RESULT SET; SO WHEN PASSED TO THE VIEW, THE VIEW HAS THE INFO TO GIVE TO THE SELECTED COMPONENTS\r\n * IN THE WAY HOW THE TEMPLATE IS IMPLEMENTED\r\n */\r\n\r\n// get the records from somewhere and paint the result\r\nconst loadRecords = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  const call = new _Calls_Calls__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n  const promise = call.getDataFromIndexedDb();\r\n  //result set must be  in the format [{id title body},{},...]\r\n  promise.then(data => {\r\n    console.log(data);\r\n    ph.setResultSet(data);\r\n    // set the new page to load\r\n    ph.setCurrentPage(\"LOAD-RESULTS\");\r\n    // take the element wanted and prepare layout with page\r\n    const page = ph.getCurrentPage();\r\n    const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n    // the view needs this instance of the object to load the html template extracting the oject of records\r\n    view.fill(elementsArray, ph);\r\n  });\r\n};\r\n\r\nconst insertRecord = parentElement => {\r\n  // attribute is defied in the template\r\n  const title = parentElement.querySelector(\"[loading-id=title]\").value;\r\n  const body = parentElement.querySelector(\"[loading-id=body]\").value;\r\n\r\n  if (title === \"\" || title === \" \" || body === \"\" || body === \" \") {\r\n    console.log(\"something empty\");\r\n  } else {\r\n    // load needed classes\r\n    const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    const call = new _Calls_Calls__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n    // format record\r\n    const record = {\r\n      title,\r\n      body,\r\n      date: Date.now(),\r\n      checked: \"false\"\r\n    };\r\n    // in this method of call get <-----------  initialized the DB\r\n    const data = call.pushDataToIndexedDb(record);\r\n    // is now a promise;\r\n    console.log(data);\r\n    // call a post request to the db\r\n    // get the result from db and display all together\r\n  }\r\n};\r\n\r\n/** IN DOM SELECTOR ARE DEFINED WHICH ELEMENTS ARE TO RELOAD WHEN CHANGING THE VIEW, ADDING SIMPLY AN ELEMENT TO THE ARRAY,\r\n * AND SPECIFYING IN THE VIEW HOW TO GET THE TEMPLATE.\r\n */\r\n\r\n// loads the form to search data\r\nconst loadSearchData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"SEARCH-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n};\r\n\r\n// loads the form for to insert the data\r\nconst loadInsertData = () => {\r\n  const view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  const ph = new _pages_pageHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  // set the new page to load\r\n  ph.setCurrentPage(\"INSERT-DATA\");\r\n  // take the element wanted and prepare layout with page\r\n  const page = ph.getCurrentPage();\r\n  const elementsArray = Object(_pages_domSelector__WEBPACK_IMPORTED_MODULE_0__[\"domSelector\"])(page);\r\n  // the view needs this instance of the object to load the html template extracting the oject of records\r\n  view.fill(elementsArray, ph);\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/actions/index.js?");

/***/ }),

/***/ "./dist/js/eventListeners/index.js":
/*!*****************************************!*\
  !*** ./dist/js/eventListeners/index.js ***!
  \*****************************************/
/*! exports provided: activateFormButton, listenNavbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateFormButton\", function() { return activateFormButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"listenNavbar\", function() { return listenNavbar; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./dist/js/actions/index.js\");\n\r\n\r\nconst loadingId = x => document.querySelector(\"[loading-id=\" + x + \"]\");\r\n\r\nconst activateFormButton = () => {\r\n  const form = loadingId(\"form-commands\");\r\n\r\n  if (form) {\r\n    form.addEventListener(\"submit\", e => {\r\n      e.preventDefault();\r\n      submitForm(e);\r\n    });\r\n  }\r\n};\r\n\r\nconst submitForm = e => {\r\n  // GETTING THE VALUE FROM THE FIRST DIV IN THE TEMPLATE\r\n  const submitted = e.target.firstChild.nextSibling.getAttribute(\"loading-id\");\r\n\r\n  // initiate a class that handles the calls\r\n  switch (submitted) {\r\n    case \"SEARCH-DATA\":\r\n      // console.log(submitted);\r\n      // displaying the result set\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadRecords\"])();\r\n      // calling action to query api and fill the new view of the result\r\n      break;\r\n    case \"INSERT-DATA\":\r\n      const form = e.target;\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"insertRecord\"])(form);\r\n      //  console.log(submitted);\r\n      break;\r\n    default:\r\n      console.log(\"default value of switch for form event listener\");\r\n  }\r\n\r\n  // take the inputs and send a post request to backend for to load the record\r\n};\r\n\r\nconst listenNavbar = () => {\r\n  const navbar = loadingId(\"navbar-commands\");\r\n  if (navbar) {\r\n    navbar.addEventListener(\"click\", e => delegationNavbar(e));\r\n  }\r\n  const delegationNavbar = e => {\r\n    const trgt = e.target.getAttribute(\"loading-id\");\r\n\r\n    if (trgt === \"search-data\") {\r\n      //load form to search\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadSearchData\"])();\r\n      console.log(trgt);\r\n    }\r\n    if (trgt === \"add-data\") {\r\n      // load the form\r\n      Object(_actions__WEBPACK_IMPORTED_MODULE_0__[\"loadInsertData\"])();\r\n      console.log(trgt);\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./dist/js/eventListeners/index.js?");

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