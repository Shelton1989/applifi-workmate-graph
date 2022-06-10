"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedSizeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedSizeInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedSizeInput = class OrderLineItemCreateOrConnectWithoutSelectedSizeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedSizeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedSizeInput_1.OrderLineItemCreateWithoutSelectedSizeInput)
], OrderLineItemCreateOrConnectWithoutSelectedSizeInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedSizeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedSizeInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedSizeInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedSizeInput = OrderLineItemCreateOrConnectWithoutSelectedSizeInput;
