"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionWhereInput_1 = require("../../../inputs/MealItemOptionWhereInput");
let DeleteManyMealItemOptionArgs = class DeleteManyMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], DeleteManyMealItemOptionArgs.prototype, "where", void 0);
DeleteManyMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyMealItemOptionArgs);
exports.DeleteManyMealItemOptionArgs = DeleteManyMealItemOptionArgs;
