"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PatientProfileCreateallowedMealKindsInput_1 = require("../inputs/PatientProfileCreateallowedMealKindsInput");
const PatientProfileCreateallowedMealTypesInput_1 = require("../inputs/PatientProfileCreateallowedMealTypesInput");
const PatientProfileCreatedietaryRestrictionsInput_1 = require("../inputs/PatientProfileCreatedietaryRestrictionsInput");
const PatientProfileCreatedoctorSpecificDietsInput_1 = require("../inputs/PatientProfileCreatedoctorSpecificDietsInput");
const PatientProfileCreatespecialDietsInput_1 = require("../inputs/PatientProfileCreatespecialDietsInput");
let PatientProfileCreateManyInput = class PatientProfileCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "identityNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "identityType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "bedNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "wardNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], PatientProfileCreateManyInput.prototype, "allServicesOpen", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedietaryRestrictionsInput_1.PatientProfileCreatedietaryRestrictionsInput)
], PatientProfileCreateManyInput.prototype, "dietaryRestrictions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealTypesInput_1.PatientProfileCreateallowedMealTypesInput)
], PatientProfileCreateManyInput.prototype, "allowedMealTypes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateallowedMealKindsInput_1.PatientProfileCreateallowedMealKindsInput)
], PatientProfileCreateManyInput.prototype, "allowedMealKinds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatedoctorSpecificDietsInput_1.PatientProfileCreatedoctorSpecificDietsInput)
], PatientProfileCreateManyInput.prototype, "doctorSpecificDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreatespecialDietsInput_1.PatientProfileCreatespecialDietsInput)
], PatientProfileCreateManyInput.prototype, "specialDiets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PatientProfileCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], PatientProfileCreateManyInput.prototype, "updatedAt", void 0);
PatientProfileCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateManyInput", {
        isAbstract: true
    })
], PatientProfileCreateManyInput);
exports.PatientProfileCreateManyInput = PatientProfileCreateManyInput;
