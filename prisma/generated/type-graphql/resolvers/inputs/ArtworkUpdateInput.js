"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateproductIdsInput_1 = require("../inputs/ArtworkUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutArtworkInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutArtworkInput");
const OrderLineItemUpdateManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedArtworkInput");
const ProductUpdateManyWithoutArtworkInput_1 = require("../inputs/ProductUpdateManyWithoutArtworkInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ArtworkUpdateInput = class ArtworkUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput)
], ArtworkUpdateInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput)
], ArtworkUpdateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutArtworkInput_1.InventoryUpdateOneRequiredWithoutArtworkInput)
], ArtworkUpdateInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput)
], ArtworkUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateInput.prototype, "updatedAt", void 0);
ArtworkUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateInput", {
        isAbstract: true
    })
], ArtworkUpdateInput);
exports.ArtworkUpdateInput = ArtworkUpdateInput;
