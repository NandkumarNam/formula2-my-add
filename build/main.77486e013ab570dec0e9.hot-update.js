exports.id = "main";
exports.modules = {

/***/ "./src/pages/home/Home.js":
/*!********************************!*\
  !*** ./src/pages/home/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ssr_core_withSSR__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ssr_core/withSSR */ "./src/components/ssr_core/withSSR.js");





var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/pages/home/Home.js";



var Home =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Home, _React$Component);

  function Home() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Home);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Home).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isLoading = _this$props.isLoading,
          text = _this$props.text,
          error = _this$props.error;
      var CODE = "coming from development env";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Homepage is", CODE), isLoading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Loading... "), error && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, JSON.stringify(error, null, 2)), text && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, text));
    }
  }], [{
    key: "getInitialData",
    // This works similarly to Next.js's `getInitialProps`
    value: function getInitialData(_ref) {
      var match = _ref.match;
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve({
            text: "This text is server rendered if and only if it's the initial render.Go to another route.",
            currentRoute: match.pathname
          });
        }, 500);
      });
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_ssr_core_withSSR__WEBPACK_IMPORTED_MODULE_6__["default"])(Home));

/***/ }),

/***/ "./src/pages/race-standing/RaceStanding.js":
false,

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_about_About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about/About */ "./src/pages/about/About.js");
/* harmony import */ var _pages_home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/Home */ "./src/pages/home/Home.js");
/* harmony import */ var _pages_users_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/users/Users */ "./src/pages/users/Users.js");


 // This is a static route configuration. It should include all of your top level
// routes, regardless of whether they are going to server render. In fact, you
// can totally point multiple routes to the same component! This is great for
// when you only need to server render a handful of routes and not your entire
// application!

var routes = [{
  path: '/',
  component: RaceStanding,
  name: 'Home',
  exact: true
}, {
  path: '/about',
  component: _pages_about_About__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'About',
  exact: true
}, {
  path: '/users',
  component: _pages_users_Users__WEBPACK_IMPORTED_MODULE_2__["default"],
  name: 'Users'
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ })

};
//# sourceMappingURL=main.77486e013ab570dec0e9.hot-update.js.map