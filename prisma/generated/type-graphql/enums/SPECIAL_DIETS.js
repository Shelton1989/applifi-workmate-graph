"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPECIAL_DIETS = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SPECIAL_DIETS;
(function (SPECIAL_DIETS) {
    SPECIAL_DIETS["NONE"] = "NONE";
    SPECIAL_DIETS["MIXED_FLUID"] = "MIXED_FLUID";
    SPECIAL_DIETS["CLEAR_FLUID"] = "CLEAR_FLUID";
    SPECIAL_DIETS["PUREED"] = "PUREED";
})(SPECIAL_DIETS = exports.SPECIAL_DIETS || (exports.SPECIAL_DIETS = {}));
TypeGraphQL.registerEnumType(SPECIAL_DIETS, {
    name: "SPECIAL_DIETS",
    description: undefined,
});
