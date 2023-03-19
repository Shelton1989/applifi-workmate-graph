"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreatemealKindsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
let MealCreatemealKindsInput = class MealCreatemealKindsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreatemealKindsInput.prototype, "set", void 0);
MealCreatemealKindsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreatemealKindsInput", {
        isAbstract: true
    })
], MealCreatemealKindsInput);
exports.MealCreatemealKindsInput = MealCreatemealKindsInput;
