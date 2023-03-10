"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityUpdateManyWithWhereWithoutMealInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityScalarWhereInput_1 = require("../inputs/MealAvailabilityScalarWhereInput");
const MealAvailabilityUpdateManyMutationInput_1 = require("../inputs/MealAvailabilityUpdateManyMutationInput");
let MealAvailabilityUpdateManyWithWhereWithoutMealInput = class MealAvailabilityUpdateManyWithWhereWithoutMealInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityScalarWhereInput_1.MealAvailabilityScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityScalarWhereInput_1.MealAvailabilityScalarWhereInput)
], MealAvailabilityUpdateManyWithWhereWithoutMealInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyMutationInput_1.MealAvailabilityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyMutationInput_1.MealAvailabilityUpdateManyMutationInput)
], MealAvailabilityUpdateManyWithWhereWithoutMealInput.prototype, "data", void 0);
MealAvailabilityUpdateManyWithWhereWithoutMealInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityUpdateManyWithWhereWithoutMealInput", {
        isAbstract: true
    })
], MealAvailabilityUpdateManyWithWhereWithoutMealInput);
exports.MealAvailabilityUpdateManyWithWhereWithoutMealInput = MealAvailabilityUpdateManyWithWhereWithoutMealInput;
