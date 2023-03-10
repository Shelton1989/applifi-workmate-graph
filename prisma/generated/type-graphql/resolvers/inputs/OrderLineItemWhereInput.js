"use strict";
var OrderLineItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MealItemOptionRelationFilter_1 = require("../inputs/MealItemOptionRelationFilter");
const MealItemRelationFilter_1 = require("../inputs/MealItemRelationFilter");
const OrderRelationFilter_1 = require("../inputs/OrderRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let OrderLineItemWhereInput = OrderLineItemWhereInput_1 = class OrderLineItemWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderLineItemWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderLineItemWhereInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderLineItemWhereInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemRelationFilter_1.MealItemRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemRelationFilter_1.MealItemRelationFilter)
], OrderLineItemWhereInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderLineItemWhereInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionRelationFilter_1.MealItemOptionRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionRelationFilter_1.MealItemOptionRelationFilter)
], OrderLineItemWhereInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderLineItemWhereInput.prototype, "mealItemOptionId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderRelationFilter_1.OrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderRelationFilter_1.OrderRelationFilter)
], OrderLineItemWhereInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderLineItemWhereInput.prototype, "bookingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderLineItemWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderLineItemWhereInput.prototype, "updatedAt", void 0);
OrderLineItemWhereInput = OrderLineItemWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemWhereInput", {
        isAbstract: true
    })
], OrderLineItemWhereInput);
exports.OrderLineItemWhereInput = OrderLineItemWhereInput;
