(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DynamicPage"],{

/***/ "./src/components/DynamicPage.js":
/*!***************************************!*\
  !*** ./src/components/DynamicPage.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/.registry.npmjs.org/react/16.3.2/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(/*! semantic-ui-react */ "./node_modules/.registry.npmjs.org/semantic-ui-react/0.79.1/node_modules/semantic-ui-react/dist/es/index.js");

var _Layout = __webpack_require__(/*! ./Layout */ "./src/components/Layout.js");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/.registry.npmjs.org/react-hot-loader/4.1.1/node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var DynamicPage = function DynamicPage() {
  return _react2.default.createElement(
    _Layout2.default,
    null,
    _react2.default.createElement(
      _semanticUiReact.Header,
      { as: 'h2' },
      'Dynamic Page'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This page was loaded asynchronously!!!'
    )
  );
};

var _default = DynamicPage;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/.registry.npmjs.org/react-hot-loader/4.1.1/node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/.registry.npmjs.org/react-hot-loader/4.1.1/node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DynamicPage, 'DynamicPage', 'D:/REALWORLD/learn-webpack-react-combo/src/components/DynamicPage.js');
  reactHotLoader.register(_default, 'default', 'D:/REALWORLD/learn-webpack-react-combo/src/components/DynamicPage.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.registry.npmjs.org/webpack/4.6.0/node_modules/webpack/buildin/module.js */ "./node_modules/.registry.npmjs.org/webpack/4.6.0/node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=DynamicPage.8904b102cef72ef776d3.js.map