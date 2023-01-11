"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderLineItemMaxOrderByAggregateInput = class BookingOrderLineItemMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxOrderByAggregateInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxOrderByAggregateInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
BookingOrderLineItemMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemMaxOrderByAggregateInput", {
        isAbstract: true
    })
], BookingOrderLineItemMaxOrderByAggregateInput);
exports.BookingOrderLineItemMaxOrderByAggregateInput = BookingOrderLineItemMaxOrderByAggregateInput;
