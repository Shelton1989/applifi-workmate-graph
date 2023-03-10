"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyPatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyPatientProfileArgs_1 = require("./args/FindManyPatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const helpers_1 = require("../../../helpers");
let FindManyPatientProfileResolver = class FindManyPatientProfileResolver {
    async patientProfiles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyPatientProfileResolver.prototype, "patientProfiles", null);
FindManyPatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], FindManyPatientProfileResolver);
exports.FindManyPatientProfileResolver = FindManyPatientProfileResolver;
