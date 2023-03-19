"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreatemealTypesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let MealCreatemealTypesInput = class MealCreatemealTypesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreatemealTypesInput.prototype, "set", void 0);
MealCreatemealTypesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreatemealTypesInput", {
        isAbstract: true
    })
], MealCreatemealTypesInput);
exports.MealCreatemealTypesInput = MealCreatemealTypesInput;
