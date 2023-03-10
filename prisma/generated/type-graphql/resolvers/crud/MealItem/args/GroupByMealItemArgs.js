"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOrderByWithAggregationInput_1 = require("../../../inputs/MealItemOrderByWithAggregationInput");
const MealItemScalarWhereWithAggregatesInput_1 = require("../../../inputs/MealItemScalarWhereWithAggregatesInput");
const MealItemWhereInput_1 = require("../../../inputs/MealItemWhereInput");
const MealItemScalarFieldEnum_1 = require("../../../../enums/MealItemScalarFieldEnum");
let GroupByMealItemArgs = class GroupByMealItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereInput_1.MealItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereInput_1.MealItemWhereInput)
], GroupByMealItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOrderByWithAggregationInput_1.MealItemOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemScalarFieldEnum_1.MealItemScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealItemArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemScalarWhereWithAggregatesInput_1.MealItemScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemScalarWhereWithAggregatesInput_1.MealItemScalarWhereWithAggregatesInput)
], GroupByMealItemArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealItemArgs.prototype, "skip", void 0);
GroupByMealItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMealItemArgs);
exports.GroupByMealItemArgs = GroupByMealItemArgs;
