"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyWithWhereWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemScalarWhereInput_1 = require("../inputs/OrderLineItemScalarWhereInput");
const OrderLineItemUpdateManyMutationInput_1 = require("../inputs/OrderLineItemUpdateManyMutationInput");
let OrderLineItemUpdateManyWithWhereWithoutBookingInput = class OrderLineItemUpdateManyWithWhereWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemScalarWhereInput_1.OrderLineItemScalarWhereInput)
], OrderLineItemUpdateManyWithWhereWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyMutationInput_1.OrderLineItemUpdateManyMutationInput)
], OrderLineItemUpdateManyWithWhereWithoutBookingInput.prototype, "data", void 0);
OrderLineItemUpdateManyWithWhereWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyWithWhereWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyWithWhereWithoutBookingInput);
exports.OrderLineItemUpdateManyWithWhereWithoutBookingInput = OrderLineItemUpdateManyWithWhereWithoutBookingInput;
