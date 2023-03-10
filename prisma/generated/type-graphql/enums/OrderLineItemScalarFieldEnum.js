"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OrderLineItemScalarFieldEnum;
(function (OrderLineItemScalarFieldEnum) {
    OrderLineItemScalarFieldEnum["id"] = "id";
    OrderLineItemScalarFieldEnum["details"] = "details";
    OrderLineItemScalarFieldEnum["comments"] = "comments";
    OrderLineItemScalarFieldEnum["mealItemId"] = "mealItemId";
    OrderLineItemScalarFieldEnum["mealItemOptionId"] = "mealItemOptionId";
    OrderLineItemScalarFieldEnum["bookingId"] = "bookingId";
    OrderLineItemScalarFieldEnum["createdAt"] = "createdAt";
    OrderLineItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(OrderLineItemScalarFieldEnum = exports.OrderLineItemScalarFieldEnum || (exports.OrderLineItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(OrderLineItemScalarFieldEnum, {
    name: "OrderLineItemScalarFieldEnum",
    description: undefined,
});
