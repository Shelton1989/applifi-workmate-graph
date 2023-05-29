"use strict";
var BillingWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumBILLING_STATUSFilter_1 = require("../inputs/EnumBILLING_STATUSFilter");
const EnumPLANFilter_1 = require("../inputs/EnumPLANFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
let BillingWhereInput = BillingWhereInput_1 = class BillingWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillingWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillingWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillingWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BillingWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], BillingWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BillingWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], BillingWhereInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPLANFilter_1.EnumPLANFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPLANFilter_1.EnumPLANFilter)
], BillingWhereInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBILLING_STATUSFilter_1.EnumBILLING_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBILLING_STATUSFilter_1.EnumBILLING_STATUSFilter)
], BillingWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BillingWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BillingWhereInput.prototype, "updatedAt", void 0);
BillingWhereInput = BillingWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingWhereInput", {
        isAbstract: true
    })
], BillingWhereInput);
exports.BillingWhereInput = BillingWhereInput;
