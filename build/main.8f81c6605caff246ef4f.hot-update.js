exports.id = "main";
exports.modules = {

/***/ "./src/components/podium-standing-list/PodiumStandingList.js":
/*!*******************************************************************!*\
  !*** ./src/components/podium-standing-list/PodiumStandingList.js ***!
  \*******************************************************************/
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





var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/components/podium-standing-list/PodiumStandingList.js";


var PodiumStandingList =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PodiumStandingList, _React$PureComponent);

  function PodiumStandingList() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PodiumStandingList);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PodiumStandingList).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PodiumStandingList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          index = _this$props.index,
          firstName = _this$props.firstName,
          boldName = _this$props.boldName,
          simpleName = _this$props.simpleName,
          teamColor = _this$props.teamColor,
          points = _this$props.points;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#raceStanding-list",
        className: "f2-podium--link f2-bg--white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--rank f2-bold--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, index + 1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "team-color-icon",
        style: {
          background: "#".concat(teamColor)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-capitalize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, firstName), "\xA0", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        className: "f2-podium--surname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, boldName)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium-subdetail misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, simpleName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--time f2-label misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, points, ' ', "PTS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "icon icon-chevron-right f2-color--warmRed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })));
    }
  }]);

  return PodiumStandingList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

PodiumStandingList.displayName = 'PodiumStandingList';
/* harmony default export */ __webpack_exports__["default"] = (PodiumStandingList);

/***/ }),

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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "serializeData", function (data) {
      data.sort(function (a, b) {
        return b.points - a.points;
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
          raceResults: serializeData(data),
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
          contructorResults: data,
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
          error = _this$state.error;
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
            lineNumber: 73
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
            lineNumber: 74
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
          lineNumber: 87
        }
      }, "View Full Standing"); // Constructors List started

      var renderContructorList = contructorResults.sort(function (a, b) {
        return b.points - a.points;
      }).map(function (contructor, index) {
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
            lineNumber: 108
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_podium_standing_list_PodiumStandingList__WEBPACK_IMPORTED_MODULE_10__["default"], {
          index: index,
          boldName: team,
          simpleName: drivers,
          teamColor: teamColor,
          points: points,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_TabComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_1",
        title: "Drivers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-podium--top-positions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/v_bottas.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "Valtteri"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Bottas")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/l_hamilton.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Lewis"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }, "hamilton")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#1E41FF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/m_verstappen.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "Max"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-textUppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, "verstappen"))))), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, !isLoading ? renderRacerList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "Loading..."), !isLoading && showRacerCompList.length > 1 ? rednerViewFullStanding : '')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_2",
        title: "Contructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-podium--top-positions constructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/ferrari_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/ferrari.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/mercedes_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/mercedes.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/redBull_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/redBull.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }))))), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, !isContructorLoading ? renderContructorList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, "Loading..."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tab_comp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_3",
        title: "Last Race",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, "This is the lastrace panel"));
    }
  }]);

  return RaceStanding;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaceStanding);

/***/ }),

/***/ "./src/components/tab-comp/PanelComp.js":
/*!**********************************************!*\
  !*** ./src/components/tab-comp/PanelComp.js ***!
  \**********************************************/
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





var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/components/tab-comp/PanelComp.js";


var PanelComp =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PanelComp, _React$PureComponent);

  function PanelComp() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PanelComp);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PanelComp).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PanelComp, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, children);
    }
  }]);

  return PanelComp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);

PanelComp.displayName = 'PanelComp';
/* harmony default export */ __webpack_exports__["default"] = (PanelComp);

/***/ }),

/***/ "./src/components/tab-comp/TabComp.js":
/*!********************************************!*\
  !*** ./src/components/tab-comp/TabComp.js ***!
  \********************************************/
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







var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/components/tab-comp/TabComp.js";


var TabComp =
/*#__PURE__*/
function (_React$PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TabComp, _React$PureComponent);

  function TabComp(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TabComp);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TabComp).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onHandleChange", function (index) {
      _this.setState({
        findSelected: index
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleKeyPress", function () {});

    _this.state = {
      findSelected: 0
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TabComp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var findSelected = this.state.findSelected;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-raceStanding-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-raceStanding-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "inline f2-raceStanding-inlineTabs f2-bg--offWhite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, children.map(function (elem, index) {
        var style = index === findSelected ? 'selected f2-tab f2--xs' : 'f2-tab f2--xs';
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: style,
          key: elem.props.uniqueKey,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "tabBtn",
          role: "button",
          onClick: function onClick() {
            return _this2.onHandleChange(index);
          },
          onKeyPress: function onKeyPress() {},
          tabIndex: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, elem.props.title));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, children[findSelected])));
    }
  }]);

  return TabComp;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (TabComp);

/***/ })

};
//# sourceMappingURL=main.8f81c6605caff246ef4f.hot-update.js.map