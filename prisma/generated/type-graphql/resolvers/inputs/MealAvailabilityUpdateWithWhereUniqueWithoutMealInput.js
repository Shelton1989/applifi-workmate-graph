"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityUpdateWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityUpdateWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateWithoutMealInput");
const MealAvailabilityWhereUniqueInput_1 = require("../inputs/MealAvailabilityWhereUniqueInput");
let MealAvailabilityUpdateWithWhereUniqueWithoutMealInput = class MealAvailabilityUpdateWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], MealAvailabilityUpdateWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateWithoutMealInput_1.MealAvailabilityUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateWithoutMealInput_1.MealAvailabilityUpdateWithoutMealInput)
], MealAvailabilityUpdateWithWhereUniqueWithoutMealInput.prototype, "data", void 0);
MealAvailabilityUpdateWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityUpdateWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityUpdateWithWhereUniqueWithoutMealInput);
exports.MealAvailabilityUpdateWithWhereUniqueWithoutMealInput = MealAvailabilityUpdateWithWhereUniqueWithoutMealInput;
