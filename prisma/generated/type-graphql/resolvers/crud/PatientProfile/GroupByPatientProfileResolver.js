"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByPatientProfileResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByPatientProfileArgs_1 = require("./args/GroupByPatientProfileArgs");
const PatientProfile_1 = require("../../../models/PatientProfile");
const PatientProfileGroupBy_1 = require("../../outputs/PatientProfileGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByPatientProfileResolver = class GroupByPatientProfileResolver {
    async groupByPatientProfile(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByPatientProfileResolver.prototype, "groupByPatientProfile", null);
GroupByPatientProfileResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], GroupByPatientProfileResolver);
exports.GroupByPatientProfileResolver = GroupByPatientProfileResolver;
