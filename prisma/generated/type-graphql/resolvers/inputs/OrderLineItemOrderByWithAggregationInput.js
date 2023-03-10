"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCountOrderByAggregateInput_1 = require("../inputs/OrderLineItemCountOrderByAggregateInput");
const OrderLineItemMaxOrderByAggregateInput_1 = require("../inputs/OrderLineItemMaxOrderByAggregateInput");
const OrderLineItemMinOrderByAggregateInput_1 = require("../inputs/OrderLineItemMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderLineItemOrderByWithAggregationInput = class OrderLineItemOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCountOrderByAggregateInput_1.OrderLineItemCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCountOrderByAggregateInput_1.OrderLineItemCountOrderByAggregateInput)
], OrderLineItemOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMaxOrderByAggregateInput_1.OrderLineItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMaxOrderByAggregateInput_1.OrderLineItemMaxOrderByAggregateInput)
], OrderLineItemOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemMinOrderByAggregateInput_1.OrderLineItemMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemMinOrderByAggregateInput_1.OrderLineItemMinOrderByAggregateInput)
], OrderLineItemOrderByWithAggregationInput.prototype, "_min", void 0);
OrderLineItemOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemOrderByWithAggregationInput", {
        isAbstract: true
    })
], OrderLineItemOrderByWithAggregationInput);
exports.OrderLineItemOrderByWithAggregationInput = OrderLineItemOrderByWithAggregationInput;
