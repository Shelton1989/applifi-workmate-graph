"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var REQUEST_STATUS;
(function (REQUEST_STATUS) {
    REQUEST_STATUS["OPEN"] = "OPEN";
    REQUEST_STATUS["CLOSED"] = "CLOSED";
    REQUEST_STATUS["CLOSED_WITH_PREJUDICE"] = "CLOSED_WITH_PREJUDICE";
    REQUEST_STATUS["RESOLVED"] = "RESOLVED";
})(REQUEST_STATUS = exports.REQUEST_STATUS || (exports.REQUEST_STATUS = {}));
TypeGraphQL.registerEnumType(REQUEST_STATUS, {
    name: "REQUEST_STATUS",
    description: undefined,
});
