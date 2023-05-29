"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantCreateWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingCreateNestedOneWithoutTenantInput_1 = require("../inputs/BillingCreateNestedOneWithoutTenantInput");
const DocumentCreateNestedManyWithoutTenantInput_1 = require("../inputs/DocumentCreateNestedManyWithoutTenantInput");
const TenantCreateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantCreateacceptedUserEmailDomainsInput");
const UserCreateNestedManyWithoutTenantInput_1 = require("../inputs/UserCreateNestedManyWithoutTenantInput");
let TenantCreateWithoutQueriesInput = class TenantCreateWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TenantCreateWithoutQueriesInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutTenantInput_1.UserCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutQueriesInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedManyWithoutTenantInput_1.DocumentCreateNestedManyWithoutTenantInput)
], TenantCreateWithoutQueriesInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingCreateNestedOneWithoutTenantInput_1.BillingCreateNestedOneWithoutTenantInput)
], TenantCreateWithoutQueriesInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateacceptedUserEmailDomainsInput_1.TenantCreateacceptedUserEmailDomainsInput)
], TenantCreateWithoutQueriesInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutQueriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TenantCreateWithoutQueriesInput.prototype, "updatedAt", void 0);
TenantCreateWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantCreateWithoutQueriesInput", {
        isAbstract: true
    })
], TenantCreateWithoutQueriesInput);
exports.TenantCreateWithoutQueriesInput = TenantCreateWithoutQueriesInput;
