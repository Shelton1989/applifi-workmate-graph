"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfile_1 = require("../../../models/PatientProfile");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let PatientProfileRelationsResolver = class PatientProfileRelationsResolver {
    async User(patientProfile, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).patientProfile.findUnique({
            where: {
                id: patientProfile.id,
            },
        }).User({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [PatientProfile_1.PatientProfile, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PatientProfileRelationsResolver.prototype, "User", null);
PatientProfileRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => PatientProfile_1.PatientProfile)
], PatientProfileRelationsResolver);
exports.PatientProfileRelationsResolver = PatientProfileRelationsResolver;
