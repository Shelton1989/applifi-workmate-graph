"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCreateManyMealInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateManyMealInput_1 = require("../inputs/MealAvailabilityCreateManyMealInput");
let MealAvailabilityCreateManyMealInputEnvelope = class MealAvailabilityCreateManyMealInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateManyMealInput_1.MealAvailabilityCreateManyMealInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], MealAvailabilityCreateManyMealInputEnvelope.prototype, "data", void 0);
MealAvailabilityCreateManyMealInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCreateManyMealInputEnvelope", {
        isAbstract: true
    })
], MealAvailabilityCreateManyMealInputEnvelope);
exports.MealAvailabilityCreateManyMealInputEnvelope = MealAvailabilityCreateManyMealInputEnvelope;
