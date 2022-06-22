exports.id = "main";
exports.modules = {

/***/ "./src/pages/race-standing/RaceStanding.js":
/*!*************************************************!*\
  !*** ./src/pages/race-standing/RaceStanding.js ***!
  \*************************************************/
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
/* harmony import */ var _components_tabComp_TabComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tabComp/TabComp */ "./src/components/tabComp/TabComp.js");
/* harmony import */ var _components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabComp/PanelComp */ "./src/components/tabComp/PanelComp.js");





var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/pages/race-standing/RaceStanding.js";




var RaceStanding =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RaceStanding, _React$Component);

  function RaceStanding(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RaceStanding);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(RaceStanding).call(this, props));
    _this.state = {
      isLoading: true,
      otherRacerResult: null,
      raceResults: [],
      error: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RaceStanding, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchUsers();
    }
  }, {
    key: "fetchUsers",
    value: function fetchUsers() {
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
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          otherRacerResult = _this$state.otherRacerResult,
          raceResults = _this$state.raceResults,
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
        if (index < 11 ? otherRacerResult === 'displayNone' : 'displayBlock') ;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: id,
          className: (otherRacerResult, " f2-podium--item"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "#raceStanding-list",
          className: "f2-podium--link f2-bg--white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-podium--rank f2-bold--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, index + 1), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "team-color-icon",
          style: {
            background: teamColor
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-podium--driver f2--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, firstName), "\xA0", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
          className: "f2-podium--surname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, lastName)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-podium-subdetail misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, teamName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-podium-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
          className: "f2-podium--time f2-label misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, points, ' ', "PTS"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
          className: "icon icon-chevron-right f2-color--warmRed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }))));
      }); // const renderConstructorList = raceResults.map((racerDetails, index) => {
      //     raceResults.find(racer => racer === racerDetails.teamName);
      // });

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_tabComp_TabComp__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
        uniqueKey: "panel_1",
        title: "Drivers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-podium--top-positions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/v_bottas.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Valtteri"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "Bottas")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/l_hamilton.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, "Lewis"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "hamilton")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#1E41FF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/m_verstappen.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "Max"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", {
        className: "f2-podium--surname f2-textUppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "verstappen"))))), error ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, error.message) : null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, !isLoading ? renderRacerList : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Loading..."))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
        uniqueKey: "panel_2",
        title: "Contructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, "This is the Contructors panel"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
        uniqueKey: "panel_3",
        title: "Last Race",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, "This is the lastrace panel"));
    }
  }]);

  return RaceStanding;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaceStanding);

/***/ })

};
//# sourceMappingURL=main.2b47724e18b8276127e0.hot-update.js.map