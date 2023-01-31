"use strict";
var LocationWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumADDRESS_TYPENullableFilter_1 = require("../inputs/EnumADDRESS_TYPENullableFilter");
const ExperienceRelationFilter_1 = require("../inputs/ExperienceRelationFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
let LocationWhereInput = LocationWhereInput_1 = class LocationWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LocationWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], LocationWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], LocationWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], LocationWhereInput.prototype, "longitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], LocationWhereInput.prototype, "latitude", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "googleMapsUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "googlePlacesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumADDRESS_TYPENullableFilter_1.EnumADDRESS_TYPENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumADDRESS_TYPENullableFilter_1.EnumADDRESS_TYPENullableFilter)
], LocationWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "line1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "line2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "district", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], LocationWhereInput.prototype, "isDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceRelationFilter_1.ExperienceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceRelationFilter_1.ExperienceRelationFilter)
], LocationWhereInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], LocationWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], LocationWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LocationWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], LocationWhereInput.prototype, "updatedAt", void 0);
LocationWhereInput = LocationWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("LocationWhereInput", {
        isAbstract: true
    })
], LocationWhereInput);
exports.LocationWhereInput = LocationWhereInput;
