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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/common/scrollToTop.js":
/*!***********************************!*\
  !*** ./src/common/scrollToTop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollToTop = () => {\n  let progressPath = document.querySelector(\".progress-wrap path\");\n  let pathLength = progressPath.getTotalLength();\n  progressPath.style.transition = progressPath.style.WebkitTransition = \"none\";\n  progressPath.style.strokeDasharray = pathLength + \" \" + pathLength;\n  progressPath.style.strokeDashoffset = pathLength;\n  progressPath.getBoundingClientRect();\n  progressPath.style.transition = progressPath.style.WebkitTransition = \"stroke-dashoffset 10ms linear\";\n\n  const updateProgress = function () {\n    let scroll = window.pageYOffset;\n    let height = document.documentElement.scrollHeight - window.innerHeight;\n    let progress = pathLength - scroll * pathLength / height;\n    progressPath.style.strokeDashoffset = progress;\n  };\n\n  updateProgress();\n  window.addEventListener(\"scroll\", updateProgress);\n  let progressWrap = document.querySelector(\".progress-wrap\");\n  let offset = 150;\n  window.addEventListener(\"scroll\", function () {\n    if (window.pageYOffset > offset) {\n      progressWrap.classList.add(\"active-progress\");\n    } else {\n      document.querySelector(\".progress-wrap\").classList.remove(\"active-progress\");\n    }\n  });\n  progressWrap.addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n    return false;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollToTop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9uL3Njcm9sbFRvVG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXLEdBQUcsTUFBTTtBQUN4QixNQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbkI7QUFDQSxNQUFJQyxVQUFVLEdBQUdILFlBQVksQ0FBQ0ksY0FBYixFQUFqQjtBQUNBSixFQUFBQSxZQUFZLENBQUNLLEtBQWIsQ0FBbUJDLFVBQW5CLEdBQWdDTixZQUFZLENBQUNLLEtBQWIsQ0FBbUJFLGdCQUFuQixHQUFzQyxNQUF0RTtBQUNBUCxFQUFBQSxZQUFZLENBQUNLLEtBQWIsQ0FBbUJHLGVBQW5CLEdBQXFDTCxVQUFVLEdBQUcsR0FBYixHQUFtQkEsVUFBeEQ7QUFDQUgsRUFBQUEsWUFBWSxDQUFDSyxLQUFiLENBQW1CSSxnQkFBbkIsR0FBc0NOLFVBQXRDO0FBQ0FILEVBQUFBLFlBQVksQ0FBQ1UscUJBQWI7QUFDQVYsRUFBQUEsWUFBWSxDQUFDSyxLQUFiLENBQW1CQyxVQUFuQixHQUFnQ04sWUFBWSxDQUFDSyxLQUFiLENBQW1CRSxnQkFBbkIsR0FDOUIsK0JBREY7O0FBRUEsUUFBTUksY0FBYyxHQUFHLFlBQVk7QUFDakMsUUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQXBCO0FBQ0EsUUFBSUMsTUFBTSxHQUFHZCxRQUFRLENBQUNlLGVBQVQsQ0FBeUJDLFlBQXpCLEdBQXdDSixNQUFNLENBQUNLLFdBQTVEO0FBQ0EsUUFBSUMsUUFBUSxHQUFHaEIsVUFBVSxHQUFJUyxNQUFNLEdBQUdULFVBQVYsR0FBd0JZLE1BQXBEO0FBQ0FmLElBQUFBLFlBQVksQ0FBQ0ssS0FBYixDQUFtQkksZ0JBQW5CLEdBQXNDVSxRQUF0QztBQUNELEdBTEQ7O0FBTUFSLEVBQUFBLGNBQWM7QUFDZEUsRUFBQUEsTUFBTSxDQUFDTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsY0FBbEM7QUFDQSxNQUFJVSxZQUFZLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0FBQ0EsTUFBSW9CLE1BQU0sR0FBRyxHQUFiO0FBQ0FULEVBQUFBLE1BQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBWTtBQUM1QyxRQUFJUCxNQUFNLENBQUNDLFdBQVAsR0FBcUJRLE1BQXpCLEVBQWlDO0FBQy9CRCxNQUFBQSxZQUFZLENBQUNFLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGlCQUEzQjtBQUNELEtBRkQsTUFFTztBQUNMdkIsTUFBQUEsUUFBUSxDQUNMQyxhQURILENBQ2lCLGdCQURqQixFQUVHcUIsU0FGSCxDQUVhRSxNQUZiLENBRW9CLGlCQUZwQjtBQUdEO0FBQ0YsR0FSRDtBQVNBSixFQUFBQSxZQUFZLENBQUNELGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQVVNLEtBQVYsRUFBaUI7QUFDdERBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBZCxJQUFBQSxNQUFNLENBQUNlLFFBQVAsQ0FBZ0I7QUFBRUMsTUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVUMsTUFBQUEsUUFBUSxFQUFFO0FBQXBCLEtBQWhCO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FKRDtBQUtELENBakNEOztBQW1DQSxpRUFBZS9CLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdGwvLi9zcmMvY29tbW9uL3Njcm9sbFRvVG9wLmpzPzg1MGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgbGV0IHByb2dyZXNzUGF0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3Mtd3JhcCBwYXRoXCIpO1xyXG4gIGxldCBwYXRoTGVuZ3RoID0gcHJvZ3Jlc3NQYXRoLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgcHJvZ3Jlc3NQYXRoLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9ncmVzc1BhdGguc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9IFwibm9uZVwiO1xyXG4gIHByb2dyZXNzUGF0aC5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBwYXRoTGVuZ3RoICsgXCIgXCIgKyBwYXRoTGVuZ3RoO1xyXG4gIHByb2dyZXNzUGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gcGF0aExlbmd0aDtcclxuICBwcm9ncmVzc1BhdGguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgcHJvZ3Jlc3NQYXRoLnN0eWxlLnRyYW5zaXRpb24gPSBwcm9ncmVzc1BhdGguc3R5bGUuV2Via2l0VHJhbnNpdGlvbiA9XHJcbiAgICBcInN0cm9rZS1kYXNob2Zmc2V0IDEwbXMgbGluZWFyXCI7XHJcbiAgY29uc3QgdXBkYXRlUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgbGV0IGhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICBsZXQgcHJvZ3Jlc3MgPSBwYXRoTGVuZ3RoIC0gKHNjcm9sbCAqIHBhdGhMZW5ndGgpIC8gaGVpZ2h0O1xyXG4gICAgcHJvZ3Jlc3NQYXRoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBwcm9ncmVzcztcclxuICB9O1xyXG4gIHVwZGF0ZVByb2dyZXNzKCk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdXBkYXRlUHJvZ3Jlc3MpO1xyXG4gIGxldCBwcm9ncmVzc1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2dyZXNzLXdyYXBcIik7XHJcbiAgbGV0IG9mZnNldCA9IDE1MDtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gb2Zmc2V0KSB7XHJcbiAgICAgIHByb2dyZXNzV3JhcC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2dyZXNzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy13cmFwXCIpXHJcbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvZ3Jlc3NcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcHJvZ3Jlc3NXcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsVG9Ub3A7XHJcbiJdLCJuYW1lcyI6WyJzY3JvbGxUb1RvcCIsInByb2dyZXNzUGF0aCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInN0eWxlIiwidHJhbnNpdGlvbiIsIldlYmtpdFRyYW5zaXRpb24iLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VEYXNob2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlUHJvZ3Jlc3MiLCJzY3JvbGwiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwicHJvZ3Jlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3Jlc3NXcmFwIiwib2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/common/scrollToTop.js\n");

/***/ }),

