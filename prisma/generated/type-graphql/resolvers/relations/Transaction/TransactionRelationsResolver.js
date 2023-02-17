"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrder_1 = require("../../../models/BookingOrder");
const Currency_1 = require("../../../models/Currency");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let TransactionRelationsResolver = class TransactionRelationsResolver {
    async BookingOrder(transaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUnique({
            where: {
                id: transaction.id,
            },
        }).BookingOrder({});
    }
    async currency(transaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUnique({
            where: {
                id: transaction.id,
            },
        }).currency({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => BookingOrder_1.BookingOrder, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "BookingOrder", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "currency", null);
TransactionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], TransactionRelationsResolver);
exports.TransactionRelationsResolver = TransactionRelationsResolver;
