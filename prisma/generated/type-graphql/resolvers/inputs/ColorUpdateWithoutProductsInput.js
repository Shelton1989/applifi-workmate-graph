"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateproductIdsInput_1 = require("../inputs/ColorUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedColorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ColorUpdateWithoutProductsInput = class ColorUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateWithoutProductsInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput)
], ColorUpdateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedColorInput_1.OrderLineItemUpdateManyWithoutSelectedColorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedColorInput_1.OrderLineItemUpdateManyWithoutSelectedColorInput)
], ColorUpdateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
ColorUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateWithoutProductsInput", {
        isAbstract: true
    })
], ColorUpdateWithoutProductsInput);
exports.ColorUpdateWithoutProductsInput = ColorUpdateWithoutProductsInput;
