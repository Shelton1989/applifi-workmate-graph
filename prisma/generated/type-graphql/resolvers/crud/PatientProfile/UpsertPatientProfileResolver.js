"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertPatientProfileArgs_1 = require("./args/UpsertPatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const helpers_1 = require("../../../helpers");
let UpsertPatientProfileResolver = class UpsertPatientProfileResolver {
    async upsertPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertPatientProfileResolver.prototype, "upsertPatientProfile", null);
UpsertPatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], UpsertPatientProfileResolver);
exports.UpsertPatientProfileResolver = UpsertPatientProfileResolver;
