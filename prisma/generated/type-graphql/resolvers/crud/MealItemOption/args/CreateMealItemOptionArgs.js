"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateInput_1 = require("../../../inputs/MealItemOptionCreateInput");
let CreateMealItemOptionArgs = class CreateMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateInput_1.MealItemOptionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateInput_1.MealItemOptionCreateInput)
], CreateMealItemOptionArgs.prototype, "data", void 0);
CreateMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMealItemOptionArgs);
exports.CreateMealItemOptionArgs = CreateMealItemOptionArgs;
