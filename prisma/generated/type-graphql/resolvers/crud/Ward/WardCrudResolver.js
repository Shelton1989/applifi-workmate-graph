"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWardArgs_1 = require("./args/AggregateWardArgs");
const CreateManyWardArgs_1 = require("./args/CreateManyWardArgs");
const CreateWardArgs_1 = require("./args/CreateWardArgs");
const DeleteManyWardArgs_1 = require("./args/DeleteManyWardArgs");
const DeleteWardArgs_1 = require("./args/DeleteWardArgs");
const FindFirstWardArgs_1 = require("./args/FindFirstWardArgs");
const FindManyWardArgs_1 = require("./args/FindManyWardArgs");
const FindUniqueWardArgs_1 = require("./args/FindUniqueWardArgs");
const GroupByWardArgs_1 = require("./args/GroupByWardArgs");
const UpdateManyWardArgs_1 = require("./args/UpdateManyWardArgs");
const UpdateWardArgs_1 = require("./args/UpdateWardArgs");
const UpsertWardArgs_1 = require("./args/UpsertWardArgs");
const helpers_1 = require("../../../helpers");
const Ward_1 = require("../../../models/Ward");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWard_1 = require("../../outputs/AggregateWard");
const WardGroupBy_1 = require("../../outputs/WardGroupBy");
let WardCrudResolver = class WardCrudResolver {
    async ward(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async wards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertWard(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateWard(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByWard(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ward.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWardArgs_1.FindUniqueWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "ward", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWardArgs_1.FindFirstWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "findFirstWard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Ward_1.Ward], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWardArgs_1.FindManyWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "wards", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWardArgs_1.CreateWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "createWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWardArgs_1.CreateManyWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "createManyWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWardArgs_1.DeleteWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "deleteWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWardArgs_1.UpdateWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "updateWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWardArgs_1.DeleteManyWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "deleteManyWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWardArgs_1.UpdateManyWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "updateManyWard", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ward_1.Ward, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertWardArgs_1.UpsertWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "upsertWard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWard_1.AggregateWard, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWardArgs_1.AggregateWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "aggregateWard", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WardGroupBy_1.WardGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWardArgs_1.GroupByWardArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WardCrudResolver.prototype, "groupByWard", null);
WardCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ward_1.Ward)
], WardCrudResolver);
exports.WardCrudResolver = WardCrudResolver;
