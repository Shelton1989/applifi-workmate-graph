"use strict";
var ProductWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkListRelationFilter_1 = require("../inputs/ArtworkListRelationFilter");
const BrandProductRelationFilter_1 = require("../inputs/BrandProductRelationFilter");
const ColorListRelationFilter_1 = require("../inputs/ColorListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const InventoryRelationFilter_1 = require("../inputs/InventoryRelationFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const PriceRelationFilter_1 = require("../inputs/PriceRelationFilter");
const SizeListRelationFilter_1 = require("../inputs/SizeListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let ProductWhereInput = ProductWhereInput_1 = class ProductWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceRelationFilter_1.PriceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceRelationFilter_1.PriceRelationFilter)
], ProductWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "priceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ProductWhereInput.prototype, "availableQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "photo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProductWhereInput.prototype, "gallery", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandProductRelationFilter_1.BrandProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandProductRelationFilter_1.BrandProductRelationFilter)
], ProductWhereInput.prototype, "BaseProduct", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "baseProductId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkListRelationFilter_1.ArtworkListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkListRelationFilter_1.ArtworkListRelationFilter)
], ProductWhereInput.prototype, "Artwork", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProductWhereInput.prototype, "artworkIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColorListRelationFilter_1.ColorListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColorListRelationFilter_1.ColorListRelationFilter)
], ProductWhereInput.prototype, "Colors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProductWhereInput.prototype, "colorIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SizeListRelationFilter_1.SizeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SizeListRelationFilter_1.SizeListRelationFilter)
], ProductWhereInput.prototype, "Sizes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProductWhereInput.prototype, "sizeIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], ProductWhereInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], ProductWhereInput.prototype, "LikedBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], ProductWhereInput.prototype, "likedByIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryRelationFilter_1.InventoryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryRelationFilter_1.InventoryRelationFilter)
], ProductWhereInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "inventoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "updatedAt", void 0);
ProductWhereInput = ProductWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereInput", {
        isAbstract: true
    })
], ProductWhereInput);
exports.ProductWhereInput = ProductWhereInput;
