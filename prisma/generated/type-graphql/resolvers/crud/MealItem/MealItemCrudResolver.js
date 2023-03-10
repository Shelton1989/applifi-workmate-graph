"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealItemArgs_1 = require("./args/AggregateMealItemArgs");
const CreateManyMealItemArgs_1 = require("./args/CreateManyMealItemArgs");
const CreateMealItemArgs_1 = require("./args/CreateMealItemArgs");
const DeleteManyMealItemArgs_1 = require("./args/DeleteManyMealItemArgs");
const DeleteMealItemArgs_1 = require("./args/DeleteMealItemArgs");
const FindFirstMealItemArgs_1 = require("./args/FindFirstMealItemArgs");
const FindManyMealItemArgs_1 = require("./args/FindManyMealItemArgs");
const FindUniqueMealItemArgs_1 = require("./args/FindUniqueMealItemArgs");
const GroupByMealItemArgs_1 = require("./args/GroupByMealItemArgs");
const UpdateManyMealItemArgs_1 = require("./args/UpdateManyMealItemArgs");
const UpdateMealItemArgs_1 = require("./args/UpdateMealItemArgs");
const UpsertMealItemArgs_1 = require("./args/UpsertMealItemArgs");
const helpers_1 = require("../../../helpers");
const MealItem_1 = require("../../../models/MealItem");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMealItem_1 = require("../../outputs/AggregateMealItem");
const MealItemGroupBy_1 = require("../../outputs/MealItemGroupBy");
let MealItemCrudResolver = class MealItemCrudResolver {
    async mealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mealItems(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMealItem(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMealItem(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMealItem(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItem.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealItemArgs_1.FindUniqueMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "mealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMealItemArgs_1.FindFirstMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "findFirstMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItem_1.MealItem], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealItemArgs_1.FindManyMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "mealItems", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealItemArgs_1.CreateMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "createMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMealItemArgs_1.CreateManyMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "createManyMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealItemArgs_1.DeleteMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "deleteMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealItemArgs_1.UpdateMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "updateMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMealItemArgs_1.DeleteManyMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "deleteManyMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMealItemArgs_1.UpdateManyMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "updateManyMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItem_1.MealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealItemArgs_1.UpsertMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "upsertMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealItem_1.AggregateMealItem, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealItemArgs_1.AggregateMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "aggregateMealItem", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItemGroupBy_1.MealItemGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealItemArgs_1.GroupByMealItemArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemCrudResolver.prototype, "groupByMealItem", null);
MealItemCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItem_1.MealItem)
], MealItemCrudResolver);
exports.MealItemCrudResolver = MealItemCrudResolver;
