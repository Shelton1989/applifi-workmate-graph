"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCurrencyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteCurrencyArgs_1 = require("./args/DeleteCurrencyArgs");
const Currency_1 = require("../../../models/Currency");
const helpers_1 = require("../../../helpers");
let DeleteCurrencyResolver = class DeleteCurrencyResolver {
    async deleteCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteCurrencyArgs_1.DeleteCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteCurrencyResolver.prototype, "deleteCurrency", null);
DeleteCurrencyResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_1.Currency)
], DeleteCurrencyResolver);
exports.DeleteCurrencyResolver = DeleteCurrencyResolver;
