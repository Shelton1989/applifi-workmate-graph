"use strict";
var MealItemWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MealItemOptionListRelationFilter_1 = require("../inputs/MealItemOptionListRelationFilter");
const MealListRelationFilter_1 = require("../inputs/MealListRelationFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
let MealItemWhereInput = MealItemWhereInput_1 = class MealItemWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealListRelationFilter_1.MealListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealListRelationFilter_1.MealListRelationFilter)
], MealItemWhereInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], MealItemWhereInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemWhereInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionListRelationFilter_1.MealItemOptionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionListRelationFilter_1.MealItemOptionListRelationFilter)
], MealItemWhereInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], MealItemWhereInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealItemWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealItemWhereInput.prototype, "updatedAt", void 0);
MealItemWhereInput = MealItemWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemWhereInput", {
        isAbstract: true
    })
], MealItemWhereInput);
exports.MealItemWhereInput = MealItemWhereInput;
