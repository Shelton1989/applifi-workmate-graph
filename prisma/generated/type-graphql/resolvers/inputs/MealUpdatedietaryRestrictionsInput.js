"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdatedietaryRestrictionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let MealUpdatedietaryRestrictionsInput = class MealUpdatedietaryRestrictionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatedietaryRestrictionsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatedietaryRestrictionsInput.prototype, "push", void 0);
MealUpdatedietaryRestrictionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdatedietaryRestrictionsInput", {
        isAbstract: true
    })
], MealUpdatedietaryRestrictionsInput);
exports.MealUpdatedietaryRestrictionsInput = MealUpdatedietaryRestrictionsInput;
