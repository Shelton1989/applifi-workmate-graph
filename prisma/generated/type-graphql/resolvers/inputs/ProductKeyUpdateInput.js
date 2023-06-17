"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillingUpdateOneRequiredWithoutProductKeyInput_1 = require("../inputs/BillingUpdateOneRequiredWithoutProductKeyInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductKeyUpdateInput = class ProductKeyUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillingUpdateOneRequiredWithoutProductKeyInput_1.BillingUpdateOneRequiredWithoutProductKeyInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillingUpdateOneRequiredWithoutProductKeyInput_1.BillingUpdateOneRequiredWithoutProductKeyInput)
], ProductKeyUpdateInput.prototype, "Billing", void 0);
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
