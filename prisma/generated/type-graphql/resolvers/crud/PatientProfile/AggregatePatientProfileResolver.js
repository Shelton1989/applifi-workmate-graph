"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePatientProfileArgs_1 = require("./args/AggregatePatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const AggregatePatientProfile_1 = require("../../outputs/AggregatePatientProfile");
const helpers_1 = require("../../../helpers");
let AggregatePatientProfileResolver = class AggregatePatientProfileResolver {
    async aggregatePatientProfile(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregatePatientProfileResolver.prototype, "aggregatePatientProfile", null);
AggregatePatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], AggregatePatientProfileResolver);
exports.AggregatePatientProfileResolver = AggregatePatientProfileResolver;
