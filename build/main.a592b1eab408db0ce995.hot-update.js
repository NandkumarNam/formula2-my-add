exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/server.js";







var assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");

var server = express__WEBPACK_IMPORTED_MODULE_2___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_2___default.a["static"]("/Volumes/Data/Development/React/my-app/public")).get('/*', function (req, res) {
  // This data fetching technique came from a gist by @ryanflorence
  // @see https://gist.github.com/ryanflorence/efbe562332d4f1cc9331202669763741
  // First we iterate through our top level routes
  // looking for matches against the current url.
  var matches = _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (route, index) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(req.url, route.path, route); // We then look for static getInitialData function on each top level component

    if (match) {
      var obj = {
        route: route,
        match: match,
        promise: route.component.getInitialData ? route.component.getInitialData({
          match: match,
          req: req,
          res: res
        }) : Promise.resolve(null)
      };
      return obj;
    }

    return null;
  });

  if (matches.length === 0) {
    res.status(404).send('Not Found');
  } // Now we pull out all the promises we found into an array.


  var promises = matches.map(function (match) {
    return match ? match.promise : null;
  }); // We block rendering until all promises have resolved

  Promise.all(promises).then(function (data) {
    var context = {}; // Pass our routes and data array to our App component

    var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["StaticRouter"], {
      context: context,
      location: req.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      routes: _routes__WEBPACK_IMPORTED_MODULE_5__["default"],
      initialData: data,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      }
    })));

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(context.statusCode || 200).send("<!doctype html>\n          <html lang=\"\">\n          <head>\n              <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n              <meta charSet='utf-8' />\n              <title>Welcome to Razzle</title>\n              <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n              ".concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n              <script src=\"").concat(assets.client.js, "\" defer></script>\n          </head>\n          <body> \n              <div id=\"root\">").concat(markup, "</div>\n              <script>window._INITIAL_DATA_ = ").concat(JSON.stringify(data), ";</script>\n          </body>\n      </html>"));
    }
  })["catch"](function (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
      stack: error.stack
    });
  });
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ })

};
//# sourceMappingURL=main.a592b1eab408db0ce995.hot-update.js.map