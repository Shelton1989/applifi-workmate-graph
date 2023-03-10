"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdateallowedMealKindsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
let MealUpdateallowedMealKindsInput = class MealUpdateallowedMealKindsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateallowedMealKindsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdateallowedMealKindsInput.prototype, "push", void 0);
MealUpdateallowedMealKindsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdateallowedMealKindsInput", {
        isAbstract: true
    })
], MealUpdateallowedMealKindsInput);
exports.MealUpdateallowedMealKindsInput = MealUpdateallowedMealKindsInput;
