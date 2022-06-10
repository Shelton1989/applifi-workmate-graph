"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedProductInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedProductInput = class OrderLineItemCreateOrConnectWithoutSelectedProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedProductInput_1.OrderLineItemCreateWithoutSelectedProductInput)
], OrderLineItemCreateOrConnectWithoutSelectedProductInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedProductInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedProductInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedProductInput = OrderLineItemCreateOrConnectWithoutSelectedProductInput;
