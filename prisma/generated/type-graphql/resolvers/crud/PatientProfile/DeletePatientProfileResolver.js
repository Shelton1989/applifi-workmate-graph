"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeletePatientProfileArgs_1 = require("./args/DeletePatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const helpers_1 = require("../../../helpers");
let DeletePatientProfileResolver = class DeletePatientProfileResolver {
    async deletePatientProfile(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeletePatientProfileResolver.prototype, "deletePatientProfile", null);
DeletePatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], DeletePatientProfileResolver);
exports.DeletePatientProfileResolver = DeletePatientProfileResolver;
