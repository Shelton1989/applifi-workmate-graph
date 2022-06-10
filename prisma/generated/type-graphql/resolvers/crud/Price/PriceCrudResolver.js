"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePriceArgs_1 = require("./args/AggregatePriceArgs");
const CreateManyPriceArgs_1 = require("./args/CreateManyPriceArgs");
const CreatePriceArgs_1 = require("./args/CreatePriceArgs");
const DeleteManyPriceArgs_1 = require("./args/DeleteManyPriceArgs");
const DeletePriceArgs_1 = require("./args/DeletePriceArgs");
const FindFirstPriceArgs_1 = require("./args/FindFirstPriceArgs");
const FindManyPriceArgs_1 = require("./args/FindManyPriceArgs");
const FindUniquePriceArgs_1 = require("./args/FindUniquePriceArgs");
const GroupByPriceArgs_1 = require("./args/GroupByPriceArgs");
const UpdateManyPriceArgs_1 = require("./args/UpdateManyPriceArgs");
const UpdatePriceArgs_1 = require("./args/UpdatePriceArgs");
const UpsertPriceArgs_1 = require("./args/UpsertPriceArgs");
const helpers_1 = require("../../../helpers");
const Price_1 = require("../../../models/Price");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePrice_1 = require("../../outputs/AggregatePrice");
const PriceGroupBy_1 = require("../../outputs/PriceGroupBy");
let PriceCrudResolver = class PriceCrudResolver {
    async price(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async prices(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePrice(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).price.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPrice(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriceArgs_1.FindUniquePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "price", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPriceArgs_1.FindFirstPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "findFirstPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Price_1.Price], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPriceArgs_1.FindManyPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "prices", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePriceArgs_1.CreatePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "createPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPriceArgs_1.CreateManyPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "createManyPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePriceArgs_1.DeletePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "deletePrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePriceArgs_1.UpdatePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "updatePrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPriceArgs_1.DeleteManyPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "deleteManyPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPriceArgs_1.UpdateManyPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "updateManyPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPriceArgs_1.UpsertPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "upsertPrice", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePrice_1.AggregatePrice, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePriceArgs_1.AggregatePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "aggregatePrice", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PriceGroupBy_1.PriceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPriceArgs_1.GroupByPriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PriceCrudResolver.prototype, "groupByPrice", null);
PriceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], PriceCrudResolver);
exports.PriceCrudResolver = PriceCrudResolver;
