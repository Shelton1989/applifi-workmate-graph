"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePatientProfileArgs_1 = require("./args/AggregatePatientProfileArgs");
const CreateManyPatientProfileArgs_1 = require("./args/CreateManyPatientProfileArgs");
const CreatePatientProfileArgs_1 = require("./args/CreatePatientProfileArgs");
const DeleteManyPatientProfileArgs_1 = require("./args/DeleteManyPatientProfileArgs");
const DeletePatientProfileArgs_1 = require("./args/DeletePatientProfileArgs");
const FindFirstPatientProfileArgs_1 = require("./args/FindFirstPatientProfileArgs");
const FindManyPatientProfileArgs_1 = require("./args/FindManyPatientProfileArgs");
const FindUniquePatientProfileArgs_1 = require("./args/FindUniquePatientProfileArgs");
const GroupByPatientProfileArgs_1 = require("./args/GroupByPatientProfileArgs");
const UpdateManyPatientProfileArgs_1 = require("./args/UpdateManyPatientProfileArgs");
const UpdatePatientProfileArgs_1 = require("./args/UpdatePatientProfileArgs");
const UpsertPatientProfileArgs_1 = require("./args/UpsertPatientProfileArgs");
const helpers_1 = require("../../../helpers");
const PatientProfile_1 = require("../../../models/PatientProfile");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePatientProfile_1 = require("../../outputs/AggregatePatientProfile");
const PatientProfileGroupBy_1 = require("../../outputs/PatientProfileGroupBy");
let PatientProfileCrudResolver = class PatientProfileCrudResolver {
    async patientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async patientProfiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePatientProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPatientProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PatientProfile_1.PatientProfile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePatientProfileArgs_1.FindUniquePatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "patientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => PatientProfile_1.PatientProfile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPatientProfileArgs_1.FindFirstPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "findFirstPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PatientProfile_1.PatientProfile], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPatientProfileArgs_1.FindManyPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "patientProfiles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PatientProfile_1.PatientProfile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePatientProfileArgs_1.CreatePatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "createPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPatientProfileArgs_1.CreateManyPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "createManyPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PatientProfile_1.PatientProfile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePatientProfileArgs_1.DeletePatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "deletePatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PatientProfile_1.PatientProfile, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePatientProfileArgs_1.UpdatePatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "updatePatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPatientProfileArgs_1.DeleteManyPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "deleteManyPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPatientProfileArgs_1.UpdateManyPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "updateManyPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => PatientProfile_1.PatientProfile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPatientProfileArgs_1.UpsertPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "upsertPatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePatientProfile_1.AggregatePatientProfile, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePatientProfileArgs_1.AggregatePatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "aggregatePatientProfile", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PatientProfileGroupBy_1.PatientProfileGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPatientProfileArgs_1.GroupByPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileCrudResolver.prototype, "groupByPatientProfile", null);
PatientProfileCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], PatientProfileCrudResolver);
exports.PatientProfileCrudResolver = PatientProfileCrudResolver;
