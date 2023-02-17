"use strict";
var TransactionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumPAYMENT_METHODFilter_1 = require("../inputs/EnumPAYMENT_METHODFilter");
const EnumPAYMENT_TYPEFilter_1 = require("../inputs/EnumPAYMENT_TYPEFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let TransactionScalarWhereInput = TransactionScalarWhereInput_1 = class TransactionScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "bookingOrderId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TransactionScalarWhereInput.prototype, "amountInLowestDenomination", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionScalarWhereInput.prototype, "currencyId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionScalarWhereInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], TransactionScalarWhereInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_METHODFilter_1.EnumPAYMENT_METHODFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_METHODFilter_1.EnumPAYMENT_METHODFilter)
], TransactionScalarWhereInput.prototype, "paymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_TYPEFilter_1.EnumPAYMENT_TYPEFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_TYPEFilter_1.EnumPAYMENT_TYPEFilter)
], TransactionScalarWhereInput.prototype, "paymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionScalarWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionScalarWhereInput.prototype, "updatedAt", void 0);
TransactionScalarWhereInput = TransactionScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionScalarWhereInput", {
        isAbstract: true
    })
], TransactionScalarWhereInput);
exports.TransactionScalarWhereInput = TransactionScalarWhereInput;
