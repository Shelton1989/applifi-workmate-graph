"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdateManyMutationInput = void 0;
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
let PatientProfileUpdateManyMutationInput = class PatientProfileUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput)
], PatientProfileUpdateManyMutationInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput)
], PatientProfileUpdateManyMutationInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput)
], PatientProfileUpdateManyMutationInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput)
], PatientProfileUpdateManyMutationInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput)
], PatientProfileUpdateManyMutationInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateManyMutationInput.prototype, "updatedAt", void 0);
PatientProfileUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdateManyMutationInput", {
        isAbstract: true
    })
], PatientProfileUpdateManyMutationInput);
exports.PatientProfileUpdateManyMutationInput = PatientProfileUpdateManyMutationInput;
