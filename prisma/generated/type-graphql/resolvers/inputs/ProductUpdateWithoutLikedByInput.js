"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutProductsInput_1 = require("../inputs/ArtworkUpdateManyWithoutProductsInput");
const BrandProductUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/BrandProductUpdateOneRequiredWithoutProductsInput");
const ColorUpdateManyWithoutProductsInput_1 = require("../inputs/ColorUpdateManyWithoutProductsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutProductsInput");
const OrderLineItemUpdateManyWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedProductInput");
const PriceUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutProductsInput");
const ProductUpdateartworkIdsInput_1 = require("../inputs/ProductUpdateartworkIdsInput");
const ProductUpdatecolorIdsInput_1 = require("../inputs/ProductUpdatecolorIdsInput");
const ProductUpdategalleryInput_1 = require("../inputs/ProductUpdategalleryInput");
const ProductUpdatelikedByIdsInput_1 = require("../inputs/ProductUpdatelikedByIdsInput");
const ProductUpdatesizeIdsInput_1 = require("../inputs/ProductUpdatesizeIdsInput");
const SizeUpdateManyWithoutProductsInput_1 = require("../inputs/SizeUpdateManyWithoutProductsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ProductUpdateWithoutLikedByInput = class ProductUpdateWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutLikedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutProductsInput_1.PriceUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutProductsInput_1.PriceUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutLikedByInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutLikedByInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdategalleryInput_1.ProductUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdategalleryInput_1.ProductUpdategalleryInput)
], ProductUpdateWithoutLikedByInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateOneRequiredWithoutProductsInput_1.BrandProductUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateOneRequiredWithoutProductsInput_1.BrandProductUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput)
], ProductUpdateWithoutLikedByInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput)
], ProductUpdateWithoutLikedByInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput)
], ProductUpdateWithoutLikedByInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput)
], ProductUpdateWithoutLikedByInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput)
], ProductUpdateWithoutLikedByInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutLikedByInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutLikedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutLikedByInput.prototype, "updatedAt", void 0);
ProductUpdateWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutLikedByInput", {
        isAbstract: true
    })
], ProductUpdateWithoutLikedByInput);
exports.ProductUpdateWithoutLikedByInput = ProductUpdateWithoutLikedByInput;
