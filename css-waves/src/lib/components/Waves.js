"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./waves.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Waves = function Waves(_ref) {
  var backgroundColor = _ref.backgroundColor;
  return _react.default.createElement("div", {
    style: {
      backgroundColor: backgroundColor
    }
  }, _react.default.createElement("svg", {
    className: "waves",
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    shapeRendering: "auto"
  }, _react.default.createElement("defs", null, _react.default.createElement("path", {
    id: "gentle-wave",
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
  })), _react.default.createElement("g", {
    className: "parallax"
  }, _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "0",
    fill: "rgba(255,255,255,0.7"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "3",
    fill: "rgba(255,255,255,0.5)"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "5",
    fill: "rgba(255,255,255,0.3)"
  }), _react.default.createElement("use", {
    xlinkHref: "#gentle-wave",
    x: "48",
    y: "7",
    fill: "#fff"
  }))));
};

var _default = Waves;
exports.default = _default;