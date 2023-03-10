"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MealItemOptionMaxOrderByAggregateInput = class MealItemOptionMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOptionMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
MealItemOptionMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionMaxOrderByAggregateInput", {
        isAbstract: true
    })
], MealItemOptionMaxOrderByAggregateInput);
exports.MealItemOptionMaxOrderByAggregateInput = MealItemOptionMaxOrderByAggregateInput;
