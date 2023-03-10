"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealItemOptionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionOrderByWithAggregationInput_1 = require("../../../inputs/MealItemOptionOrderByWithAggregationInput");
const MealItemOptionScalarWhereWithAggregatesInput_1 = require("../../../inputs/MealItemOptionScalarWhereWithAggregatesInput");
const MealItemOptionWhereInput_1 = require("../../../inputs/MealItemOptionWhereInput");
const MealItemOptionScalarFieldEnum_1 = require("../../../../enums/MealItemOptionScalarFieldEnum");
let GroupByMealItemOptionArgs = class GroupByMealItemOptionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereInput_1.MealItemOptionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereInput_1.MealItemOptionWhereInput)
], GroupByMealItemOptionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionOrderByWithAggregationInput_1.MealItemOptionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealItemOptionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionScalarFieldEnum_1.MealItemOptionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealItemOptionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionScalarWhereWithAggregatesInput_1.MealItemOptionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionScalarWhereWithAggregatesInput_1.MealItemOptionScalarWhereWithAggregatesInput)
], GroupByMealItemOptionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealItemOptionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealItemOptionArgs.prototype, "skip", void 0);
GroupByMealItemOptionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMealItemOptionArgs);
exports.GroupByMealItemOptionArgs = GroupByMealItemOptionArgs;
