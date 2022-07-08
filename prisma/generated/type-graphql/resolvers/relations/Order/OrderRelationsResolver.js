"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Order_1 = require("../../../models/Order");
const OrderLineItem_1 = require("../../../models/OrderLineItem");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const User_1 = require("../../../models/User");
const OrderItemsArgs_1 = require("./args/OrderItemsArgs");
const helpers_1 = require("../../../helpers");
let OrderRelationsResolver = class OrderRelationsResolver {
    async SelectedShippingAddress(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).SelectedShippingAddress({});
    }
    async SelectedShippingMethod(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).SelectedShippingMethod({});
    }
    async Buyer(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).Buyer({});
    }
    async Seller(order, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).Seller({});
    }
    async Items(order, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findUnique({
            where: {
                id: order.id,
            },
        }).Items(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Address_1.Address, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "SelectedShippingAddress", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "SelectedShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "Buyer", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "Seller", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [OrderLineItem_1.OrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Order_1.Order, Object, OrderItemsArgs_1.OrderItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderRelationsResolver.prototype, "Items", null);
OrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], OrderRelationsResolver);
exports.OrderRelationsResolver = OrderRelationsResolver;
