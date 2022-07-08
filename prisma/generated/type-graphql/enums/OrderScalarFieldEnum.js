"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrderScalarFieldEnum;
(function (OrderScalarFieldEnum) {
    OrderScalarFieldEnum["id"] = "id";
    OrderScalarFieldEnum["status"] = "status";
    OrderScalarFieldEnum["selectedShippingAddressId"] = "selectedShippingAddressId";
    OrderScalarFieldEnum["selectedShippingMethodId"] = "selectedShippingMethodId";
    OrderScalarFieldEnum["SelectedPaymentType"] = "SelectedPaymentType";
    OrderScalarFieldEnum["stripePaymentReference"] = "stripePaymentReference";
    OrderScalarFieldEnum["buyerId"] = "buyerId";
    OrderScalarFieldEnum["sellerId"] = "sellerId";
    OrderScalarFieldEnum["createdAt"] = "createdAt";
    OrderScalarFieldEnum["updatedAt"] = "updatedAt";
})(OrderScalarFieldEnum = exports.OrderScalarFieldEnum || (exports.OrderScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
    name: "OrderScalarFieldEnum",
    description: undefined,
});
