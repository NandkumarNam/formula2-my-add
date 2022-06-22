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
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_tabComp_TabComp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tabComp/TabComp */ "./src/components/tabComp/TabComp.js");
/* harmony import */ var _components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tabComp/PanelComp */ "./src/components/tabComp/PanelComp.js");






var _jsxFileName = "/Volumes/Data/Development/React/my-app/src/pages/race-standing/RaceStanding.js";

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["</ul>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var RaceStanding =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RaceStanding, _React$Component);

  function RaceStanding(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RaceStanding);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RaceStanding).call(this, props));
    _this.state = {
      isLoading: true,
      raceResults: [],
      error: null
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RaceStanding, [{
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
          raceResults = _this$state.raceResults,
          error = _this$state.error;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tabComp_TabComp__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        uniqueKey: "panel_1",
        title: "Drivers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-custom-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "f2-raceStanding--tabTitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Standing"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-podium--top-positions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/v_bottas.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Valtteri"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Bottas")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/l_hamilton.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, "Lewis"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        className: "f2-podium--surname f2-uppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "hamilton")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#podium-2",
        className: "f2-podium--position pos--3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-snapbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "team-color-border",
        style: {
          background: '#1E41FF'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "f2-driver-snap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        alt: "v bottas",
        src: "http://localhost:3000/assets/img/m_verstappen.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "f2-driver-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Max"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("picture", {
        className: "team-flag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "http://localhost:3000/assets/img/country-flag-Greece.png",
        alt: "countryFlag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        className: "f2-podium--surname f2-textUppercase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, "verstappen"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "f2-podium--raceStanding-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "f2-podium--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#raceStanding-list",
        className: "f2-podium--link f2-bg--white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--rank f2-bold--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "team-color-icon",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-capitalize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Lewis"), "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        className: "f2-podium--surname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Hamilton")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium-subdetail misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Mercedes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--time f2-label misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "413 PTS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon icon-chevron-right f2-color--warmRed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
        className: "f2-podium--item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "#raceStanding-list",
        className: "f2-podium--link f2-bg--white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--rank f2-bold--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "team-color-icon",
        style: {
          background: '#00D2BE'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--driver f2--xs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-capitalize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Lewis"), "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
        className: "f2-podium--surname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Hamilton")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium-subdetail misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Mercedes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "f2-podium--time f2-label misc--label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "413 PTS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        className: "icon icon-chevron-right f2-color--warmRed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }))))), error ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, error.message) : null, !isLoading ? "<ul key={id} className=\"f2-podium--raceStanding-list\">".concat(raceResults.map(function (racer) {
        var id = racer.id,
            lastName = racer.lastName,
            teamName = racer.teamName;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: "f2-podium--item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          href: "#raceStanding-list",
          className: "f2-podium--link f2-bg--white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-podium--rank f2-bold--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, "1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "team-color-icon",
          style: {
            background: '#00D2BE'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-podium--driver f2--xs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-capitalize",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          }
        }, "Lewis"), "\xA0", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          className: "f2-podium--surname",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, "Hamilton")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-podium-subdetail misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, "Mercedes"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-podium-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "f2-podium--time f2-label misc--label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, "413 PTS"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "icon icon-chevron-right f2-color--warmRed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }))));
      })(_templateObject())) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Loading...")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        uniqueKey: "panel_2",
        title: "Contructors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, "This is the Contructors panel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_tabComp_PanelComp__WEBPACK_IMPORTED_MODULE_8__["default"], {
        uniqueKey: "panel_3",
        title: "Last Race",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, "This is the lastrace panel"));
    }
  }]);

  return RaceStanding;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (RaceStanding);

/***/ })

};
//# sourceMappingURL=main.97810ec23fac2bfd473d.hot-update.js.map