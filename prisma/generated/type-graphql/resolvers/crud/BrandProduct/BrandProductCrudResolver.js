"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandProductCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBrandProductArgs_1 = require("./args/AggregateBrandProductArgs");
const CreateBrandProductArgs_1 = require("./args/CreateBrandProductArgs");
const CreateManyBrandProductArgs_1 = require("./args/CreateManyBrandProductArgs");
const DeleteBrandProductArgs_1 = require("./args/DeleteBrandProductArgs");
const DeleteManyBrandProductArgs_1 = require("./args/DeleteManyBrandProductArgs");
const FindFirstBrandProductArgs_1 = require("./args/FindFirstBrandProductArgs");
const FindManyBrandProductArgs_1 = require("./args/FindManyBrandProductArgs");
const FindUniqueBrandProductArgs_1 = require("./args/FindUniqueBrandProductArgs");
const GroupByBrandProductArgs_1 = require("./args/GroupByBrandProductArgs");
const UpdateBrandProductArgs_1 = require("./args/UpdateBrandProductArgs");
const UpdateManyBrandProductArgs_1 = require("./args/UpdateManyBrandProductArgs");
const UpsertBrandProductArgs_1 = require("./args/UpsertBrandProductArgs");
const helpers_1 = require("../../../helpers");
const BrandProduct_1 = require("../../../models/BrandProduct");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBrandProduct_1 = require("../../outputs/AggregateBrandProduct");
const BrandProductGroupBy_1 = require("../../outputs/BrandProductGroupBy");
let BrandProductCrudResolver = class BrandProductCrudResolver {
    async brandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async brandProducts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBrandProduct(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBrandProduct(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBrandProduct(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brandProduct.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBrandProductArgs_1.FindUniqueBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "brandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandProductArgs_1.FindFirstBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "findFirstBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandProduct_1.BrandProduct], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBrandProductArgs_1.FindManyBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "brandProducts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBrandProductArgs_1.CreateBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "createBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBrandProductArgs_1.CreateManyBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "createManyBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBrandProductArgs_1.DeleteBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "deleteBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBrandProductArgs_1.UpdateBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "updateBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBrandProductArgs_1.DeleteManyBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "deleteManyBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBrandProductArgs_1.UpdateManyBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "updateManyBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => BrandProduct_1.BrandProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBrandProductArgs_1.UpsertBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "upsertBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrandProduct_1.AggregateBrandProduct, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandProductArgs_1.AggregateBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "aggregateBrandProduct", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandProductGroupBy_1.BrandProductGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBrandProductArgs_1.GroupByBrandProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandProductCrudResolver.prototype, "groupByBrandProduct", null);
BrandProductCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => BrandProduct_1.BrandProduct)
], BrandProductCrudResolver);
exports.BrandProductCrudResolver = BrandProductCrudResolver;
