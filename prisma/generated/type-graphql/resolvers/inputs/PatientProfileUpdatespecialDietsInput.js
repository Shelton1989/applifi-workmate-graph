"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdatespecialDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let PatientProfileUpdatespecialDietsInput = class PatientProfileUpdatespecialDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatespecialDietsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatespecialDietsInput.prototype, "push", void 0);
PatientProfileUpdatespecialDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdatespecialDietsInput", {
        isAbstract: true
    })
], PatientProfileUpdatespecialDietsInput);
exports.PatientProfileUpdatespecialDietsInput = PatientProfileUpdatespecialDietsInput;
