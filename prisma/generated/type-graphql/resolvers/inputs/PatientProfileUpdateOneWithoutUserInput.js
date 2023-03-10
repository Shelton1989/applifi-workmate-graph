"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdateOneWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateOrConnectWithoutUserInput_1 = require("../inputs/PatientProfileCreateOrConnectWithoutUserInput");
const PatientProfileCreateWithoutUserInput_1 = require("../inputs/PatientProfileCreateWithoutUserInput");
const PatientProfileUpdateWithoutUserInput_1 = require("../inputs/PatientProfileUpdateWithoutUserInput");
const PatientProfileUpsertWithoutUserInput_1 = require("../inputs/PatientProfileUpsertWithoutUserInput");
const PatientProfileWhereUniqueInput_1 = require("../inputs/PatientProfileWhereUniqueInput");
let PatientProfileUpdateOneWithoutUserInput = class PatientProfileUpdateOneWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateWithoutUserInput_1.PatientProfileCreateWithoutUserInput)
], PatientProfileUpdateOneWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateOrConnectWithoutUserInput_1.PatientProfileCreateOrConnectWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateOrConnectWithoutUserInput_1.PatientProfileCreateOrConnectWithoutUserInput)
], PatientProfileUpdateOneWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpsertWithoutUserInput_1.PatientProfileUpsertWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpsertWithoutUserInput_1.PatientProfileUpsertWithoutUserInput)
], PatientProfileUpdateOneWithoutUserInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PatientProfileUpdateOneWithoutUserInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PatientProfileUpdateOneWithoutUserInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileWhereUniqueInput_1.PatientProfileWhereUniqueInput)
], PatientProfileUpdateOneWithoutUserInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateWithoutUserInput_1.PatientProfileUpdateWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateWithoutUserInput_1.PatientProfileUpdateWithoutUserInput)
], PatientProfileUpdateOneWithoutUserInput.prototype, "update", void 0);
PatientProfileUpdateOneWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdateOneWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileUpdateOneWithoutUserInput);
exports.PatientProfileUpdateOneWithoutUserInput = PatientProfileUpdateOneWithoutUserInput;
