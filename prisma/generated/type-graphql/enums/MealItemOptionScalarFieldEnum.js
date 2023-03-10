"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MealItemOptionScalarFieldEnum;
(function (MealItemOptionScalarFieldEnum) {
    MealItemOptionScalarFieldEnum["id"] = "id";
    MealItemOptionScalarFieldEnum["mealItemId"] = "mealItemId";
    MealItemOptionScalarFieldEnum["title"] = "title";
    MealItemOptionScalarFieldEnum["shortDescription"] = "shortDescription";
    MealItemOptionScalarFieldEnum["createdAt"] = "createdAt";
    MealItemOptionScalarFieldEnum["updatedAt"] = "updatedAt";
})(MealItemOptionScalarFieldEnum = exports.MealItemOptionScalarFieldEnum || (exports.MealItemOptionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MealItemOptionScalarFieldEnum, {
    name: "MealItemOptionScalarFieldEnum",
    description: undefined,
});
