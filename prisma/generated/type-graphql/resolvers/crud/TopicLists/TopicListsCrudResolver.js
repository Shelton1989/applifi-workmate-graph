"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicListsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTopicListsArgs_1 = require("./args/AggregateTopicListsArgs");
const CreateManyTopicListsArgs_1 = require("./args/CreateManyTopicListsArgs");
const CreateTopicListsArgs_1 = require("./args/CreateTopicListsArgs");
const DeleteManyTopicListsArgs_1 = require("./args/DeleteManyTopicListsArgs");
const DeleteTopicListsArgs_1 = require("./args/DeleteTopicListsArgs");
const FindFirstTopicListsArgs_1 = require("./args/FindFirstTopicListsArgs");
const FindManyTopicListsArgs_1 = require("./args/FindManyTopicListsArgs");
const FindUniqueTopicListsArgs_1 = require("./args/FindUniqueTopicListsArgs");
const GroupByTopicListsArgs_1 = require("./args/GroupByTopicListsArgs");
const UpdateManyTopicListsArgs_1 = require("./args/UpdateManyTopicListsArgs");
const UpdateTopicListsArgs_1 = require("./args/UpdateTopicListsArgs");
const UpsertTopicListsArgs_1 = require("./args/UpsertTopicListsArgs");
const helpers_1 = require("../../../helpers");
const TopicLists_1 = require("../../../models/TopicLists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTopicLists_1 = require("../../outputs/AggregateTopicLists");
const TopicListsGroupBy_1 = require("../../outputs/TopicListsGroupBy");
let TopicListsCrudResolver = class TopicListsCrudResolver {
    async findUniqueTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTopicLists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTopicLists(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTopicLists(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topicLists.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTopicListsArgs_1.FindUniqueTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "findUniqueTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTopicListsArgs_1.FindFirstTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "findFirstTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TopicLists_1.TopicLists], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTopicListsArgs_1.FindManyTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "findManyTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TopicLists_1.TopicLists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTopicListsArgs_1.CreateTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "createTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTopicListsArgs_1.CreateManyTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "createManyTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTopicListsArgs_1.DeleteTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "deleteTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TopicLists_1.TopicLists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTopicListsArgs_1.UpdateTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "updateTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTopicListsArgs_1.DeleteManyTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "deleteManyTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTopicListsArgs_1.UpdateManyTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "updateManyTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => TopicLists_1.TopicLists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTopicListsArgs_1.UpsertTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "upsertTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTopicLists_1.AggregateTopicLists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTopicListsArgs_1.AggregateTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "aggregateTopicLists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TopicListsGroupBy_1.TopicListsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTopicListsArgs_1.GroupByTopicListsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicListsCrudResolver.prototype, "groupByTopicLists", null);
TopicListsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => TopicLists_1.TopicLists)
], TopicListsCrudResolver);
exports.TopicListsCrudResolver = TopicListsCrudResolver;
