"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateproductIdsInput_1 = require("../inputs/ColorUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const ProductUpdateManyWithoutColorsInput_1 = require("../inputs/ProductUpdateManyWithoutColorsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ColorUpdateWithoutOrderLineItemsInput = class ColorUpdateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutColorsInput_1.ProductUpdateManyWithoutColorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutColorsInput_1.ProductUpdateManyWithoutColorsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
ColorUpdateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ColorUpdateWithoutOrderLineItemsInput);
exports.ColorUpdateWithoutOrderLineItemsInput = ColorUpdateWithoutOrderLineItemsInput;
