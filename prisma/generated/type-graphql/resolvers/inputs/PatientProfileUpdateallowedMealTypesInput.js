"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileUpdateallowedMealTypesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let PatientProfileUpdateallowedMealTypesInput = class PatientProfileUpdateallowedMealTypesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdateallowedMealTypesInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileUpdateallowedMealTypesInput.prototype, "push", void 0);
PatientProfileUpdateallowedMealTypesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileUpdateallowedMealTypesInput", {
        isAbstract: true
    })
], PatientProfileUpdateallowedMealTypesInput);
exports.PatientProfileUpdateallowedMealTypesInput = PatientProfileUpdateallowedMealTypesInput;
