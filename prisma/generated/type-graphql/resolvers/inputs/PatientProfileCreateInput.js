"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateallowedMealKindsInput_1 = require("../inputs/PatientProfileCreateallowedMealKindsInput");
const PatientProfileCreateallowedMealTypesInput_1 = require("../inputs/PatientProfileCreateallowedMealTypesInput");
const PatientProfileCreatedietaryRestrictionsInput_1 = require("../inputs/PatientProfileCreatedietaryRestrictionsInput");
const PatientProfileCreatedoctorSpecificDietsInput_1 = require("../inputs/PatientProfileCreatedoctorSpecificDietsInput");
const PatientProfileCreatespecialDietsInput_1 = require("../inputs/PatientProfileCreatespecialDietsInput");
const UserCreateNestedOneWithoutPatientProfileInput_1 = require("../inputs/UserCreateNestedOneWithoutPatientProfileInput");
let PatientProfileCreateInput = class PatientProfileCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput)
], PatientProfileCreateInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput)
], PatientProfileCreateInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput)
], PatientProfileCreateInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput)
], PatientProfileCreateInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput)
], PatientProfileCreateInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPatientProfileInput_1.UserCreateNestedOneWithoutPatientProfileInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutPatientProfileInput_1.UserCreateNestedOneWithoutPatientProfileInput)
], PatientProfileCreateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateInput.prototype, "updatedAt", void 0);
PatientProfileCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateInput", {
        isAbstract: true
    })
], PatientProfileCreateInput);
exports.PatientProfileCreateInput = PatientProfileCreateInput;
