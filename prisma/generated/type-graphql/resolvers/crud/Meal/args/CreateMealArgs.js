"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateInput_1 = require("../../../inputs/MealCreateInput");
let CreateMealArgs = class CreateMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateInput_1.MealCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealCreateInput_1.MealCreateInput)
], CreateMealArgs.prototype, "data", void 0);
CreateMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMealArgs);
exports.CreateMealArgs = CreateMealArgs;
