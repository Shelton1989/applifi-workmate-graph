"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealCreateManyInput_1 = require("../../../inputs/MealCreateManyInput");
let CreateManyMealArgs = class CreateManyMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealCreateManyInput_1.MealCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMealArgs.prototype, "data", void 0);
CreateManyMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMealArgs);
exports.CreateManyMealArgs = CreateManyMealArgs;
