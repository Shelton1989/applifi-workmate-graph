"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrderLineItemScalarFieldEnum;
(function (OrderLineItemScalarFieldEnum) {
    OrderLineItemScalarFieldEnum["id"] = "id";
    OrderLineItemScalarFieldEnum["priceId"] = "priceId";
    OrderLineItemScalarFieldEnum["selectedProductId"] = "selectedProductId";
    OrderLineItemScalarFieldEnum["selectedColorId"] = "selectedColorId";
    OrderLineItemScalarFieldEnum["selectedArtworkId"] = "selectedArtworkId";
    OrderLineItemScalarFieldEnum["selectedSizeId"] = "selectedSizeId";
    OrderLineItemScalarFieldEnum["orderId"] = "orderId";
    OrderLineItemScalarFieldEnum["createdAt"] = "createdAt";
    OrderLineItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(OrderLineItemScalarFieldEnum = exports.OrderLineItemScalarFieldEnum || (exports.OrderLineItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderLineItemScalarFieldEnum, {
    name: "OrderLineItemScalarFieldEnum",
    description: undefined,
});
