"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSIZE_REGIONFieldUpdateOperationsInput_1 = require("../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput");
const ProductUpdateManyWithoutSizesInput_1 = require("../inputs/ProductUpdateManyWithoutSizesInput");
const SizeUpdateproductIdsInput_1 = require("../inputs/SizeUpdateproductIdsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SizeUpdateWithoutOrderLineItemsInput = class SizeUpdateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutSizesInput_1.ProductUpdateManyWithoutSizesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutSizesInput_1.ProductUpdateManyWithoutSizesInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
SizeUpdateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], SizeUpdateWithoutOrderLineItemsInput);
exports.SizeUpdateWithoutOrderLineItemsInput = SizeUpdateWithoutOrderLineItemsInput;
