"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateInput_1 = require("../../../inputs/MealItemCreateInput");
const MealItemUpdateInput_1 = require("../../../inputs/MealItemUpdateInput");
const MealItemWhereUniqueInput_1 = require("../../../inputs/MealItemWhereUniqueInput");
let UpsertMealItemArgs = class UpsertMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], UpsertMealItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateInput_1.MealItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemCreateInput_1.MealItemCreateInput)
], UpsertMealItemArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateInput_1.MealItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", MealItemUpdateInput_1.MealItemUpdateInput)
], UpsertMealItemArgs.prototype, "update", void 0);
UpsertMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertMealItemArgs);
exports.UpsertMealItemArgs = UpsertMealItemArgs;
