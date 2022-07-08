"use strict";
var RequestScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumREQUEST_STATUSFilter_1 = require("../inputs/EnumREQUEST_STATUSFilter");
const EnumREQUEST_TYPEFilter_1 = require("../inputs/EnumREQUEST_TYPEFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let RequestScalarWhereInput = RequestScalarWhereInput_1 = class RequestScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RequestScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestScalarWhereInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestScalarWhereInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_TYPEFilter_1.EnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_TYPEFilter_1.EnumREQUEST_TYPEFilter)
], RequestScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], RequestScalarWhereInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestScalarWhereInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_STATUSFilter_1.EnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_STATUSFilter_1.EnumREQUEST_STATUSFilter)
], RequestScalarWhereInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RequestScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RequestScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RequestScalarWhereInput.prototype, "updatedAt", void 0);
RequestScalarWhereInput = RequestScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestScalarWhereInput", {
        isAbstract: true
    })
], RequestScalarWhereInput);
exports.RequestScalarWhereInput = RequestScalarWhereInput;
