"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PatientProfileUpdateallowedMealKindsInput_1 = require("../inputs/PatientProfileUpdateallowedMealKindsInput");
const PatientProfileUpdateallowedMealTypesInput_1 = require("../inputs/PatientProfileUpdateallowedMealTypesInput");
const PatientProfileUpdatedietaryRestrictionsInput_1 = require("../inputs/PatientProfileUpdatedietaryRestrictionsInput");
const PatientProfileUpdatedoctorSpecificDietsInput_1 = require("../inputs/PatientProfileUpdatedoctorSpecificDietsInput");
const PatientProfileUpdatespecialDietsInput_1 = require("../inputs/PatientProfileUpdatespecialDietsInput");
let PatientProfileUpdateWithoutUserInput = class PatientProfileUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput)
], PatientProfileUpdateWithoutUserInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateWithoutUserInput.prototype, "updatedAt", void 0);
PatientProfileUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdateWithoutUserInput", {
        isAbstract: true
    })
], PatientProfileUpdateWithoutUserInput);
exports.PatientProfileUpdateWithoutUserInput = PatientProfileUpdateWithoutUserInput;
