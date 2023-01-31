"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByWithRelationInput_1 = require("../inputs/BookingOrderOrderByWithRelationInput");
const PriceOrderByWithRelationInput_1 = require("../inputs/PriceOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderLineItemOrderByWithRelationInput = class BookingOrderLineItemOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceOrderByWithRelationInput_1.PriceOrderByWithRelationInput)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderOrderByWithRelationInput_1.BookingOrderOrderByWithRelationInput)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithRelationInput.prototype, "updatedAt", void 0);
BookingOrderLineItemOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemOrderByWithRelationInput", {
        isAbstract: true
    })
], BookingOrderLineItemOrderByWithRelationInput);
exports.BookingOrderLineItemOrderByWithRelationInput = BookingOrderLineItemOrderByWithRelationInput;
