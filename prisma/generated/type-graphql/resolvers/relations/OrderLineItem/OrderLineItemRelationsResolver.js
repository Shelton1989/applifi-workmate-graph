"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Artwork_1 = require("../../../models/Artwork");
const Color_1 = require("../../../models/Color");
const Order_1 = require("../../../models/Order");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const Price_1 = require("../../../models/Price");
const Product_1 = require("../../../models/Product");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let OrderLineItemRelationsResolver = class OrderLineItemRelationsResolver {
    async lineItemPrice(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).lineItemPrice({});
    }
    async SelectedProduct(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).SelectedProduct({});
    }
    async SelectedColor(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).SelectedColor({});
    }
    async SelectedArtwork(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).SelectedArtwork({});
    }
    async SelectedSize(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).SelectedSize({});
    }
    async Order(orderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).orderLineItem.findUnique({
            where: {
                id: orderLineItem.id,
            },
        }).Order({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "lineItemPrice", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "SelectedProduct", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Color_1.Color, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "SelectedColor", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Artwork_1.Artwork, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "SelectedArtwork", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Size_1.Size, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "SelectedSize", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Order_1.Order, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OrderLineItem_1.OrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderLineItemRelationsResolver.prototype, "Order", null);
OrderLineItemRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderLineItem_1.OrderLineItem)
], OrderLineItemRelationsResolver);
exports.OrderLineItemRelationsResolver = OrderLineItemRelationsResolver;
