"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrencyArgs_1 = require("./args/AggregateCurrencyArgs");
const Currency_1 = require("../../../models/Currency");
const AggregateCurrency_1 = require("../../outputs/AggregateCurrency");
const helpers_1 = require("../../../helpers");
let AggregateCurrencyResolver = class AggregateCurrencyResolver {
    async aggregateCurrency(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCurrency_1.AggregateCurrency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCurrencyArgs_1.AggregateCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCurrencyResolver.prototype, "aggregateCurrency", null);
AggregateCurrencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_1.Currency)
], AggregateCurrencyResolver);
exports.AggregateCurrencyResolver = AggregateCurrencyResolver;
