"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileWhereUniqueInput_1 = require("../../../inputs/PatientProfileWhereUniqueInput");
let FindUniquePatientProfileArgs = class FindUniquePatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], FindUniquePatientProfileArgs.prototype, "where", void 0);
FindUniquePatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniquePatientProfileArgs);
exports.FindUniquePatientProfileArgs = FindUniquePatientProfileArgs;
