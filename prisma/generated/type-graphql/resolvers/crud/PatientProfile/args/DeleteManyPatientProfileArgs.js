"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileWhereInput_1 = require("../../../inputs/PatientProfileWhereInput");
let DeleteManyPatientProfileArgs = class DeleteManyPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereInput_1.PatientProfileWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereInput_1.PatientProfileWhereInput)
], DeleteManyPatientProfileArgs.prototype, "where", void 0);
DeleteManyPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPatientProfileArgs);
exports.DeleteManyPatientProfileArgs = DeleteManyPatientProfileArgs;
