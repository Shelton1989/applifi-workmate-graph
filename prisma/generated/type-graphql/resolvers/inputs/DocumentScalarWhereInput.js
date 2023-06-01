"use strict";
var DocumentScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumDOCUMENT_INDEX_STATUSFilter_1 = require("../inputs/EnumDOCUMENT_INDEX_STATUSFilter");
const EnumPUBLISH_STATUSFilter_1 = require("../inputs/EnumPUBLISH_STATUSFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let DocumentScalarWhereInput = DocumentScalarWhereInput_1 = class DocumentScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter)
], DocumentScalarWhereInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDOCUMENT_INDEX_STATUSFilter_1.EnumDOCUMENT_INDEX_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDOCUMENT_INDEX_STATUSFilter_1.EnumDOCUMENT_INDEX_STATUSFilter)
], DocumentScalarWhereInput.prototype, "indexStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentScalarWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], DocumentScalarWhereInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentScalarWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DocumentScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DocumentScalarWhereInput.prototype, "updatedAt", void 0);
DocumentScalarWhereInput = DocumentScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentScalarWhereInput", {
        isAbstract: true
    })
], DocumentScalarWhereInput);
exports.DocumentScalarWhereInput = DocumentScalarWhereInput;
