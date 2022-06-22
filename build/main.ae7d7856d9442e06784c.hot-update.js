exports.id = "main";
exports.modules = {

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
/* harmony import */ var _pages_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/race-standing/RaceStanding */ "./src/pages/race-standing/RaceStanding.js");



 // This is a static route configuration. It should include all of your top level
// routes, regardless of whether they are going to server render. In fact, you
// can totally point multiple routes to the same component! This is great for
// when you only need to server render a handful of routes and not your entire
// application!

var routes = [{
  path: '/',
  component: _pages_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_3__["default"],
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
//# sourceMappingURL=main.ae7d7856d9442e06784c.hot-update.js.map