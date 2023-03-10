"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCountAggregate_1 = require("../outputs/PatientProfileCountAggregate");
const PatientProfileMaxAggregate_1 = require("../outputs/PatientProfileMaxAggregate");
const PatientProfileMinAggregate_1 = require("../outputs/PatientProfileMinAggregate");
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let PatientProfileGroupBy = class PatientProfileGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileGroupBy.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileGroupBy.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileGroupBy.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileGroupBy.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileGroupBy.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCountAggregate_1.PatientProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCountAggregate_1.PatientProfileCountAggregate)
], PatientProfileGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMinAggregate_1.PatientProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMinAggregate_1.PatientProfileMinAggregate)
], PatientProfileGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMaxAggregate_1.PatientProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMaxAggregate_1.PatientProfileMaxAggregate)
], PatientProfileGroupBy.prototype, "_max", void 0);
PatientProfileGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PatientProfileGroupBy", {
        isAbstract: true
    })
], PatientProfileGroupBy);
exports.PatientProfileGroupBy = PatientProfileGroupBy;
