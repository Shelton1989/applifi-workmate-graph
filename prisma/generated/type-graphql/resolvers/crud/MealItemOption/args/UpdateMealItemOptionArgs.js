"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionUpdateInput_1 = require("../../../inputs/MealItemOptionUpdateInput");
const MealItemOptionWhereUniqueInput_1 = require("../../../inputs/MealItemOptionWhereUniqueInput");
let UpdateMealItemOptionArgs = class UpdateMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateInput_1.MealItemOptionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateInput_1.MealItemOptionUpdateInput)
], UpdateMealItemOptionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], UpdateMealItemOptionArgs.prototype, "where", void 0);
UpdateMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateMealItemOptionArgs);
exports.UpdateMealItemOptionArgs = UpdateMealItemOptionArgs;
