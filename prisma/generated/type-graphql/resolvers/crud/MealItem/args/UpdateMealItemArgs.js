"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemUpdateInput_1 = require("../../../inputs/MealItemUpdateInput");
const MealItemWhereUniqueInput_1 = require("../../../inputs/MealItemWhereUniqueInput");
let UpdateMealItemArgs = class UpdateMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateInput_1.MealItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateInput_1.MealItemUpdateInput)
], UpdateMealItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], UpdateMealItemArgs.prototype, "where", void 0);
UpdateMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMealItemArgs);
exports.UpdateMealItemArgs = UpdateMealItemArgs;
