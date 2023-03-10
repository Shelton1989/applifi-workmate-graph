"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateallowedMealTypesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let MealUpdateallowedMealTypesInput = class MealUpdateallowedMealTypesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateallowedMealTypesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateallowedMealTypesInput.prototype, "push", void 0);
MealUpdateallowedMealTypesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateallowedMealTypesInput", {
        isAbstract: true
    })
], MealUpdateallowedMealTypesInput);
exports.MealUpdateallowedMealTypesInput = MealUpdateallowedMealTypesInput;
