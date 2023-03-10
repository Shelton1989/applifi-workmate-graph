"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MealAvailabilityCountOrderByAggregateInput = class MealAvailabilityCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityCountOrderByAggregateInput.prototype, "updatedAt", void 0);
MealAvailabilityCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCountOrderByAggregateInput", {
        isAbstract: true
    })
], MealAvailabilityCountOrderByAggregateInput);
exports.MealAvailabilityCountOrderByAggregateInput = MealAvailabilityCountOrderByAggregateInput;
