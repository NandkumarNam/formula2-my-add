exports.id = "main";
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/App.scss */ "./src/scss/App.scss");
/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_App_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/race-standing/RaceStanding */ "./src/pages/race-standing/RaceStanding.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_uid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-uid */ "react-uid");
/* harmony import */ var react_uid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_uid__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/App.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var App = function App(_ref) {
  var routes = _ref.routes,
      initialData = _ref.initialData;
  return routes ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, routes.map(function (route, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["NavLink"], {
      style: {
        marginRight: '1rem',
        color: '#0af'
      },
      activeStyle: {
        fontWeight: 800,
        color: '#000'
      },
      key: "nav-".concat(Object(react_uid__WEBPACK_IMPORTED_MODULE_5__["uid"])(route)),
      exact: index === 0,
      to: route.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, route.name);
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, routes.map(function (route, index) {
    return (// pass in the initialData from the server or window.DATA for this
      // specific route
      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
        key: Object(react_uid__WEBPACK_IMPORTED_MODULE_5__["uid"])(route),
        path: route.path,
        exact: route.exact,
        render: function render(props) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(route.component, _objectSpread({}, props, {
            initialData: initialData[index] || null
          }));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })
    );
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_pages_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  })) : null;
};
/* const App = () => (
  <RaceStanding />
); */


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "react-uid":
/*!****************************!*\
  !*** external "react-uid" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-uid");

/***/ })

};
//# sourceMappingURL=main.d8fa213bc533a9a50e3d.hot-update.js.map