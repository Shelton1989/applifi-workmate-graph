"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateNestedOneWithoutTenantInput_1 = require("../inputs/BillingCreateNestedOneWithoutTenantInput");
const DocumentCreateNestedManyWithoutTenantInput_1 = require("../inputs/DocumentCreateNestedManyWithoutTenantInput");
const LLMQueryCreateNestedManyWithoutTenantInput_1 = require("../inputs/LLMQueryCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateInput = class TenantCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput)
], TenantCreateInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput)
], TenantCreateInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateInput.prototype, "updatedAt", void 0);
TenantCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateInput", {
        isAbstract: true
    })
], TenantCreateInput);
exports.TenantCreateInput = TenantCreateInput;
