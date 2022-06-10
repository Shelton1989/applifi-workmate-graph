"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReplyArgs_1 = require("./args/AggregateReplyArgs");
const CreateManyReplyArgs_1 = require("./args/CreateManyReplyArgs");
const CreateReplyArgs_1 = require("./args/CreateReplyArgs");
const DeleteManyReplyArgs_1 = require("./args/DeleteManyReplyArgs");
const DeleteReplyArgs_1 = require("./args/DeleteReplyArgs");
const FindFirstReplyArgs_1 = require("./args/FindFirstReplyArgs");
const FindManyReplyArgs_1 = require("./args/FindManyReplyArgs");
const FindUniqueReplyArgs_1 = require("./args/FindUniqueReplyArgs");
const GroupByReplyArgs_1 = require("./args/GroupByReplyArgs");
const UpdateManyReplyArgs_1 = require("./args/UpdateManyReplyArgs");
const UpdateReplyArgs_1 = require("./args/UpdateReplyArgs");
const UpsertReplyArgs_1 = require("./args/UpsertReplyArgs");
const helpers_1 = require("../../../helpers");
const Reply_1 = require("../../../models/Reply");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReply_1 = require("../../outputs/AggregateReply");
const ReplyGroupBy_1 = require("../../outputs/ReplyGroupBy");
let ReplyCrudResolver = class ReplyCrudResolver {
    async reply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async replies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReply(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReply(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReply(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reply.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReplyArgs_1.FindUniqueReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "reply", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReplyArgs_1.FindFirstReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "findFirstReply", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reply_1.Reply], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReplyArgs_1.FindManyReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "replies", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reply_1.Reply, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReplyArgs_1.CreateReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "createReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReplyArgs_1.CreateManyReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "createManyReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReplyArgs_1.DeleteReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "deleteReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReplyArgs_1.UpdateReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "updateReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReplyArgs_1.DeleteManyReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "deleteManyReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReplyArgs_1.UpdateManyReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "updateManyReply", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reply_1.Reply, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReplyArgs_1.UpsertReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "upsertReply", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReply_1.AggregateReply, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReplyArgs_1.AggregateReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "aggregateReply", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReplyGroupBy_1.ReplyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReplyArgs_1.GroupByReplyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReplyCrudResolver.prototype, "groupByReply", null);
ReplyCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reply_1.Reply)
], ReplyCrudResolver);
exports.ReplyCrudResolver = ReplyCrudResolver;
