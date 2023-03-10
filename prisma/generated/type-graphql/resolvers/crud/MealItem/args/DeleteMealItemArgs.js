"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemWhereUniqueInput_1 = require("../../../inputs/MealItemWhereUniqueInput");
let DeleteMealItemArgs = class DeleteMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], DeleteMealItemArgs.prototype, "where", void 0);
DeleteMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteMealItemArgs);
exports.DeleteMealItemArgs = DeleteMealItemArgs;
