"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutDocumentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateNestedOneWithoutTenantInput_1 = require("../inputs/BillingCreateNestedOneWithoutTenantInput");
const LLMQueryCreateNestedManyWithoutTenantInput_1 = require("../inputs/LLMQueryCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateWithoutDocumentsInput = class TenantCreateWithoutDocumentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutDocumentsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutDocumentsInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateNestedManyWithoutTenantInput_1.LLMQueryCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutDocumentsInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput)
], TenantCreateWithoutDocumentsInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateWithoutDocumentsInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutDocumentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutDocumentsInput.prototype, "updatedAt", void 0);
TenantCreateWithoutDocumentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutDocumentsInput", {
        isAbstract: true
    })
], TenantCreateWithoutDocumentsInput);
exports.TenantCreateWithoutDocumentsInput = TenantCreateWithoutDocumentsInput;
