"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateManyInput_1 = require("../../../inputs/MealItemCreateManyInput");
let CreateManyMealItemArgs = class CreateManyMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemCreateManyInput_1.MealItemCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMealItemArgs.prototype, "data", void 0);
CreateManyMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMealItemArgs);
exports.CreateManyMealItemArgs = CreateManyMealItemArgs;
