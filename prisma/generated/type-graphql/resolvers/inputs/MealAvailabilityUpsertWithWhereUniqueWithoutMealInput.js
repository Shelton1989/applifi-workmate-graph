"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityUpsertWithWhereUniqueWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateWithoutMealInput");
const MealAvailabilityUpdateWithoutMealInput_1 = require("../inputs/MealAvailabilityUpdateWithoutMealInput");
const MealAvailabilityWhereUniqueInput_1 = require("../inputs/MealAvailabilityWhereUniqueInput");
let MealAvailabilityUpsertWithWhereUniqueWithoutMealInput = class MealAvailabilityUpsertWithWhereUniqueWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], MealAvailabilityUpsertWithWhereUniqueWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateWithoutMealInput_1.MealAvailabilityUpdateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateWithoutMealInput_1.MealAvailabilityUpdateWithoutMealInput)
], MealAvailabilityUpsertWithWhereUniqueWithoutMealInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput)
], MealAvailabilityUpsertWithWhereUniqueWithoutMealInput.prototype, "create", void 0);
MealAvailabilityUpsertWithWhereUniqueWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityUpsertWithWhereUniqueWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityUpsertWithWhereUniqueWithoutMealInput);
exports.MealAvailabilityUpsertWithWhereUniqueWithoutMealInput = MealAvailabilityUpsertWithWhereUniqueWithoutMealInput;
