"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MealScalarFieldEnum;
(function (MealScalarFieldEnum) {
    MealScalarFieldEnum["id"] = "id";
    MealScalarFieldEnum["tenantId"] = "tenantId";
    MealScalarFieldEnum["productLink"] = "productLink";
    MealScalarFieldEnum["title"] = "title";
    MealScalarFieldEnum["description"] = "description";
    MealScalarFieldEnum["dietaryRestrictions"] = "dietaryRestrictions";
    MealScalarFieldEnum["mealTypes"] = "mealTypes";
    MealScalarFieldEnum["mealKinds"] = "mealKinds";
    MealScalarFieldEnum["doctorSpecificDiets"] = "doctorSpecificDiets";
    MealScalarFieldEnum["specialDiets"] = "specialDiets";
    MealScalarFieldEnum["itemIds"] = "itemIds";
    MealScalarFieldEnum["photo"] = "photo";
    MealScalarFieldEnum["gallery"] = "gallery";
    MealScalarFieldEnum["publishStatus"] = "publishStatus";
    MealScalarFieldEnum["likedByIds"] = "likedByIds";
    MealScalarFieldEnum["createdAt"] = "createdAt";
    MealScalarFieldEnum["updatedAt"] = "updatedAt";
})(MealScalarFieldEnum = exports.MealScalarFieldEnum || (exports.MealScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MealScalarFieldEnum, {
    name: "MealScalarFieldEnum",
    description: undefined,
});
