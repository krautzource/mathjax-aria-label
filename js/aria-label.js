"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
var Configuration_1 = require("mathjax-full/js/input/tex/Configuration");
var SymbolMap_js_1 = require("mathjax-full/js/input/tex/SymbolMap.js");
var NodeUtil_js_1 = require("mathjax-full/js/input/tex/NodeUtil.js");
var GetArgumentMML = function (parser, name) {
    var arg = parser.ParseArg(name);
    if (!NodeUtil_js_1.default.isInferred(arg)) {
        return arg;
    }
    var children = NodeUtil_js_1.default.getChildren(arg);
    if (children.length === 1) {
        return children[0];
    }
    var mrow = parser.create('node', 'mrow');
    NodeUtil_js_1.default.copyChildren(arg, mrow);
    NodeUtil_js_1.default.copyAttributes(arg, mrow);
    return mrow;
};
var ArialabelMethods = {};
ArialabelMethods.Arialabel = function (parser, name) {
    var thelabel = parser.GetArgument(name);
    var arg = GetArgumentMML(parser, name);
    NodeUtil_js_1.default.setAttribute(arg, 'aria-label', thelabel);
    parser.Push(arg);
};
new SymbolMap_js_1.CommandMap('aria-label', {
    'arialabel': ['Arialabel'],
}, ArialabelMethods);
exports.configuration = Configuration_1.Configuration.create('aria-label', {
    handler: {
        macro: ['aria-label']
    }
});
//# sourceMappingURL=aria-label.js.map