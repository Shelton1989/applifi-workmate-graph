"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBILLING_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput");
const EnumPLANFieldUpdateOperationsInput_1 = require("../inputs/EnumPLANFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ProductKeyUpdateOneWithoutBillingInput_1 = require("../inputs/ProductKeyUpdateOneWithoutBillingInput");
const TenantUpdateOneRequiredWithoutBillingInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutBillingInput");
let BillingUpdateInput = class BillingUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutBillingInput_1.TenantUpdateOneRequiredWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutBillingInput_1.TenantUpdateOneRequiredWithoutBillingInput)
], BillingUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "stripeCustomerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "stripeSubscriptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPLANFieldUpdateOperationsInput_1.EnumPLANFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "plan", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBILLING_STATUSFieldUpdateOperationsInput_1.EnumBILLING_STATUSFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductKeyUpdateOneWithoutBillingInput_1.ProductKeyUpdateOneWithoutBillingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductKeyUpdateOneWithoutBillingInput_1.ProductKeyUpdateOneWithoutBillingInput)
], BillingUpdateInput.prototype, "ProductKey", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BillingUpdateInput.prototype, "updatedAt", void 0);
BillingUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillingUpdateInput", {
        isAbstract: true
    })
], BillingUpdateInput);
exports.BillingUpdateInput = BillingUpdateInput;
