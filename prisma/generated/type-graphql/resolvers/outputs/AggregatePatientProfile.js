"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregatePatientProfile = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCountAggregate_1 = require("../outputs/PatientProfileCountAggregate");
const PatientProfileMaxAggregate_1 = require("../outputs/PatientProfileMaxAggregate");
const PatientProfileMinAggregate_1 = require("../outputs/PatientProfileMinAggregate");
let AggregatePatientProfile = class AggregatePatientProfile {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCountAggregate_1.PatientProfileCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCountAggregate_1.PatientProfileCountAggregate)
], AggregatePatientProfile.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMinAggregate_1.PatientProfileMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMinAggregate_1.PatientProfileMinAggregate)
], AggregatePatientProfile.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileMaxAggregate_1.PatientProfileMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileMaxAggregate_1.PatientProfileMaxAggregate)
], AggregatePatientProfile.prototype, "_max", void 0);
AggregatePatientProfile = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregatePatientProfile", {
        isAbstract: true
    })
], AggregatePatientProfile);
exports.AggregatePatientProfile = AggregatePatientProfile;
