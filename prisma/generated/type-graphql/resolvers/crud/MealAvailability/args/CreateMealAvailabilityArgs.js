"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateInput_1 = require("../../../inputs/MealAvailabilityCreateInput");
let CreateMealAvailabilityArgs = class CreateMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateInput_1.MealAvailabilityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateInput_1.MealAvailabilityCreateInput)
], CreateMealAvailabilityArgs.prototype, "data", void 0);
CreateMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMealAvailabilityArgs);
exports.CreateMealAvailabilityArgs = CreateMealAvailabilityArgs;
