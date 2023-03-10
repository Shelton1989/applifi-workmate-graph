"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealArgs_1 = require("./args/AggregateMealArgs");
const CreateManyMealArgs_1 = require("./args/CreateManyMealArgs");
const CreateMealArgs_1 = require("./args/CreateMealArgs");
const DeleteManyMealArgs_1 = require("./args/DeleteManyMealArgs");
const DeleteMealArgs_1 = require("./args/DeleteMealArgs");
const FindFirstMealArgs_1 = require("./args/FindFirstMealArgs");
const FindManyMealArgs_1 = require("./args/FindManyMealArgs");
const FindUniqueMealArgs_1 = require("./args/FindUniqueMealArgs");
const GroupByMealArgs_1 = require("./args/GroupByMealArgs");
const UpdateManyMealArgs_1 = require("./args/UpdateManyMealArgs");
const UpdateMealArgs_1 = require("./args/UpdateMealArgs");
const UpsertMealArgs_1 = require("./args/UpsertMealArgs");
const helpers_1 = require("../../../helpers");
const Meal_1 = require("../../../models/Meal");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMeal_1 = require("../../outputs/AggregateMeal");
const MealGroupBy_1 = require("../../outputs/MealGroupBy");
let MealCrudResolver = class MealCrudResolver {
    async meal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async meals(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMeal(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMeal(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMeal(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).meal.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealArgs_1.FindUniqueMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "meal", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMealArgs_1.FindFirstMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "findFirstMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Meal_1.Meal], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealArgs_1.FindManyMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "meals", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealArgs_1.CreateMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "createMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMealArgs_1.CreateManyMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "createManyMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealArgs_1.DeleteMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "deleteMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealArgs_1.UpdateMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "updateMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMealArgs_1.DeleteManyMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "deleteManyMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMealArgs_1.UpdateManyMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "updateManyMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Meal_1.Meal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealArgs_1.UpsertMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "upsertMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMeal_1.AggregateMeal, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealArgs_1.AggregateMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "aggregateMeal", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealGroupBy_1.MealGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealArgs_1.GroupByMealArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealCrudResolver.prototype, "groupByMeal", null);
MealCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Meal_1.Meal)
], MealCrudResolver);
exports.MealCrudResolver = MealCrudResolver;
