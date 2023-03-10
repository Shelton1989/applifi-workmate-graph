"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCountOrderByAggregateInput_1 = require("../inputs/MealItemOptionCountOrderByAggregateInput");
const MealItemOptionMaxOrderByAggregateInput_1 = require("../inputs/MealItemOptionMaxOrderByAggregateInput");
const MealItemOptionMinOrderByAggregateInput_1 = require("../inputs/MealItemOptionMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealItemOptionOrderByWithAggregationInput = class MealItemOptionOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCountOrderByAggregateInput_1.MealItemOptionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCountOrderByAggregateInput_1.MealItemOptionCountOrderByAggregateInput)
], MealItemOptionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMaxOrderByAggregateInput_1.MealItemOptionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMaxOrderByAggregateInput_1.MealItemOptionMaxOrderByAggregateInput)
], MealItemOptionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionMinOrderByAggregateInput_1.MealItemOptionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionMinOrderByAggregateInput_1.MealItemOptionMinOrderByAggregateInput)
], MealItemOptionOrderByWithAggregationInput.prototype, "_min", void 0);
MealItemOptionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionOrderByWithAggregationInput", {
        isAbstract: true
    })
], MealItemOptionOrderByWithAggregationInput);
exports.MealItemOptionOrderByWithAggregationInput = MealItemOptionOrderByWithAggregationInput;
