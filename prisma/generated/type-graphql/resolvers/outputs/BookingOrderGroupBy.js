"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCountAggregate_1 = require("../outputs/BookingOrderCountAggregate");
const BookingOrderMaxAggregate_1 = require("../outputs/BookingOrderMaxAggregate");
const BookingOrderMinAggregate_1 = require("../outputs/BookingOrderMinAggregate");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let BookingOrderGroupBy = class BookingOrderGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCountAggregate_1.BookingOrderCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCountAggregate_1.BookingOrderCountAggregate)
], BookingOrderGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMinAggregate_1.BookingOrderMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMinAggregate_1.BookingOrderMinAggregate)
], BookingOrderGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMaxAggregate_1.BookingOrderMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMaxAggregate_1.BookingOrderMaxAggregate)
], BookingOrderGroupBy.prototype, "_max", void 0);
BookingOrderGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderGroupBy", {
        isAbstract: true
    })
], BookingOrderGroupBy);
exports.BookingOrderGroupBy = BookingOrderGroupBy;
