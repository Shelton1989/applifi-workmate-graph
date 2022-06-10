"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCurrencyArgs_1 = require("./args/AggregateCurrencyArgs");
const CreateCurrencyArgs_1 = require("./args/CreateCurrencyArgs");
const CreateManyCurrencyArgs_1 = require("./args/CreateManyCurrencyArgs");
const DeleteCurrencyArgs_1 = require("./args/DeleteCurrencyArgs");
const DeleteManyCurrencyArgs_1 = require("./args/DeleteManyCurrencyArgs");
const FindFirstCurrencyArgs_1 = require("./args/FindFirstCurrencyArgs");
const FindManyCurrencyArgs_1 = require("./args/FindManyCurrencyArgs");
const FindUniqueCurrencyArgs_1 = require("./args/FindUniqueCurrencyArgs");
const GroupByCurrencyArgs_1 = require("./args/GroupByCurrencyArgs");
const UpdateCurrencyArgs_1 = require("./args/UpdateCurrencyArgs");
const UpdateManyCurrencyArgs_1 = require("./args/UpdateManyCurrencyArgs");
const UpsertCurrencyArgs_1 = require("./args/UpsertCurrencyArgs");
const helpers_1 = require("../../../helpers");
const Currency_1 = require("../../../models/Currency");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCurrency_1 = require("../../outputs/AggregateCurrency");
const CurrencyGroupBy_1 = require("../../outputs/CurrencyGroupBy");
let CurrencyCrudResolver = class CurrencyCrudResolver {
    async currency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async currencies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCurrency(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCurrency(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCurrency(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).currency.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCurrencyArgs_1.FindUniqueCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "currency", null);
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
], CurrencyCrudResolver.prototype, "findFirstCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Currency_1.Currency], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCurrencyArgs_1.FindManyCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "currencies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateCurrencyArgs_1.CreateCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "createCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCurrencyArgs_1.CreateManyCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "createManyCurrency", null);
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
], CurrencyCrudResolver.prototype, "deleteCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateCurrencyArgs_1.UpdateCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "updateCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCurrencyArgs_1.DeleteManyCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "deleteManyCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCurrencyArgs_1.UpdateManyCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "updateManyCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertCurrencyArgs_1.UpsertCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "upsertCurrency", null);
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
], CurrencyCrudResolver.prototype, "aggregateCurrency", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CurrencyGroupBy_1.CurrencyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCurrencyArgs_1.GroupByCurrencyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyCrudResolver.prototype, "groupByCurrency", null);
CurrencyCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Currency_1.Currency)
], CurrencyCrudResolver);
exports.CurrencyCrudResolver = CurrencyCrudResolver;
