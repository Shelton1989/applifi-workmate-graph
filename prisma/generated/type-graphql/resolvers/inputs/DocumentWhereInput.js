"use strict";
var DocumentWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumPUBLISH_STATUSFilter_1 = require("../inputs/EnumPUBLISH_STATUSFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
let DocumentWhereInput = DocumentWhereInput_1 = class DocumentWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DocumentWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], DocumentWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFilter_1.EnumPUBLISH_STATUSFilter)
], DocumentWhereInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentWhereInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], DocumentWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], DocumentWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], DocumentWhereInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DocumentWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], DocumentWhereInput.prototype, "updatedAt", void 0);
DocumentWhereInput = DocumentWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentWhereInput", {
        isAbstract: true
    })
], DocumentWhereInput);
exports.DocumentWhereInput = DocumentWhereInput;
