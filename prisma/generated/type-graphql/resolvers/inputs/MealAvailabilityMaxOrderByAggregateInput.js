"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MealAvailabilityMaxOrderByAggregateInput = class MealAvailabilityMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMaxOrderByAggregateInput.prototype, "updatedAt", void 0);
MealAvailabilityMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityMaxOrderByAggregateInput", {
        isAbstract: true
    })
], MealAvailabilityMaxOrderByAggregateInput);
exports.MealAvailabilityMaxOrderByAggregateInput = MealAvailabilityMaxOrderByAggregateInput;
