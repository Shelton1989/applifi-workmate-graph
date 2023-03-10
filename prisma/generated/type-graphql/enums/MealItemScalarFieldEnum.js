"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MealItemScalarFieldEnum;
(function (MealItemScalarFieldEnum) {
    MealItemScalarFieldEnum["id"] = "id";
    MealItemScalarFieldEnum["mealIds"] = "mealIds";
    MealItemScalarFieldEnum["title"] = "title";
    MealItemScalarFieldEnum["shortDescription"] = "shortDescription";
    MealItemScalarFieldEnum["createdAt"] = "createdAt";
    MealItemScalarFieldEnum["updatedAt"] = "updatedAt";
})(MealItemScalarFieldEnum = exports.MealItemScalarFieldEnum || (exports.MealItemScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MealItemScalarFieldEnum, {
    name: "MealItemScalarFieldEnum",
    description: undefined,
});
