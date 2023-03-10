"use strict";
var MealItemOptionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const MealItemRelationFilter_1 = require("../inputs/MealItemRelationFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let MealItemOptionWhereInput = MealItemOptionWhereInput_1 = class MealItemOptionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [MealItemOptionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], MealItemOptionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemOptionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemRelationFilter_1.MealItemRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemRelationFilter_1.MealItemRelationFilter)
], MealItemOptionWhereInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemOptionWhereInput.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemOptionWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], MealItemOptionWhereInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], MealItemOptionWhereInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealItemOptionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MealItemOptionWhereInput.prototype, "updatedAt", void 0);
MealItemOptionWhereInput = MealItemOptionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionWhereInput", {
        isAbstract: true
    })
], MealItemOptionWhereInput);
exports.MealItemOptionWhereInput = MealItemOptionWhereInput;
