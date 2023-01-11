"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BookingOrderLineItemMinOrderByAggregateInput = class BookingOrderLineItemMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinOrderByAggregateInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinOrderByAggregateInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemMinOrderByAggregateInput.prototype, "updatedAt", void 0);
BookingOrderLineItemMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemMinOrderByAggregateInput", {
        isAbstract: true
    })
], BookingOrderLineItemMinOrderByAggregateInput);
exports.BookingOrderLineItemMinOrderByAggregateInput = BookingOrderLineItemMinOrderByAggregateInput;
