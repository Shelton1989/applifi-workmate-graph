"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateWithoutProductKeysInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBILLING_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput");
const EnumPLANFieldUpdateOperationsInput_1 = require("../inputs/EnumPLANFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutBillingInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutBillingInput");
let BillingUpdateWithoutProductKeysInput = class BillingUpdateWithoutProductKeysInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutBillingInput_1.TenantUpdateOneRequiredWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutBillingInput_1.TenantUpdateOneRequiredWithoutBillingInput)
], BillingUpdateWithoutProductKeysInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateWithoutProductKeysInput.prototype, "updatedAt", void 0);
BillingUpdateWithoutProductKeysInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateWithoutProductKeysInput", {
        isAbstract: true
    })
], BillingUpdateWithoutProductKeysInput);
exports.BillingUpdateWithoutProductKeysInput = BillingUpdateWithoutProductKeysInput;
