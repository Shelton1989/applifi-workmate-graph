"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Product_1 = require("../../../models/Product");
const Size_1 = require("../../../models/Size");
const SizeOrderLineItemsArgs_1 = require("./args/SizeOrderLineItemsArgs");
const SizeProductsArgs_1 = require("./args/SizeProductsArgs");
const helpers_1 = require("../../../helpers");
let SizeRelationsResolver = class SizeRelationsResolver {
    async Products(size, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findUnique({
            where: {
                id: size.id,
            },
        }).Products(args);
    }
    async OrderLineItems(size, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findUnique({
            where: {
                id: size.id,
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
    tslib_1.__metadata("design:paramtypes", [Size_1.Size, Object, SizeProductsArgs_1.SizeProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeRelationsResolver.prototype, "Products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Size_1.Size, Object, SizeOrderLineItemsArgs_1.SizeOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeRelationsResolver.prototype, "OrderLineItems", null);
SizeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], SizeRelationsResolver);
exports.SizeRelationsResolver = SizeRelationsResolver;
