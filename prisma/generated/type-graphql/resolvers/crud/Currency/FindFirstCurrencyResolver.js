"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCurrencyArgs_1 = require("./args/FindFirstCurrencyArgs");
const Currency_1 = require("../../../models/Currency");
const helpers_1 = require("../../../helpers");
let FindFirstCurrencyResolver = class FindFirstCurrencyResolver {
    async findFirstCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCurrencyArgs_1.FindFirstCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCurrencyResolver.prototype, "findFirstCurrency", null);
FindFirstCurrencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_1.Currency)
], FindFirstCurrencyResolver);
exports.FindFirstCurrencyResolver = FindFirstCurrencyResolver;
