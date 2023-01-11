"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrder_1 = require("../../../models/BookingOrder");
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let BookingOrderLineItemRelationsResolver = class BookingOrderLineItemRelationsResolver {
    async LineItemPrice(bookingOrderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findUnique({
            where: {
                id: bookingOrderLineItem.id,
            },
        }).LineItemPrice({});
    }
    async Booking(bookingOrderLineItem, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bookingOrderLineItem.findUnique({
            where: {
                id: bookingOrderLineItem.id,
            },
        }).Booking({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Price_1.Price, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookingOrderLineItem_1.BookingOrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemRelationsResolver.prototype, "LineItemPrice", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => BookingOrder_1.BookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [BookingOrderLineItem_1.BookingOrderLineItem, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BookingOrderLineItemRelationsResolver.prototype, "Booking", null);
BookingOrderLineItemRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BookingOrderLineItem_1.BookingOrderLineItem)
], BookingOrderLineItemRelationsResolver);
exports.BookingOrderLineItemRelationsResolver = BookingOrderLineItemRelationsResolver;
