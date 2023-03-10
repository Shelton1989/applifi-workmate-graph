"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemWhereInput_1 = require("../../../inputs/MealItemWhereInput");
let DeleteManyMealItemArgs = class DeleteManyMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], DeleteManyMealItemArgs.prototype, "where", void 0);
DeleteManyMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMealItemArgs);
exports.DeleteManyMealItemArgs = DeleteManyMealItemArgs;
