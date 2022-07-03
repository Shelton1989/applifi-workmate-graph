"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutLikedByInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutProductsInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutProductsInput");
const BrandProductCreateNestedOneWithoutProductsInput_1 = require("../inputs/BrandProductCreateNestedOneWithoutProductsInput");
const ColorCreateNestedManyWithoutProductsInput_1 = require("../inputs/ColorCreateNestedManyWithoutProductsInput");
const InventoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/InventoryCreateNestedOneWithoutProductsInput");
const OrderLineItemCreateNestedManyWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedProductInput");
const PriceCreateNestedOneWithoutProductsInput_1 = require("../inputs/PriceCreateNestedOneWithoutProductsInput");
const ProductCreateartworkIdsInput_1 = require("../inputs/ProductCreateartworkIdsInput");
const ProductCreatecolorIdsInput_1 = require("../inputs/ProductCreatecolorIdsInput");
const ProductCreategalleryInput_1 = require("../inputs/ProductCreategalleryInput");
const ProductCreatelikedByIdsInput_1 = require("../inputs/ProductCreatelikedByIdsInput");
const ProductCreatesizeIdsInput_1 = require("../inputs/ProductCreatesizeIdsInput");
const SizeCreateNestedManyWithoutProductsInput_1 = require("../inputs/SizeCreateNestedManyWithoutProductsInput");
const STATUS_1 = require("../../enums/STATUS");
let ProductCreateWithoutLikedByInput = class ProductCreateWithoutLikedByInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutLikedByInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutLikedByInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutLikedByInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutLikedByInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutLikedByInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateWithoutLikedByInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateWithoutLikedByInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateWithoutLikedByInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateWithoutLikedByInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput)
], ProductCreateWithoutLikedByInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateWithoutLikedByInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutLikedByInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutLikedByInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutLikedByInput.prototype, "updatedAt", void 0);
ProductCreateWithoutLikedByInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutLikedByInput", {
        isAbstract: true
    })
], ProductCreateWithoutLikedByInput);
exports.ProductCreateWithoutLikedByInput = ProductCreateWithoutLikedByInput;
