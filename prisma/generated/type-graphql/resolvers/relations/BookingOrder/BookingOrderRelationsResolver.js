"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrder_1 = require("../../../models/BookingOrder");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const Tenant_1 = require("../../../models/Tenant");
const User_1 = require("../../../models/User");
const BookingOrderItemsArgs_1 = require("./args/BookingOrderItemsArgs");
const helpers_1 = require("../../../helpers");
let BookingOrderRelationsResolver = class BookingOrderRelationsResolver {
    async Buyer(bookingOrder, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findUnique({
            where: {
                id: bookingOrder.id,
            },
        }).Buyer({});
    }
    async Tenant(bookingOrder, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findUnique({
            where: {
                id: bookingOrder.id,
            },
        }).Tenant({});
    }
    async Items(bookingOrder, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrder.findUnique({
            where: {
                id: bookingOrder.id,
            },
        }).Items(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookingOrder_1.BookingOrder, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderRelationsResolver.prototype, "Buyer", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Tenant_1.Tenant, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookingOrder_1.BookingOrder, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderRelationsResolver.prototype, "Tenant", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BookingOrderLineItem_1.BookingOrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookingOrder_1.BookingOrder, Object, BookingOrderItemsArgs_1.BookingOrderItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderRelationsResolver.prototype, "Items", null);
BookingOrderRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrder_1.BookingOrder)
], BookingOrderRelationsResolver);
exports.BookingOrderRelationsResolver = BookingOrderRelationsResolver;
