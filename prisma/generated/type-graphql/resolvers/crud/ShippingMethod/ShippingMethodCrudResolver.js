"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShippingMethodArgs_1 = require("./args/AggregateShippingMethodArgs");
const CreateManyShippingMethodArgs_1 = require("./args/CreateManyShippingMethodArgs");
const CreateShippingMethodArgs_1 = require("./args/CreateShippingMethodArgs");
const DeleteManyShippingMethodArgs_1 = require("./args/DeleteManyShippingMethodArgs");
const DeleteShippingMethodArgs_1 = require("./args/DeleteShippingMethodArgs");
const FindFirstShippingMethodArgs_1 = require("./args/FindFirstShippingMethodArgs");
const FindManyShippingMethodArgs_1 = require("./args/FindManyShippingMethodArgs");
const FindUniqueShippingMethodArgs_1 = require("./args/FindUniqueShippingMethodArgs");
const GroupByShippingMethodArgs_1 = require("./args/GroupByShippingMethodArgs");
const UpdateManyShippingMethodArgs_1 = require("./args/UpdateManyShippingMethodArgs");
const UpdateShippingMethodArgs_1 = require("./args/UpdateShippingMethodArgs");
const UpsertShippingMethodArgs_1 = require("./args/UpsertShippingMethodArgs");
const helpers_1 = require("../../../helpers");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShippingMethod_1 = require("../../outputs/AggregateShippingMethod");
const ShippingMethodGroupBy_1 = require("../../outputs/ShippingMethodGroupBy");
let ShippingMethodCrudResolver = class ShippingMethodCrudResolver {
    async shippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async shippingMethods(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateShippingMethod(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByShippingMethod(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShippingMethodArgs_1.FindUniqueShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "shippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShippingMethodArgs_1.FindFirstShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "findFirstShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShippingMethod_1.ShippingMethod], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShippingMethodArgs_1.FindManyShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "shippingMethods", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateShippingMethodArgs_1.CreateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "createShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShippingMethodArgs_1.CreateManyShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "createManyShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteShippingMethodArgs_1.DeleteShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "deleteShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateShippingMethodArgs_1.UpdateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "updateShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShippingMethodArgs_1.DeleteManyShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "deleteManyShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShippingMethodArgs_1.UpdateManyShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "updateManyShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertShippingMethodArgs_1.UpsertShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "upsertShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShippingMethod_1.AggregateShippingMethod, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShippingMethodArgs_1.AggregateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "aggregateShippingMethod", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShippingMethodGroupBy_1.ShippingMethodGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShippingMethodArgs_1.GroupByShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShippingMethodCrudResolver.prototype, "groupByShippingMethod", null);
ShippingMethodCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], ShippingMethodCrudResolver);
exports.ShippingMethodCrudResolver = ShippingMethodCrudResolver;
