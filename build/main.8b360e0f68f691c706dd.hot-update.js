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
/* harmony import */ var _tabComp_TabComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tabComp/TabComp */ "./src/components/tabComp/TabComp.js");
/* harmony import */ var _tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tabComp/PanelComp */ "./src/components/tabComp/PanelComp.js");







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
      showContructorCompList: 'f2-podium--item-none',
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
          raceResults: data,
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
          showContructorCompList = _this$state.showContructorCompList,
          error = _this$state.error;
      var renderRacerList = raceResults.sort(function (a, b) {
        return b.points - a.points;
      }).map(function (racer, index) {
        var id = racer.id,
            firstName = racer.firstName,
            lastName = racer.lastName,
            teamName = racer.teamName,
            teamColor = racer.teamColor,
            points = racer.points;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: id,
          className: "f2-podium--item ".concat(index > 9 ? showRacerCompList : '', " "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#raceStanding-list",
          className: "f2-podium--link f2-bg--white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--rank f2-bold--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, index + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "team-color-icon",
          style: {
            background: "#".concat(teamColor)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--driver f2--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, firstName), "\xA0", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          className: "f2-podium--surname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, lastName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium-subdetail misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, teamName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--time f2-label misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, points, ' ', "PTS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon icon-chevron-right f2-color--warmRed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }))));
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
          lineNumber: 92
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
            lineNumber: 114
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#raceStanding-list",
          className: "f2-podium--link f2-bg--white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--rank f2-bold--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, index + 1), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "team-color-icon",
          style: {
            background: "#".concat(teamColor)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--driver f2--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
          className: "f2-podium--surname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, team)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium-subdetail misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, drivers), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "f2-podium--time f2-label misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, points, ' ', "PTS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "icon icon-chevron-right f2-color--warmRed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }))));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabComp_TabComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_1",
        title: "Drivers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-podium--top-positions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/v_bottas.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, "Valtteri"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, "Bottas")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/l_hamilton.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, "Lewis"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, "hamilton")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#1E41FF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/m_verstappen.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, "Max"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        className: "f2-podium--surname f2-textUppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }, "verstappen"))))), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, !isLoading ? renderRacerList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, "Loading..."), !isLoading && showRacerCompList.length > 1 ? rednerViewFullStanding : '')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_2",
        title: "Contructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-podium--top-positions constructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/ferrari_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/ferrari.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/mercedes_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/mercedes.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-contructors-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "constructor-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/redBull_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "f2-constructorsCar-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("picture", {
        className: "car-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/redBull.png",
        alt: "ferrari",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }))))), error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, !isContructorLoading ? renderContructorList : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, "Loading..."))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_9__["default"], {
        uniqueKey: "panel_3",
        title: "Last Race",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, "This is the lastrace panel"));
    }
  }]);

  return RaceStanding;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaceStanding);

/***/ }),

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
/* harmony import */ var _components_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/race-standing/RaceStanding */ "./src/components/race-standing/RaceStanding.js");





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
          error = _this$props.error; // const CODE = process.env.RAZZLE_API_SECRET_CODE;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, isLoading && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Loading... "), error && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, JSON.stringify(error, null, 2)), text && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, text), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_race_standing_RaceStanding__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
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
false

};
//# sourceMappingURL=main.8b360e0f68f691c706dd.hot-update.js.map