"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateInput_1 = require("../../../inputs/MealItemCreateInput");
let CreateMealItemArgs = class CreateMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateInput_1.MealItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateInput_1.MealItemCreateInput)
], CreateMealItemArgs.prototype, "data", void 0);
CreateMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateMealItemArgs);
exports.CreateMealItemArgs = CreateMealItemArgs;
