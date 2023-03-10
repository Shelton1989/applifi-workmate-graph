"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdatedietaryRestrictionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let PatientProfileUpdatedietaryRestrictionsInput = class PatientProfileUpdatedietaryRestrictionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatedietaryRestrictionsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdatedietaryRestrictionsInput.prototype, "push", void 0);
PatientProfileUpdatedietaryRestrictionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdatedietaryRestrictionsInput", {
        isAbstract: true
    })
], PatientProfileUpdatedietaryRestrictionsInput);
exports.PatientProfileUpdatedietaryRestrictionsInput = PatientProfileUpdatedietaryRestrictionsInput;
