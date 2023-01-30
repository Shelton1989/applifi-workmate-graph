"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateFeaturesArgs_1 = require("./args/AggregateFeaturesArgs");
const CreateFeaturesArgs_1 = require("./args/CreateFeaturesArgs");
const CreateManyFeaturesArgs_1 = require("./args/CreateManyFeaturesArgs");
const DeleteFeaturesArgs_1 = require("./args/DeleteFeaturesArgs");
const DeleteManyFeaturesArgs_1 = require("./args/DeleteManyFeaturesArgs");
const FindFirstFeaturesArgs_1 = require("./args/FindFirstFeaturesArgs");
const FindManyFeaturesArgs_1 = require("./args/FindManyFeaturesArgs");
const FindUniqueFeaturesArgs_1 = require("./args/FindUniqueFeaturesArgs");
const GroupByFeaturesArgs_1 = require("./args/GroupByFeaturesArgs");
const UpdateFeaturesArgs_1 = require("./args/UpdateFeaturesArgs");
const UpdateManyFeaturesArgs_1 = require("./args/UpdateManyFeaturesArgs");
const UpsertFeaturesArgs_1 = require("./args/UpsertFeaturesArgs");
const helpers_1 = require("../../../helpers");
const Features_1 = require("../../../models/Features");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFeatures_1 = require("../../outputs/AggregateFeatures");
const FeaturesGroupBy_1 = require("../../outputs/FeaturesGroupBy");
let FeaturesCrudResolver = class FeaturesCrudResolver {
    async findUniqueFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertFeatures(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateFeatures(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).features.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByFeatures(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).features.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFeaturesArgs_1.FindUniqueFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "findUniqueFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFeaturesArgs_1.FindFirstFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "findFirstFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Features_1.Features], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFeaturesArgs_1.FindManyFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "findManyFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateFeaturesArgs_1.CreateFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "createFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFeaturesArgs_1.CreateManyFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "createManyFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteFeaturesArgs_1.DeleteFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "deleteFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateFeaturesArgs_1.UpdateFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "updateFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFeaturesArgs_1.DeleteManyFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "deleteManyFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFeaturesArgs_1.UpdateManyFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "updateManyFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Features_1.Features, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertFeaturesArgs_1.UpsertFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "upsertFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFeatures_1.AggregateFeatures, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFeaturesArgs_1.AggregateFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "aggregateFeatures", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FeaturesGroupBy_1.FeaturesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFeaturesArgs_1.GroupByFeaturesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FeaturesCrudResolver.prototype, "groupByFeatures", null);
FeaturesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Features_1.Features)
], FeaturesCrudResolver);
exports.FeaturesCrudResolver = FeaturesCrudResolver;
