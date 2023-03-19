"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreatedietaryRestrictionsInput_1 = require("../inputs/MealCreatedietaryRestrictionsInput");
const MealCreatedoctorSpecificDietsInput_1 = require("../inputs/MealCreatedoctorSpecificDietsInput");
const MealCreategalleryInput_1 = require("../inputs/MealCreategalleryInput");
const MealCreateitemIdsInput_1 = require("../inputs/MealCreateitemIdsInput");
const MealCreatelikedByIdsInput_1 = require("../inputs/MealCreatelikedByIdsInput");
const MealCreatemealKindsInput_1 = require("../inputs/MealCreatemealKindsInput");
const MealCreatemealTypesInput_1 = require("../inputs/MealCreatemealTypesInput");
const MealCreatespecialDietsInput_1 = require("../inputs/MealCreatespecialDietsInput");
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let MealCreateManyInput = class MealCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedietaryRestrictionsInput_1.MealCreatedietaryRestrictionsInput)
], MealCreateManyInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealTypesInput_1.MealCreatemealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealTypesInput_1.MealCreatemealTypesInput)
], MealCreateManyInput.prototype, "mealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatemealKindsInput_1.MealCreatemealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatemealKindsInput_1.MealCreatemealKindsInput)
], MealCreateManyInput.prototype, "mealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatedoctorSpecificDietsInput_1.MealCreatedoctorSpecificDietsInput)
], MealCreateManyInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatespecialDietsInput_1.MealCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatespecialDietsInput_1.MealCreatespecialDietsInput)
], MealCreateManyInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateitemIdsInput_1.MealCreateitemIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateitemIdsInput_1.MealCreateitemIdsInput)
], MealCreateManyInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreategalleryInput_1.MealCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreategalleryInput_1.MealCreategalleryInput)
], MealCreateManyInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MealCreateManyInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreatelikedByIdsInput_1.MealCreatelikedByIdsInput)
], MealCreateManyInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MealCreateManyInput.prototype, "updatedAt", void 0);
MealCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateManyInput", {
        isAbstract: true
    })
], MealCreateManyInput);
exports.MealCreateManyInput = MealCreateManyInput;
