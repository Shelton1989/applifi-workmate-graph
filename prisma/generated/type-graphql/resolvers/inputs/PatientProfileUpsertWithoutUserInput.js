"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpsertWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateWithoutUserInput_1 = require("../inputs/PatientProfileCreateWithoutUserInput");
const PatientProfileUpdateWithoutUserInput_1 = require("../inputs/PatientProfileUpdateWithoutUserInput");
let PatientProfileUpsertWithoutUserInput = class PatientProfileUpsertWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateWithoutUserInput_1.PatientProfileUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateWithoutUserInput_1.PatientProfileUpdateWithoutUserInput)
], PatientProfileUpsertWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput)
], PatientProfileUpsertWithoutUserInput.prototype, "create", void 0);
PatientProfileUpsertWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpsertWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileUpsertWithoutUserInput);
exports.PatientProfileUpsertWithoutUserInput = PatientProfileUpsertWithoutUserInput;
