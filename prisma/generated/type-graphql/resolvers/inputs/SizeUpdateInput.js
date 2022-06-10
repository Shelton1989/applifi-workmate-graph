"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSIZE_REGIONFieldUpdateOperationsInput_1 = require("../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedSizeInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedSizeInput");
const ProductUpdateManyWithoutSizesInput_1 = require("../inputs/ProductUpdateManyWithoutSizesInput");
const SizeUpdateproductIdsInput_1 = require("../inputs/SizeUpdateproductIdsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SizeUpdateInput = class SizeUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SizeUpdateInput.prototype, "value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSIZE_REGIONFieldUpdateOperationsInput_1.EnumSIZE_REGIONFieldUpdateOperationsInput)
], SizeUpdateInput.prototype, "region", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutSizesInput_1.ProductUpdateManyWithoutSizesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutSizesInput_1.ProductUpdateManyWithoutSizesInput)
], SizeUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateproductIdsInput_1.SizeUpdateproductIdsInput)
], SizeUpdateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedSizeInput_1.OrderLineItemUpdateManyWithoutSelectedSizeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedSizeInput_1.OrderLineItemUpdateManyWithoutSelectedSizeInput)
], SizeUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SizeUpdateInput.prototype, "updatedAt", void 0);
SizeUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SizeUpdateInput", {
        isAbstract: true
    })
], SizeUpdateInput);
exports.SizeUpdateInput = SizeUpdateInput;
