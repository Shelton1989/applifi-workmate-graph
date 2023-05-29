"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateNestedOneWithoutTenantInput_1 = require("../inputs/BillingCreateNestedOneWithoutTenantInput");
const DocumentCreateNestedManyWithoutTenantInput_1 = require("../inputs/DocumentCreateNestedManyWithoutTenantInput");
const LLMQueryCreateNestedManyWithoutTenantInput_1 = require("../inputs/LLMQueryCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
let TenantCreateWithoutUsersInput = class TenantCreateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutUsersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput)
], TenantCreateWithoutUsersInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateWithoutUsersInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutUsersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutUsersInput.prototype, "updatedAt", void 0);
TenantCreateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutUsersInput", {
        isAbstract: true
    })
], TenantCreateWithoutUsersInput);
exports.TenantCreateWithoutUsersInput = TenantCreateWithoutUsersInput;
