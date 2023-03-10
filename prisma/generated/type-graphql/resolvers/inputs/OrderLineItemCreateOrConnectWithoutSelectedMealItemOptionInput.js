"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput = class OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedMealItemOptionInput_1.OrderLineItemCreateWithoutSelectedMealItemOptionInput)
], OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput = OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput;
