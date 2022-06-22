exports.id = "main";
exports.modules = {

/***/ "./src/components/race-standing/RaceStanding.js":
/*!******************************************************!*\
  !*** ./src/components/race-standing/RaceStanding.js ***!
  \******************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tab_comp_TabComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tab-comp/TabComp */ "./src/components/tab-comp/TabComp.js");
/* harmony import */ var _tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tab-comp/PanelComp */ "./src/components/tab-comp/PanelComp.js");
/* harmony import */ var _podium_standing_list_PodiumStandingList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../podium-standing-list/PodiumStandingList */ "./src/components/podium-standing-list/PodiumStandingList.js");
/* harmony import */ var _top_racers_TopRacers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../top-racers/TopRacers */ "./src/components/top-racers/TopRacers.js");







var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/components/race-standing/RaceStanding.js";






var RaceStanding =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RaceStanding, _React$Component);

  function RaceStanding(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RaceStanding);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RaceStanding).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "showFullStanding", function () {
      _this.setState({
        showRacerCompList: ''
      });
    });

    _this.state = {
      isLoading: true,
      isContructorLoading: true,
      showRacerCompList: 'f2-podium--item-none',
      raceResults: [],
      contructorResults: [],
      error: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RaceStanding, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchDrivers();
      this.fetchContructors();
    }
  }, {
    key: "fetchDrivers",
    value: function fetchDrivers() {
      var _this2 = this;

      fetch('http://localhost:3002/drivers').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({
          raceResults: data.sort(function (a, b) {
            return b.points - a.points;
          }),
          isLoading: false
        });
      })["catch"](function (error) {
        return _this2.setState({
          error: error,
          isLoading: false
        });
      });
    }
  }, {
    key: "fetchContructors",
    value: function fetchContructors() {
      var _this3 = this;

      fetch('http://localhost:3002/contructors').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this3.setState({
          contructorResults: data.sort(function (a, b) {
            return b.points - a.points;
          }),
          isContructorLoading: false
        });
      })["catch"](function (error) {
        return _this3.setState({
          error: error,
          isContructorLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          isContructorLoading = _this$state.isContructorLoading,
          raceResults = _this$state.raceResults,
          contructorResults = _this$state.contructorResults,
          showRacerCompList = _this$state.showRacerCompList,
          error = _this$state.error; // Racers List started

      var renderRacerList = raceResults.map(function (racer, index) {
        var id = racer.id,
            firstName = racer.firstName,
            lastName = racer.lastName,
            team = racer.team,
            teamColor = racer.teamColor,
            points = racer.points;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: id,
          className: "f2-podium--item ".concat(index > 9 ? showRacerCompList : '', " "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_podium_standing_list_PodiumStandingList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          index: index,
          firstName: firstName,
          boldName: lastName,
          simpleName: team,
          teamColor: teamColor,
          points: points,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }));
      });
      var rednerViewFullStanding = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "button",
        className: "btn btn--default",
        onClick: function onClick() {
          return _this4.showFullStanding();
        },
        onKeyPress: function onKeyPress() {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "View Full Standing"); // Constructors List

      var renderContructorList = contructorResults.map(function (contructor, index) {
        var id = contructor.id,
            drivers = contructor.drivers,
            team = contructor.team,
            teamColor = contructor.teamColor,
            points = contructor.points;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: id,
          className: "f2-podium--item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_podium_standing_list_PodiumStandingList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          index: index,
          boldName: team,
          simpleName: drivers,
          teamColor: teamColor,
          points: points,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_TabComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_1",
        title: "Drivers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "Standing"), !isLoading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_top_racers_TopRacers__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "Loading..."), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, !isLoading ? renderRacerList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "Loading..."), !isLoading && showRacerCompList.length > 1 ? rednerViewFullStanding : '')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_2",
        title: "Contructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-podium--top-positions constructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/ferrari_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/ferrari.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/mercedes_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/mercedes.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/redBull_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/redBull.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }))))), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, !isContructorLoading ? renderContructorList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "Loading..."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_3",
        title: "Last Race",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "This is the lastrace panel"));
    }
  }]);

  return RaceStanding;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaceStanding);

/***/ })

};
//# sourceMappingURL=main.5097e77cdf8be3d817ff.hot-update.js.map