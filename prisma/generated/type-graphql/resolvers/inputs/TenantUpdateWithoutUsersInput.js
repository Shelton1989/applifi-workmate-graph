"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateWithoutUsersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateOneWithoutTenantInput_1 = require("../inputs/BillingUpdateOneWithoutTenantInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateManyWithoutTenantInput_1 = require("../inputs/DocumentUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const QueryUpdateManyWithoutTenantInput_1 = require("../inputs/QueryUpdateManyWithoutTenantInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantUpdateacceptedUserEmailDomainsInput");
let TenantUpdateWithoutUsersInput = class TenantUpdateWithoutUsersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateManyWithoutTenantInput_1.QueryUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryUpdateManyWithoutTenantInput_1.QueryUpdateManyWithoutTenantInput)
], TenantUpdateWithoutUsersInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput)
], TenantUpdateWithoutUsersInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput)
], TenantUpdateWithoutUsersInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput)
], TenantUpdateWithoutUsersInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateWithoutUsersInput.prototype, "updatedAt", void 0);
TenantUpdateWithoutUsersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateWithoutUsersInput", {
        isAbstract: true
    })
], TenantUpdateWithoutUsersInput);
exports.TenantUpdateWithoutUsersInput = TenantUpdateWithoutUsersInput;
