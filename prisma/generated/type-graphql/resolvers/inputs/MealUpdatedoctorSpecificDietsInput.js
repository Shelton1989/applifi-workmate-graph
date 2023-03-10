"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdatedoctorSpecificDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let MealUpdatedoctorSpecificDietsInput = class MealUpdatedoctorSpecificDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatedoctorSpecificDietsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatedoctorSpecificDietsInput.prototype, "push", void 0);
MealUpdatedoctorSpecificDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdatedoctorSpecificDietsInput", {
        isAbstract: true
    })
], MealUpdatedoctorSpecificDietsInput);
exports.MealUpdatedoctorSpecificDietsInput = MealUpdatedoctorSpecificDietsInput;
