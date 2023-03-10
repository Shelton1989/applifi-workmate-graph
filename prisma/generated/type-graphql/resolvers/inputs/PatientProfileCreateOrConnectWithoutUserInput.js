"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateWithoutUserInput_1 = require("../inputs/PatientProfileCreateWithoutUserInput");
const PatientProfileWhereUniqueInput_1 = require("../inputs/PatientProfileWhereUniqueInput");
let PatientProfileCreateOrConnectWithoutUserInput = class PatientProfileCreateOrConnectWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], PatientProfileCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput)
], PatientProfileCreateOrConnectWithoutUserInput.prototype, "create", void 0);
PatientProfileCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateOrConnectWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileCreateOrConnectWithoutUserInput);
exports.PatientProfileCreateOrConnectWithoutUserInput = PatientProfileCreateOrConnectWithoutUserInput;
