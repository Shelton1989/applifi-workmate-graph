"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCountOrderByAggregateInput_1 = require("../inputs/MealItemCountOrderByAggregateInput");
const MealItemMaxOrderByAggregateInput_1 = require("../inputs/MealItemMaxOrderByAggregateInput");
const MealItemMinOrderByAggregateInput_1 = require("../inputs/MealItemMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealItemOrderByWithAggregationInput = class MealItemOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCountOrderByAggregateInput_1.MealItemCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCountOrderByAggregateInput_1.MealItemCountOrderByAggregateInput)
], MealItemOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMaxOrderByAggregateInput_1.MealItemMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMaxOrderByAggregateInput_1.MealItemMaxOrderByAggregateInput)
], MealItemOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemMinOrderByAggregateInput_1.MealItemMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemMinOrderByAggregateInput_1.MealItemMinOrderByAggregateInput)
], MealItemOrderByWithAggregationInput.prototype, "_min", void 0);
MealItemOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOrderByWithAggregationInput", {
        isAbstract: true
    })
], MealItemOrderByWithAggregationInput);
exports.MealItemOrderByWithAggregationInput = MealItemOrderByWithAggregationInput;
