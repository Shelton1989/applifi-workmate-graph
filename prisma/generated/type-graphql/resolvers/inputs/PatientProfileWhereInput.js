"use strict";
var PatientProfileWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumDIETARY_RESTRICTIONSNullableListFilter_1 = require("../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter");
const EnumMEAL_KINDNullableListFilter_1 = require("../inputs/EnumMEAL_KINDNullableListFilter");
const EnumMEAL_TYPESNullableListFilter_1 = require("../inputs/EnumMEAL_TYPESNullableListFilter");
const EnumSPECIAL_DIETSNullableListFilter_1 = require("../inputs/EnumSPECIAL_DIETSNullableListFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let PatientProfileWhereInput = PatientProfileWhereInput_1 = class PatientProfileWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], PatientProfileWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PatientProfileWhereInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PatientProfileWhereInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PatientProfileWhereInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PatientProfileWhereInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], PatientProfileWhereInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], PatientProfileWhereInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter)
], PatientProfileWhereInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter)
], PatientProfileWhereInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], PatientProfileWhereInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter)
], PatientProfileWhereInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], PatientProfileWhereInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], PatientProfileWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PatientProfileWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], PatientProfileWhereInput.prototype, "updatedAt", void 0);
PatientProfileWhereInput = PatientProfileWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileWhereInput", {
        isAbstract: true
    })
], PatientProfileWhereInput);
exports.PatientProfileWhereInput = PatientProfileWhereInput;
