"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutSizesInput = void 0;
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
const UserCreateNestedManyWithoutLikedProductsInput_1 = require("../inputs/UserCreateNestedManyWithoutLikedProductsInput");
let ProductCreateWithoutSizesInput = class ProductCreateWithoutSizesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutSizesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutSizesInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutProductsInput_1.PriceCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutSizesInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutSizesInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutSizesInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateWithoutSizesInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BrandProductCreateNestedOneWithoutProductsInput_1.BrandProductCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutSizesInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkCreateNestedManyWithoutProductsInput_1.ArtworkCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutSizesInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateWithoutSizesInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorCreateNestedManyWithoutProductsInput_1.ColorCreateNestedManyWithoutProductsInput)
], ProductCreateWithoutSizesInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateWithoutSizesInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateWithoutSizesInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemCreateNestedManyWithoutSelectedProductInput_1.OrderLineItemCreateNestedManyWithoutSelectedProductInput)
], ProductCreateWithoutSizesInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutLikedProductsInput_1.UserCreateNestedManyWithoutLikedProductsInput)
], ProductCreateWithoutSizesInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateWithoutSizesInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutProductsInput_1.InventoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutSizesInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutSizesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutSizesInput.prototype, "updatedAt", void 0);
ProductCreateWithoutSizesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutSizesInput", {
        isAbstract: true
    })
], ProductCreateWithoutSizesInput);
exports.ProductCreateWithoutSizesInput = ProductCreateWithoutSizesInput;
