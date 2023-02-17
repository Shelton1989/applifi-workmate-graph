"use strict";
var TransactionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderRelationFilter_1 = require("../inputs/BookingOrderRelationFilter");
const CurrencyRelationFilter_1 = require("../inputs/CurrencyRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumPAYMENT_METHODFilter_1 = require("../inputs/EnumPAYMENT_METHODFilter");
const EnumPAYMENT_TYPEFilter_1 = require("../inputs/EnumPAYMENT_TYPEFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TransactionWhereInput = TransactionWhereInput_1 = class TransactionWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderRelationFilter_1.BookingOrderRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderRelationFilter_1.BookingOrderRelationFilter)
], TransactionWhereInput.prototype, "BookingOrder", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "bookingOrderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TransactionWhereInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrencyRelationFilter_1.CurrencyRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrencyRelationFilter_1.CurrencyRelationFilter)
], TransactionWhereInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionWhereInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_METHODFilter_1.EnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_METHODFilter_1.EnumPAYMENT_METHODFilter)
], TransactionWhereInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_TYPEFilter_1.EnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_TYPEFilter_1.EnumPAYMENT_TYPEFilter)
], TransactionWhereInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "updatedAt", void 0);
TransactionWhereInput = TransactionWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereInput", {
        isAbstract: true
    })
], TransactionWhereInput);
exports.TransactionWhereInput = TransactionWhereInput;
