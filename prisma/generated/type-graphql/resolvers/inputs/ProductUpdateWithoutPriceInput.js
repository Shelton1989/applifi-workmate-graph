"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutProductsInput_1 = require("../inputs/ArtworkUpdateManyWithoutProductsInput");
const BrandProductUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/BrandProductUpdateOneRequiredWithoutProductsInput");
const ColorUpdateManyWithoutProductsInput_1 = require("../inputs/ColorUpdateManyWithoutProductsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutProductsInput");
const OrderLineItemUpdateManyWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedProductInput");
const ProductUpdateartworkIdsInput_1 = require("../inputs/ProductUpdateartworkIdsInput");
const ProductUpdatecolorIdsInput_1 = require("../inputs/ProductUpdatecolorIdsInput");
const ProductUpdategalleryInput_1 = require("../inputs/ProductUpdategalleryInput");
const ProductUpdatelikedByIdsInput_1 = require("../inputs/ProductUpdatelikedByIdsInput");
const ProductUpdatesizeIdsInput_1 = require("../inputs/ProductUpdatesizeIdsInput");
const SizeUpdateManyWithoutProductsInput_1 = require("../inputs/SizeUpdateManyWithoutProductsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutLikedProductsInput_1 = require("../inputs/UserUpdateManyWithoutLikedProductsInput");
let ProductUpdateWithoutPriceInput = class ProductUpdateWithoutPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutPriceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutPriceInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutPriceInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdategalleryInput_1.ProductUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdategalleryInput_1.ProductUpdategalleryInput)
], ProductUpdateWithoutPriceInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductUpdateOneRequiredWithoutProductsInput_1.BrandProductUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductUpdateOneRequiredWithoutProductsInput_1.BrandProductUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput)
], ProductUpdateWithoutPriceInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput)
], ProductUpdateWithoutPriceInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput)
], ProductUpdateWithoutPriceInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput)
], ProductUpdateWithoutPriceInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedProductsInput_1.UserUpdateManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedProductsInput_1.UserUpdateManyWithoutLikedProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput)
], ProductUpdateWithoutPriceInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutPriceInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutPriceInput.prototype, "updatedAt", void 0);
ProductUpdateWithoutPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutPriceInput", {
        isAbstract: true
    })
], ProductUpdateWithoutPriceInput);
exports.ProductUpdateWithoutPriceInput = ProductUpdateWithoutPriceInput;