"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BILLING_STATUS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BILLING_STATUS;
(function (BILLING_STATUS) {
    BILLING_STATUS["ACTIVE"] = "ACTIVE";
    BILLING_STATUS["PAST_DUE"] = "PAST_DUE";
    BILLING_STATUS["CANCELED"] = "CANCELED";
    BILLING_STATUS["UNPAID"] = "UNPAID";
    BILLING_STATUS["INCOMPLETE"] = "INCOMPLETE";
    BILLING_STATUS["INCOMPLETE_EXPIRED"] = "INCOMPLETE_EXPIRED";
    BILLING_STATUS["TRIALING"] = "TRIALING";
})(BILLING_STATUS = exports.BILLING_STATUS || (exports.BILLING_STATUS = {}));
TypeGraphQL.registerEnumType(BILLING_STATUS, {
    name: "BILLING_STATUS",
    description: undefined,
});
