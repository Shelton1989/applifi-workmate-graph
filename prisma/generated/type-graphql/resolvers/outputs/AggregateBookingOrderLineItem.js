"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookingOrderLineItem = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemAvgAggregate_1 = require("../outputs/BookingOrderLineItemAvgAggregate");
const BookingOrderLineItemCountAggregate_1 = require("../outputs/BookingOrderLineItemCountAggregate");
const BookingOrderLineItemMaxAggregate_1 = require("../outputs/BookingOrderLineItemMaxAggregate");
const BookingOrderLineItemMinAggregate_1 = require("../outputs/BookingOrderLineItemMinAggregate");
const BookingOrderLineItemSumAggregate_1 = require("../outputs/BookingOrderLineItemSumAggregate");
let AggregateBookingOrderLineItem = class AggregateBookingOrderLineItem {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCountAggregate_1.BookingOrderLineItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCountAggregate_1.BookingOrderLineItemCountAggregate)
], AggregateBookingOrderLineItem.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemAvgAggregate_1.BookingOrderLineItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemAvgAggregate_1.BookingOrderLineItemAvgAggregate)
], AggregateBookingOrderLineItem.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemSumAggregate_1.BookingOrderLineItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemSumAggregate_1.BookingOrderLineItemSumAggregate)
], AggregateBookingOrderLineItem.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMinAggregate_1.BookingOrderLineItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMinAggregate_1.BookingOrderLineItemMinAggregate)
], AggregateBookingOrderLineItem.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMaxAggregate_1.BookingOrderLineItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMaxAggregate_1.BookingOrderLineItemMaxAggregate)
], AggregateBookingOrderLineItem.prototype, "_max", void 0);
AggregateBookingOrderLineItem = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBookingOrderLineItem", {
        isAbstract: true
    })
], AggregateBookingOrderLineItem);
exports.AggregateBookingOrderLineItem = AggregateBookingOrderLineItem;
