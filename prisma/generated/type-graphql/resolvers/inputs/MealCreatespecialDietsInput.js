"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreatespecialDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let MealCreatespecialDietsInput = class MealCreatespecialDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreatespecialDietsInput.prototype, "set", void 0);
MealCreatespecialDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreatespecialDietsInput", {
        isAbstract: true
    })
], MealCreatespecialDietsInput);
exports.MealCreatespecialDietsInput = MealCreatespecialDietsInput;
