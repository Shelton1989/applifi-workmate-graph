"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateManyBookingInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateManyBookingInput_1 = require("../inputs/BookingOrderLineItemCreateManyBookingInput");
let BookingOrderLineItemCreateManyBookingInputEnvelope = class BookingOrderLineItemCreateManyBookingInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemCreateManyBookingInput_1.BookingOrderLineItemCreateManyBookingInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemCreateManyBookingInputEnvelope.prototype, "data", void 0);
BookingOrderLineItemCreateManyBookingInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateManyBookingInputEnvelope", {
        isAbstract: true
    })
], BookingOrderLineItemCreateManyBookingInputEnvelope);
exports.BookingOrderLineItemCreateManyBookingInputEnvelope = BookingOrderLineItemCreateManyBookingInputEnvelope;
