"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityUpdateInput_1 = require("../../../inputs/MealAvailabilityUpdateInput");
const MealAvailabilityWhereUniqueInput_1 = require("../../../inputs/MealAvailabilityWhereUniqueInput");
let UpdateMealAvailabilityArgs = class UpdateMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateInput_1.MealAvailabilityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateInput_1.MealAvailabilityUpdateInput)
], UpdateMealAvailabilityArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], UpdateMealAvailabilityArgs.prototype, "where", void 0);
UpdateMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMealAvailabilityArgs);
exports.UpdateMealAvailabilityArgs = UpdateMealAvailabilityArgs;
