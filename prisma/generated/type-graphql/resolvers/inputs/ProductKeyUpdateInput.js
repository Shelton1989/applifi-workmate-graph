"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateOneWithoutProductKeysInput_1 = require("../inputs/BillingUpdateOneWithoutProductKeysInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductKeyUpdateInput = class ProductKeyUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateOneWithoutProductKeysInput_1.BillingUpdateOneWithoutProductKeysInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateOneWithoutProductKeysInput_1.BillingUpdateOneWithoutProductKeysInput)
], ProductKeyUpdateInput.prototype, "Billing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductKeyUpdateInput.prototype, "createdBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductKeyUpdateInput.prototype, "key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductKeyUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductKeyUpdateInput.prototype, "updatedAt", void 0);
ProductKeyUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductKeyUpdateInput", {
        isAbstract: true
    })
], ProductKeyUpdateInput);
exports.ProductKeyUpdateInput = ProductKeyUpdateInput;
