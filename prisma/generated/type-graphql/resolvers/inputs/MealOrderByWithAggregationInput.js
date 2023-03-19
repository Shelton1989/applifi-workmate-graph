"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCountOrderByAggregateInput_1 = require("../inputs/MealCountOrderByAggregateInput");
const MealMaxOrderByAggregateInput_1 = require("../inputs/MealMaxOrderByAggregateInput");
const MealMinOrderByAggregateInput_1 = require("../inputs/MealMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let MealOrderByWithAggregationInput = class MealOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealOrderByWithAggregationInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCountOrderByAggregateInput_1.MealCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCountOrderByAggregateInput_1.MealCountOrderByAggregateInput)
], MealOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMaxOrderByAggregateInput_1.MealMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMaxOrderByAggregateInput_1.MealMaxOrderByAggregateInput)
], MealOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMinOrderByAggregateInput_1.MealMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMinOrderByAggregateInput_1.MealMinOrderByAggregateInput)
], MealOrderByWithAggregationInput.prototype, "_min", void 0);
MealOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealOrderByWithAggregationInput", {
        isAbstract: true
    })
], MealOrderByWithAggregationInput);
exports.MealOrderByWithAggregationInput = MealOrderByWithAggregationInput;
