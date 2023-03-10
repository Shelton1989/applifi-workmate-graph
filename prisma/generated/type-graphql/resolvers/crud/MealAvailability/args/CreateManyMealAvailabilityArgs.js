"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityCreateManyInput_1 = require("../../../inputs/MealAvailabilityCreateManyInput");
let CreateManyMealAvailabilityArgs = class CreateManyMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityCreateManyInput_1.MealAvailabilityCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMealAvailabilityArgs.prototype, "data", void 0);
CreateManyMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMealAvailabilityArgs);
exports.CreateManyMealAvailabilityArgs = CreateManyMealAvailabilityArgs;
