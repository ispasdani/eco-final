"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/infoCircle/InfoCircle.tsx":
/*!**********************************************!*\
  !*** ./components/infoCircle/InfoCircle.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/infoCircle/styles.module.scss */ \"(app-pages-browser)/./components/infoCircle/styles.module.scss\");\n/* harmony import */ var _components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst InfoCircle = (param)=>{\n    let { text, top, left, right, bottom } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().infoCircleContainer),\n        style: {\n            top: top,\n            left: left,\n            right: right,\n            bottom: bottom\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().infoCircle),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_infoCircle_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().infoCircleText),\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ultra\\\\Documents\\\\projects\\\\eco-final\\\\components\\\\infoCircle\\\\InfoCircle.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ultra\\\\Documents\\\\projects\\\\eco-final\\\\components\\\\infoCircle\\\\InfoCircle.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ultra\\\\Documents\\\\projects\\\\eco-final\\\\components\\\\infoCircle\\\\InfoCircle.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = InfoCircle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoCircle);\nvar _c;\n$RefreshReg$(_c, \"InfoCircle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaW5mb0NpcmNsZS9JbmZvQ2lyY2xlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ3NDO0FBVWhFLE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBbUI7SUFDckUscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVdSLHNHQUEwQjtRQUNyQ1UsT0FBTztZQUFFUCxLQUFLQTtZQUFLQyxNQUFNQTtZQUFNQyxPQUFPQTtZQUFPQyxRQUFRQTtRQUFPO2tCQUU1RCw0RUFBQ0M7WUFBSUMsV0FBV1IsNkZBQWlCO3NCQUMvQiw0RUFBQ087Z0JBQUlDLFdBQVdSLGlHQUFxQjswQkFBR0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQ7S0FYTUQ7QUFhTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZm9DaXJjbGUvSW5mb0NpcmNsZS50c3g/MDhjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvY29tcG9uZW50cy9pbmZvQ2lyY2xlL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5cclxudHlwZSBJbmZvQ2lyY2xlUHJvcHMgPSB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHRvcD86IHN0cmluZztcclxuICBsZWZ0Pzogc3RyaW5nO1xyXG4gIHJpZ2h0Pzogc3RyaW5nO1xyXG4gIGJvdHRvbT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IEluZm9DaXJjbGUgPSAoeyB0ZXh0LCB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20gfTogSW5mb0NpcmNsZVByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb0NpcmNsZUNvbnRhaW5lcn1cclxuICAgICAgc3R5bGU9e3sgdG9wOiB0b3AsIGxlZnQ6IGxlZnQsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b20gfX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvQ2lyY2xlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9DaXJjbGVUZXh0fT57dGV4dH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb0NpcmNsZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiSW5mb0NpcmNsZSIsInRleHQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJkaXYiLCJjbGFzc05hbWUiLCJpbmZvQ2lyY2xlQ29udGFpbmVyIiwic3R5bGUiLCJpbmZvQ2lyY2xlIiwiaW5mb0NpcmNsZVRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/infoCircle/InfoCircle.tsx\n"));

/***/ })

});