"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkUpdateWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateproductIdsInput_1 = require("../inputs/ArtworkUpdateproductIdsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedArtworkInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedArtworkInput");
const ProductUpdateManyWithoutArtworkInput_1 = require("../inputs/ProductUpdateManyWithoutArtworkInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ArtworkUpdateWithoutInventoryInput = class ArtworkUpdateWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutArtworkInput_1.ProductUpdateManyWithoutArtworkInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "Products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateproductIdsInput_1.ArtworkUpdateproductIdsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedArtworkInput_1.OrderLineItemUpdateManyWithoutSelectedArtworkInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ArtworkUpdateWithoutInventoryInput.prototype, "updatedAt", void 0);
ArtworkUpdateWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ArtworkUpdateWithoutInventoryInput", {
        isAbstract: true
    })
], ArtworkUpdateWithoutInventoryInput);
exports.ArtworkUpdateWithoutInventoryInput = ArtworkUpdateWithoutInventoryInput;
