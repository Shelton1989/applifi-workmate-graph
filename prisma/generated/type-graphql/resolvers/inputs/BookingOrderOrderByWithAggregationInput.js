"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCountOrderByAggregateInput_1 = require("../inputs/BookingOrderCountOrderByAggregateInput");
const BookingOrderMaxOrderByAggregateInput_1 = require("../inputs/BookingOrderMaxOrderByAggregateInput");
const BookingOrderMinOrderByAggregateInput_1 = require("../inputs/BookingOrderMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderOrderByWithAggregationInput = class BookingOrderOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCountOrderByAggregateInput_1.BookingOrderCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCountOrderByAggregateInput_1.BookingOrderCountOrderByAggregateInput)
], BookingOrderOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMaxOrderByAggregateInput_1.BookingOrderMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMaxOrderByAggregateInput_1.BookingOrderMaxOrderByAggregateInput)
], BookingOrderOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderMinOrderByAggregateInput_1.BookingOrderMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderMinOrderByAggregateInput_1.BookingOrderMinOrderByAggregateInput)
], BookingOrderOrderByWithAggregationInput.prototype, "_min", void 0);
BookingOrderOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderOrderByWithAggregationInput", {
        isAbstract: true
    })
], BookingOrderOrderByWithAggregationInput);
exports.BookingOrderOrderByWithAggregationInput = BookingOrderOrderByWithAggregationInput;
