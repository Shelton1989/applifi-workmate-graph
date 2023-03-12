"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateallowedMealKindsInput_1 = require("../inputs/PatientProfileCreateallowedMealKindsInput");
const PatientProfileCreateallowedMealTypesInput_1 = require("../inputs/PatientProfileCreateallowedMealTypesInput");
const PatientProfileCreatedietaryRestrictionsInput_1 = require("../inputs/PatientProfileCreatedietaryRestrictionsInput");
const PatientProfileCreatedoctorSpecificDietsInput_1 = require("../inputs/PatientProfileCreatedoctorSpecificDietsInput");
const PatientProfileCreatespecialDietsInput_1 = require("../inputs/PatientProfileCreatespecialDietsInput");
let PatientProfileCreateWithoutUserInput = class PatientProfileCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateWithoutUserInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateWithoutUserInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateWithoutUserInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateWithoutUserInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PatientProfileCreateWithoutUserInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput)
], PatientProfileCreateWithoutUserInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput)
], PatientProfileCreateWithoutUserInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput)
], PatientProfileCreateWithoutUserInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput)
], PatientProfileCreateWithoutUserInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput)
], PatientProfileCreateWithoutUserInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateWithoutUserInput.prototype, "updatedAt", void 0);
PatientProfileCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileCreateWithoutUserInput);
exports.PatientProfileCreateWithoutUserInput = PatientProfileCreateWithoutUserInput;
