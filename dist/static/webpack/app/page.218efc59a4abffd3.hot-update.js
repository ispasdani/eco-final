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

/***/ "(app-pages-browser)/./constants/WasteCategories.tsx":
/*!***************************************!*\
  !*** ./constants/WasteCategories.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ferrousmetalwaste: function() { return /* binding */ ferrousmetalwaste; },\n/* harmony export */   glasswaste: function() { return /* binding */ glasswaste; },\n/* harmony export */   hazardouswaste: function() { return /* binding */ hazardouswaste; },\n/* harmony export */   nonferrousmetalwaste: function() { return /* binding */ nonferrousmetalwaste; },\n/* harmony export */   papercardboardwaste: function() { return /* binding */ papercardboardwaste; },\n/* harmony export */   plasticwaste: function() { return /* binding */ plasticwaste; },\n/* harmony export */   rubberwaste: function() { return /* binding */ rubberwaste; },\n/* harmony export */   textileandleatherwaste: function() { return /* binding */ textileandleatherwaste; },\n/* harmony export */   usedbatteries: function() { return /* binding */ usedbatteries; },\n/* harmony export */   wasteelectricalandelectronicequipment: function() { return /* binding */ wasteelectricalandelectronicequipment; },\n/* harmony export */   woodwaste: function() { return /* binding */ woodwaste; }\n/* harmony export */ });\nconst plasticwaste = [\n    \"url(/images/plastic/pet.JPG)\",\n    \"url(/images/plastic/folie.jpg)\",\n    \"url(/images/plastic/ladite.JPG)\",\n    \"url(/images/plastic/tavite.JPG)\",\n    \"url(/images/plastic/plasticfarametal.jpg)\",\n    \"url(/images/plastic/copex.JPG)\"\n];\nconst woodwaste = [\n    \"url(/images/wood/wood.JPG)\"\n];\nconst papercardboardwaste = [\n    \"url(/images/carton/carton.JPG)\",\n    \"url(/images/carton/hartie.JPG)\"\n];\nconst textileandleatherwaste = [\n    \"url(/images/carton/piele.jpg)\"\n];\nconst ferrousmetalwaste = [\n    \"/images/metalicferos.jpg\"\n];\nconst nonferrousmetalwaste = [\n    \"/images/aluminiu.jpg\",\n    \"/images/cupru.jpg\",\n    \"/images/cabluricupru.jpg\",\n    \"/images/cuprudoi.jpg\"\n];\nconst wasteelectricalandelectronicequipment = [\n    \"/images/electronics.jpg\",\n    \"/images/deeeunu.jpg\",\n    \"/images/deeedoi.jpg\",\n    \"/images/deeetrei.jpg\",\n    \"/images/deeepatru.jpg\",\n    \"/images/deeecinci.jpg\"\n];\nconst glasswaste = [\n    \"/images/glass.jpg\"\n];\nconst rubberwaste = [\n    \"/images/rubber.jpg\"\n];\nconst usedbatteries = [\n    \"/images/usedBatteries.jpg\"\n];\nconst hazardouswaste = [\n    \"/images/.jpg\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnN0YW50cy9XYXN0ZUNhdGVnb3JpZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsZUFBZTtJQUMxQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFDO0FBQ0ssTUFBTUMsWUFBWTtJQUFDO0NBQTZCLENBQUM7QUFFakQsTUFBTUMsc0JBQXNCO0lBQ2pDO0lBQ0E7Q0FDRCxDQUFDO0FBRUssTUFBTUMseUJBQXlCO0lBQUM7Q0FBZ0MsQ0FBQztBQUVqRSxNQUFNQyxvQkFBb0I7SUFBQztDQUEyQixDQUFDO0FBRXZELE1BQU1DLHVCQUF1QjtJQUNsQztJQUNBO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyx3Q0FBd0M7SUFDbkQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGFBQWE7SUFBQztDQUFvQixDQUFDO0FBRXpDLE1BQU1DLGNBQWM7SUFBQztDQUFxQixDQUFDO0FBQzNDLE1BQU1DLGdCQUFnQjtJQUFDO0NBQTRCLENBQUM7QUFDcEQsTUFBTUMsaUJBQWlCO0lBQUM7Q0FBZSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9XYXN0ZUNhdGVnb3JpZXMudHN4PzJlM2IiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBsYXN0aWN3YXN0ZSA9IFtcclxuICBcInVybCgvaW1hZ2VzL3BsYXN0aWMvcGV0LkpQRylcIixcclxuICBcInVybCgvaW1hZ2VzL3BsYXN0aWMvZm9saWUuanBnKVwiLFxyXG4gIFwidXJsKC9pbWFnZXMvcGxhc3RpYy9sYWRpdGUuSlBHKVwiLFxyXG4gIFwidXJsKC9pbWFnZXMvcGxhc3RpYy90YXZpdGUuSlBHKVwiLFxyXG4gIFwidXJsKC9pbWFnZXMvcGxhc3RpYy9wbGFzdGljZmFyYW1ldGFsLmpwZylcIixcclxuICBcInVybCgvaW1hZ2VzL3BsYXN0aWMvY29wZXguSlBHKVwiLFxyXG5dO1xyXG5leHBvcnQgY29uc3Qgd29vZHdhc3RlID0gW1widXJsKC9pbWFnZXMvd29vZC93b29kLkpQRylcIl07XHJcblxyXG5leHBvcnQgY29uc3QgcGFwZXJjYXJkYm9hcmR3YXN0ZSA9IFtcclxuICBcInVybCgvaW1hZ2VzL2NhcnRvbi9jYXJ0b24uSlBHKVwiLFxyXG4gIFwidXJsKC9pbWFnZXMvY2FydG9uL2hhcnRpZS5KUEcpXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdGV4dGlsZWFuZGxlYXRoZXJ3YXN0ZSA9IFtcInVybCgvaW1hZ2VzL2NhcnRvbi9waWVsZS5qcGcpXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlcnJvdXNtZXRhbHdhc3RlID0gW1wiL2ltYWdlcy9tZXRhbGljZmVyb3MuanBnXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5vbmZlcnJvdXNtZXRhbHdhc3RlID0gW1xyXG4gIFwiL2ltYWdlcy9hbHVtaW5pdS5qcGdcIixcclxuICBcIi9pbWFnZXMvY3VwcnUuanBnXCIsXHJcbiAgXCIvaW1hZ2VzL2NhYmx1cmljdXBydS5qcGdcIixcclxuICBcIi9pbWFnZXMvY3VwcnVkb2kuanBnXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgd2FzdGVlbGVjdHJpY2FsYW5kZWxlY3Ryb25pY2VxdWlwbWVudCA9IFtcclxuICBcIi9pbWFnZXMvZWxlY3Ryb25pY3MuanBnXCIsXHJcbiAgXCIvaW1hZ2VzL2RlZWV1bnUuanBnXCIsXHJcbiAgXCIvaW1hZ2VzL2RlZWVkb2kuanBnXCIsXHJcbiAgXCIvaW1hZ2VzL2RlZWV0cmVpLmpwZ1wiLFxyXG4gIFwiL2ltYWdlcy9kZWVlcGF0cnUuanBnXCIsXHJcbiAgXCIvaW1hZ2VzL2RlZWVjaW5jaS5qcGdcIixcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnbGFzc3dhc3RlID0gW1wiL2ltYWdlcy9nbGFzcy5qcGdcIl07XHJcblxyXG5leHBvcnQgY29uc3QgcnViYmVyd2FzdGUgPSBbXCIvaW1hZ2VzL3J1YmJlci5qcGdcIl07XHJcbmV4cG9ydCBjb25zdCB1c2VkYmF0dGVyaWVzID0gW1wiL2ltYWdlcy91c2VkQmF0dGVyaWVzLmpwZ1wiXTtcclxuZXhwb3J0IGNvbnN0IGhhemFyZG91c3dhc3RlID0gW1wiL2ltYWdlcy8uanBnXCJdO1xyXG4iXSwibmFtZXMiOlsicGxhc3RpY3dhc3RlIiwid29vZHdhc3RlIiwicGFwZXJjYXJkYm9hcmR3YXN0ZSIsInRleHRpbGVhbmRsZWF0aGVyd2FzdGUiLCJmZXJyb3VzbWV0YWx3YXN0ZSIsIm5vbmZlcnJvdXNtZXRhbHdhc3RlIiwid2FzdGVlbGVjdHJpY2FsYW5kZWxlY3Ryb25pY2VxdWlwbWVudCIsImdsYXNzd2FzdGUiLCJydWJiZXJ3YXN0ZSIsInVzZWRiYXR0ZXJpZXMiLCJoYXphcmRvdXN3YXN0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./constants/WasteCategories.tsx\n"));

/***/ })

});