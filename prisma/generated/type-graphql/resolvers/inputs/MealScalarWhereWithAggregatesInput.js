"use strict";
var MealScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumDIETARY_RESTRICTIONSNullableListFilter_1 = require("../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter");
const EnumMEAL_KINDNullableListFilter_1 = require("../inputs/EnumMEAL_KINDNullableListFilter");
const EnumMEAL_TYPESNullableListFilter_1 = require("../inputs/EnumMEAL_TYPESNullableListFilter");
const EnumPUBLISH_STATUSWithAggregatesFilter_1 = require("../inputs/EnumPUBLISH_STATUSWithAggregatesFilter");
const EnumSPECIAL_DIETSNullableListFilter_1 = require("../inputs/EnumSPECIAL_DIETSNullableListFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const StringNullableWithAggregatesFilter_1 = require("../inputs/StringNullableWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let MealScalarWhereWithAggregatesInput = MealScalarWhereWithAggregatesInput_1 = class MealScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_TYPESNullableListFilter_1.EnumMEAL_TYPESNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumMEAL_KINDNullableListFilter_1.EnumMEAL_KINDNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDIETARY_RESTRICTIONSNullableListFilter_1.EnumDIETARY_RESTRICTIONSNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSPECIAL_DIETSNullableListFilter_1.EnumSPECIAL_DIETSNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "itemIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableWithAggregatesFilter_1.StringNullableWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSWithAggregatesFilter_1.EnumPUBLISH_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSWithAggregatesFilter_1.EnumPUBLISH_STATUSWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealScalarWhereWithAggregatesInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], MealScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
MealScalarWhereWithAggregatesInput = MealScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], MealScalarWhereWithAggregatesInput);
exports.MealScalarWhereWithAggregatesInput = MealScalarWhereWithAggregatesInput;
