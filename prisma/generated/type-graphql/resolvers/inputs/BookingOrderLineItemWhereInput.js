"use strict";
var BookingOrderLineItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderRelationFilter_1 = require("../inputs/BookingOrderRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const PriceRelationFilter_1 = require("../inputs/PriceRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let BookingOrderLineItemWhereInput = BookingOrderLineItemWhereInput_1 = class BookingOrderLineItemWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderLineItemWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderLineItemWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BookingOrderLineItemWhereInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BookingOrderLineItemWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceRelationFilter_1.PriceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceRelationFilter_1.PriceRelationFilter)
], BookingOrderLineItemWhereInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderLineItemWhereInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderRelationFilter_1.BookingOrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderRelationFilter_1.BookingOrderRelationFilter)
], BookingOrderLineItemWhereInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderLineItemWhereInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookingOrderLineItemWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookingOrderLineItemWhereInput.prototype, "updatedAt", void 0);
BookingOrderLineItemWhereInput = BookingOrderLineItemWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemWhereInput", {
        isAbstract: true
    })
], BookingOrderLineItemWhereInput);
exports.BookingOrderLineItemWhereInput = BookingOrderLineItemWhereInput;
