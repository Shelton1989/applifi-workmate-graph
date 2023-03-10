"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithWhereUniqueWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemUpdateWithoutBookingInput_1 = require("../inputs/OrderLineItemUpdateWithoutBookingInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpdateWithWhereUniqueWithoutBookingInput = class OrderLineItemUpdateWithWhereUniqueWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpdateWithWhereUniqueWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutBookingInput_1.OrderLineItemUpdateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutBookingInput_1.OrderLineItemUpdateWithoutBookingInput)
], OrderLineItemUpdateWithWhereUniqueWithoutBookingInput.prototype, "data", void 0);
OrderLineItemUpdateWithWhereUniqueWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithWhereUniqueWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithWhereUniqueWithoutBookingInput);
exports.OrderLineItemUpdateWithWhereUniqueWithoutBookingInput = OrderLineItemUpdateWithWhereUniqueWithoutBookingInput;
