"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAggregateRatingArgs_1 = require("./args/AggregateAggregateRatingArgs");
const CreateAggregateRatingArgs_1 = require("./args/CreateAggregateRatingArgs");
const CreateManyAggregateRatingArgs_1 = require("./args/CreateManyAggregateRatingArgs");
const DeleteAggregateRatingArgs_1 = require("./args/DeleteAggregateRatingArgs");
const DeleteManyAggregateRatingArgs_1 = require("./args/DeleteManyAggregateRatingArgs");
const FindFirstAggregateRatingArgs_1 = require("./args/FindFirstAggregateRatingArgs");
const FindManyAggregateRatingArgs_1 = require("./args/FindManyAggregateRatingArgs");
const FindUniqueAggregateRatingArgs_1 = require("./args/FindUniqueAggregateRatingArgs");
const GroupByAggregateRatingArgs_1 = require("./args/GroupByAggregateRatingArgs");
const UpdateAggregateRatingArgs_1 = require("./args/UpdateAggregateRatingArgs");
const UpdateManyAggregateRatingArgs_1 = require("./args/UpdateManyAggregateRatingArgs");
const UpsertAggregateRatingArgs_1 = require("./args/UpsertAggregateRatingArgs");
const helpers_1 = require("../../../helpers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAggregateRating_1 = require("../../outputs/AggregateAggregateRating");
const Aggregateundefined_1 = require("../../outputs/Aggregateundefined");
let AggregateRatingCrudResolver = class AggregateRatingCrudResolver {
    async aggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRatings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAggregateRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAggregateRating(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAggregateRating(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAggregateRatingArgs_1.FindUniqueAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "aggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAggregateRatingArgs_1.FindFirstAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "findFirstAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Aggregateundefined_1.Aggregateundefined], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAggregateRatingArgs_1.FindManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "aggregateRatings", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAggregateRatingArgs_1.CreateAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "createAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAggregateRatingArgs_1.CreateManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "createManyAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAggregateRatingArgs_1.DeleteAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "deleteAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAggregateRatingArgs_1.UpdateAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "updateAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAggregateRatingArgs_1.DeleteManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "deleteManyAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAggregateRatingArgs_1.UpdateManyAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "updateManyAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Aggregateundefined_1.Aggregateundefined, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAggregateRatingArgs_1.UpsertAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "upsertAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAggregateRating_1.AggregateAggregateRating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAggregateRatingArgs_1.AggregateAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "aggregateAggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Aggregateundefined_1.Aggregateundefined], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAggregateRatingArgs_1.GroupByAggregateRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingCrudResolver.prototype, "groupByAggregateRating", null);
AggregateRatingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating)
], AggregateRatingCrudResolver);
exports.AggregateRatingCrudResolver = AggregateRatingCrudResolver;
