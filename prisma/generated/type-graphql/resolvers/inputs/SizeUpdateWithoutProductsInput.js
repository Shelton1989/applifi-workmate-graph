"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSIZE_REGIONFieldUpdateOperationsInput_1 = require("../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedSizeInput");
const SizeUpdateproductIdsInput_1 = require("../inputs/SizeUpdateproductIdsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SizeUpdateWithoutProductsInput = class SizeUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SizeUpdateWithoutProductsInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput)
], SizeUpdateWithoutProductsInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput)
], SizeUpdateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedSizeInput_1.OrderLineItemUpdateManyWithoutSelectedSizeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedSizeInput_1.OrderLineItemUpdateManyWithoutSelectedSizeInput)
], SizeUpdateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
SizeUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateWithoutProductsInput", {
        isAbstract: true
    })
], SizeUpdateWithoutProductsInput);
exports.SizeUpdateWithoutProductsInput = SizeUpdateWithoutProductsInput;
