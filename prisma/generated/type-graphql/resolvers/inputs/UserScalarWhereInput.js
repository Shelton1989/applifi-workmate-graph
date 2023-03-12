"use strict";
var UserScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const EnumROLENullableListFilter_1 = require("../inputs/EnumROLENullableListFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let UserScalarWhereInput = UserScalarWhereInput_1 = class UserScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserScalarWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumROLENullableListFilter_1.EnumROLENullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumROLENullableListFilter_1.EnumROLENullableListFilter)
], UserScalarWhereInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserScalarWhereInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], UserScalarWhereInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], UserScalarWhereInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], UserScalarWhereInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], UserScalarWhereInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], UserScalarWhereInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserScalarWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserScalarWhereInput.prototype, "wardId", void 0);
UserScalarWhereInput = UserScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UserScalarWhereInput", {
        isAbstract: true
    })
], UserScalarWhereInput);
exports.UserScalarWhereInput = UserScalarWhereInput;
