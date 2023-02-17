"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PAYMENT_TYPE;
(function (PAYMENT_TYPE) {
    PAYMENT_TYPE["OTHER"] = "OTHER";
    PAYMENT_TYPE["FULL"] = "FULL";
    PAYMENT_TYPE["DEPOSIT"] = "DEPOSIT";
    PAYMENT_TYPE["SECONDARY"] = "SECONDARY";
    PAYMENT_TYPE["FINAL"] = "FINAL";
})(PAYMENT_TYPE = exports.PAYMENT_TYPE || (exports.PAYMENT_TYPE = {}));
TypeGraphQL.registerEnumType(PAYMENT_TYPE, {
    name: "PAYMENT_TYPE",
    description: undefined,
});
