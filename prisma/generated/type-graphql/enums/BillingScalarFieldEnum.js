"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BillingScalarFieldEnum;
(function (BillingScalarFieldEnum) {
    BillingScalarFieldEnum["id"] = "id";
    BillingScalarFieldEnum["tenantId"] = "tenantId";
    BillingScalarFieldEnum["stripeCustomerId"] = "stripeCustomerId";
    BillingScalarFieldEnum["plan"] = "plan";
    BillingScalarFieldEnum["status"] = "status";
    BillingScalarFieldEnum["createdAt"] = "createdAt";
    BillingScalarFieldEnum["updatedAt"] = "updatedAt";
})(BillingScalarFieldEnum = exports.BillingScalarFieldEnum || (exports.BillingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BillingScalarFieldEnum, {
    name: "BillingScalarFieldEnum",
    description: undefined,
});
