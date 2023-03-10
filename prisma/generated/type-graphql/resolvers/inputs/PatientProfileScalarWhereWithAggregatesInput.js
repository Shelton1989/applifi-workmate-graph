"use strict";
var PatientProfileScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumDIETARY_RESTRICTIONSNullableListFilter_1 = require("../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter");
const EnumMEAL_KINDNullableListFilter_1 = require("../inputs/EnumMEAL_KINDNullableListFilter");
const EnumMEAL_TYPESNullableListFilter_1 = require("../inputs/EnumMEAL_TYPESNullableListFilter");
const EnumSPECIAL_DIETSNullableListFilter_1 = require("../inputs/EnumSPECIAL_DIETSNullableListFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let PatientProfileScalarWhereWithAggregatesInput = PatientProfileScalarWhereWithAggregatesInput_1 = class PatientProfileScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], PatientProfileScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
PatientProfileScalarWhereWithAggregatesInput = PatientProfileScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], PatientProfileScalarWhereWithAggregatesInput);
exports.PatientProfileScalarWhereWithAggregatesInput = PatientProfileScalarWhereWithAggregatesInput;
