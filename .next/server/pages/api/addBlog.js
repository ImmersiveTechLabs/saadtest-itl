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

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("process");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process */ \"process\");\n/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_2__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// pages/api/addBlog.js\n\n\n\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    try {\n      console.log('Current working directory:', process.cwd());\n      const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'src', 'data', 'blogs.json');\n      console.log('Attempting to read file at:', filePath);\n\n      if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) {\n        console.error('File does not exist:', filePath);\n        return res.status(500).json({\n          message: 'File does not exist'\n        });\n      }\n\n      const fileData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, 'utf8'));\n      console.log('Current file data:', fileData);\n      const newId = fileData.length > 0 ? fileData[fileData.length - 1].id + 1 : 1; // convert title to slug\n\n      const link = req.body.title.toLowerCase().replace(/ /g, '-').replace(/[^\\w-]+/g, '');\n\n      const newBlog = _objectSpread(_objectSpread({\n        id: newId\n      }, req.body), {}, {\n        link,\n        date: {\n          day: new Date().getDate(),\n          month: new Date().toLocaleString('default', {\n            month: 'long'\n          })\n        }\n      });\n\n      fileData.push(newBlog);\n      fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filePath, JSON.stringify(fileData, null, 2));\n      return res.status(200).json({\n        message: 'Blog added successfully!'\n      });\n    } catch (error) {\n      console.error('An error occurred:', error);\n      return res.status(500).json({\n        message: 'An error occurred',\n        error: error.message\n      });\n    }\n  } else {\n    res.setHeader('Allow', ['POST']);\n    return res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2FkZEJsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3hDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosRUFBMENDLE9BQU8sQ0FBQ0MsR0FBUixFQUExQztBQUVBLFlBQU1DLFFBQVEsR0FBR1YsZ0RBQUEsQ0FBVVEsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBd0IsS0FBeEIsRUFBK0IsTUFBL0IsRUFBdUMsWUFBdkMsQ0FBakI7QUFDQUgsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFBMkNHLFFBQTNDOztBQUVBLFVBQUksQ0FBQ1gsb0RBQUEsQ0FBY1csUUFBZCxDQUFMLEVBQThCO0FBQzVCSixRQUFBQSxPQUFPLENBQUNPLEtBQVIsQ0FBYyxzQkFBZCxFQUFzQ0gsUUFBdEM7QUFDQSxlQUFPTixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFyQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV3BCLHNEQUFBLENBQWdCVyxRQUFoQixFQUEwQixNQUExQixDQUFYLENBQWpCO0FBQ0FKLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDVSxRQUFsQztBQUVBLFlBQU1JLEtBQUssR0FBR0osUUFBUSxDQUFDSyxNQUFULEdBQWtCLENBQWxCLEdBQXNCTCxRQUFRLENBQUNBLFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixDQUFuQixDQUFSLENBQThCQyxFQUE5QixHQUFtQyxDQUF6RCxHQUE2RCxDQUEzRSxDQWRFLENBZ0JGOztBQUNBLFlBQU1DLElBQUksR0FBR3JCLEdBQUcsQ0FBQ3NCLElBQUosQ0FBU3hCLEtBQVQsQ0FBZXlCLFdBQWYsR0FBNkJDLE9BQTdCLENBQXFDLElBQXJDLEVBQTJDLEdBQTNDLEVBQWdEQSxPQUFoRCxDQUF3RCxVQUF4RCxFQUFvRSxFQUFwRSxDQUFiOztBQUdBLFlBQU1DLE9BQU87QUFDWEwsUUFBQUEsRUFBRSxFQUFFRjtBQURPLFNBRVJsQixHQUFHLENBQUNzQixJQUZJO0FBR1hELFFBQUFBLElBSFc7QUFJWEssUUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFVBQUFBLEdBQUcsRUFBRSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFERDtBQUVKQyxVQUFBQSxLQUFLLEVBQUUsSUFBSUYsSUFBSixHQUFXRyxjQUFYLENBQTBCLFNBQTFCLEVBQXFDO0FBQUVELFlBQUFBLEtBQUssRUFBRTtBQUFULFdBQXJDO0FBRkg7QUFKSyxRQUFiOztBQVVBaEIsTUFBQUEsUUFBUSxDQUFDa0IsSUFBVCxDQUFjUCxPQUFkO0FBRUE3QixNQUFBQSx1REFBQSxDQUFpQlcsUUFBakIsRUFBMkJRLElBQUksQ0FBQ21CLFNBQUwsQ0FBZXBCLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FBM0I7QUFFQSxhQUFPYixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0QsS0FuQ0QsQ0FtQ0UsT0FBT0gsS0FBUCxFQUFjO0FBQ2RQLE1BQUFBLE9BQU8sQ0FBQ08sS0FBUixDQUFjLG9CQUFkLEVBQW9DQSxLQUFwQztBQUNBLGFBQU9ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFFBQUFBLE9BQU8sRUFBRSxtQkFBWDtBQUFnQ0gsUUFBQUEsS0FBSyxFQUFFQSxLQUFLLENBQUNHO0FBQTdDLE9BQXJCLENBQVA7QUFDRDtBQUNGLEdBeENELE1Bd0NPO0FBQ0xaLElBQUFBLEdBQUcsQ0FBQ2tDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBLFdBQU9sQyxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCeUIsR0FBaEIsQ0FBcUIsVUFBU3BDLEdBQUcsQ0FBQ0UsTUFBTyxjQUF6QyxDQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9wYWdlcy9hcGkvYWRkQmxvZy5qcz80OWE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL2FwaS9hZGRCbG9nLmpzXHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyB0aXRsZSB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5OicsIHByb2Nlc3MuY3dkKCkpO1xyXG5cclxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwnc3JjJywgJ2RhdGEnLCAnYmxvZ3MuanNvbicpO1xyXG4gICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byByZWFkIGZpbGUgYXQ6JywgZmlsZVBhdGgpO1xyXG5cclxuICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZpbGUgZG9lcyBub3QgZXhpc3Q6JywgZmlsZVBhdGgpO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6ICdGaWxlIGRvZXMgbm90IGV4aXN0JyB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgZmlsZURhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgJ3V0ZjgnKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IGZpbGUgZGF0YTonLCBmaWxlRGF0YSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdJZCA9IGZpbGVEYXRhLmxlbmd0aCA+IDAgPyBmaWxlRGF0YVtmaWxlRGF0YS5sZW5ndGggLSAxXS5pZCArIDEgOiAxO1xyXG5cclxuICAgICAgLy8gY29udmVydCB0aXRsZSB0byBzbHVnXHJcbiAgICAgIGNvbnN0IGxpbmsgPSByZXEuYm9keS50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKS5yZXBsYWNlKC9bXlxcdy1dKy9nLCAnJyk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgY29uc3QgbmV3QmxvZyA9IHtcclxuICAgICAgICBpZDogbmV3SWQsXHJcbiAgICAgICAgLi4ucmVxLmJvZHksXHJcbiAgICAgICAgbGluayxcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmaWxlRGF0YS5wdXNoKG5ld0Jsb2cpO1xyXG5cclxuICAgICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZmlsZURhdGEsIG51bGwsIDIpKTtcclxuXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdCbG9nIGFkZGVkIHN1Y2Nlc3NmdWxseSEnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQ6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQW4gZXJyb3Igb2NjdXJyZWQnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsInRpdGxlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiY3dkIiwiZmlsZVBhdGgiLCJqb2luIiwiZXhpc3RzU3luYyIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJmaWxlRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIm5ld0lkIiwibGVuZ3RoIiwiaWQiLCJsaW5rIiwiYm9keSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm5ld0Jsb2ciLCJkYXRlIiwiZGF5IiwiRGF0ZSIsImdldERhdGUiLCJtb250aCIsInRvTG9jYWxlU3RyaW5nIiwicHVzaCIsIndyaXRlRmlsZVN5bmMiLCJzdHJpbmdpZnkiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/addBlog.js\n");

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