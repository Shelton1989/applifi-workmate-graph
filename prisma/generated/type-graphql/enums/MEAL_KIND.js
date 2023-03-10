"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEAL_KIND = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MEAL_KIND;
(function (MEAL_KIND) {
    MEAL_KIND["FLUID"] = "FLUID";
    MEAL_KIND["LIGHT"] = "LIGHT";
    MEAL_KIND["FULL"] = "FULL";
})(MEAL_KIND = exports.MEAL_KIND || (exports.MEAL_KIND = {}));
TypeGraphQL.registerEnumType(MEAL_KIND, {
    name: "MEAL_KIND",
    description: undefined,
});
