"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateOneWithoutTenantInput_1 = require("../inputs/BillingUpdateOneWithoutTenantInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateManyWithoutTenantInput_1 = require("../inputs/DocumentUpdateManyWithoutTenantInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const QueryUpdateManyWithoutTenantInput_1 = require("../inputs/QueryUpdateManyWithoutTenantInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateacceptedUserEmailDomainsInput_1 = require("../inputs/TenantUpdateacceptedUserEmailDomainsInput");
const UserUpdateManyWithoutTenantInput_1 = require("../inputs/UserUpdateManyWithoutTenantInput");
let TenantUpdateInput = class TenantUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "slug", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "logoImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutTenantInput_1.UserUpdateManyWithoutTenantInput)
], TenantUpdateInput.prototype, "Users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateManyWithoutTenantInput_1.QueryUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryUpdateManyWithoutTenantInput_1.QueryUpdateManyWithoutTenantInput)
], TenantUpdateInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateManyWithoutTenantInput_1.DocumentUpdateManyWithoutTenantInput)
], TenantUpdateInput.prototype, "Documents", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateOneWithoutTenantInput_1.BillingUpdateOneWithoutTenantInput)
], TenantUpdateInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateacceptedUserEmailDomainsInput_1.TenantUpdateacceptedUserEmailDomainsInput)
], TenantUpdateInput.prototype, "acceptedUserEmailDomains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TenantUpdateInput.prototype, "updatedAt", void 0);
TenantUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TenantUpdateInput", {
        isAbstract: true
    })
], TenantUpdateInput);
exports.TenantUpdateInput = TenantUpdateInput;
