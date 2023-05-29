"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateQueryArgs_1 = require("./args/AggregateQueryArgs");
const CreateManyQueryArgs_1 = require("./args/CreateManyQueryArgs");
const CreateQueryArgs_1 = require("./args/CreateQueryArgs");
const DeleteManyQueryArgs_1 = require("./args/DeleteManyQueryArgs");
const DeleteQueryArgs_1 = require("./args/DeleteQueryArgs");
const FindFirstQueryArgs_1 = require("./args/FindFirstQueryArgs");
const FindManyQueryArgs_1 = require("./args/FindManyQueryArgs");
const FindUniqueQueryArgs_1 = require("./args/FindUniqueQueryArgs");
const GroupByQueryArgs_1 = require("./args/GroupByQueryArgs");
const UpdateManyQueryArgs_1 = require("./args/UpdateManyQueryArgs");
const UpdateQueryArgs_1 = require("./args/UpdateQueryArgs");
const UpsertQueryArgs_1 = require("./args/UpsertQueryArgs");
const helpers_1 = require("../../../helpers");
const Query_1 = require("../../../models/Query");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuery_1 = require("../../outputs/AggregateQuery");
const QueryGroupBy_1 = require("../../outputs/QueryGroupBy");
let QueryCrudResolver = class QueryCrudResolver {
    async query(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async queries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertQuery(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateQuery(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).query.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByQuery(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).query.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueQueryArgs_1.FindUniqueQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "query", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstQueryArgs_1.FindFirstQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "findFirstQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Query_1.Query], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyQueryArgs_1.FindManyQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "queries", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Query_1.Query, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateQueryArgs_1.CreateQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "createQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyQueryArgs_1.CreateManyQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "createManyQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteQueryArgs_1.DeleteQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "deleteQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Query_1.Query, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateQueryArgs_1.UpdateQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "updateQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyQueryArgs_1.DeleteManyQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "deleteManyQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyQueryArgs_1.UpdateManyQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "updateManyQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Query_1.Query, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertQueryArgs_1.UpsertQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "upsertQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateQuery_1.AggregateQuery, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateQueryArgs_1.AggregateQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "aggregateQuery", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [QueryGroupBy_1.QueryGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByQueryArgs_1.GroupByQueryArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], QueryCrudResolver.prototype, "groupByQuery", null);
QueryCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Query_1.Query)
], QueryCrudResolver);
exports.QueryCrudResolver = QueryCrudResolver;
