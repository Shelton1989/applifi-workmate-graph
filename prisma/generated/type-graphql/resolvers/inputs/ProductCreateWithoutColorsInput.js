"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutColorsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutProductsInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutProductsInput");
const BrandProductCreateNestedOneWithoutProductsInput_1 = require("../inputs/BrandProductCreateNestedOneWithoutProductsInput");
const InventoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/InventoryCreateNestedOneWithoutProductsInput");
const OrderLineItemCreateNestedManyWithoutSelectedProductInput_1 = require("../inputs/OrderLineItemCreateNestedManyWithoutSelectedProductInput");
const PriceCreateNestedOneWithoutProductsInput_1 = require("../inputs/PriceCreateNestedOneWithoutProductsInput");
const ProductCreateartworkIdsInput_1 = require("../inputs/ProductCreateartworkIdsInput");
const ProductCreatecolorIdsInput_1 = require("../inputs/ProductCreatecolorIdsInput");
const ProductCreategalleryInput_1 = require("../inputs/ProductCreategalleryInput");
const ProductCreatelikedByIdsInput_1 = require("../inputs/ProductCreatelikedByIdsInput");
const ProductCreatesizeIdsInput_1 = require("../inputs/ProductCreatesizeIdsInput");
const SizeCreateNestedManyWithoutProductsInput_1 = require("../inputs/SizeCreateNestedManyWithoutProductsInput");
const UserCreateNestedManyWithoutLikedProductsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedProductsInput");
let ProductCreateWithoutColorsInput = class ProductCreateWithoutColorsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutColorsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutColorsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutColorsInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutColorsInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutColorsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateWithoutColorsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutColorsInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutColorsInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateWithoutColorsInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateWithoutColorsInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutColorsInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateWithoutColorsInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput)
], ProductCreateWithoutColorsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput)
], ProductCreateWithoutColorsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateWithoutColorsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutColorsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutColorsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutColorsInput.prototype, "updatedAt", void 0);
ProductCreateWithoutColorsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutColorsInput", {
        isAbstract: true
    })
], ProductCreateWithoutColorsInput);
exports.ProductCreateWithoutColorsInput = ProductCreateWithoutColorsInput;
