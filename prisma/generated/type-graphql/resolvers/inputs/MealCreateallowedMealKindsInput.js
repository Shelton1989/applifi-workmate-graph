"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateallowedMealKindsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
let MealCreateallowedMealKindsInput = class MealCreateallowedMealKindsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateallowedMealKindsInput.prototype, "set", void 0);
MealCreateallowedMealKindsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateallowedMealKindsInput", {
        isAbstract: true
    })
], MealCreateallowedMealKindsInput);
exports.MealCreateallowedMealKindsInput = MealCreateallowedMealKindsInput;
