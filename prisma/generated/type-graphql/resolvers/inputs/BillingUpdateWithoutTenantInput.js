"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBILLING_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput");
const EnumPLANFieldUpdateOperationsInput_1 = require("../inputs/EnumPLANFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let BillingUpdateWithoutTenantInput = class BillingUpdateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BillingUpdateWithoutTenantInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput)
], BillingUpdateWithoutTenantInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput)
], BillingUpdateWithoutTenantInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateWithoutTenantInput.prototype, "updatedAt", void 0);
BillingUpdateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateWithoutTenantInput", {
        isAbstract: true
    })
], BillingUpdateWithoutTenantInput);
exports.BillingUpdateWithoutTenantInput = BillingUpdateWithoutTenantInput;
