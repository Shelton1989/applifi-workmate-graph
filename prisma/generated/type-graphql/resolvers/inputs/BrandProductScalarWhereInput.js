"use strict";
var BrandProductScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumPRODUCT_CATEGORYFilter_1 = require("../inputs/EnumPRODUCT_CATEGORYFilter");
const EnumPRODUCT_TYPEFilter_1 = require("../inputs/EnumPRODUCT_TYPEFilter");
const EnumSTATUSFilter_1 = require("../inputs/EnumSTATUSFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BrandProductScalarWhereInput = BrandProductScalarWhereInput_1 = class BrandProductScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], BrandProductScalarWhereInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductScalarWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_TYPEFilter_1.EnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_TYPEFilter_1.EnumPRODUCT_TYPEFilter)
], BrandProductScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_CATEGORYFilter_1.EnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_CATEGORYFilter_1.EnumPRODUCT_CATEGORYFilter)
], BrandProductScalarWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductScalarWhereInput.prototype, "brandId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFilter_1.EnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFilter_1.EnumSTATUSFilter)
], BrandProductScalarWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandProductScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandProductScalarWhereInput.prototype, "updatedAt", void 0);
BrandProductScalarWhereInput = BrandProductScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductScalarWhereInput", {
        isAbstract: true
    })
], BrandProductScalarWhereInput);
exports.BrandProductScalarWhereInput = BrandProductScalarWhereInput;
