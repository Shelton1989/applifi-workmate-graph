"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstPatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstPatientProfileArgs_1 = require("./args/FindFirstPatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const helpers_1 = require("../../../helpers");
let FindFirstPatientProfileResolver = class FindFirstPatientProfileResolver {
    async findFirstPatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPatientProfileArgs_1.FindFirstPatientProfileArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstPatientProfileResolver.prototype, "findFirstPatientProfile", null);
FindFirstPatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], FindFirstPatientProfileResolver);
exports.FindFirstPatientProfileResolver = FindFirstPatientProfileResolver;
