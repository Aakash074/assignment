"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/templates/TemplateOne/TemplateOne.jsx":
/*!**********************************************************!*\
  !*** ./components/templates/TemplateOne/TemplateOne.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TemplateOne\": function() { return /* binding */ TemplateOne; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _FormHeader_FormHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FormHeader/FormHeader */ \"./components/FormHeader/FormHeader.jsx\");\n/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Input/Input */ \"./components/Input/Input.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TemplateOne = function(param) {\n    var onChange = param.onChange;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), fullName = ref[0], setFullName = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), displayName = ref1[0], setDisplayName = ref1[1];\n    var handleSubmit = function() {\n        onChange();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormHeader_FormHeader__WEBPACK_IMPORTED_MODULE_3__.FormHeader, {\n                    title: \"Welcome! First things First...\",\n                    subTitle: \"You can always change them later.\"\n                }, void 0, false, {\n                    fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 md:p-0 md:max-w-[350px] w-full mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        autofocus: true,\n                        placeholder: \"Steve Jobs\",\n                        label: \"Full Name\",\n                        labelHelper: \"\",\n                        type: \"text\",\n                        name: \"fullName\",\n                        inputHelper: \"\",\n                        onChange: function(e) {\n                            return setFullName(e.target.value);\n                        },\n                        value: fullName\n                    }, void 0, false, {\n                        fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        placeholder: \"Steve\",\n                        label: \"Display Name\",\n                        labelHelper: \"\",\n                        type: \"text\",\n                        name: \"displayName\",\n                        inputHelper: \"\",\n                        onChange: function(e) {\n                            return setDisplayName(e.target.value);\n                        },\n                        value: displayName\n                    }, void 0, false, {\n                        fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        text: \"Create Workspace\",\n                        onClick: function() {\n                            return handleSubmit();\n                        },\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aakashkumar/Desktop/assignment/components/templates/TemplateOne/TemplateOne.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this));\n};\n_s(TemplateOne, \"k0jrAapWUfcbyVjUieJ5JXoT4oE=\");\n_c = TemplateOne;\nvar _c;\n$RefreshReg$(_c, \"TemplateOne\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RlbXBsYXRlcy9UZW1wbGF0ZU9uZS9UZW1wbGF0ZU9uZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNtQjtBQUNZO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsR0FBSyxDQUFDSSxXQUFXLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDcEMsR0FBSyxDQUEyQkwsR0FBa0Isa0JBQWxCQSxxREFBYyxDQUFDLENBQUUsUUFBMUNPLFFBQVEsR0FBaUJQLEdBQWtCLEtBQWpDUSxXQUFXLEdBQUlSLEdBQWtCO0lBQ2xELEdBQUssQ0FBaUNBLElBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxDQUFFLFFBQWhEUyxXQUFXLEdBQW9CVCxJQUFrQixLQUFwQ1UsY0FBYyxHQUFJVixJQUFrQjtJQUV4RCxHQUFLLENBQUNXLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1FBQzFCTixRQUFRO0lBQ1YsQ0FBQztJQUVELE1BQU0sNkVBQ0hPLENBQUc7O3dGQUNEQSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBUTtzR0FDcEJYLDhEQUFVO29CQUNUWSxLQUFLLEVBQUMsQ0FBZ0M7b0JBQ3RDQyxRQUFRLEVBQUMsQ0FBbUM7Ozs7Ozs7Ozs7O3dGQUcvQ0gsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTRDOztnR0FDeERWLCtDQUFLO3dCQUNKYSxTQUFTO3dCQUNUQyxXQUFXLEVBQUMsQ0FBWTt3QkFDeEJDLEtBQUssRUFBQyxDQUFXO3dCQUNqQkMsV0FBVyxFQUFDLENBQUU7d0JBQ2RDLElBQUksRUFBQyxDQUFNO3dCQUNYQyxJQUFJLEVBQUMsQ0FBVTt3QkFDZkMsV0FBVyxFQUFDLENBQUU7d0JBQ2RqQixRQUFRLEVBQUUsUUFBUSxDQUFQa0IsQ0FBQzs0QkFBS2YsTUFBTSxDQUFOQSxXQUFXLENBQUNlLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzt3QkFDM0NBLEtBQUssRUFBRWxCLFFBQVE7Ozs7OztnR0FFaEJKLCtDQUFLO3dCQUNKYyxXQUFXLEVBQUMsQ0FBTzt3QkFDbkJDLEtBQUssRUFBQyxDQUFjO3dCQUNwQkMsV0FBVyxFQUFDLENBQUU7d0JBQ2RDLElBQUksRUFBQyxDQUFNO3dCQUNYQyxJQUFJLEVBQUMsQ0FBYTt3QkFDbEJDLFdBQVcsRUFBQyxDQUFFO3dCQUNkakIsUUFBUSxFQUFFLFFBQVEsQ0FBUGtCLENBQUM7NEJBQUtiLE1BQU0sQ0FBTkEsY0FBYyxDQUFDYSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7d0JBQzlDQSxLQUFLLEVBQUVoQixXQUFXOzs7Ozs7Z0dBRW5CUixrREFBTTt3QkFDTHlCLElBQUksRUFBQyxDQUFrQjt3QkFDdkJDLE9BQU8sRUFBRSxRQUFROzRCQUFGaEIsTUFBTSxDQUFOQSxZQUFZOzt3QkFDM0JTLElBQUksRUFBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkIsQ0FBQztHQTlDWWhCLFdBQVc7S0FBWEEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RlbXBsYXRlcy9UZW1wbGF0ZU9uZS9UZW1wbGF0ZU9uZS5qc3g/ODhmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vQnV0dG9uL0J1dHRvblwiO1xuaW1wb3J0IHsgRm9ybUhlYWRlciB9IGZyb20gXCIuLi8uLi9Gb3JtSGVhZGVyL0Zvcm1IZWFkZXJcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0XCI7XG5cbmV4cG9ydCBjb25zdCBUZW1wbGF0ZU9uZSA9ICh7IG9uQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rpc3BsYXlOYW1lLCBzZXREaXNwbGF5TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgb25DaGFuZ2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtYi0xMlwiPlxuICAgICAgICA8Rm9ybUhlYWRlclxuICAgICAgICAgIHRpdGxlPVwiV2VsY29tZSEgRmlyc3QgdGhpbmdzIEZpcnN0Li4uXCJcbiAgICAgICAgICBzdWJUaXRsZT1cIllvdSBjYW4gYWx3YXlzIGNoYW5nZSB0aGVtIGxhdGVyLlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG1kOnAtMCBtZDptYXgtdy1bMzUwcHhdIHctZnVsbCBteC1hdXRvXCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RldmUgSm9ic1wiXG4gICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgIGxhYmVsSGVscGVyPVwiXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cImZ1bGxOYW1lXCJcbiAgICAgICAgICBpbnB1dEhlbHBlcj1cIlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGdWxsTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxuICAgICAgICAvPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0ZXZlXCJcbiAgICAgICAgICBsYWJlbD1cIkRpc3BsYXkgTmFtZVwiXG4gICAgICAgICAgbGFiZWxIZWxwZXI9XCJcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgIGlucHV0SGVscGVyPVwiXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERpc3BsYXlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17ZGlzcGxheU5hbWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIFdvcmtzcGFjZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJGb3JtSGVhZGVyIiwiSW5wdXQiLCJUZW1wbGF0ZU9uZSIsIm9uQ2hhbmdlIiwidXNlU3RhdGUiLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwiZGlzcGxheU5hbWUiLCJzZXREaXNwbGF5TmFtZSIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic3ViVGl0bGUiLCJhdXRvZm9jdXMiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwibGFiZWxIZWxwZXIiLCJ0eXBlIiwibmFtZSIsImlucHV0SGVscGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGV4dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/templates/TemplateOne/TemplateOne.jsx\n");

/***/ })

});