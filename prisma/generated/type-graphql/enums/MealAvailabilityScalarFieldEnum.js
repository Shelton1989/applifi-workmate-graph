"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MealAvailabilityScalarFieldEnum;
(function (MealAvailabilityScalarFieldEnum) {
    MealAvailabilityScalarFieldEnum["id"] = "id";
    MealAvailabilityScalarFieldEnum["mealId"] = "mealId";
    MealAvailabilityScalarFieldEnum["startDate"] = "startDate";
    MealAvailabilityScalarFieldEnum["endDate"] = "endDate";
    MealAvailabilityScalarFieldEnum["createdAt"] = "createdAt";
    MealAvailabilityScalarFieldEnum["updatedAt"] = "updatedAt";
})(MealAvailabilityScalarFieldEnum = exports.MealAvailabilityScalarFieldEnum || (exports.MealAvailabilityScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MealAvailabilityScalarFieldEnum, {
    name: "MealAvailabilityScalarFieldEnum",
    description: undefined,
});
