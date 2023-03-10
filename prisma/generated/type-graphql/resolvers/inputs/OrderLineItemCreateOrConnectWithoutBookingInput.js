"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateOrConnectWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateWithoutBookingInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemCreateOrConnectWithoutBookingInput = class OrderLineItemCreateOrConnectWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemCreateOrConnectWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput)
], OrderLineItemCreateOrConnectWithoutBookingInput.prototype, "create", void 0);
OrderLineItemCreateOrConnectWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateOrConnectWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemCreateOrConnectWithoutBookingInput);
exports.OrderLineItemCreateOrConnectWithoutBookingInput = OrderLineItemCreateOrConnectWithoutBookingInput;
