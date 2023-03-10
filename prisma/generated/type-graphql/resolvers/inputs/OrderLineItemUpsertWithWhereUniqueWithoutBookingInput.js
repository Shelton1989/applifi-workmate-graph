"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpsertWithWhereUniqueWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateWithoutBookingInput_1 = require("../inputs/OrderLineItemCreateWithoutBookingInput");
const OrderLineItemUpdateWithoutBookingInput_1 = require("../inputs/OrderLineItemUpdateWithoutBookingInput");
const OrderLineItemWhereUniqueInput_1 = require("../inputs/OrderLineItemWhereUniqueInput");
let OrderLineItemUpsertWithWhereUniqueWithoutBookingInput = class OrderLineItemUpsertWithWhereUniqueWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemWhereUniqueInput_1.OrderLineItemWhereUniqueInput)
], OrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateWithoutBookingInput_1.OrderLineItemUpdateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateWithoutBookingInput_1.OrderLineItemUpdateWithoutBookingInput)
], OrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateWithoutBookingInput_1.OrderLineItemCreateWithoutBookingInput)
], OrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "create", void 0);
OrderLineItemUpsertWithWhereUniqueWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpsertWithWhereUniqueWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemUpsertWithWhereUniqueWithoutBookingInput);
exports.OrderLineItemUpsertWithWhereUniqueWithoutBookingInput = OrderLineItemUpsertWithWhereUniqueWithoutBookingInput;
