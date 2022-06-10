"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReactionArgs_1 = require("./args/AggregateReactionArgs");
const CreateManyReactionArgs_1 = require("./args/CreateManyReactionArgs");
const CreateReactionArgs_1 = require("./args/CreateReactionArgs");
const DeleteManyReactionArgs_1 = require("./args/DeleteManyReactionArgs");
const DeleteReactionArgs_1 = require("./args/DeleteReactionArgs");
const FindFirstReactionArgs_1 = require("./args/FindFirstReactionArgs");
const FindManyReactionArgs_1 = require("./args/FindManyReactionArgs");
const FindUniqueReactionArgs_1 = require("./args/FindUniqueReactionArgs");
const GroupByReactionArgs_1 = require("./args/GroupByReactionArgs");
const UpdateManyReactionArgs_1 = require("./args/UpdateManyReactionArgs");
const UpdateReactionArgs_1 = require("./args/UpdateReactionArgs");
const UpsertReactionArgs_1 = require("./args/UpsertReactionArgs");
const helpers_1 = require("../../../helpers");
const Reaction_1 = require("../../../models/Reaction");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReaction_1 = require("../../outputs/AggregateReaction");
const ReactionGroupBy_1 = require("../../outputs/ReactionGroupBy");
let ReactionCrudResolver = class ReactionCrudResolver {
    async reaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async reactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReaction(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReaction(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReactionArgs_1.FindUniqueReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "reaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReactionArgs_1.FindFirstReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "findFirstReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReactionArgs_1.FindManyReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "reactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReactionArgs_1.CreateReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "createReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReactionArgs_1.CreateManyReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "createManyReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReactionArgs_1.DeleteReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "deleteReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reaction_1.Reaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReactionArgs_1.UpdateReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "updateReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReactionArgs_1.DeleteManyReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "deleteManyReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReactionArgs_1.UpdateManyReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "updateManyReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Reaction_1.Reaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReactionArgs_1.UpsertReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "upsertReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReaction_1.AggregateReaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReactionArgs_1.AggregateReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "aggregateReaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReactionGroupBy_1.ReactionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReactionArgs_1.GroupByReactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionCrudResolver.prototype, "groupByReaction", null);
ReactionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], ReactionCrudResolver);
exports.ReactionCrudResolver = ReactionCrudResolver;
