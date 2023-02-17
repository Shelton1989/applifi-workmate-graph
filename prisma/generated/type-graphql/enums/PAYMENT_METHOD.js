"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAYMENT_METHOD = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PAYMENT_METHOD;
(function (PAYMENT_METHOD) {
    PAYMENT_METHOD["STRIPE"] = "STRIPE";
    PAYMENT_METHOD["PAYPAL"] = "PAYPAL";
    PAYMENT_METHOD["CASH"] = "CASH";
    PAYMENT_METHOD["BANK_TRANSFER"] = "BANK_TRANSFER";
    PAYMENT_METHOD["OTHER"] = "OTHER";
})(PAYMENT_METHOD = exports.PAYMENT_METHOD || (exports.PAYMENT_METHOD = {}));
TypeGraphQL.registerEnumType(PAYMENT_METHOD, {
    name: "PAYMENT_METHOD",
    description: undefined,
});
