"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemUpdateManyMutationInput_1 = require("../../../inputs/MealItemUpdateManyMutationInput");
const MealItemWhereInput_1 = require("../../../inputs/MealItemWhereInput");
let UpdateManyMealItemArgs = class UpdateManyMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateManyMutationInput_1.MealItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateManyMutationInput_1.MealItemUpdateManyMutationInput)
], UpdateManyMealItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], UpdateManyMealItemArgs.prototype, "where", void 0);
UpdateManyMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMealItemArgs);
exports.UpdateManyMealItemArgs = UpdateManyMealItemArgs;
