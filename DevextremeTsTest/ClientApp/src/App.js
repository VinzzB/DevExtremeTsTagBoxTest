"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Home_1 = require("./components/Home");
var FetchData_1 = require("./components/FetchData");
var Counter_1 = require("./components/Counter");
require("./custom.css");
var App = function () {
    return React.createElement(React.Fragment, null,
        React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.Home }),
        React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.Counter }),
        React.createElement(react_router_1.Route, { path: '/fetch-data', component: FetchData_1.FetchData }));
};
exports.default = App;
//# sourceMappingURL=App.js.map