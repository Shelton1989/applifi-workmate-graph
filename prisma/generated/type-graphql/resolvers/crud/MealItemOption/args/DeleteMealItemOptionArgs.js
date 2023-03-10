"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionWhereUniqueInput_1 = require("../../../inputs/MealItemOptionWhereUniqueInput");
let DeleteMealItemOptionArgs = class DeleteMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], DeleteMealItemOptionArgs.prototype, "where", void 0);
DeleteMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteMealItemOptionArgs);
exports.DeleteMealItemOptionArgs = DeleteMealItemOptionArgs;
