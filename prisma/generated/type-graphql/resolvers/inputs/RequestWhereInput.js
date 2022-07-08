"use strict";
var RequestWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumREQUEST_STATUSFilter_1 = require("../inputs/EnumREQUEST_STATUSFilter");
const EnumREQUEST_TYPEFilter_1 = require("../inputs/EnumREQUEST_TYPEFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let RequestWhereInput = RequestWhereInput_1 = class RequestWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RequestWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestWhereInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestWhereInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_TYPEFilter_1.EnumREQUEST_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_TYPEFilter_1.EnumREQUEST_TYPEFilter)
], RequestWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], RequestWhereInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], RequestWhereInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_STATUSFilter_1.EnumREQUEST_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_STATUSFilter_1.EnumREQUEST_STATUSFilter)
], RequestWhereInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], RequestWhereInput.prototype, "Reporter", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RequestWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RequestWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], RequestWhereInput.prototype, "updatedAt", void 0);
RequestWhereInput = RequestWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestWhereInput", {
        isAbstract: true
    })
], RequestWhereInput);
exports.RequestWhereInput = RequestWhereInput;
