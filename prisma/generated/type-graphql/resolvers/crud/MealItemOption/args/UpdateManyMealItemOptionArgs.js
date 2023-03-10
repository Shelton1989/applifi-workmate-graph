"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionUpdateManyMutationInput_1 = require("../../../inputs/MealItemOptionUpdateManyMutationInput");
const MealItemOptionWhereInput_1 = require("../../../inputs/MealItemOptionWhereInput");
let UpdateManyMealItemOptionArgs = class UpdateManyMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateManyMutationInput_1.MealItemOptionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateManyMutationInput_1.MealItemOptionUpdateManyMutationInput)
], UpdateManyMealItemOptionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], UpdateManyMealItemOptionArgs.prototype, "where", void 0);
UpdateManyMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyMealItemOptionArgs);
exports.UpdateManyMealItemOptionArgs = UpdateManyMealItemOptionArgs;
