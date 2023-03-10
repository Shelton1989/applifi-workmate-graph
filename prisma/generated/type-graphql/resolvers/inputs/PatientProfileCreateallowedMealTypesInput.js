"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProfileCreateallowedMealTypesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MEAL_TYPES_1 = require("../../enums/MEAL_TYPES");
let PatientProfileCreateallowedMealTypesInput = class PatientProfileCreateallowedMealTypesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MEAL_TYPES_1.MEAL_TYPES], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], PatientProfileCreateallowedMealTypesInput.prototype, "set", void 0);
PatientProfileCreateallowedMealTypesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PatientProfileCreateallowedMealTypesInput", {
        isAbstract: true
    })
], PatientProfileCreateallowedMealTypesInput);
exports.PatientProfileCreateallowedMealTypesInput = PatientProfileCreateallowedMealTypesInput;
