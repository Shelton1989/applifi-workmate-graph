"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOrderByWithRelationInput_1 = require("../inputs/MealItemOrderByWithRelationInput");
const OrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/OrderLineItemOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealItemOptionOrderByWithRelationInput = class MealItemOptionOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOrderByWithRelationInput_1.MealItemOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOrderByWithRelationInput_1.MealItemOrderByWithRelationInput)
], MealItemOptionOrderByWithRelationInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput)
], MealItemOptionOrderByWithRelationInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithRelationInput.prototype, "updatedAt", void 0);
MealItemOptionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionOrderByWithRelationInput", {
        isAbstract: true
    })
], MealItemOptionOrderByWithRelationInput);
exports.MealItemOptionOrderByWithRelationInput = MealItemOptionOrderByWithRelationInput;
