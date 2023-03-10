"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionOrderByRelationAggregateInput_1 = require("../inputs/MealItemOptionOrderByRelationAggregateInput");
const MealOrderByRelationAggregateInput_1 = require("../inputs/MealOrderByRelationAggregateInput");
const OrderLineItemOrderByRelationAggregateInput_1 = require("../inputs/OrderLineItemOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealItemOrderByWithRelationInput = class MealItemOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealOrderByRelationAggregateInput_1.MealOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealOrderByRelationAggregateInput_1.MealOrderByRelationAggregateInput)
], MealItemOrderByWithRelationInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionOrderByRelationAggregateInput_1.MealItemOptionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionOrderByRelationAggregateInput_1.MealItemOptionOrderByRelationAggregateInput)
], MealItemOrderByWithRelationInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemOrderByRelationAggregateInput_1.OrderLineItemOrderByRelationAggregateInput)
], MealItemOrderByWithRelationInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithRelationInput.prototype, "updatedAt", void 0);
MealItemOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOrderByWithRelationInput", {
        isAbstract: true
    })
], MealItemOrderByWithRelationInput);
exports.MealItemOrderByWithRelationInput = MealItemOrderByWithRelationInput;
