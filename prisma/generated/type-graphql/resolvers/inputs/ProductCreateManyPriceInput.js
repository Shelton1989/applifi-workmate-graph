"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateartworkIdsInput_1 = require("../inputs/ProductCreateartworkIdsInput");
const ProductCreatecolorIdsInput_1 = require("../inputs/ProductCreatecolorIdsInput");
const ProductCreategalleryInput_1 = require("../inputs/ProductCreategalleryInput");
const ProductCreatelikedByIdsInput_1 = require("../inputs/ProductCreatelikedByIdsInput");
const ProductCreatesizeIdsInput_1 = require("../inputs/ProductCreatesizeIdsInput");
let ProductCreateManyPriceInput = class ProductCreateManyPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyPriceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyPriceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyPriceInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyPriceInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreategalleryInput_1.ProductCreategalleryInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreategalleryInput_1.ProductCreategalleryInput)
], ProductCreateManyPriceInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyPriceInput.prototype, "baseProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateartworkIdsInput_1.ProductCreateartworkIdsInput)
], ProductCreateManyPriceInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatecolorIdsInput_1.ProductCreatecolorIdsInput)
], ProductCreateManyPriceInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatesizeIdsInput_1.ProductCreatesizeIdsInput)
], ProductCreateManyPriceInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreatelikedByIdsInput_1.ProductCreatelikedByIdsInput)
], ProductCreateManyPriceInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyPriceInput.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateManyPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateManyPriceInput.prototype, "updatedAt", void 0);
ProductCreateManyPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyPriceInput", {
        isAbstract: true
    })
], ProductCreateManyPriceInput);
exports.ProductCreateManyPriceInput = ProductCreateManyPriceInput;
