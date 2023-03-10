"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealUpdatespecialDietsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SPECIAL_DIETS_1 = require("../../enums/SPECIAL_DIETS");
let MealUpdatespecialDietsInput = class MealUpdatespecialDietsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatespecialDietsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SPECIAL_DIETS_1.SPECIAL_DIETS], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealUpdatespecialDietsInput.prototype, "push", void 0);
MealUpdatespecialDietsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealUpdatespecialDietsInput", {
        isAbstract: true
    })
], MealUpdatespecialDietsInput);
exports.MealUpdatespecialDietsInput = MealUpdatespecialDietsInput;
