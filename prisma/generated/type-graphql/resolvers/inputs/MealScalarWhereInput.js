"use strict";
var MealScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumDIETARY_RESTRICTIONSNullableListFilter_1 = require("../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter");
const EnumMEAL_KINDNullableListFilter_1 = require("../inputs/EnumMEAL_KINDNullableListFilter");
const EnumMEAL_TYPESNullableListFilter_1 = require("../inputs/EnumMEAL_TYPESNullableListFilter");
const EnumPUBLISH_STATUSFilter_1 = require("../inputs/EnumPUBLISH_STATUSFilter");
const EnumSPECIAL_DIETSNullableListFilter_1 = require("../inputs/EnumSPECIAL_DIETSNullableListFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let MealScalarWhereInput = MealScalarWhereInput_1 = class MealScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealScalarWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealScalarWhereInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealScalarWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealScalarWhereInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter)
], MealScalarWhereInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter)
], MealScalarWhereInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealScalarWhereInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter)
], MealScalarWhereInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], MealScalarWhereInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter)
], MealScalarWhereInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealScalarWhereInput.prototype, "updatedAt", void 0);
MealScalarWhereInput = MealScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealScalarWhereInput", {
        isAbstract: true
    })
], MealScalarWhereInput);
exports.MealScalarWhereInput = MealScalarWhereInput;
