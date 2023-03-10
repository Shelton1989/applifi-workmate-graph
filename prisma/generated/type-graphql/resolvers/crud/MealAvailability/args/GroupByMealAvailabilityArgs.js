"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByMealAvailabilityArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealAvailabilityOrderByWithAggregationInput_1 = require("../../../inputs/MealAvailabilityOrderByWithAggregationInput");
const MealAvailabilityScalarWhereWithAggregatesInput_1 = require("../../../inputs/MealAvailabilityScalarWhereWithAggregatesInput");
const MealAvailabilityWhereInput_1 = require("../../../inputs/MealAvailabilityWhereInput");
const MealAvailabilityScalarFieldEnum_1 = require("../../../../enums/MealAvailabilityScalarFieldEnum");
let GroupByMealAvailabilityArgs = class GroupByMealAvailabilityArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityWhereInput_1.MealAvailabilityWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityWhereInput_1.MealAvailabilityWhereInput)
], GroupByMealAvailabilityArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityOrderByWithAggregationInput_1.MealAvailabilityOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealAvailabilityArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealAvailabilityScalarFieldEnum_1.MealAvailabilityScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByMealAvailabilityArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealAvailabilityScalarWhereWithAggregatesInput_1.MealAvailabilityScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealAvailabilityScalarWhereWithAggregatesInput_1.MealAvailabilityScalarWhereWithAggregatesInput)
], GroupByMealAvailabilityArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealAvailabilityArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByMealAvailabilityArgs.prototype, "skip", void 0);
GroupByMealAvailabilityArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByMealAvailabilityArgs);
exports.GroupByMealAvailabilityArgs = GroupByMealAvailabilityArgs;
