"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileUpdateManyMutationInput_1 = require("../../../inputs/PatientProfileUpdateManyMutationInput");
const PatientProfileWhereInput_1 = require("../../../inputs/PatientProfileWhereInput");
let UpdateManyPatientProfileArgs = class UpdateManyPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateManyMutationInput_1.PatientProfileUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateManyMutationInput_1.PatientProfileUpdateManyMutationInput)
], UpdateManyPatientProfileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], UpdateManyPatientProfileArgs.prototype, "where", void 0);
UpdateManyPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyPatientProfileArgs);
exports.UpdateManyPatientProfileArgs = UpdateManyPatientProfileArgs;
