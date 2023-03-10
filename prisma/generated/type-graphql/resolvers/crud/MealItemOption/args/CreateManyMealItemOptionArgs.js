"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateManyInput_1 = require("../../../inputs/MealItemOptionCreateManyInput");
let CreateManyMealItemOptionArgs = class CreateManyMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionCreateManyInput_1.MealItemOptionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyMealItemOptionArgs.prototype, "data", void 0);
CreateManyMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyMealItemOptionArgs);
exports.CreateManyMealItemOptionArgs = CreateManyMealItemOptionArgs;
