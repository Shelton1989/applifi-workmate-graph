"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PatientProfileScalarFieldEnum;
(function (PatientProfileScalarFieldEnum) {
    PatientProfileScalarFieldEnum["id"] = "id";
    PatientProfileScalarFieldEnum["identityNumber"] = "identityNumber";
    PatientProfileScalarFieldEnum["identityType"] = "identityType";
    PatientProfileScalarFieldEnum["bedNumber"] = "bedNumber";
    PatientProfileScalarFieldEnum["wardNumber"] = "wardNumber";
    PatientProfileScalarFieldEnum["dietaryRestrictions"] = "dietaryRestrictions";
    PatientProfileScalarFieldEnum["allowedMealTypes"] = "allowedMealTypes";
    PatientProfileScalarFieldEnum["allowedMealKinds"] = "allowedMealKinds";
    PatientProfileScalarFieldEnum["doctorSpecificDiets"] = "doctorSpecificDiets";
    PatientProfileScalarFieldEnum["specialDiets"] = "specialDiets";
    PatientProfileScalarFieldEnum["userId"] = "userId";
    PatientProfileScalarFieldEnum["createdAt"] = "createdAt";
    PatientProfileScalarFieldEnum["updatedAt"] = "updatedAt";
})(PatientProfileScalarFieldEnum = exports.PatientProfileScalarFieldEnum || (exports.PatientProfileScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PatientProfileScalarFieldEnum, {
    name: "PatientProfileScalarFieldEnum",
    description: undefined,
});
