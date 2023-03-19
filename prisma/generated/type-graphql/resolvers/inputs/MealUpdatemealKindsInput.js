"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdatemealKindsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_KIND_1 = require("../../enums/MEAL_KIND");
let MealUpdatemealKindsInput = class MealUpdatemealKindsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatemealKindsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_KIND_1.MEAL_KIND], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatemealKindsInput.prototype, "push", void 0);
MealUpdatemealKindsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdatemealKindsInput", {
        isAbstract: true
    })
], MealUpdatemealKindsInput);
exports.MealUpdatemealKindsInput = MealUpdatemealKindsInput;
