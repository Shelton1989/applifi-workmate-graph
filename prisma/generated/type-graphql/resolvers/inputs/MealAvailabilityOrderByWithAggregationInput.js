"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCountOrderByAggregateInput_1 = require("../inputs/MealAvailabilityCountOrderByAggregateInput");
const MealAvailabilityMaxOrderByAggregateInput_1 = require("../inputs/MealAvailabilityMaxOrderByAggregateInput");
const MealAvailabilityMinOrderByAggregateInput_1 = require("../inputs/MealAvailabilityMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealAvailabilityOrderByWithAggregationInput = class MealAvailabilityOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCountOrderByAggregateInput_1.MealAvailabilityCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCountOrderByAggregateInput_1.MealAvailabilityCountOrderByAggregateInput)
], MealAvailabilityOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMaxOrderByAggregateInput_1.MealAvailabilityMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMaxOrderByAggregateInput_1.MealAvailabilityMaxOrderByAggregateInput)
], MealAvailabilityOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityMinOrderByAggregateInput_1.MealAvailabilityMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityMinOrderByAggregateInput_1.MealAvailabilityMinOrderByAggregateInput)
], MealAvailabilityOrderByWithAggregationInput.prototype, "_min", void 0);
MealAvailabilityOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityOrderByWithAggregationInput", {
        isAbstract: true
    })
], MealAvailabilityOrderByWithAggregationInput);
exports.MealAvailabilityOrderByWithAggregationInput = MealAvailabilityOrderByWithAggregationInput;
