"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionOrderByWithRelationInput_1 = require("../inputs/MealItemOptionOrderByWithRelationInput");
const MealItemOrderByWithRelationInput_1 = require("../inputs/MealItemOrderByWithRelationInput");
const OrderOrderByWithRelationInput_1 = require("../inputs/OrderOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OrderLineItemOrderByWithRelationInput = class OrderLineItemOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOrderByWithRelationInput_1.MealItemOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOrderByWithRelationInput_1.MealItemOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionOrderByWithRelationInput_1.MealItemOptionOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionOrderByWithRelationInput_1.MealItemOptionOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByWithRelationInput_1.OrderOrderByWithRelationInput)
], OrderLineItemOrderByWithRelationInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "orderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OrderLineItemOrderByWithRelationInput.prototype, "updatedAt", void 0);
OrderLineItemOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemOrderByWithRelationInput", {
        isAbstract: true
    })
], OrderLineItemOrderByWithRelationInput);
exports.OrderLineItemOrderByWithRelationInput = OrderLineItemOrderByWithRelationInput;
