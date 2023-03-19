"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../enums/DIETARY_RESTRICTIONS");
const MEAL_KIND_1 = require("../enums/MEAL_KIND");
const MEAL_TYPES_1 = require("../enums/MEAL_TYPES");
const PUBLISH_STATUS_1 = require("../enums/PUBLISH_STATUS");
const SPECIAL_DIETS_1 = require("../enums/SPECIAL_DIETS");
const MealCount_1 = require("../resolvers/outputs/MealCount");
let Meal = class Meal {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Meal.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Meal.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Meal.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Meal.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCount_1.MealCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCount_1.MealCount)
], Meal.prototype, "_count", void 0);
Meal = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Meal", {
        isAbstract: true
    })
], Meal);
exports.Meal = Meal;
