"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_1 = require("../../../models/Currency");
const Price_1 = require("../../../models/Price");
const Transaction_1 = require("../../../models/Transaction");
const CurrencyPricesArgs_1 = require("./args/CurrencyPricesArgs");
const CurrencyTransactionsArgs_1 = require("./args/CurrencyTransactionsArgs");
const helpers_1 = require("../../../helpers");
let CurrencyRelationsResolver = class CurrencyRelationsResolver {
    async prices(currency, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findUnique({
            where: {
                id: currency.id,
            },
        }).prices(args);
    }
    async Transactions(currency, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findUnique({
            where: {
                id: currency.id,
            },
        }).Transactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Price_1.Price], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Currency_1.Currency, Object, CurrencyPricesArgs_1.CurrencyPricesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyRelationsResolver.prototype, "prices", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Currency_1.Currency, Object, CurrencyTransactionsArgs_1.CurrencyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyRelationsResolver.prototype, "Transactions", null);
CurrencyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_1.Currency)
], CurrencyRelationsResolver);
exports.CurrencyRelationsResolver = CurrencyRelationsResolver;
