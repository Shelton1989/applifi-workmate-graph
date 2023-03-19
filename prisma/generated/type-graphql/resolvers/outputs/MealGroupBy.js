"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCountAggregate_1 = require("../outputs/MealCountAggregate");
const MealMaxAggregate_1 = require("../outputs/MealMaxAggregate");
const MealMinAggregate_1 = require("../outputs/MealMinAggregate");
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let MealGroupBy = class MealGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealGroupBy.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealGroupBy.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCountAggregate_1.MealCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCountAggregate_1.MealCountAggregate)
], MealGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMinAggregate_1.MealMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMinAggregate_1.MealMinAggregate)
], MealGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealMaxAggregate_1.MealMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealMaxAggregate_1.MealMaxAggregate)
], MealGroupBy.prototype, "_max", void 0);
MealGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealGroupBy", {
        isAbstract: true
    })
], MealGroupBy);
exports.MealGroupBy = MealGroupBy;
