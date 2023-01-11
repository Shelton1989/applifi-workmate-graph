"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateExperienceArgs_1 = require("./args/AggregateExperienceArgs");
const CreateExperienceArgs_1 = require("./args/CreateExperienceArgs");
const CreateManyExperienceArgs_1 = require("./args/CreateManyExperienceArgs");
const DeleteExperienceArgs_1 = require("./args/DeleteExperienceArgs");
const DeleteManyExperienceArgs_1 = require("./args/DeleteManyExperienceArgs");
const FindFirstExperienceArgs_1 = require("./args/FindFirstExperienceArgs");
const FindManyExperienceArgs_1 = require("./args/FindManyExperienceArgs");
const FindUniqueExperienceArgs_1 = require("./args/FindUniqueExperienceArgs");
const GroupByExperienceArgs_1 = require("./args/GroupByExperienceArgs");
const UpdateExperienceArgs_1 = require("./args/UpdateExperienceArgs");
const UpdateManyExperienceArgs_1 = require("./args/UpdateManyExperienceArgs");
const UpsertExperienceArgs_1 = require("./args/UpsertExperienceArgs");
const helpers_1 = require("../../../helpers");
const Experience_1 = require("../../../models/Experience");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateExperience_1 = require("../../outputs/AggregateExperience");
const ExperienceGroupBy_1 = require("../../outputs/ExperienceGroupBy");
let ExperienceCrudResolver = class ExperienceCrudResolver {
    async experience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async experiences(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertExperience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateExperience(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByExperience(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExperienceArgs_1.FindUniqueExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "experience", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstExperienceArgs_1.FindFirstExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "findFirstExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Experience_1.Experience], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyExperienceArgs_1.FindManyExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "experiences", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Experience_1.Experience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateExperienceArgs_1.CreateExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "createExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyExperienceArgs_1.CreateManyExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "createManyExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteExperienceArgs_1.DeleteExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "deleteExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateExperienceArgs_1.UpdateExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "updateExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyExperienceArgs_1.DeleteManyExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "deleteManyExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyExperienceArgs_1.UpdateManyExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "updateManyExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Experience_1.Experience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertExperienceArgs_1.UpsertExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "upsertExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateExperience_1.AggregateExperience, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateExperienceArgs_1.AggregateExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "aggregateExperience", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ExperienceGroupBy_1.ExperienceGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByExperienceArgs_1.GroupByExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ExperienceCrudResolver.prototype, "groupByExperience", null);
ExperienceCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], ExperienceCrudResolver);
exports.ExperienceCrudResolver = ExperienceCrudResolver;
