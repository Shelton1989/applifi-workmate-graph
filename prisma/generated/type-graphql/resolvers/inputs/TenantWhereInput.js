"use strict";
var TenantWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingRelationFilter_1 = require("../inputs/BillingRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DocumentListRelationFilter_1 = require("../inputs/DocumentListRelationFilter");
const QueryListRelationFilter_1 = require("../inputs/QueryListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let TenantWhereInput = TenantWhereInput_1 = class TenantWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TenantWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TenantWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TenantWhereInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TenantWhereInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], TenantWhereInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryListRelationFilter_1.QueryListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryListRelationFilter_1.QueryListRelationFilter)
], TenantWhereInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentListRelationFilter_1.DocumentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentListRelationFilter_1.DocumentListRelationFilter)
], TenantWhereInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingRelationFilter_1.BillingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingRelationFilter_1.BillingRelationFilter)
], TenantWhereInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], TenantWhereInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TenantWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TenantWhereInput.prototype, "updatedAt", void 0);
TenantWhereInput = TenantWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantWhereInput", {
        isAbstract: true
    })
], TenantWhereInput);
exports.TenantWhereInput = TenantWhereInput;
