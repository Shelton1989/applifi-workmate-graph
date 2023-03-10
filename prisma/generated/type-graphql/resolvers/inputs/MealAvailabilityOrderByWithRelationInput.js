"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithRelationInput_1 = require("../inputs/MealOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealAvailabilityOrderByWithRelationInput = class MealAvailabilityOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealOrderByWithRelationInput_1.MealOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealOrderByWithRelationInput_1.MealOrderByWithRelationInput)
], MealAvailabilityOrderByWithRelationInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealAvailabilityOrderByWithRelationInput.prototype, "updatedAt", void 0);
MealAvailabilityOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityOrderByWithRelationInput", {
        isAbstract: true
    })
], MealAvailabilityOrderByWithRelationInput);
exports.MealAvailabilityOrderByWithRelationInput = MealAvailabilityOrderByWithRelationInput;
