"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateWithoutQueriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateOneWithoutTenantInput_1 = require("../inputs/BillingUpdateOneWithoutTenantInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateManyWithoutTenantInput_1 = require("../inputs/DocumentUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantUpdateacceptedUserEmailDomainsInput");
const UserUpdateManyWithoutTenantInput_1 = require("../inputs/UserUpdateManyWithoutTenantInput");
let TenantUpdateWithoutQueriesInput = class TenantUpdateWithoutQueriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput)
], TenantUpdateWithoutQueriesInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput)
], TenantUpdateWithoutQueriesInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput)
], TenantUpdateWithoutQueriesInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput)
], TenantUpdateWithoutQueriesInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutQueriesInput.prototype, "updatedAt", void 0);
TenantUpdateWithoutQueriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateWithoutQueriesInput", {
        isAbstract: true
    })
], TenantUpdateWithoutQueriesInput);
exports.TenantUpdateWithoutQueriesInput = TenantUpdateWithoutQueriesInput;
