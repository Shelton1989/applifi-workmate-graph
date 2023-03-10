"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealCreatedietaryRestrictionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DIETARY_RESTRICTIONS_1 = require("../../enums/DIETARY_RESTRICTIONS");
let MealCreatedietaryRestrictionsInput = class MealCreatedietaryRestrictionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DIETARY_RESTRICTIONS_1.DIETARY_RESTRICTIONS], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealCreatedietaryRestrictionsInput.prototype, "set", void 0);
MealCreatedietaryRestrictionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealCreatedietaryRestrictionsInput", {
        isAbstract: true
    })
], MealCreatedietaryRestrictionsInput);
exports.MealCreatedietaryRestrictionsInput = MealCreatedietaryRestrictionsInput;
