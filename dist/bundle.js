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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var button = document.getElementById("Button");
button.addEventListener("click", Manipulate);
var listId = 0;
function Manipulate() {
    var input = document.getElementById("InputText").value;
    var selected = parseInt(document.getElementById("Options").value);
    var result;
    switch (selected) {
        case 1: {
            result = input.toUpperCase();
            break;
        }
        case 2: {
            result = input.toLowerCase();
            break;
        }
        // case 4: { result = input[0].toUpperCase() + input.slice(1, input.length); break; }
        default: {
            result = "";
            break;
        }
    }
    var ListElement = document.createElement("li");
    ListElement.setAttribute("id", "ListPoint" + listId);
    ListElement.textContent = result;
    var List = document.getElementById("resultList");
    List.appendChild(ListElement);
    listId++;
}
// or 
//add eventlistener at the button and tell to execute the function addInputText on a click event
document.getElementById('submitBtn').addEventListener("click", addInputText);
//find the text input field in the html
var elementInput = document.getElementById('input');
//find the select element in the html
var selectInputUpLow = document.getElementById('UpLow');
//counter 
var clicked = 0;
//function that add the input text in upper or lower case to the list
function addInputText() {
    clicked++;
    //get the value from the text input element , need to cast to <HTMLInputElement>
    var inputText = elementInput.value;
    //get the value from the select input element , need to cast to <HTMLSelectElement>
    var upLow = selectInputUpLow.value;
    var result = "";
    //test which value the selectinput elements has
    if (upLow == "upper")
        result = inputText.toUpperCase();
    else
        result = inputText.toLowerCase();
    //finds the list to add the new element too
    var listResult = document.getElementById('StringManipulation');
    //create a new li element
    var newLi = document.createElement('li');
    var newText = document.createTextNode(clicked.toString() + " - " + result);
    newLi.appendChild(newText);
    //set the attribute of the li element 
    if (isEven(clicked))
        newLi.setAttribute('class', 'even');
    else
        newLi.setAttribute('class', 'odd');
    //add the li element to the list 
    listResult.appendChild(newLi);
    //clear the input field
    elementInput.value = '';
}
//Test if the number is even or not
function isEven(nr) {
    if (nr % 2 == 0)
        return true;
    return false;
}


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./src/index.htm ./src/scss/styles.scss ./src/js/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!(function webpackMissingModule() { var e = new Error("Cannot find module './src/index.htm'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
module.exports = __webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map