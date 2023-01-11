"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBookingOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCountAggregate_1 = require("../outputs/BookingOrderCountAggregate");
const BookingOrderMaxAggregate_1 = require("../outputs/BookingOrderMaxAggregate");
const BookingOrderMinAggregate_1 = require("../outputs/BookingOrderMinAggregate");
let AggregateBookingOrder = class AggregateBookingOrder {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCountAggregate_1.BookingOrderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCountAggregate_1.BookingOrderCountAggregate)
], AggregateBookingOrder.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMinAggregate_1.BookingOrderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMinAggregate_1.BookingOrderMinAggregate)
], AggregateBookingOrder.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMaxAggregate_1.BookingOrderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMaxAggregate_1.BookingOrderMaxAggregate)
], AggregateBookingOrder.prototype, "_max", void 0);
AggregateBookingOrder = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBookingOrder", {
        isAbstract: true
    })
], AggregateBookingOrder);
exports.AggregateBookingOrder = AggregateBookingOrder;
