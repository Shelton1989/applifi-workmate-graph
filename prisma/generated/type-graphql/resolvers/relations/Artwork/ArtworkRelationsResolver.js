"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Artwork_1 = require("../../../models/Artwork");
const Inventory_1 = require("../../../models/Inventory");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Product_1 = require("../../../models/Product");
const ArtworkOrderLineItemsArgs_1 = require("./args/ArtworkOrderLineItemsArgs");
const ArtworkProductsArgs_1 = require("./args/ArtworkProductsArgs");
const helpers_1 = require("../../../helpers");
let ArtworkRelationsResolver = class ArtworkRelationsResolver {
    async Products(artwork, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findUnique({
            where: {
                id: artwork.id,
            },
        }).Products(args);
    }
    async Inventory(artwork, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findUnique({
            where: {
                id: artwork.id,
            },
        }).Inventory({});
    }
    async OrderLineItems(artwork, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).artwork.findUnique({
            where: {
                id: artwork.id,
            },
        }).OrderLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Artwork_1.Artwork, Object, ArtworkProductsArgs_1.ArtworkProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkRelationsResolver.prototype, "Products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Inventory_1.Inventory, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Artwork_1.Artwork, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkRelationsResolver.prototype, "Inventory", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Artwork_1.Artwork, Object, ArtworkOrderLineItemsArgs_1.ArtworkOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ArtworkRelationsResolver.prototype, "OrderLineItems", null);
ArtworkRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Artwork_1.Artwork)
], ArtworkRelationsResolver);
exports.ArtworkRelationsResolver = ArtworkRelationsResolver;
