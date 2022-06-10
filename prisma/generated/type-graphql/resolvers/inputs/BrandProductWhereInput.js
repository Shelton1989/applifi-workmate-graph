"use strict";
var BrandProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandRelationFilter_1 = require("../inputs/BrandRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumPRODUCT_CATEGORYFilter_1 = require("../inputs/EnumPRODUCT_CATEGORYFilter");
const EnumPRODUCT_TYPEFilter_1 = require("../inputs/EnumPRODUCT_TYPEFilter");
const EnumSTATUSFilter_1 = require("../inputs/EnumSTATUSFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BrandProductWhereInput = BrandProductWhereInput_1 = class BrandProductWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandProductWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], BrandProductWhereInput.prototype, "releaseYear", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_TYPEFilter_1.EnumPRODUCT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_TYPEFilter_1.EnumPRODUCT_TYPEFilter)
], BrandProductWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPRODUCT_CATEGORYFilter_1.EnumPRODUCT_CATEGORYFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPRODUCT_CATEGORYFilter_1.EnumPRODUCT_CATEGORYFilter)
], BrandProductWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandRelationFilter_1.BrandRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandRelationFilter_1.BrandRelationFilter)
], BrandProductWhereInput.prototype, "brand", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandProductWhereInput.prototype, "brandId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFilter_1.EnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFilter_1.EnumSTATUSFilter)
], BrandProductWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], BrandProductWhereInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandProductWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandProductWhereInput.prototype, "updatedAt", void 0);
BrandProductWhereInput = BrandProductWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandProductWhereInput", {
        isAbstract: true
    })
], BrandProductWhereInput);
exports.BrandProductWhereInput = BrandProductWhereInput;
