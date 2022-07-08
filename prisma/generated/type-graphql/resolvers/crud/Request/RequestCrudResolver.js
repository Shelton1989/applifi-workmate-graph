"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRequestArgs_1 = require("./args/AggregateRequestArgs");
const CreateManyRequestArgs_1 = require("./args/CreateManyRequestArgs");
const CreateRequestArgs_1 = require("./args/CreateRequestArgs");
const DeleteManyRequestArgs_1 = require("./args/DeleteManyRequestArgs");
const DeleteRequestArgs_1 = require("./args/DeleteRequestArgs");
const FindFirstRequestArgs_1 = require("./args/FindFirstRequestArgs");
const FindManyRequestArgs_1 = require("./args/FindManyRequestArgs");
const FindUniqueRequestArgs_1 = require("./args/FindUniqueRequestArgs");
const GroupByRequestArgs_1 = require("./args/GroupByRequestArgs");
const UpdateManyRequestArgs_1 = require("./args/UpdateManyRequestArgs");
const UpdateRequestArgs_1 = require("./args/UpdateRequestArgs");
const UpsertRequestArgs_1 = require("./args/UpsertRequestArgs");
const helpers_1 = require("../../../helpers");
const Request_1 = require("../../../models/Request");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRequest_1 = require("../../outputs/AggregateRequest");
const RequestGroupBy_1 = require("../../outputs/RequestGroupBy");
let RequestCrudResolver = class RequestCrudResolver {
    async request(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async requests(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertRequest(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRequest(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).request.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByRequest(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).request.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRequestArgs_1.FindUniqueRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "request", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRequestArgs_1.FindFirstRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "findFirstRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Request_1.Request], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRequestArgs_1.FindManyRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "requests", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateRequestArgs_1.CreateRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "createRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRequestArgs_1.CreateManyRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "createManyRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRequestArgs_1.DeleteRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "deleteRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRequestArgs_1.UpdateRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "updateRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRequestArgs_1.DeleteManyRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "deleteManyRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRequestArgs_1.UpdateManyRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "updateManyRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Request_1.Request, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRequestArgs_1.UpsertRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "upsertRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRequest_1.AggregateRequest, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRequestArgs_1.AggregateRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "aggregateRequest", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RequestGroupBy_1.RequestGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRequestArgs_1.GroupByRequestArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RequestCrudResolver.prototype, "groupByRequest", null);
RequestCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Request_1.Request)
], RequestCrudResolver);
exports.RequestCrudResolver = RequestCrudResolver;
