"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceAvailabilityScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ExperienceAvailabilityScalarFieldEnum;
(function (ExperienceAvailabilityScalarFieldEnum) {
    ExperienceAvailabilityScalarFieldEnum["id"] = "id";
    ExperienceAvailabilityScalarFieldEnum["experienceId"] = "experienceId";
    ExperienceAvailabilityScalarFieldEnum["startDate"] = "startDate";
    ExperienceAvailabilityScalarFieldEnum["endDate"] = "endDate";
    ExperienceAvailabilityScalarFieldEnum["availabilityType"] = "availabilityType";
    ExperienceAvailabilityScalarFieldEnum["weekendSpacesAvailable"] = "weekendSpacesAvailable";
    ExperienceAvailabilityScalarFieldEnum["dailySpacesAvailable"] = "dailySpacesAvailable";
    ExperienceAvailabilityScalarFieldEnum["hourlySpacesAvailable"] = "hourlySpacesAvailable";
    ExperienceAvailabilityScalarFieldEnum["halfHourlySpacesAvailable"] = "halfHourlySpacesAvailable";
    ExperienceAvailabilityScalarFieldEnum["createdAt"] = "createdAt";
    ExperienceAvailabilityScalarFieldEnum["updatedAt"] = "updatedAt";
})(ExperienceAvailabilityScalarFieldEnum = exports.ExperienceAvailabilityScalarFieldEnum || (exports.ExperienceAvailabilityScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ExperienceAvailabilityScalarFieldEnum, {
    name: "ExperienceAvailabilityScalarFieldEnum",
    description: undefined,
});
