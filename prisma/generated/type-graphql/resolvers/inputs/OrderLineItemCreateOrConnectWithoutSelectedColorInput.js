"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutSelectedColorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemCreateWithoutSelectedColorInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutSelectedColorInput = class OrderLineItemCreateOrConnectWithoutSelectedColorInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutSelectedColorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutSelectedColorInput_1.OrderLineItemCreateWithoutSelectedColorInput)
], OrderLineItemCreateOrConnectWithoutSelectedColorInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutSelectedColorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutSelectedColorInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutSelectedColorInput);
exports.OrderLineItemCreateOrConnectWithoutSelectedColorInput = OrderLineItemCreateOrConnectWithoutSelectedColorInput;
