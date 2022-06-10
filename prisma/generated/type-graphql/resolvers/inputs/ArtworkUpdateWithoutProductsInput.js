"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateproductIdsInput_1 = require("../inputs/ArtworkUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutArtworkInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutArtworkInput");
const OrderLineItemUpdateManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedArtworkInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ArtworkUpdateWithoutProductsInput = class ArtworkUpdateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput)
], ArtworkUpdateWithoutProductsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput)
], ArtworkUpdateWithoutProductsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutProductsInput.prototype, "updatedAt", void 0);
ArtworkUpdateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateWithoutProductsInput", {
        isAbstract: true
    })
], ArtworkUpdateWithoutProductsInput);
exports.ArtworkUpdateWithoutProductsInput = ArtworkUpdateWithoutProductsInput;
