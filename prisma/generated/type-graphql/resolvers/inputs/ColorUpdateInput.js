"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColorUpdateproductIdsInput_1 = require("../inputs/ColorUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedColorInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedColorInput");
const ProductUpdateManyWithoutColorsInput_1 = require("../inputs/ProductUpdateManyWithoutColorsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ColorUpdateInput = class ColorUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ColorUpdateInput.prototype, "hex", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutColorsInput_1.ProductUpdateManyWithoutColorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutColorsInput_1.ProductUpdateManyWithoutColorsInput)
], ColorUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateproductIdsInput_1.ColorUpdateproductIdsInput)
], ColorUpdateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedColorInput_1.OrderLineItemUpdateManyWithoutSelectedColorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedColorInput_1.OrderLineItemUpdateManyWithoutSelectedColorInput)
], ColorUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ColorUpdateInput.prototype, "updatedAt", void 0);
ColorUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ColorUpdateInput", {
        isAbstract: true
    })
], ColorUpdateInput);
exports.ColorUpdateInput = ColorUpdateInput;
