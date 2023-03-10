"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityUpdateManyMutationInput_1 = require("../../../inputs/MealAvailabilityUpdateManyMutationInput");
const MealAvailabilityWhereInput_1 = require("../../../inputs/MealAvailabilityWhereInput");
let UpdateManyMealAvailabilityArgs = class UpdateManyMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateManyMutationInput_1.MealAvailabilityUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateManyMutationInput_1.MealAvailabilityUpdateManyMutationInput)
], UpdateManyMealAvailabilityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], UpdateManyMealAvailabilityArgs.prototype, "where", void 0);
UpdateManyMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMealAvailabilityArgs);
exports.UpdateManyMealAvailabilityArgs = UpdateManyMealAvailabilityArgs;
