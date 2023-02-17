"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PAYMENT_STATUS;
(function (PAYMENT_STATUS) {
    PAYMENT_STATUS["PENDING"] = "PENDING";
    PAYMENT_STATUS["PAID"] = "PAID";
    PAYMENT_STATUS["REFUNDED"] = "REFUNDED";
    PAYMENT_STATUS["FAILED"] = "FAILED";
    PAYMENT_STATUS["CANCELLED"] = "CANCELLED";
    PAYMENT_STATUS["OTHER"] = "OTHER";
})(PAYMENT_STATUS = exports.PAYMENT_STATUS || (exports.PAYMENT_STATUS = {}));
TypeGraphQL.registerEnumType(PAYMENT_STATUS, {
    name: "PAYMENT_STATUS",
    description: undefined,
});
