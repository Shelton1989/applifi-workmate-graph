"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../enums/DIETARY_RESTRICTIONS");
const MEAL_KIND_1 = require("../enums/MEAL_KIND");
const MEAL_TYPES_1 = require("../enums/MEAL_TYPES");
const SPECIAL_DIETS_1 = require("../enums/SPECIAL_DIETS");
let PatientProfile = class PatientProfile {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfile.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfile.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfile.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfile.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfile.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfile.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfile.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfile.prototype, "updatedAt", void 0);
PatientProfile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PatientProfile", {
        isAbstract: true
    })
], PatientProfile);
exports.PatientProfile = PatientProfile;
