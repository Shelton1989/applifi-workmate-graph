"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreatedietaryRestrictionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let PatientProfileCreatedietaryRestrictionsInput = class PatientProfileCreatedietaryRestrictionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileCreatedietaryRestrictionsInput.prototype, "set", void 0);
PatientProfileCreatedietaryRestrictionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreatedietaryRestrictionsInput", {
        isAbstract: true
    })
], PatientProfileCreatedietaryRestrictionsInput);
exports.PatientProfileCreatedietaryRestrictionsInput = PatientProfileCreatedietaryRestrictionsInput;
