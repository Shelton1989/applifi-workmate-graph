"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Artwork_1 = require("../../../models/Artwork");
const BrandProduct_1 = require("../../../models/BrandProduct");
const Color_1 = require("../../../models/Color");
const Inventory_1 = require("../../../models/Inventory");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Price_1 = require("../../../models/Price");
const Product_1 = require("../../../models/Product");
const Size_1 = require("../../../models/Size");
const User_1 = require("../../../models/User");
const ProductArtworkArgs_1 = require("./args/ProductArtworkArgs");
const ProductColorsArgs_1 = require("./args/ProductColorsArgs");
const ProductLikedByArgs_1 = require("./args/ProductLikedByArgs");
const ProductOrderLineItemsArgs_1 = require("./args/ProductOrderLineItemsArgs");
const ProductSizesArgs_1 = require("./args/ProductSizesArgs");
const helpers_1 = require("../../../helpers");
let ProductRelationsResolver = class ProductRelationsResolver {
    async price(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).price({});
    }
    async BaseProduct(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).BaseProduct({});
    }
    async Artwork(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).Artwork(args);
    }
    async Colors(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).Colors(args);
    }
    async Sizes(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).Sizes(args);
    }
    async OrderLineItems(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).OrderLineItems(args);
    }
    async LikedBy(product, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).LikedBy(args);
    }
    async Inventory(product, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            where: {
                id: product.id,
            },
        }).Inventory({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "price", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "BaseProduct", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Artwork_1.Artwork], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductArtworkArgs_1.ProductArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "Artwork", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Color_1.Color], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductColorsArgs_1.ProductColorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "Colors", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Size_1.Size], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductSizesArgs_1.ProductSizesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "Sizes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductOrderLineItemsArgs_1.ProductOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "OrderLineItems", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object, ProductLikedByArgs_1.ProductLikedByArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "LikedBy", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Inventory_1.Inventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Product_1.Product, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRelationsResolver.prototype, "Inventory", null);
ProductRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], ProductRelationsResolver);
exports.ProductRelationsResolver = ProductRelationsResolver;
