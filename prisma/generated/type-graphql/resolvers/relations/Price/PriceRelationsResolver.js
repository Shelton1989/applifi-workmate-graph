"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_1 = require("../../../models/Currency");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Price_1 = require("../../../models/Price");
const Product_1 = require("../../../models/Product");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const PriceOrderLineItemsArgs_1 = require("./args/PriceOrderLineItemsArgs");
const PriceProductsArgs_1 = require("./args/PriceProductsArgs");
const PriceShippingMethodsArgs_1 = require("./args/PriceShippingMethodsArgs");
const helpers_1 = require("../../../helpers");
let PriceRelationsResolver = class PriceRelationsResolver {
    async currency(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).currency({});
    }
    async ShippingMethods(price, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).ShippingMethods(args);
    }
    async Products(price, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).Products(args);
    }
    async OrderLineItems(price, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).OrderLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "currency", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [ShippingMethod_1.ShippingMethod], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object, PriceShippingMethodsArgs_1.PriceShippingMethodsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "ShippingMethods", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object, PriceProductsArgs_1.PriceProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "Products", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object, PriceOrderLineItemsArgs_1.PriceOrderLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "OrderLineItems", null);
PriceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], PriceRelationsResolver);
exports.PriceRelationsResolver = PriceRelationsResolver;
