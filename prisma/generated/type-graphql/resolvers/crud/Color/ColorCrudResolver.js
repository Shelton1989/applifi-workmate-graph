"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateColorArgs_1 = require("./args/AggregateColorArgs");
const CreateColorArgs_1 = require("./args/CreateColorArgs");
const CreateManyColorArgs_1 = require("./args/CreateManyColorArgs");
const DeleteColorArgs_1 = require("./args/DeleteColorArgs");
const DeleteManyColorArgs_1 = require("./args/DeleteManyColorArgs");
const FindFirstColorArgs_1 = require("./args/FindFirstColorArgs");
const FindManyColorArgs_1 = require("./args/FindManyColorArgs");
const FindUniqueColorArgs_1 = require("./args/FindUniqueColorArgs");
const GroupByColorArgs_1 = require("./args/GroupByColorArgs");
const UpdateColorArgs_1 = require("./args/UpdateColorArgs");
const UpdateManyColorArgs_1 = require("./args/UpdateManyColorArgs");
const UpsertColorArgs_1 = require("./args/UpsertColorArgs");
const helpers_1 = require("../../../helpers");
const Color_1 = require("../../../models/Color");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateColor_1 = require("../../outputs/AggregateColor");
const ColorGroupBy_1 = require("../../outputs/ColorGroupBy");
let ColorCrudResolver = class ColorCrudResolver {
    async color(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async colors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertColor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateColor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).color.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByColor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueColorArgs_1.FindUniqueColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "color", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstColorArgs_1.FindFirstColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "findFirstColor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Color_1.Color], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyColorArgs_1.FindManyColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "colors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Color_1.Color, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateColorArgs_1.CreateColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "createColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyColorArgs_1.CreateManyColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "createManyColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteColorArgs_1.DeleteColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "deleteColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateColorArgs_1.UpdateColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "updateColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyColorArgs_1.DeleteManyColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "deleteManyColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyColorArgs_1.UpdateManyColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "updateManyColor", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Color_1.Color, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertColorArgs_1.UpsertColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "upsertColor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateColor_1.AggregateColor, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateColorArgs_1.AggregateColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "aggregateColor", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ColorGroupBy_1.ColorGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByColorArgs_1.GroupByColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ColorCrudResolver.prototype, "groupByColor", null);
ColorCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], ColorCrudResolver);
exports.ColorCrudResolver = ColorCrudResolver;
