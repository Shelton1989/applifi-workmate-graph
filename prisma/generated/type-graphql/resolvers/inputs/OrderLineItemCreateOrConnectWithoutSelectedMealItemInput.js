"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedMealItemInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedMealItemInput = class OrderLineItemCreateOrConnectWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedMealItemInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedMealItemInput_1.OrderLineItemCreateWithoutSelectedMealItemInput)
], OrderLineItemCreateOrConnectWithoutSelectedMealItemInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedMealItemInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedMealItemInput = OrderLineItemCreateOrConnectWithoutSelectedMealItemInput;
