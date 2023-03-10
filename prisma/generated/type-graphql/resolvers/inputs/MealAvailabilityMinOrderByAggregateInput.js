"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let MealAvailabilityMinOrderByAggregateInput = class MealAvailabilityMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityMinOrderByAggregateInput.prototype, "updatedAt", void 0);
MealAvailabilityMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityMinOrderByAggregateInput", {
        isAbstract: true
    })
], MealAvailabilityMinOrderByAggregateInput);
exports.MealAvailabilityMinOrderByAggregateInput = MealAvailabilityMinOrderByAggregateInput;
