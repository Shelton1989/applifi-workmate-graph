"use strict";
var BrandWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandProductListRelationFilter_1 = require("../inputs/BrandProductListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumSTATUSFilter_1 = require("../inputs/EnumSTATUSFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BrandWhereInput = BrandWhereInput_1 = class BrandWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BrandWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BrandWhereInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductListRelationFilter_1.BrandProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductListRelationFilter_1.BrandProductListRelationFilter)
], BrandWhereInput.prototype, "BrandProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFilter_1.EnumSTATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFilter_1.EnumSTATUSFilter)
], BrandWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BrandWhereInput.prototype, "updatedAt", void 0);
BrandWhereInput = BrandWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BrandWhereInput", {
        isAbstract: true
    })
], BrandWhereInput);
exports.BrandWhereInput = BrandWhereInput;
