"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemAvgAggregate_1 = require("../outputs/BookingOrderLineItemAvgAggregate");
const BookingOrderLineItemCountAggregate_1 = require("../outputs/BookingOrderLineItemCountAggregate");
const BookingOrderLineItemMaxAggregate_1 = require("../outputs/BookingOrderLineItemMaxAggregate");
const BookingOrderLineItemMinAggregate_1 = require("../outputs/BookingOrderLineItemMinAggregate");
const BookingOrderLineItemSumAggregate_1 = require("../outputs/BookingOrderLineItemSumAggregate");
let BookingOrderLineItemGroupBy = class BookingOrderLineItemGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemGroupBy.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemGroupBy.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BookingOrderLineItemGroupBy.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemGroupBy.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemGroupBy.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemGroupBy.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemGroupBy.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCountAggregate_1.BookingOrderLineItemCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCountAggregate_1.BookingOrderLineItemCountAggregate)
], BookingOrderLineItemGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemAvgAggregate_1.BookingOrderLineItemAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemAvgAggregate_1.BookingOrderLineItemAvgAggregate)
], BookingOrderLineItemGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemSumAggregate_1.BookingOrderLineItemSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemSumAggregate_1.BookingOrderLineItemSumAggregate)
], BookingOrderLineItemGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMinAggregate_1.BookingOrderLineItemMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMinAggregate_1.BookingOrderLineItemMinAggregate)
], BookingOrderLineItemGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMaxAggregate_1.BookingOrderLineItemMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMaxAggregate_1.BookingOrderLineItemMaxAggregate)
], BookingOrderLineItemGroupBy.prototype, "_max", void 0);
BookingOrderLineItemGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BookingOrderLineItemGroupBy", {
        isAbstract: true
    })
], BookingOrderLineItemGroupBy);
exports.BookingOrderLineItemGroupBy = BookingOrderLineItemGroupBy;
