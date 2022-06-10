"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateSizeArgs_1 = require("./args/AggregateSizeArgs");
const CreateManySizeArgs_1 = require("./args/CreateManySizeArgs");
const CreateSizeArgs_1 = require("./args/CreateSizeArgs");
const DeleteManySizeArgs_1 = require("./args/DeleteManySizeArgs");
const DeleteSizeArgs_1 = require("./args/DeleteSizeArgs");
const FindFirstSizeArgs_1 = require("./args/FindFirstSizeArgs");
const FindManySizeArgs_1 = require("./args/FindManySizeArgs");
const FindUniqueSizeArgs_1 = require("./args/FindUniqueSizeArgs");
const GroupBySizeArgs_1 = require("./args/GroupBySizeArgs");
const UpdateManySizeArgs_1 = require("./args/UpdateManySizeArgs");
const UpdateSizeArgs_1 = require("./args/UpdateSizeArgs");
const UpsertSizeArgs_1 = require("./args/UpsertSizeArgs");
const helpers_1 = require("../../../helpers");
const Size_1 = require("../../../models/Size");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSize_1 = require("../../outputs/AggregateSize");
const SizeGroupBy_1 = require("../../outputs/SizeGroupBy");
let SizeCrudResolver = class SizeCrudResolver {
    async size(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async sizes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSize(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).size.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySize(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueSizeArgs_1.FindUniqueSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "size", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstSizeArgs_1.FindFirstSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "findFirstSize", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Size_1.Size], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManySizeArgs_1.FindManySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "sizes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateSizeArgs_1.CreateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "createSize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManySizeArgs_1.CreateManySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "createManySize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteSizeArgs_1.DeleteSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "deleteSize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSizeArgs_1.UpdateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "updateSize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManySizeArgs_1.DeleteManySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "deleteManySize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManySizeArgs_1.UpdateManySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "updateManySize", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertSizeArgs_1.UpsertSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "upsertSize", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateSize_1.AggregateSize, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateSizeArgs_1.AggregateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "aggregateSize", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [SizeGroupBy_1.SizeGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupBySizeArgs_1.GroupBySizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SizeCrudResolver.prototype, "groupBySize", null);
SizeCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], SizeCrudResolver);
exports.SizeCrudResolver = SizeCrudResolver;
