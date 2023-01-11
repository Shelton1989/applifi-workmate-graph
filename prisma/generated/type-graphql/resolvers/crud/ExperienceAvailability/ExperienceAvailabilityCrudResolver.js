"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateExperienceAvailabilityArgs_1 = require("./args/AggregateExperienceAvailabilityArgs");
const CreateExperienceAvailabilityArgs_1 = require("./args/CreateExperienceAvailabilityArgs");
const CreateManyExperienceAvailabilityArgs_1 = require("./args/CreateManyExperienceAvailabilityArgs");
const DeleteExperienceAvailabilityArgs_1 = require("./args/DeleteExperienceAvailabilityArgs");
const DeleteManyExperienceAvailabilityArgs_1 = require("./args/DeleteManyExperienceAvailabilityArgs");
const FindFirstExperienceAvailabilityArgs_1 = require("./args/FindFirstExperienceAvailabilityArgs");
const FindManyExperienceAvailabilityArgs_1 = require("./args/FindManyExperienceAvailabilityArgs");
const FindUniqueExperienceAvailabilityArgs_1 = require("./args/FindUniqueExperienceAvailabilityArgs");
const GroupByExperienceAvailabilityArgs_1 = require("./args/GroupByExperienceAvailabilityArgs");
const UpdateExperienceAvailabilityArgs_1 = require("./args/UpdateExperienceAvailabilityArgs");
const UpdateManyExperienceAvailabilityArgs_1 = require("./args/UpdateManyExperienceAvailabilityArgs");
const UpsertExperienceAvailabilityArgs_1 = require("./args/UpsertExperienceAvailabilityArgs");
const helpers_1 = require("../../../helpers");
const ExperienceAvailability_1 = require("../../../models/ExperienceAvailability");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateExperienceAvailability_1 = require("../../outputs/AggregateExperienceAvailability");
const ExperienceAvailabilityGroupBy_1 = require("../../outputs/ExperienceAvailabilityGroupBy");
let ExperienceAvailabilityCrudResolver = class ExperienceAvailabilityCrudResolver {
    async experienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async experienceAvailabilities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertExperienceAvailability(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateExperienceAvailability(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByExperienceAvailability(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experienceAvailability.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExperienceAvailabilityArgs_1.FindUniqueExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "experienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExperienceAvailabilityArgs_1.FindFirstExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "findFirstExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExperienceAvailability_1.ExperienceAvailability], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyExperienceAvailabilityArgs_1.FindManyExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "experienceAvailabilities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateExperienceAvailabilityArgs_1.CreateExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "createExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyExperienceAvailabilityArgs_1.CreateManyExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "createManyExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteExperienceAvailabilityArgs_1.DeleteExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "deleteExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateExperienceAvailabilityArgs_1.UpdateExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "updateExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyExperienceAvailabilityArgs_1.DeleteManyExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "deleteManyExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyExperienceAvailabilityArgs_1.UpdateManyExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "updateManyExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ExperienceAvailability_1.ExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertExperienceAvailabilityArgs_1.UpsertExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "upsertExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExperienceAvailability_1.AggregateExperienceAvailability, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExperienceAvailabilityArgs_1.AggregateExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "aggregateExperienceAvailability", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExperienceAvailabilityGroupBy_1.ExperienceAvailabilityGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExperienceAvailabilityArgs_1.GroupByExperienceAvailabilityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceAvailabilityCrudResolver.prototype, "groupByExperienceAvailability", null);
ExperienceAvailabilityCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ExperienceAvailability_1.ExperienceAvailability)
], ExperienceAvailabilityCrudResolver);
exports.ExperienceAvailabilityCrudResolver = ExperienceAvailabilityCrudResolver;
