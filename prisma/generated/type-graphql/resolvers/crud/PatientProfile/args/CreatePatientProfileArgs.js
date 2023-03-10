"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateInput_1 = require("../../../inputs/PatientProfileCreateInput");
let CreatePatientProfileArgs = class CreatePatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateInput_1.PatientProfileCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateInput_1.PatientProfileCreateInput)
], CreatePatientProfileArgs.prototype, "data", void 0);
CreatePatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreatePatientProfileArgs);
exports.CreatePatientProfileArgs = CreatePatientProfileArgs;
