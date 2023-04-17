/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const patterns = {\r\n    telephone: /^\\d{11}$/,\r\n    username: /^[a-z\\d\\s+]{5,10}$/i,\r\n    password: /^[\\w@-]{8,15}$/i,\r\n    profile: /^[a-z0-9-]{8,20}$/,\r\n    email: /^([a-z\\d\\.-]+)@([a-z\\d-]+)\\.([a-z]{2,8})(\\.[a-z]{2,8})?$/\r\n}\r\nconst inputs = document.querySelectorAll('input');\r\n\r\nconst validate = (field, regex) => {\r\n    if (regex.test(field.value)) {\r\n        field.classList.add(\"border-green-500\")\r\n        field.classList.remove(\"border-red-500\")\r\n    } else {\r\n        field.classList.add(\"border-red-500\")\r\n        field.classList.remove(\"border-green-500\")\r\n    }\r\n}\r\n\r\ninputs.forEach(input => {\r\n    input.addEventListener('keyup', (e) => {\r\n        validate(e.target, patterns[e.target.attributes.name.value])\r\n    })\r\n})\n\n//# sourceURL=webpack://fire/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;