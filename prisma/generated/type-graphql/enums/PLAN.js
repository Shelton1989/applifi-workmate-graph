"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAN = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PLAN;
(function (PLAN) {
    PLAN["FREE"] = "FREE";
    PLAN["STANDARD"] = "STANDARD";
    PLAN["PRO"] = "PRO";
    PLAN["ENTERPRISE"] = "ENTERPRISE";
})(PLAN = exports.PLAN || (exports.PLAN = {}));
TypeGraphQL.registerEnumType(PLAN, {
    name: "PLAN",
    description: undefined,
});
