"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateproductIdsInput_1 = require("../inputs/ArtworkUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutArtworkInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutArtworkInput");
const ProductUpdateManyWithoutArtworkInput_1 = require("../inputs/ProductUpdateManyWithoutArtworkInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ArtworkUpdateWithoutOrderLineItemsInput = class ArtworkUpdateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
ArtworkUpdateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ArtworkUpdateWithoutOrderLineItemsInput);
exports.ArtworkUpdateWithoutOrderLineItemsInput = ArtworkUpdateWithoutOrderLineItemsInput;
