"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateBrandArgs_1 = require("./args/AggregateBrandArgs");
const CreateBrandArgs_1 = require("./args/CreateBrandArgs");
const CreateManyBrandArgs_1 = require("./args/CreateManyBrandArgs");
const DeleteBrandArgs_1 = require("./args/DeleteBrandArgs");
const DeleteManyBrandArgs_1 = require("./args/DeleteManyBrandArgs");
const FindFirstBrandArgs_1 = require("./args/FindFirstBrandArgs");
const FindManyBrandArgs_1 = require("./args/FindManyBrandArgs");
const FindUniqueBrandArgs_1 = require("./args/FindUniqueBrandArgs");
const GroupByBrandArgs_1 = require("./args/GroupByBrandArgs");
const UpdateBrandArgs_1 = require("./args/UpdateBrandArgs");
const UpdateManyBrandArgs_1 = require("./args/UpdateManyBrandArgs");
const UpsertBrandArgs_1 = require("./args/UpsertBrandArgs");
const helpers_1 = require("../../../helpers");
const Brand_1 = require("../../../models/Brand");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBrand_1 = require("../../outputs/AggregateBrand");
const BrandGroupBy_1 = require("../../outputs/BrandGroupBy");
let BrandCrudResolver = class BrandCrudResolver {
    async brand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async brands(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertBrand(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateBrand(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByBrand(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).brand.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Brand_1.Brand, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBrandArgs_1.FindUniqueBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "brand", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Brand_1.Brand, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBrandArgs_1.FindFirstBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "findFirstBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Brand_1.Brand], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBrandArgs_1.FindManyBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "brands", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateBrandArgs_1.CreateBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "createBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBrandArgs_1.CreateManyBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "createManyBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteBrandArgs_1.DeleteBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "deleteBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateBrandArgs_1.UpdateBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "updateBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBrandArgs_1.DeleteManyBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "deleteManyBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBrandArgs_1.UpdateManyBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "updateManyBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Brand_1.Brand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertBrandArgs_1.UpsertBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "upsertBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBrand_1.AggregateBrand, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBrandArgs_1.AggregateBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "aggregateBrand", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BrandGroupBy_1.BrandGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBrandArgs_1.GroupByBrandArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BrandCrudResolver.prototype, "groupByBrand", null);
BrandCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Brand_1.Brand)
], BrandCrudResolver);
exports.BrandCrudResolver = BrandCrudResolver;
