"use strict";
var OrderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumORDER_STATUSFilter_1 = require("../inputs/EnumORDER_STATUSFilter");
const MealRelationFilter_1 = require("../inputs/MealRelationFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let OrderWhereInput = OrderWhereInput_1 = class OrderWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealRelationFilter_1.MealRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealRelationFilter_1.MealRelationFilter)
], OrderWhereInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "mealId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter)
], OrderWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], OrderWhereInput.prototype, "Patient", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "patientId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], OrderWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemListRelationFilter_1.OrderLineItemListRelationFilter)
], OrderWhereInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OrderWhereInput.prototype, "updatedAt", void 0);
OrderWhereInput = OrderWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderWhereInput", {
        isAbstract: true
    })
], OrderWhereInput);
exports.OrderWhereInput = OrderWhereInput;
