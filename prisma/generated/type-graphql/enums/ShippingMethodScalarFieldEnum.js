"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShippingMethodScalarFieldEnum;
(function (ShippingMethodScalarFieldEnum) {
    ShippingMethodScalarFieldEnum["id"] = "id";
    ShippingMethodScalarFieldEnum["name"] = "name";
    ShippingMethodScalarFieldEnum["description"] = "description";
    ShippingMethodScalarFieldEnum["label"] = "label";
    ShippingMethodScalarFieldEnum["arrivalTimeInBusinessDays"] = "arrivalTimeInBusinessDays";
    ShippingMethodScalarFieldEnum["arrivalTimeInBusinessDaysRang"] = "arrivalTimeInBusinessDaysRang";
    ShippingMethodScalarFieldEnum["arrivalTimeDescription"] = "arrivalTimeDescription";
    ShippingMethodScalarFieldEnum["priceId"] = "priceId";
    ShippingMethodScalarFieldEnum["createdAt"] = "createdAt";
    ShippingMethodScalarFieldEnum["updatedAt"] = "updatedAt";
})(ShippingMethodScalarFieldEnum = exports.ShippingMethodScalarFieldEnum || (exports.ShippingMethodScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ShippingMethodScalarFieldEnum, {
    name: "ShippingMethodScalarFieldEnum",
    description: undefined,
});
