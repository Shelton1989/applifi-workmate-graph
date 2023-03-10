"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateMealAvailabilityArgs_1 = require("./args/AggregateMealAvailabilityArgs");
const CreateManyMealAvailabilityArgs_1 = require("./args/CreateManyMealAvailabilityArgs");
const CreateMealAvailabilityArgs_1 = require("./args/CreateMealAvailabilityArgs");
const DeleteManyMealAvailabilityArgs_1 = require("./args/DeleteManyMealAvailabilityArgs");
const DeleteMealAvailabilityArgs_1 = require("./args/DeleteMealAvailabilityArgs");
const FindFirstMealAvailabilityArgs_1 = require("./args/FindFirstMealAvailabilityArgs");
const FindManyMealAvailabilityArgs_1 = require("./args/FindManyMealAvailabilityArgs");
const FindUniqueMealAvailabilityArgs_1 = require("./args/FindUniqueMealAvailabilityArgs");
const GroupByMealAvailabilityArgs_1 = require("./args/GroupByMealAvailabilityArgs");
const UpdateManyMealAvailabilityArgs_1 = require("./args/UpdateManyMealAvailabilityArgs");
const UpdateMealAvailabilityArgs_1 = require("./args/UpdateMealAvailabilityArgs");
const UpsertMealAvailabilityArgs_1 = require("./args/UpsertMealAvailabilityArgs");
const helpers_1 = require("../../../helpers");
const MealAvailability_1 = require("../../../models/MealAvailability");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMealAvailability_1 = require("../../outputs/AggregateMealAvailability");
const MealAvailabilityGroupBy_1 = require("../../outputs/MealAvailabilityGroupBy");
let MealAvailabilityCrudResolver = class MealAvailabilityCrudResolver {
    async mealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async mealAvailabilities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMealAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMealAvailability(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMealAvailability(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).mealAvailability.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueMealAvailabilityArgs_1.FindUniqueMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "mealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstMealAvailabilityArgs_1.FindFirstMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "findFirstMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealAvailability_1.MealAvailability], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyMealAvailabilityArgs_1.FindManyMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "mealAvailabilities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateMealAvailabilityArgs_1.CreateMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "createMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyMealAvailabilityArgs_1.CreateManyMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "createManyMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteMealAvailabilityArgs_1.DeleteMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "deleteMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateMealAvailabilityArgs_1.UpdateMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "updateMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyMealAvailabilityArgs_1.DeleteManyMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "deleteManyMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyMealAvailabilityArgs_1.UpdateManyMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "updateManyMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => MealAvailability_1.MealAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertMealAvailabilityArgs_1.UpsertMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "upsertMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateMealAvailability_1.AggregateMealAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateMealAvailabilityArgs_1.AggregateMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "aggregateMealAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [MealAvailabilityGroupBy_1.MealAvailabilityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByMealAvailabilityArgs_1.GroupByMealAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], MealAvailabilityCrudResolver.prototype, "groupByMealAvailability", null);
MealAvailabilityCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => MealAvailability_1.MealAvailability)
], MealAvailabilityCrudResolver);
exports.MealAvailabilityCrudResolver = MealAvailabilityCrudResolver;
