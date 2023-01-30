"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItem_1 = require("../../../models/BookingOrderLineItem");
const Currency_1 = require("../../../models/Currency");
const Experience_1 = require("../../../models/Experience");
const Price_1 = require("../../../models/Price");
const PriceBookingLineItemsArgs_1 = require("./args/PriceBookingLineItemsArgs");
const helpers_1 = require("../../../helpers");
let PriceRelationsResolver = class PriceRelationsResolver {
    async currency(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).currency({});
    }
    async Experience(price, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).Experience({});
    }
    async BookingLineItems(price, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            where: {
                id: price.id,
            },
        }).BookingLineItems(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "currency", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Experience_1.Experience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "Experience", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [BookingOrderLineItem_1.BookingOrderLineItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Price_1.Price, Object, PriceBookingLineItemsArgs_1.PriceBookingLineItemsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceRelationsResolver.prototype, "BookingLineItems", null);
PriceRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], PriceRelationsResolver);
exports.PriceRelationsResolver = PriceRelationsResolver;
