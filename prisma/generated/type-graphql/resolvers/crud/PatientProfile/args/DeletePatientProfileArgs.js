"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileWhereUniqueInput_1 = require("../../../inputs/PatientProfileWhereUniqueInput");
let DeletePatientProfileArgs = class DeletePatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], DeletePatientProfileArgs.prototype, "where", void 0);
DeletePatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeletePatientProfileArgs);
exports.DeletePatientProfileArgs = DeletePatientProfileArgs;
