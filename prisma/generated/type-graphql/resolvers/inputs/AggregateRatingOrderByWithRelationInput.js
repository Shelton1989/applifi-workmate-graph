"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithRelationInput_1 = require("../inputs/MealOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AggregateRatingOrderByWithRelationInput = class AggregateRatingOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealOrderByWithRelationInput_1.MealOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealOrderByWithRelationInput_1.MealOrderByWithRelationInput)
], AggregateRatingOrderByWithRelationInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "updatedAt", void 0);
AggregateRatingOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingOrderByWithRelationInput", {
        isAbstract: true
    })
], AggregateRatingOrderByWithRelationInput);
exports.AggregateRatingOrderByWithRelationInput = AggregateRatingOrderByWithRelationInput;
