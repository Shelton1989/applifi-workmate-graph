"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTopicArgs_1 = require("./args/AggregateTopicArgs");
const CreateManyTopicArgs_1 = require("./args/CreateManyTopicArgs");
const CreateTopicArgs_1 = require("./args/CreateTopicArgs");
const DeleteManyTopicArgs_1 = require("./args/DeleteManyTopicArgs");
const DeleteTopicArgs_1 = require("./args/DeleteTopicArgs");
const FindFirstTopicArgs_1 = require("./args/FindFirstTopicArgs");
const FindManyTopicArgs_1 = require("./args/FindManyTopicArgs");
const FindUniqueTopicArgs_1 = require("./args/FindUniqueTopicArgs");
const GroupByTopicArgs_1 = require("./args/GroupByTopicArgs");
const UpdateManyTopicArgs_1 = require("./args/UpdateManyTopicArgs");
const UpdateTopicArgs_1 = require("./args/UpdateTopicArgs");
const UpsertTopicArgs_1 = require("./args/UpsertTopicArgs");
const helpers_1 = require("../../../helpers");
const Topic_1 = require("../../../models/Topic");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTopic_1 = require("../../outputs/AggregateTopic");
const TopicGroupBy_1 = require("../../outputs/TopicGroupBy");
let TopicCrudResolver = class TopicCrudResolver {
    async topic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async topics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTopic(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTopic(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTopic(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTopicArgs_1.FindUniqueTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "topic", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTopicArgs_1.FindFirstTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "findFirstTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Topic_1.Topic], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTopicArgs_1.FindManyTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "topics", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTopicArgs_1.CreateTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "createTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTopicArgs_1.CreateManyTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "createManyTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTopicArgs_1.DeleteTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "deleteTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTopicArgs_1.UpdateTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "updateTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTopicArgs_1.DeleteManyTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "deleteManyTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTopicArgs_1.UpdateManyTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "updateManyTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Topic_1.Topic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTopicArgs_1.UpsertTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "upsertTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTopic_1.AggregateTopic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTopicArgs_1.AggregateTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "aggregateTopic", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TopicGroupBy_1.TopicGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTopicArgs_1.GroupByTopicArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicCrudResolver.prototype, "groupByTopic", null);
TopicCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], TopicCrudResolver);
exports.TopicCrudResolver = TopicCrudResolver;
