"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityWhereInput_1 = require("../../../inputs/MealAvailabilityWhereInput");
let DeleteManyMealAvailabilityArgs = class DeleteManyMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], DeleteManyMealAvailabilityArgs.prototype, "where", void 0);
DeleteManyMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMealAvailabilityArgs);
exports.DeleteManyMealAvailabilityArgs = DeleteManyMealAvailabilityArgs;
