"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateNestedOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/PatientProfileCreateOrConnectWithoutUserInput");
const PatientProfileCreateWithoutUserInput_1 = require("../inputs/PatientProfileCreateWithoutUserInput");
const PatientProfileWhereUniqueInput_1 = require("../inputs/PatientProfileWhereUniqueInput");
let PatientProfileCreateNestedOneWithoutUserInput = class PatientProfileCreateNestedOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput)
], PatientProfileCreateNestedOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateOrConnectWithoutUserInput_1.PatientProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateOrConnectWithoutUserInput_1.PatientProfileCreateOrConnectWithoutUserInput)
], PatientProfileCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], PatientProfileCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
PatientProfileCreateNestedOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateNestedOneWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileCreateNestedOneWithoutUserInput);
exports.PatientProfileCreateNestedOneWithoutUserInput = PatientProfileCreateNestedOneWithoutUserInput;
