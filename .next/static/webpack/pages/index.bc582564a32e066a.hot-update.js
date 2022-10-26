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

/***/ "./components/Input/Input.jsx":
/*!************************************!*\
  !*** ./components/Input/Input.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Input\": function() { return /* binding */ Input; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Input = function(props) {\n    _s();\n    var placeholder = props.placeholder, label = props.label, labelHelper = props.labelHelper, _type = props.type, type = _type === void 0 ? \"text\" : _type, name = props.name, inputHelper = props.inputHelper, focus = props.focus;\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\"), 2), inputValue = ref[0], setInputValue = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                className: \"block mb-2 text-sm font-medium text-gray-600\",\n                children: [\n                    label,\n                    labelHelper && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-1 text-gray-400\",\n                        children: [\n                            \"(\",\n                            labelHelper,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            type === \"text\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                autoFocus: focus,\n                id: name,\n                name: name,\n                type: \"text\",\n                placeholder: placeholder,\n                onChange: function(e) {\n                    return setInputValue(e.target.value);\n                },\n                value: inputValue,\n                required: true,\n                className: \" bg-white border placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-md focus:ring-[#664de5] focus:border-[#664de5] block w-full p-2.5 \"\n            }, void 0, false, {\n                fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-stretch w-full mb-4 relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex -mr-px\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center leading-normal bg-[#f8f9fc] rounded-md rounded-r-none border border-r-0 px-3 whitespace-no-wrap text-gray-400 font-medium text-sm\",\n                                children: inputHelper\n                            }, void 0, false, {\n                                fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            required: true,\n                            id: name,\n                            name: name,\n                            placeholder: placeholder,\n                            className: \"flex-grow bg-white border placeholder-gray-400 border-gray-300 text-gray-900 text-sm rounded-tr-md rounded-br-md focus:ring-[#664de5] focus:border-[#664de5] p-2.5 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/aakashkumar/Desktop/assignment/components/Input/Input.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_s(Input, \"iEYviHCJXqr/rxvP+SpzgvyJcbo=\");\n_c = Input;\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0L0lucHV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLEdBQUssQ0FBQ0MsS0FBSyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7O0lBQy9CLEdBQUssQ0FDSEMsV0FBVyxHQU9URCxLQUFLLENBUFBDLFdBQVcsRUFDWEMsS0FBSyxHQU1IRixLQUFLLENBTlBFLEtBQUssRUFDTEMsV0FBVyxHQUtUSCxLQUFLLENBTFBHLFdBQVcsVUFLVEgsS0FBSyxDQUpQSSxJQUFJLEVBQUpBLElBQUksc0JBQUcsQ0FBTSxlQUNiQyxJQUFJLEdBR0ZMLEtBQUssQ0FIUEssSUFBSSxFQUNKQyxXQUFXLEdBRVROLEtBQUssQ0FGUE0sV0FBVyxFQUNYQyxLQUFLLEdBQ0hQLEtBQUssQ0FEUE8sS0FBSztJQUdQLEdBQUssQ0FBK0JULEdBQWtCLGtCQUFsQkEscURBQWMsQ0FBQyxDQUFFLFFBQTlDVyxVQUFVLEdBQW1CWCxHQUFrQixLQUFuQ1ksYUFBYSxHQUFJWixHQUFrQjtJQUV0RCxNQUFNLDZFQUNIYSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFhOzt3RkFDekJWLENBQUs7Z0JBQ0pXLE9BQU8sRUFBRVIsSUFBSTtnQkFDYk8sU0FBUyxFQUFDLENBQThDOztvQkFFdkRWLEtBQUs7b0JBQ0xDLFdBQVcsZ0ZBQ1RXLENBQUk7d0JBQUNGLFNBQVMsRUFBQyxDQUFvQjs7NEJBQUMsQ0FBQzs0QkFBQ1QsV0FBVzs0QkFBQyxDQUFDOzs7Ozs7Ozs7Ozs7O1lBR3ZEQyxJQUFJLEtBQUssQ0FBTSxvRkFDYlcsQ0FBSztnQkFDSkMsU0FBUyxFQUFFVCxLQUFLO2dCQUNoQlUsRUFBRSxFQUFFWixJQUFJO2dCQUNSQSxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZELElBQUksRUFBQyxDQUFNO2dCQUNYSCxXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCaUIsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQztvQkFBS1QsTUFBTSxDQUFOQSxhQUFhLENBQUNTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOztnQkFDN0NBLEtBQUssRUFBRVosVUFBVTtnQkFDakJhLFFBQVE7Z0JBQ1JWLFNBQVMsRUFBQyxDQUF3Sjs7Ozs7b0dBR25LRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBaUI7c0dBQzdCRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBeUM7O29HQUNyREQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQWE7a0hBQ3pCRSxDQUFJO2dDQUFDRixTQUFTLEVBQUMsQ0FBcUo7MENBQ2xLTixXQUFXOzs7Ozs7Ozs7OztvR0FHZlMsQ0FBSzs0QkFDSlgsSUFBSSxFQUFDLENBQU07NEJBQ1hrQixRQUFROzRCQUNSTCxFQUFFLEVBQUVaLElBQUk7NEJBQ1JBLElBQUksRUFBRUEsSUFBSTs0QkFDVkosV0FBVyxFQUFFQSxXQUFXOzRCQUN4QlcsU0FBUyxFQUFDLENBQXNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU85TCxDQUFDO0dBekRZYixLQUFLO0tBQUxBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC9JbnB1dC5qc3g/NTU3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGxhY2Vob2xkZXIsXG4gICAgbGFiZWwsXG4gICAgbGFiZWxIZWxwZXIsXG4gICAgdHlwZSA9IFwidGV4dFwiLFxuICAgIG5hbWUsXG4gICAgaW5wdXRIZWxwZXIsXG4gICAgZm9jdXMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNSB3LWZ1bGxcIj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtuYW1lfVxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMFwiXG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAge2xhYmVsSGVscGVyICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtZ3JheS00MDBcIj4oe2xhYmVsSGVscGVyfSk8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2xhYmVsPlxuICAgICAge3R5cGUgPT09IFwidGV4dFwiID8gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBhdXRvRm9jdXM9e2ZvY3VzfVxuICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIGJvcmRlciBwbGFjZWhvbGRlci1ncmF5LTQwMCBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbWQgZm9jdXM6cmluZy1bIzY2NGRlNV0gZm9jdXM6Ym9yZGVyLVsjNjY0ZGU1XSBibG9jayB3LWZ1bGwgcC0yLjUgXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0cmV0Y2ggdy1mdWxsIG1iLTQgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtbXItcHhcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbGVhZGluZy1ub3JtYWwgYmctWyNmOGY5ZmNdIHJvdW5kZWQtbWQgcm91bmRlZC1yLW5vbmUgYm9yZGVyIGJvcmRlci1yLTAgcHgtMyB3aGl0ZXNwYWNlLW5vLXdyYXAgdGV4dC1ncmF5LTQwMCBmb250LW1lZGl1bSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAge2lucHV0SGVscGVyfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGlkPXtuYW1lfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBiZy13aGl0ZSBib3JkZXIgcGxhY2Vob2xkZXItZ3JheS00MDAgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLXRyLW1kIHJvdW5kZWQtYnItbWQgZm9jdXM6cmluZy1bIzY2NGRlNV0gZm9jdXM6Ym9yZGVyLVsjNjY0ZGU1XSAgcC0yLjUgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImxhYmVsSGVscGVyIiwidHlwZSIsIm5hbWUiLCJpbnB1dEhlbHBlciIsImZvY3VzIiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJzcGFuIiwiaW5wdXQiLCJhdXRvRm9jdXMiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input/Input.jsx\n");

/***/ })

});