"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCountAggregate_1 = require("../outputs/BookingOrderLineItemCountAggregate");
const BookingOrderLineItemMaxAggregate_1 = require("../outputs/BookingOrderLineItemMaxAggregate");
const BookingOrderLineItemMinAggregate_1 = require("../outputs/BookingOrderLineItemMinAggregate");
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
