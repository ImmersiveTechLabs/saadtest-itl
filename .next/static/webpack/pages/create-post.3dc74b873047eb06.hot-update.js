"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-post",{

/***/ "./src/components/BlogForm.js":
/*!************************************!*\
  !*** ./src/components/BlogForm.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogForm; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\testing\\\\Dark-theme-itl\\\\src\\\\components\\\\BlogForm.js\";\n\n\n// components/BlogForm.js\nfunction BlogForm(_ref) {\n  var onFormSubmit = _ref.onFormSubmit;\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var formData;\n      return C_Users_Usman_Desktop_testing_Dark_theme_itl_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault(); // Extract data from the form\n\n              formData = {\n                title: event.target.title.value,\n                subtitle: event.target.subtitle.value,\n                content: event.target.content.value,\n                image: event.target.image.value,\n                tags: event.target.tags.value.split(','),\n                // Assuming tags are comma-separated\n                link: event.target.link.value\n              };\n              onFormSubmit(formData);\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"title\",\n      placeholder: \"Title\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"subTitle\",\n      placeholder: \"subTitle\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"textarea\", {\n      name: \"htmlContent\",\n      placeholder: \"Content\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      placeholder: \"Image URL\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"tags\",\n      placeholder: \"Tags,Separated,By,Comma\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"Slug\",\n      placeholder: \"Link\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, this);\n}\n_c = BlogForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxPQUFvQztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQy9DLE1BQU1DLFlBQVk7QUFBQSwrU0FBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkJBLGNBQUFBLEtBQUssQ0FBQ0MsY0FBTixHQURtQixDQUduQjs7QUFDTUMsY0FBQUEsUUFKYSxHQUlGO0FBQ2ZDLGdCQUFBQSxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksTUFBTixDQUFhRCxLQUFiLENBQW1CRSxLQURYO0FBRWZDLGdCQUFBQSxRQUFRLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxRQUFiLENBQXNCRCxLQUZqQjtBQUdmRSxnQkFBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNJLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkYsS0FIZjtBQUlmRyxnQkFBQUEsS0FBSyxFQUFFUixLQUFLLENBQUNJLE1BQU4sQ0FBYUksS0FBYixDQUFtQkgsS0FKWDtBQUtmSSxnQkFBQUEsSUFBSSxFQUFFVCxLQUFLLENBQUNJLE1BQU4sQ0FBYUssSUFBYixDQUFrQkosS0FBbEIsQ0FBd0JLLEtBQXhCLENBQThCLEdBQTlCLENBTFM7QUFLMkI7QUFDMUNDLGdCQUFBQSxJQUFJLEVBQUVYLEtBQUssQ0FBQ0ksTUFBTixDQUFhTyxJQUFiLENBQWtCTjtBQU5ULGVBSkU7QUFhbkJQLGNBQUFBLFlBQVksQ0FBQ0ksUUFBRCxDQUFaOztBQWJtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSCxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQWdCQSxzQkFDRTtBQUFNLFlBQVEsRUFBRUEsWUFBaEI7QUFBQSw0QkFDRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBQyxPQUF4QjtBQUFnQyxpQkFBVyxFQUFDLE9BQTVDO0FBQW9ELGNBQVE7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsVUFBeEI7QUFBbUMsaUJBQVcsRUFBQyxVQUEvQztBQUEwRCxjQUFRO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQVUsVUFBSSxFQUFDLGFBQWY7QUFBNkIsaUJBQVcsRUFBQyxTQUF6QztBQUFtRCxjQUFRO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLE9BQXhCO0FBQWdDLGlCQUFXLEVBQUMsV0FBNUM7QUFBd0QsY0FBUTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBQyxNQUF4QjtBQUErQixpQkFBVyxFQUFDLHlCQUEzQztBQUFxRSxjQUFRO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQU1FO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLE1BQXhCO0FBQStCLGlCQUFXLEVBQUMsTUFBM0M7QUFBa0QsY0FBUTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtLQTVCcUJGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dGb3JtLmpzP2FhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9CbG9nRm9ybS5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0Zvcm0oeyBvbkZvcm1TdWJtaXQgfSkge1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBFeHRyYWN0IGRhdGEgZnJvbSB0aGUgZm9ybVxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlLFxyXG4gICAgICAgIHN1YnRpdGxlOiBldmVudC50YXJnZXQuc3VidGl0bGUudmFsdWUsXHJcbiAgICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmNvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgaW1hZ2U6IGV2ZW50LnRhcmdldC5pbWFnZS52YWx1ZSxcclxuICAgICAgICB0YWdzOiBldmVudC50YXJnZXQudGFncy52YWx1ZS5zcGxpdCgnLCcpLCAvLyBBc3N1bWluZyB0YWdzIGFyZSBjb21tYS1zZXBhcmF0ZWRcclxuICAgICAgICBsaW5rOiBldmVudC50YXJnZXQubGluay52YWx1ZSxcclxuICAgICAgfTtcclxuICBcclxuICAgICAgb25Gb3JtU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3ViVGl0bGVcIiBwbGFjZWhvbGRlcj1cInN1YlRpdGxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImh0bWxDb250ZW50XCIgcGxhY2Vob2xkZXI9XCJDb250ZW50XCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiaW1hZ2VcIiBwbGFjZWhvbGRlcj1cIkltYWdlIFVSTFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhZ3NcIiBwbGFjZWhvbGRlcj1cIlRhZ3MsU2VwYXJhdGVkLEJ5LENvbW1hXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiU2x1Z1wiIHBsYWNlaG9sZGVyPVwiTGlua1wiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG4gICJdLCJuYW1lcyI6WyJCbG9nRm9ybSIsIm9uRm9ybVN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsInRpdGxlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsInRhZ3MiLCJzcGxpdCIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BlogForm.js\n");

/***/ })

});