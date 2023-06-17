"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProductKeyArgs_1 = require("./args/AggregateProductKeyArgs");
const CreateManyProductKeyArgs_1 = require("./args/CreateManyProductKeyArgs");
const CreateProductKeyArgs_1 = require("./args/CreateProductKeyArgs");
const DeleteManyProductKeyArgs_1 = require("./args/DeleteManyProductKeyArgs");
const DeleteProductKeyArgs_1 = require("./args/DeleteProductKeyArgs");
const FindFirstProductKeyArgs_1 = require("./args/FindFirstProductKeyArgs");
const FindManyProductKeyArgs_1 = require("./args/FindManyProductKeyArgs");
const FindUniqueProductKeyArgs_1 = require("./args/FindUniqueProductKeyArgs");
const GroupByProductKeyArgs_1 = require("./args/GroupByProductKeyArgs");
const UpdateManyProductKeyArgs_1 = require("./args/UpdateManyProductKeyArgs");
const UpdateProductKeyArgs_1 = require("./args/UpdateProductKeyArgs");
const UpsertProductKeyArgs_1 = require("./args/UpsertProductKeyArgs");
const helpers_1 = require("../../../helpers");
const ProductKey_1 = require("../../../models/ProductKey");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProductKey_1 = require("../../outputs/AggregateProductKey");
const ProductKeyGroupBy_1 = require("../../outputs/ProductKeyGroupBy");
let ProductKeyCrudResolver = class ProductKeyCrudResolver {
    async productKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async productKeys(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProductKey(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProductKey(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProductKey(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProductKeyArgs_1.FindUniqueProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "productKey", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProductKeyArgs_1.FindFirstProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "findFirstProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductKey_1.ProductKey], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProductKeyArgs_1.FindManyProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "productKeys", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProductKeyArgs_1.CreateProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "createProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProductKeyArgs_1.CreateManyProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "createManyProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProductKeyArgs_1.DeleteProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "deleteProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProductKeyArgs_1.UpdateProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "updateProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProductKeyArgs_1.DeleteManyProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "deleteManyProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProductKeyArgs_1.UpdateManyProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "updateManyProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ProductKey_1.ProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProductKeyArgs_1.UpsertProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "upsertProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProductKey_1.AggregateProductKey, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProductKeyArgs_1.AggregateProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "aggregateProductKey", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProductKeyGroupBy_1.ProductKeyGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProductKeyArgs_1.GroupByProductKeyArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyCrudResolver.prototype, "groupByProductKey", null);
ProductKeyCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], ProductKeyCrudResolver);
exports.ProductKeyCrudResolver = ProductKeyCrudResolver;
