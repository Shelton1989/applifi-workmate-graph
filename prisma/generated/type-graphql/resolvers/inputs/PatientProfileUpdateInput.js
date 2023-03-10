"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PatientProfileUpdateallowedMealKindsInput_1 = require("../inputs/PatientProfileUpdateallowedMealKindsInput");
const PatientProfileUpdateallowedMealTypesInput_1 = require("../inputs/PatientProfileUpdateallowedMealTypesInput");
const PatientProfileUpdatedietaryRestrictionsInput_1 = require("../inputs/PatientProfileUpdatedietaryRestrictionsInput");
const PatientProfileUpdatedoctorSpecificDietsInput_1 = require("../inputs/PatientProfileUpdatedoctorSpecificDietsInput");
const PatientProfileUpdatespecialDietsInput_1 = require("../inputs/PatientProfileUpdatespecialDietsInput");
const UserUpdateOneWithoutPatientProfileInput_1 = require("../inputs/UserUpdateOneWithoutPatientProfileInput");
let PatientProfileUpdateInput = class PatientProfileUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedietaryRestrictionsInput_1.PatientProfileUpdatedietaryRestrictionsInput)
], PatientProfileUpdateInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealTypesInput_1.PatientProfileUpdateallowedMealTypesInput)
], PatientProfileUpdateInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdateallowedMealKindsInput_1.PatientProfileUpdateallowedMealKindsInput)
], PatientProfileUpdateInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatedoctorSpecificDietsInput_1.PatientProfileUpdatedoctorSpecificDietsInput)
], PatientProfileUpdateInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileUpdatespecialDietsInput_1.PatientProfileUpdatespecialDietsInput)
], PatientProfileUpdateInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutPatientProfileInput_1.UserUpdateOneWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutPatientProfileInput_1.UserUpdateOneWithoutPatientProfileInput)
], PatientProfileUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], PatientProfileUpdateInput.prototype, "updatedAt", void 0);
PatientProfileUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdateInput", {
        isAbstract: true
    })
], PatientProfileUpdateInput);
exports.PatientProfileUpdateInput = PatientProfileUpdateInput;
