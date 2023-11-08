"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addBlog";
exports.ids = ["pages/api/addBlog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/pages/api/addBlog.js":
/*!**********************************!*\
  !*** ./src/pages/api/addBlog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// pages/api/addBlog.js\n\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      console.log('Current working directory:', process.cwd());\n      const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src', 'data', 'blogs.json');\n      console.log('Attempting to read file at:', filePath);\n\n      if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n        console.error('File does not exist:', filePath);\n        return res.status(500).json({\n          message: 'File does not exist'\n        });\n      }\n\n      const fileData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8'));\n      console.log('Current file data:', fileData);\n      const newId = fileData.length > 0 ? fileData[fileData.length - 1].id + 1 : 1;\n\n      const newBlog = _objectSpread(_objectSpread({\n        id: newId\n      }, req.body), {}, {\n        date: {\n          day: new Date().getDate(),\n          month: new Date().toLocaleString('default', {\n            month: 'long'\n          })\n        }\n      });\n\n      fileData.push(newBlog);\n      fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(fileData, null, 2));\n      return res.status(200).json({\n        message: 'Blog added successfully!'\n      });\n    } catch (error) {\n      console.error('An error occurred:', error);\n      return res.status(500).json({\n        message: 'An error occurred',\n        error: error.message\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    return res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXRsLy4vc3JjL3BhZ2VzL2FwaS9hZGRCbG9nLmpzPzQ5YTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvYXBpL2FkZEJsb2cuanNcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgd29ya2luZyBkaXJlY3Rvcnk6JywgcHJvY2Vzcy5jd2QoKSk7XHJcblxyXG4gICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCdzcmMnLCAnZGF0YScsICdibG9ncy5qc29uJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIHJlYWQgZmlsZSBhdDonLCBmaWxlUGF0aCk7XHJcblxyXG4gICAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZVBhdGgpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmlsZSBkb2VzIG5vdCBleGlzdDonLCBmaWxlUGF0aCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0ZpbGUgZG9lcyBub3QgZXhpc3QnIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBmaWxlRGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCAndXRmOCcpKTtcclxuICAgICAgY29uc29sZS5sb2coJ0N1cnJlbnQgZmlsZSBkYXRhOicsIGZpbGVEYXRhKTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0lkID0gZmlsZURhdGEubGVuZ3RoID4gMCA/IGZpbGVEYXRhW2ZpbGVEYXRhLmxlbmd0aCAtIDFdLmlkICsgMSA6IDE7XHJcblxyXG4gICAgICBjb25zdCBuZXdCbG9nID0ge1xyXG4gICAgICAgIGlkOiBuZXdJZCxcclxuICAgICAgICAuLi5yZXEuYm9keSxcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmaWxlRGF0YS5wdXNoKG5ld0Jsb2cpO1xyXG5cclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZURhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdCbG9nIGFkZGVkIHN1Y2Nlc3NmdWxseSEnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImN3ZCIsImZpbGVQYXRoIiwiam9pbiIsImV4aXN0c1N5bmMiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZmlsZURhdGEiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuZXdJZCIsImxlbmd0aCIsImlkIiwibmV3QmxvZyIsImJvZHkiLCJkYXRlIiwiZGF5IiwiRGF0ZSIsImdldERhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/addBlog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/addBlog.js"));
module.exports = __webpack_exports__;

})();