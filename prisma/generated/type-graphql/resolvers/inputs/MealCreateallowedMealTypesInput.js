"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreateallowedMealTypesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let MealCreateallowedMealTypesInput = class MealCreateallowedMealTypesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreateallowedMealTypesInput.prototype, "set", void 0);
MealCreateallowedMealTypesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreateallowedMealTypesInput", {
        isAbstract: true
    })
], MealCreateallowedMealTypesInput);
exports.MealCreateallowedMealTypesInput = MealCreateallowedMealTypesInput;
