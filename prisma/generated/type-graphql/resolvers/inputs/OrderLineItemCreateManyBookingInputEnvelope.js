"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemCreateManyBookingInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyBookingInput_1 = require("../inputs/OrderLineItemCreateManyBookingInput");
let OrderLineItemCreateManyBookingInputEnvelope = class OrderLineItemCreateManyBookingInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManyBookingInput_1.OrderLineItemCreateManyBookingInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemCreateManyBookingInputEnvelope.prototype, "data", void 0);
OrderLineItemCreateManyBookingInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemCreateManyBookingInputEnvelope", {
        isAbstract: true
    })
], OrderLineItemCreateManyBookingInputEnvelope);
exports.OrderLineItemCreateManyBookingInputEnvelope = OrderLineItemCreateManyBookingInputEnvelope;
