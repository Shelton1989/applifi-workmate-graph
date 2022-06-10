"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Artwork_1 = require("../../../models/Artwork");
const Inventory_1 = require("../../../models/Inventory");
const Product_1 = require("../../../models/Product");
const User_1 = require("../../../models/User");
const InventoryArtworkArgs_1 = require("./args/InventoryArtworkArgs");
const InventoryProductsArgs_1 = require("./args/InventoryProductsArgs");
const helpers_1 = require("../../../helpers");
let InventoryRelationsResolver = class InventoryRelationsResolver {
    async Products(inventory, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findUnique({
            where: {
                id: inventory.id,
            },
        }).Products(args);
    }
    async Artwork(inventory, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findUnique({
            where: {
                id: inventory.id,
            },
        }).Artwork(args);
    }
    async User(inventory, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).inventory.findUnique({
            where: {
                id: inventory.id,
            },
        }).User({});
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
    tslib_1.__metadata("design:paramtypes", [Inventory_1.Inventory, Object, InventoryProductsArgs_1.InventoryProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryRelationsResolver.prototype, "Products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Artwork_1.Artwork], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Inventory_1.Inventory, Object, InventoryArtworkArgs_1.InventoryArtworkArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryRelationsResolver.prototype, "Artwork", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Inventory_1.Inventory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], InventoryRelationsResolver.prototype, "User", null);
InventoryRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Inventory_1.Inventory)
], InventoryRelationsResolver);
exports.InventoryRelationsResolver = InventoryRelationsResolver;
