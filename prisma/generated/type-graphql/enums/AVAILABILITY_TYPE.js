"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABILITY_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var AVAILABILITY_TYPE;
(function (AVAILABILITY_TYPE) {
    AVAILABILITY_TYPE["WEEKEND"] = "WEEKEND";
    AVAILABILITY_TYPE["DAILY"] = "DAILY";
    AVAILABILITY_TYPE["HOURLY"] = "HOURLY";
    AVAILABILITY_TYPE["HALF_HOURLY"] = "HALF_HOURLY";
})(AVAILABILITY_TYPE = exports.AVAILABILITY_TYPE || (exports.AVAILABILITY_TYPE = {}));
TypeGraphQL.registerEnumType(AVAILABILITY_TYPE, {
    name: "AVAILABILITY_TYPE",
    description: undefined,
});
