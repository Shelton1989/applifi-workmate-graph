"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSeasonSeriesArgs_1 = require("./args/AggregateSeasonSeriesArgs");
const CreateManySeasonSeriesArgs_1 = require("./args/CreateManySeasonSeriesArgs");
const CreateSeasonSeriesArgs_1 = require("./args/CreateSeasonSeriesArgs");
const DeleteManySeasonSeriesArgs_1 = require("./args/DeleteManySeasonSeriesArgs");
const DeleteSeasonSeriesArgs_1 = require("./args/DeleteSeasonSeriesArgs");
const FindFirstSeasonSeriesArgs_1 = require("./args/FindFirstSeasonSeriesArgs");
const FindManySeasonSeriesArgs_1 = require("./args/FindManySeasonSeriesArgs");
const FindUniqueSeasonSeriesArgs_1 = require("./args/FindUniqueSeasonSeriesArgs");
const GroupBySeasonSeriesArgs_1 = require("./args/GroupBySeasonSeriesArgs");
const UpdateManySeasonSeriesArgs_1 = require("./args/UpdateManySeasonSeriesArgs");
const UpdateSeasonSeriesArgs_1 = require("./args/UpdateSeasonSeriesArgs");
const UpsertSeasonSeriesArgs_1 = require("./args/UpsertSeasonSeriesArgs");
const helpers_1 = require("../../../helpers");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSeasonSeries_1 = require("../../outputs/AggregateSeasonSeries");
const SeasonSeriesGroupBy_1 = require("../../outputs/SeasonSeriesGroupBy");
let SeasonSeriesCrudResolver = class SeasonSeriesCrudResolver {
    async findUniqueSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManySeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSeasonSeries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSeasonSeries(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySeasonSeries(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSeasonSeriesArgs_1.FindUniqueSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "findUniqueSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSeasonSeriesArgs_1.FindFirstSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "findFirstSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SeasonSeries_1.SeasonSeries], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySeasonSeriesArgs_1.FindManySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "findManySeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSeasonSeriesArgs_1.CreateSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "createSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySeasonSeriesArgs_1.CreateManySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "createManySeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSeasonSeriesArgs_1.DeleteSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "deleteSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSeasonSeriesArgs_1.UpdateSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "updateSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySeasonSeriesArgs_1.DeleteManySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "deleteManySeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySeasonSeriesArgs_1.UpdateManySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "updateManySeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => SeasonSeries_1.SeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSeasonSeriesArgs_1.UpsertSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "upsertSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSeasonSeries_1.AggregateSeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSeasonSeriesArgs_1.AggregateSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "aggregateSeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SeasonSeriesGroupBy_1.SeasonSeriesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySeasonSeriesArgs_1.GroupBySeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesCrudResolver.prototype, "groupBySeasonSeries", null);
SeasonSeriesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], SeasonSeriesCrudResolver);
exports.SeasonSeriesCrudResolver = SeasonSeriesCrudResolver;
