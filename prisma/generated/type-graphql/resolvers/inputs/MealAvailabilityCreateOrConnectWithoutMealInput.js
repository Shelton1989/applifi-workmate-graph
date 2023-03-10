"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityCreateOrConnectWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateWithoutMealInput_1 = require("../inputs/MealAvailabilityCreateWithoutMealInput");
const MealAvailabilityWhereUniqueInput_1 = require("../inputs/MealAvailabilityWhereUniqueInput");
let MealAvailabilityCreateOrConnectWithoutMealInput = class MealAvailabilityCreateOrConnectWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], MealAvailabilityCreateOrConnectWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateWithoutMealInput_1.MealAvailabilityCreateWithoutMealInput)
], MealAvailabilityCreateOrConnectWithoutMealInput.prototype, "create", void 0);
MealAvailabilityCreateOrConnectWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityCreateOrConnectWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityCreateOrConnectWithoutMealInput);
exports.MealAvailabilityCreateOrConnectWithoutMealInput = MealAvailabilityCreateOrConnectWithoutMealInput;
