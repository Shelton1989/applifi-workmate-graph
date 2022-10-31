"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEpisodeArgs_1 = require("./args/AggregateEpisodeArgs");
const CreateEpisodeArgs_1 = require("./args/CreateEpisodeArgs");
const CreateManyEpisodeArgs_1 = require("./args/CreateManyEpisodeArgs");
const DeleteEpisodeArgs_1 = require("./args/DeleteEpisodeArgs");
const DeleteManyEpisodeArgs_1 = require("./args/DeleteManyEpisodeArgs");
const FindFirstEpisodeArgs_1 = require("./args/FindFirstEpisodeArgs");
const FindManyEpisodeArgs_1 = require("./args/FindManyEpisodeArgs");
const FindUniqueEpisodeArgs_1 = require("./args/FindUniqueEpisodeArgs");
const GroupByEpisodeArgs_1 = require("./args/GroupByEpisodeArgs");
const UpdateEpisodeArgs_1 = require("./args/UpdateEpisodeArgs");
const UpdateManyEpisodeArgs_1 = require("./args/UpdateManyEpisodeArgs");
const UpsertEpisodeArgs_1 = require("./args/UpsertEpisodeArgs");
const helpers_1 = require("../../../helpers");
const Episode_1 = require("../../../models/Episode");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEpisode_1 = require("../../outputs/AggregateEpisode");
const EpisodeGroupBy_1 = require("../../outputs/EpisodeGroupBy");
let EpisodeCrudResolver = class EpisodeCrudResolver {
    async episode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async episodes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEpisode(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEpisode(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEpisodeArgs_1.FindUniqueEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "episode", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEpisodeArgs_1.FindFirstEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "findFirstEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Episode_1.Episode], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEpisodeArgs_1.FindManyEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "episodes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEpisodeArgs_1.CreateEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "createEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEpisodeArgs_1.CreateManyEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "createManyEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEpisodeArgs_1.DeleteEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "deleteEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateEpisodeArgs_1.UpdateEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "updateEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEpisodeArgs_1.DeleteManyEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "deleteManyEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEpisodeArgs_1.UpdateManyEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "updateManyEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEpisodeArgs_1.UpsertEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "upsertEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEpisode_1.AggregateEpisode, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEpisodeArgs_1.AggregateEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "aggregateEpisode", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EpisodeGroupBy_1.EpisodeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEpisodeArgs_1.GroupByEpisodeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "groupByEpisode", null);
EpisodeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], EpisodeCrudResolver);
exports.EpisodeCrudResolver = EpisodeCrudResolver;
