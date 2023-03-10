"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEAL_TYPES = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MEAL_TYPES;
(function (MEAL_TYPES) {
    MEAL_TYPES["BREAKFAST"] = "BREAKFAST";
    MEAL_TYPES["LUNCH"] = "LUNCH";
    MEAL_TYPES["DINNER"] = "DINNER";
    MEAL_TYPES["SNACK"] = "SNACK";
})(MEAL_TYPES = exports.MEAL_TYPES || (exports.MEAL_TYPES = {}));
TypeGraphQL.registerEnumType(MEAL_TYPES, {
    name: "MEAL_TYPES",
    description: undefined,
});
