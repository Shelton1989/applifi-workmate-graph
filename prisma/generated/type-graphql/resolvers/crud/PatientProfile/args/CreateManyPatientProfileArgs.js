"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPatientProfileArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateManyInput_1 = require("../../../inputs/PatientProfileCreateManyInput");
let CreateManyPatientProfileArgs = class CreateManyPatientProfileArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [PatientProfileCreateManyInput_1.PatientProfileCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyPatientProfileArgs.prototype, "data", void 0);
CreateManyPatientProfileArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyPatientProfileArgs);
exports.CreateManyPatientProfileArgs = CreateManyPatientProfileArgs;
