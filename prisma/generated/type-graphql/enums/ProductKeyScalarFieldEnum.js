"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ProductKeyScalarFieldEnum;
(function (ProductKeyScalarFieldEnum) {
    ProductKeyScalarFieldEnum["id"] = "id";
    ProductKeyScalarFieldEnum["billingId"] = "billingId";
    ProductKeyScalarFieldEnum["createdBy"] = "createdBy";
    ProductKeyScalarFieldEnum["key"] = "key";
    ProductKeyScalarFieldEnum["createdAt"] = "createdAt";
    ProductKeyScalarFieldEnum["updatedAt"] = "updatedAt";
})(ProductKeyScalarFieldEnum = exports.ProductKeyScalarFieldEnum || (exports.ProductKeyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ProductKeyScalarFieldEnum, {
    name: "ProductKeyScalarFieldEnum",
    description: undefined,
});
