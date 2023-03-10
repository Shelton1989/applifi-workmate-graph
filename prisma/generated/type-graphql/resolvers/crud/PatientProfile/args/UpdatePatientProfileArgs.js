"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileUpdateInput_1 = require("../../../inputs/PatientProfileUpdateInput");
const PatientProfileWhereUniqueInput_1 = require("../../../inputs/PatientProfileWhereUniqueInput");
let UpdatePatientProfileArgs = class UpdatePatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateInput_1.PatientProfileUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateInput_1.PatientProfileUpdateInput)
], UpdatePatientProfileArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], UpdatePatientProfileArgs.prototype, "where", void 0);
UpdatePatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdatePatientProfileArgs);
exports.UpdatePatientProfileArgs = UpdatePatientProfileArgs;
