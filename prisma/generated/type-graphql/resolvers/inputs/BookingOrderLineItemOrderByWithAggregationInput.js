"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemAvgOrderByAggregateInput_1 = require("../inputs/BookingOrderLineItemAvgOrderByAggregateInput");
const BookingOrderLineItemCountOrderByAggregateInput_1 = require("../inputs/BookingOrderLineItemCountOrderByAggregateInput");
const BookingOrderLineItemMaxOrderByAggregateInput_1 = require("../inputs/BookingOrderLineItemMaxOrderByAggregateInput");
const BookingOrderLineItemMinOrderByAggregateInput_1 = require("../inputs/BookingOrderLineItemMinOrderByAggregateInput");
const BookingOrderLineItemSumOrderByAggregateInput_1 = require("../inputs/BookingOrderLineItemSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderLineItemOrderByWithAggregationInput = class BookingOrderLineItemOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCountOrderByAggregateInput_1.BookingOrderLineItemCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCountOrderByAggregateInput_1.BookingOrderLineItemCountOrderByAggregateInput)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemAvgOrderByAggregateInput_1.BookingOrderLineItemAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemAvgOrderByAggregateInput_1.BookingOrderLineItemAvgOrderByAggregateInput)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMaxOrderByAggregateInput_1.BookingOrderLineItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMaxOrderByAggregateInput_1.BookingOrderLineItemMaxOrderByAggregateInput)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemMinOrderByAggregateInput_1.BookingOrderLineItemMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemMinOrderByAggregateInput_1.BookingOrderLineItemMinOrderByAggregateInput)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemSumOrderByAggregateInput_1.BookingOrderLineItemSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemSumOrderByAggregateInput_1.BookingOrderLineItemSumOrderByAggregateInput)
], BookingOrderLineItemOrderByWithAggregationInput.prototype, "_sum", void 0);
BookingOrderLineItemOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemOrderByWithAggregationInput", {
        isAbstract: true
    })
], BookingOrderLineItemOrderByWithAggregationInput);
exports.BookingOrderLineItemOrderByWithAggregationInput = BookingOrderLineItemOrderByWithAggregationInput;