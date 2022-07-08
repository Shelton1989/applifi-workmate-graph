"use strict";
var OrderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressRelationFilter_1 = require("../inputs/AddressRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumORDER_STATUSFilter_1 = require("../inputs/EnumORDER_STATUSFilter");
const OrderLineItemListRelationFilter_1 = require("../inputs/OrderLineItemListRelationFilter");
const ShippingMethodRelationFilter_1 = require("../inputs/ShippingMethodRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
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
    TypeGraphQL.Field(_type => EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumORDER_STATUSFilter_1.EnumORDER_STATUSFilter)
], OrderWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressRelationFilter_1.AddressRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressRelationFilter_1.AddressRelationFilter)
], OrderWhereInput.prototype, "SelectedShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "selectedShippingAddressId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShippingMethodRelationFilter_1.ShippingMethodRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShippingMethodRelationFilter_1.ShippingMethodRelationFilter)
], OrderWhereInput.prototype, "SelectedShippingMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "selectedShippingMethodId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], OrderWhereInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], OrderWhereInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], OrderWhereInput.prototype, "Seller", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OrderWhereInput.prototype, "sellerId", void 0);
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
