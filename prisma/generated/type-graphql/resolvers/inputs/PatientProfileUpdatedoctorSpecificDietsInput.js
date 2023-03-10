"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdatedoctorSpecificDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let PatientProfileUpdatedoctorSpecificDietsInput = class PatientProfileUpdatedoctorSpecificDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatedoctorSpecificDietsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatedoctorSpecificDietsInput.prototype, "push", void 0);
PatientProfileUpdatedoctorSpecificDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdatedoctorSpecificDietsInput", {
        isAbstract: true
    })
], PatientProfileUpdatedoctorSpecificDietsInput);
exports.PatientProfileUpdatedoctorSpecificDietsInput = PatientProfileUpdatedoctorSpecificDietsInput;
