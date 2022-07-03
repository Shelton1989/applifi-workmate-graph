"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutBaseProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkUpdateManyWithoutProductsInput_1 = require("../inputs/ArtworkUpdateManyWithoutProductsInput");
const ColorUpdateManyWithoutProductsInput_1 = require("../inputs/ColorUpdateManyWithoutProductsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumSTATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumSTATUSFieldUpdateOperationsInput");
const InventoryUpdateOneRequiredWithoutProductsInput_1 = require("../inputs/InventoryUpdateOneRequiredWithoutProductsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedProductInput");
const PriceUpdateOneWithoutProductsInput_1 = require("../inputs/PriceUpdateOneWithoutProductsInput");
const ProductUpdateartworkIdsInput_1 = require("../inputs/ProductUpdateartworkIdsInput");
const ProductUpdatecolorIdsInput_1 = require("../inputs/ProductUpdatecolorIdsInput");
const ProductUpdategalleryInput_1 = require("../inputs/ProductUpdategalleryInput");
const ProductUpdatelikedByIdsInput_1 = require("../inputs/ProductUpdatelikedByIdsInput");
const ProductUpdatesizeIdsInput_1 = require("../inputs/ProductUpdatesizeIdsInput");
const SizeUpdateManyWithoutProductsInput_1 = require("../inputs/SizeUpdateManyWithoutProductsInput");
const UserUpdateManyWithoutLikedProductsInput_1 = require("../inputs/UserUpdateManyWithoutLikedProductsInput");
let ProductUpdateWithoutBaseProductInput = class ProductUpdateWithoutBaseProductInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumSTATUSFieldUpdateOperationsInput_1.EnumSTATUSFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneWithoutProductsInput_1.PriceUpdateOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneWithoutProductsInput_1.PriceUpdateOneWithoutProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdategalleryInput_1.ProductUpdategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdategalleryInput_1.ProductUpdategalleryInput)
], ProductUpdateWithoutBaseProductInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkUpdateManyWithoutProductsInput_1.ArtworkUpdateManyWithoutProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateartworkIdsInput_1.ProductUpdateartworkIdsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorUpdateManyWithoutProductsInput_1.ColorUpdateManyWithoutProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatecolorIdsInput_1.ProductUpdatecolorIdsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeUpdateManyWithoutProductsInput_1.SizeUpdateManyWithoutProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatesizeIdsInput_1.ProductUpdatesizeIdsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedProductInput_1.OrderLineItemUpdateManyWithoutSelectedProductInput)
], ProductUpdateWithoutBaseProductInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutLikedProductsInput_1.UserUpdateManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutLikedProductsInput_1.UserUpdateManyWithoutLikedProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdatelikedByIdsInput_1.ProductUpdatelikedByIdsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneRequiredWithoutProductsInput_1.InventoryUpdateOneRequiredWithoutProductsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutBaseProductInput.prototype, "updatedAt", void 0);
ProductUpdateWithoutBaseProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutBaseProductInput", {
        isAbstract: true
    })
], ProductUpdateWithoutBaseProductInput);
exports.ProductUpdateWithoutBaseProductInput = ProductUpdateWithoutBaseProductInput;
