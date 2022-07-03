"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutArtworkInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
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
const UserCreateNestedManyWithoutLikedProductsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedProductsInput");
const STATUS_1 = require("../../enums/STATUS");
let ProductCreateWithoutArtworkInput = class ProductCreateWithoutArtworkInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutArtworkInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => STATUS_1.STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutArtworkInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutArtworkInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutArtworkInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutArtworkInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateWithoutArtworkInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateWithoutArtworkInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateWithoutArtworkInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateWithoutArtworkInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput)
], ProductCreateWithoutArtworkInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateWithoutArtworkInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutArtworkInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutArtworkInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutArtworkInput.prototype, "updatedAt", void 0);
ProductCreateWithoutArtworkInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutArtworkInput", {
        isAbstract: true
    })
], ProductCreateWithoutArtworkInput);
exports.ProductCreateWithoutArtworkInput = ProductCreateWithoutArtworkInput;
