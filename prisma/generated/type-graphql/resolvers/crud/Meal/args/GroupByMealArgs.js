"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealOrderByWithAggregationInput_1 = require("../../../inputs/MealOrderByWithAggregationInput");
const MealScalarWhereWithAggregatesInput_1 = require("../../../inputs/MealScalarWhereWithAggregatesInput");
const MealWhereInput_1 = require("../../../inputs/MealWhereInput");
const MealScalarFieldEnum_1 = require("../../../../enums/MealScalarFieldEnum");
let GroupByMealArgs = class GroupByMealArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealWhereInput_1.MealWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealWhereInput_1.MealWhereInput)
], GroupByMealArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealOrderByWithAggregationInput_1.MealOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealScalarFieldEnum_1.MealScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealScalarWhereWithAggregatesInput_1.MealScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealScalarWhereWithAggregatesInput_1.MealScalarWhereWithAggregatesInput)
], GroupByMealArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealArgs.prototype, "skip", void 0);
GroupByMealArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMealArgs);
exports.GroupByMealArgs = GroupByMealArgs;
