"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateInput_1 = require("../../../inputs/PatientProfileCreateInput");
const PatientProfileUpdateInput_1 = require("../../../inputs/PatientProfileUpdateInput");
const PatientProfileWhereUniqueInput_1 = require("../../../inputs/PatientProfileWhereUniqueInput");
let UpsertPatientProfileArgs = class UpsertPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], UpsertPatientProfileArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateInput_1.PatientProfileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateInput_1.PatientProfileCreateInput)
], UpsertPatientProfileArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateInput_1.PatientProfileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateInput_1.PatientProfileUpdateInput)
], UpsertPatientProfileArgs.prototype, "update", void 0);
UpsertPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertPatientProfileArgs);
exports.UpsertPatientProfileArgs = UpsertPatientProfileArgs;