/***/ "./src/components/scrollToTop/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/scrollToTop/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_scrollToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/scrollToTop */ \"./src/common/scrollToTop.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\New folder (2)\\\\Dark-theme-itl\\\\src\\\\components\\\\scrollToTop\\\\index.jsx\";\n\n\n\n\nconst ScrollToTop = () => {\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {\n    (0,_common_scrollToTop__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"progress-wrap cursor-pointer\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"svg\", {\n      className: \"progress-circle svg-content\",\n      width: \"100%\",\n      height: \"100%\",\n      viewBox: \"-1 -1 102 102\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"path\", {\n        d: \"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zY3JvbGxUb1RvcC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1FLFdBQVcsR0FBRyxNQUFNO0FBQ3hCRixFQUFBQSxzREFBQSxDQUFnQixNQUFNO0FBQ3BCQyxJQUFBQSwrREFBVztBQUNaLEdBRkQsRUFFRyxFQUZIO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBQyw2QkFEWjtBQUVFLFdBQUssRUFBQyxNQUZSO0FBR0UsWUFBTSxFQUFDLE1BSFQ7QUFJRSxhQUFPLEVBQUMsZUFKVjtBQUFBLDZCQU1FO0FBQU0sU0FBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFZRCxDQWhCRDs7QUFrQkEsaUVBQWVDLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pdGwvLi9zcmMvY29tcG9uZW50cy9zY3JvbGxUb1RvcC9pbmRleC5qc3g/ZDVlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzY3JvbGxUb1RvcCBmcm9tIFwiLi4vLi4vY29tbW9uL3Njcm9sbFRvVG9wXCI7XHJcblxyXG5jb25zdCBTY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Ub3AoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3Mtd3JhcCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY2lyY2xlIHN2Zy1jb250ZW50XCJcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgIHZpZXdCb3g9XCItMSAtMSAxMDIgMTAyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNNTAsMSBhNDksNDkgMCAwLDEgMCw5OCBhNDksNDkgMCAwLDEgMCwtOThcIiAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxUb1RvcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic2Nyb2xsVG9Ub3AiLCJTY3JvbGxUb1RvcCIsInVzZUVmZmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/scrollToTop/index.jsx\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_scrollToTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/scrollToTop */ \"./src/components/scrollToTop/index.jsx\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\Usman\\\\Desktop\\\\New folder (2)\\\\Dark-theme-itl\\\\src\\\\pages\\\\_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"ImmersiveTechlab Marketing Agency \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/img/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Learn if business services is a good career path for you or not. Get to know the pros and cons of this sector in terms of your future.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_scrollToTop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      strategy: \"beforeInteractive\",\n      id: \"splitting\",\n      src: \"/js/splitting.min.js\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n      id: \"isotope\",\n      strategy: \"beforeInteractive\",\n      src: \"/js/isotope.pkgd.min.js\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxTQUFTSSxLQUFULENBQWU7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWFFLDhEQUFDLG9EQUFEO0FBQ0UsY0FBUSxFQUFDLG1CQURYO0FBRUUsUUFBRSxFQUFDLFdBRkw7QUFHRSxTQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFtQkUsOERBQUMsb0RBQUQ7QUFDRSxRQUFFLEVBQUMsU0FETDtBQUVFLGNBQVEsRUFBQyxtQkFGWDtBQUdFLFNBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkY7QUFBQSxrQkFERjtBQTRCRDs7QUFFRCxpRUFBZUYsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2l0bC8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9zY3JvbGxUb1RvcFwiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5JbW1lcnNpdmVUZWNobGFiIE1hcmtldGluZyBBZ2VuY3kgPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWcvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTGVhcm4gaWYgYnVzaW5lc3Mgc2VydmljZXMgaXMgYSBnb29kIGNhcmVlciBwYXRoIGZvciB5b3Ugb3Igbm90LiBHZXQgdG8ga25vdyB0aGUgcHJvcyBhbmQgY29ucyBvZiB0aGlzIHNlY3RvciBpbiB0ZXJtcyBvZiB5b3VyIGZ1dHVyZS5cIiAvPlxyXG4gICAgICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8TG9hZGluZ1NjcmVlbiAvPiAqL31cclxuICAgICAgey8qIDxDdXJzb3IgLz4gKi99XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPFNjcm9sbFRvVG9wIC8+XHJcbiAgICAgIHsvKiA8U2NyaXB0IGlkPVwid293XCIgc3JjPVwiL2pzL3dvdy5taW4uanNcIj48L1NjcmlwdD4gKi99XHJcbiAgICAgIHsvKiA8U2NyaXB0IHNyYz1cIi9qcy9yYW5kb21xdWVyeS5qc1wiPjwvU2NyaXB0PiAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIGlkPVwic3BsaXR0aW5nXCJcclxuICAgICAgICBzcmM9XCIvanMvc3BsaXR0aW5nLm1pbi5qc1wiXHJcbiAgICAgID48L1NjcmlwdD5cclxuICAgICAgey8qIDxTY3JpcHQgaWQ9XCJzaW1wbGVQYXJhbGxheFwiIHNyYz1cIi9qcy9zaW1wbGVQYXJhbGxheC5taW4uanNcIj48L1NjcmlwdD4gKi99XHJcbiAgICAgIDxTY3JpcHRcclxuICAgICAgICBpZD1cImlzb3RvcGVcIlxyXG4gICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgIHNyYz1cIi9qcy9pc290b3BlLnBrZ2QubWluLmpzXCJcclxuICAgICAgPjwvU2NyaXB0PlxyXG4gICAgICB7LyogPFNjcmlwdCBpZD1cIndvd0luaXRcIiBzdHJhdGVneT1cImxhenlPbmxvYWRcIj57YG5ldyBXT1coKS5pbml0KCk7YH08L1NjcmlwdD4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlNjcmlwdCIsIlNjcm9sbFRvVG9wIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();