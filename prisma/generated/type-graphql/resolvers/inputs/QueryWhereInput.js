"use strict";
var QueryWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let QueryWhereInput = QueryWhereInput_1 = class QueryWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QueryWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QueryWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QueryWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], QueryWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], QueryWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], QueryWhereInput.prototype, "queryLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], QueryWhereInput.prototype, "queryText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QueryWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QueryWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], QueryWhereInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], QueryWhereInput.prototype, "userId", void 0);
QueryWhereInput = QueryWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("QueryWhereInput", {
        isAbstract: true
    })
], QueryWhereInput);
exports.QueryWhereInput = QueryWhereInput;
