"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreatespecialDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let PatientProfileCreatespecialDietsInput = class PatientProfileCreatespecialDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileCreatespecialDietsInput.prototype, "set", void 0);
PatientProfileCreatespecialDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreatespecialDietsInput", {
        isAbstract: true
    })
], PatientProfileCreatespecialDietsInput);
exports.PatientProfileCreatespecialDietsInput = PatientProfileCreatespecialDietsInput;
