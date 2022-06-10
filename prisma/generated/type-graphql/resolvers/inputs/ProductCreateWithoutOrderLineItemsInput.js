"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateNestedManyWithoutProductsInput_1 = require("../inputs/ArtworkCreateNestedManyWithoutProductsInput");
const BrandProductCreateNestedOneWithoutProductsInput_1 = require("../inputs/BrandProductCreateNestedOneWithoutProductsInput");
const ColorCreateNestedManyWithoutProductsInput_1 = require("../inputs/ColorCreateNestedManyWithoutProductsInput");
const InventoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/InventoryCreateNestedOneWithoutProductsInput");
const PriceCreateNestedOneWithoutProductsInput_1 = require("../inputs/PriceCreateNestedOneWithoutProductsInput");
const ProductCreateartworkIdsInput_1 = require("../inputs/ProductCreateartworkIdsInput");
const ProductCreatecolorIdsInput_1 = require("../inputs/ProductCreatecolorIdsInput");
const ProductCreategalleryInput_1 = require("../inputs/ProductCreategalleryInput");
const ProductCreatelikedByIdsInput_1 = require("../inputs/ProductCreatelikedByIdsInput");
const ProductCreatesizeIdsInput_1 = require("../inputs/ProductCreatesizeIdsInput");
const SizeCreateNestedManyWithoutProductsInput_1 = require("../inputs/SizeCreateNestedManyWithoutProductsInput");
const UserCreateNestedManyWithoutLikedProductsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedProductsInput");
let ProductCreateWithoutOrderLineItemsInput = class ProductCreateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderLineItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderLineItemsInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutOrderLineItemsInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutOrderLineItemsInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeCreateNestedManyWithoutProductsInput_1.SizeCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutOrderLineItemsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
ProductCreateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], ProductCreateWithoutOrderLineItemsInput);
exports.ProductCreateWithoutOrderLineItemsInput = ProductCreateWithoutOrderLineItemsInput;
