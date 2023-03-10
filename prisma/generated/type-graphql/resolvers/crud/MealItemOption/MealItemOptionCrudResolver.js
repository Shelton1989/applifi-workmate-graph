"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealItemOptionArgs_1 = require("./args/AggregateMealItemOptionArgs");
const CreateManyMealItemOptionArgs_1 = require("./args/CreateManyMealItemOptionArgs");
const CreateMealItemOptionArgs_1 = require("./args/CreateMealItemOptionArgs");
const DeleteManyMealItemOptionArgs_1 = require("./args/DeleteManyMealItemOptionArgs");
const DeleteMealItemOptionArgs_1 = require("./args/DeleteMealItemOptionArgs");
const FindFirstMealItemOptionArgs_1 = require("./args/FindFirstMealItemOptionArgs");
const FindManyMealItemOptionArgs_1 = require("./args/FindManyMealItemOptionArgs");
const FindUniqueMealItemOptionArgs_1 = require("./args/FindUniqueMealItemOptionArgs");
const GroupByMealItemOptionArgs_1 = require("./args/GroupByMealItemOptionArgs");
const UpdateManyMealItemOptionArgs_1 = require("./args/UpdateManyMealItemOptionArgs");
const UpdateMealItemOptionArgs_1 = require("./args/UpdateMealItemOptionArgs");
const UpsertMealItemOptionArgs_1 = require("./args/UpsertMealItemOptionArgs");
const helpers_1 = require("../../../helpers");
const MealItemOption_1 = require("../../../models/MealItemOption");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMealItemOption_1 = require("../../outputs/AggregateMealItemOption");
const MealItemOptionGroupBy_1 = require("../../outputs/MealItemOptionGroupBy");
let MealItemOptionCrudResolver = class MealItemOptionCrudResolver {
    async mealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mealItemOptions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMealItemOption(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMealItemOption(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMealItemOption(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealItemOption.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealItemOptionArgs_1.FindUniqueMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "mealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMealItemOptionArgs_1.FindFirstMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "findFirstMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItemOption_1.MealItemOption], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealItemOptionArgs_1.FindManyMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "mealItemOptions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealItemOptionArgs_1.CreateMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "createMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMealItemOptionArgs_1.CreateManyMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "createManyMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealItemOptionArgs_1.DeleteMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "deleteMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealItemOptionArgs_1.UpdateMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "updateMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMealItemOptionArgs_1.DeleteManyMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "deleteManyMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMealItemOptionArgs_1.UpdateManyMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "updateManyMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealItemOption_1.MealItemOption, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealItemOptionArgs_1.UpsertMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "upsertMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealItemOption_1.AggregateMealItemOption, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealItemOptionArgs_1.AggregateMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "aggregateMealItemOption", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealItemOptionGroupBy_1.MealItemOptionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealItemOptionArgs_1.GroupByMealItemOptionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealItemOptionCrudResolver.prototype, "groupByMealItemOption", null);
MealItemOptionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealItemOption_1.MealItemOption)
], MealItemOptionCrudResolver);
exports.MealItemOptionCrudResolver = MealItemOptionCrudResolver;
