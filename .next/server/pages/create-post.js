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
exports.id = "pages/create-post";
exports.ids = ["pages/create-post"];
exports.modules = {

/***/ "./src/components/BlogForm.js":
/*!************************************!*\
  !*** ./src/components/BlogForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BlogForm)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\automation blog ITL\\\\saadtest-itl\\\\src\\\\components\\\\BlogForm.js\";\n\n// components/BlogForm.js\nfunction BlogForm({\n  onFormSubmit\n}) {\n  const handleSubmit = async event => {\n    event.preventDefault(); // Extract data from the form\n\n    const formData = {\n      title: event.target.title.value,\n      subtitle: event.target.subtitle.value,\n      content: event.target.content.value,\n      image: event.target.image.value,\n      tags: event.target.tags.value.split(',') // Assuming tags are comma-separated\n\n    };\n    onFormSubmit(formData);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"title\",\n      placeholder: \"Title\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"subtitle\",\n      placeholder: \"subTitle\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n      name: \"content\",\n      placeholder: \"Content\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      placeholder: \"Image URL\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"text\",\n      name: \"tags\",\n      placeholder: \"Tags,Separated,By,Comma\",\n      required: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 7\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsUUFBVCxDQUFrQjtBQUFFQyxFQUFBQTtBQUFGLENBQWxCLEVBQW9DO0FBQy9DLFFBQU1DLFlBQVksR0FBRyxNQUFPQyxLQUFQLElBQWlCO0FBQ3BDQSxJQUFBQSxLQUFLLENBQUNDLGNBQU4sR0FEb0MsQ0FHcEM7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHO0FBQ2ZDLE1BQUFBLEtBQUssRUFBRUgsS0FBSyxDQUFDSSxNQUFOLENBQWFELEtBQWIsQ0FBbUJFLEtBRFg7QUFFZkMsTUFBQUEsUUFBUSxFQUFFTixLQUFLLENBQUNJLE1BQU4sQ0FBYUUsUUFBYixDQUFzQkQsS0FGakI7QUFHZkUsTUFBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNJLE1BQU4sQ0FBYUcsT0FBYixDQUFxQkYsS0FIZjtBQUlmRyxNQUFBQSxLQUFLLEVBQUVSLEtBQUssQ0FBQ0ksTUFBTixDQUFhSSxLQUFiLENBQW1CSCxLQUpYO0FBS2ZJLE1BQUFBLElBQUksRUFBRVQsS0FBSyxDQUFDSSxNQUFOLENBQWFLLElBQWIsQ0FBa0JKLEtBQWxCLENBQXdCSyxLQUF4QixDQUE4QixHQUE5QixDQUxTLENBSzJCOztBQUwzQixLQUFqQjtBQVFBWixJQUFBQSxZQUFZLENBQUNJLFFBQUQsQ0FBWjtBQUNELEdBYkQ7O0FBZUEsc0JBQ0U7QUFBTSxZQUFRLEVBQUVILFlBQWhCO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsT0FBeEI7QUFBZ0MsaUJBQVcsRUFBQyxPQUE1QztBQUFvRCxjQUFRO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBSSxFQUFDLFVBQXhCO0FBQW1DLGlCQUFXLEVBQUMsVUFBL0M7QUFBMEQsY0FBUTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFVLFVBQUksRUFBQyxTQUFmO0FBQXlCLGlCQUFXLEVBQUMsU0FBckM7QUFBK0MsY0FBUTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUksRUFBQyxPQUF4QjtBQUFnQyxpQkFBVyxFQUFDLFdBQTVDO0FBQXdELGNBQVE7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixVQUFJLEVBQUMsTUFBeEI7QUFBK0IsaUJBQVcsRUFBQyx5QkFBM0M7QUFBcUUsY0FBUTtBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFNRTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRCIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9jb21wb25lbnRzL0Jsb2dGb3JtLmpzP2FhZmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9CbG9nRm9ybS5qc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0Zvcm0oeyBvbkZvcm1TdWJtaXQgfSkge1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBFeHRyYWN0IGRhdGEgZnJvbSB0aGUgZm9ybVxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IHtcclxuICAgICAgICB0aXRsZTogZXZlbnQudGFyZ2V0LnRpdGxlLnZhbHVlLFxyXG4gICAgICAgIHN1YnRpdGxlOiBldmVudC50YXJnZXQuc3VidGl0bGUudmFsdWUsXHJcbiAgICAgICAgY29udGVudDogZXZlbnQudGFyZ2V0LmNvbnRlbnQudmFsdWUsXHJcbiAgICAgICAgaW1hZ2U6IGV2ZW50LnRhcmdldC5pbWFnZS52YWx1ZSxcclxuICAgICAgICB0YWdzOiBldmVudC50YXJnZXQudGFncy52YWx1ZS5zcGxpdCgnLCcpLCAvLyBBc3N1bWluZyB0YWdzIGFyZSBjb21tYS1zZXBhcmF0ZWRcclxuICAgICAgfTtcclxuICBcclxuICAgICAgb25Gb3JtU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic3VidGl0bGVcIiBwbGFjZWhvbGRlcj1cInN1YlRpdGxlXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbnRlbnRcIiBwbGFjZWhvbGRlcj1cIkNvbnRlbnRcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbWFnZVwiIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFnc1wiIHBsYWNlaG9sZGVyPVwiVGFncyxTZXBhcmF0ZWQsQnksQ29tbWFcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG4gIH1cclxuICAiXSwibmFtZXMiOlsiQmxvZ0Zvcm0iLCJvbkZvcm1TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJ0aXRsZSIsInRhcmdldCIsInZhbHVlIiwic3VidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ0YWdzIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BlogForm.js\n");

/***/ }),

/***/ "./src/pages/create-post.js":
/*!**********************************!*\
  !*** ./src/pages/create-post.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_BlogForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/BlogForm */ \"./src/components/BlogForm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\automation blog ITL\\\\saadtest-itl\\\\src\\\\pages\\\\create-post.js\";\n\n\n\nconst NewBlog = () => {\n  const onFormSubmit = async formData => {\n    const response = await fetch('/api/addBlog', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(formData)\n    });\n    const data = await response.json();\n    console.log(data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Create a New Blog Post\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_BlogForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onFormSubmit: onFormSubmit\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewBlog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY3JlYXRlLXBvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsWUFBWSxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7QUFDdkMsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNDQyxNQUFBQSxNQUFNLEVBQUUsTUFEbUM7QUFFM0NDLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmtDO0FBSzNDQyxNQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxRQUFmO0FBTHFDLEtBQWpCLENBQTVCO0FBUUEsVUFBTVEsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNELEdBWEQ7O0FBYUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLDREQUFEO0FBQVUsa0JBQVksRUFBRVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU1ELENBcEJEOztBQXNCQSxpRUFBZUQsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9wYWdlcy9jcmVhdGUtcG9zdC5qcz8xYzUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQmxvZ0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nRm9ybSc7XHJcblxyXG5jb25zdCBOZXdCbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGRCbG9nJywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkNyZWF0ZSBhIE5ldyBCbG9nIFBvc3Q8L2gxPlxyXG4gICAgICA8QmxvZ0Zvcm0gb25Gb3JtU3VibWl0PXtvbkZvcm1TdWJtaXR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3QmxvZztcclxuIl0sIm5hbWVzIjpbIkJsb2dGb3JtIiwiTmV3QmxvZyIsIm9uRm9ybVN1Ym1pdCIsImZvcm1EYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/create-post.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/create-post.js"));
module.exports = __webpack_exports__;

})();