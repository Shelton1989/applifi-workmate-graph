"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateInput_1 = require("../../../inputs/MealAvailabilityCreateInput");
const MealAvailabilityUpdateInput_1 = require("../../../inputs/MealAvailabilityUpdateInput");
const MealAvailabilityWhereUniqueInput_1 = require("../../../inputs/MealAvailabilityWhereUniqueInput");
let UpsertMealAvailabilityArgs = class UpsertMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereUniqueInput_1.MealAvailabilityWhereUniqueInput)
], UpsertMealAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityCreateInput_1.MealAvailabilityCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityCreateInput_1.MealAvailabilityCreateInput)
], UpsertMealAvailabilityArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityUpdateInput_1.MealAvailabilityUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealAvailabilityUpdateInput_1.MealAvailabilityUpdateInput)
], UpsertMealAvailabilityArgs.prototype, "update", void 0);
UpsertMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMealAvailabilityArgs);
exports.UpsertMealAvailabilityArgs = UpsertMealAvailabilityArgs;
