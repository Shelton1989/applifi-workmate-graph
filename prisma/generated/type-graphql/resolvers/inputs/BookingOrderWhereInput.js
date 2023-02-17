"use strict";
var BookingOrderWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemListRelationFilter_1 = require("../inputs/BookingOrderLineItemListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumBOOKING_ORDER_STATUSFilter_1 = require("../inputs/EnumBOOKING_ORDER_STATUSFilter");
const EnumPAYMENT_STATUSFilter_1 = require("../inputs/EnumPAYMENT_STATUSFilter");
const ExperienceRelationFilter_1 = require("../inputs/ExperienceRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TenantRelationFilter_1 = require("../inputs/TenantRelationFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let BookingOrderWhereInput = BookingOrderWhereInput_1 = class BookingOrderWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceRelationFilter_1.ExperienceRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceRelationFilter_1.ExperienceRelationFilter)
], BookingOrderWhereInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderWhereInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBOOKING_ORDER_STATUSFilter_1.EnumBOOKING_ORDER_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBOOKING_ORDER_STATUSFilter_1.EnumBOOKING_ORDER_STATUSFilter)
], BookingOrderWhereInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], BookingOrderWhereInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderWhereInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantRelationFilter_1.TenantRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantRelationFilter_1.TenantRelationFilter)
], BookingOrderWhereInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BookingOrderWhereInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemListRelationFilter_1.BookingOrderLineItemListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemListRelationFilter_1.BookingOrderLineItemListRelationFilter)
], BookingOrderWhereInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], BookingOrderWhereInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_STATUSFilter_1.EnumPAYMENT_STATUSFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_STATUSFilter_1.EnumPAYMENT_STATUSFilter)
], BookingOrderWhereInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookingOrderWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], BookingOrderWhereInput.prototype, "updatedAt", void 0);
BookingOrderWhereInput = BookingOrderWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderWhereInput", {
        isAbstract: true
    })
], BookingOrderWhereInput);
exports.BookingOrderWhereInput = BookingOrderWhereInput;
