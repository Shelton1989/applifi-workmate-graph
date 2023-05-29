"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMQueryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLLMQueryArgs_1 = require("./args/AggregateLLMQueryArgs");
const CreateLLMQueryArgs_1 = require("./args/CreateLLMQueryArgs");
const CreateManyLLMQueryArgs_1 = require("./args/CreateManyLLMQueryArgs");
const DeleteLLMQueryArgs_1 = require("./args/DeleteLLMQueryArgs");
const DeleteManyLLMQueryArgs_1 = require("./args/DeleteManyLLMQueryArgs");
const FindFirstLLMQueryArgs_1 = require("./args/FindFirstLLMQueryArgs");
const FindManyLLMQueryArgs_1 = require("./args/FindManyLLMQueryArgs");
const FindUniqueLLMQueryArgs_1 = require("./args/FindUniqueLLMQueryArgs");
const GroupByLLMQueryArgs_1 = require("./args/GroupByLLMQueryArgs");
const UpdateLLMQueryArgs_1 = require("./args/UpdateLLMQueryArgs");
const UpdateManyLLMQueryArgs_1 = require("./args/UpdateManyLLMQueryArgs");
const UpsertLLMQueryArgs_1 = require("./args/UpsertLLMQueryArgs");
const helpers_1 = require("../../../helpers");
const LLMQuery_1 = require("../../../models/LLMQuery");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLLMQuery_1 = require("../../outputs/AggregateLLMQuery");
const LLMQueryGroupBy_1 = require("../../outputs/LLMQueryGroupBy");
let LLMQueryCrudResolver = class LLMQueryCrudResolver {
    async lLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async lLMQueries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLLMQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLLMQuery(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLLMQuery(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).lLMQuery.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLLMQueryArgs_1.FindUniqueLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "lLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLLMQueryArgs_1.FindFirstLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "findFirstLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LLMQuery_1.LLMQuery], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLLMQueryArgs_1.FindManyLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "lLMQueries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LLMQuery_1.LLMQuery, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateLLMQueryArgs_1.CreateLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "createLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLLMQueryArgs_1.CreateManyLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "createManyLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLLMQueryArgs_1.DeleteLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "deleteLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LLMQuery_1.LLMQuery, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateLLMQueryArgs_1.UpdateLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "updateLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLLMQueryArgs_1.DeleteManyLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "deleteManyLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLLMQueryArgs_1.UpdateManyLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "updateManyLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => LLMQuery_1.LLMQuery, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertLLMQueryArgs_1.UpsertLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "upsertLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLLMQuery_1.AggregateLLMQuery, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLLMQueryArgs_1.AggregateLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "aggregateLLMQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LLMQueryGroupBy_1.LLMQueryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLLMQueryArgs_1.GroupByLLMQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LLMQueryCrudResolver.prototype, "groupByLLMQuery", null);
LLMQueryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => LLMQuery_1.LLMQuery)
], LLMQueryCrudResolver);
exports.LLMQueryCrudResolver = LLMQueryCrudResolver;
