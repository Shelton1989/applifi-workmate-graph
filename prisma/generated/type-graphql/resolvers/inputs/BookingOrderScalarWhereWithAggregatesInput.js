"use strict";
var BookingOrderScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const EnumBOOKING_ORDER_STATUSWithAggregatesFilter_1 = require("../inputs/EnumBOOKING_ORDER_STATUSWithAggregatesFilter");
const EnumPAYMENT_STATUSWithAggregatesFilter_1 = require("../inputs/EnumPAYMENT_STATUSWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let BookingOrderScalarWhereWithAggregatesInput = BookingOrderScalarWhereWithAggregatesInput_1 = class BookingOrderScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "experienceId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBOOKING_ORDER_STATUSWithAggregatesFilter_1.EnumBOOKING_ORDER_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBOOKING_ORDER_STATUSWithAggregatesFilter_1.EnumBOOKING_ORDER_STATUSWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "buyerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "tenantId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_STATUSWithAggregatesFilter_1.EnumPAYMENT_STATUSWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_STATUSWithAggregatesFilter_1.EnumPAYMENT_STATUSWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], BookingOrderScalarWhereWithAggregatesInput.prototype, "updatedAt", void 0);
BookingOrderScalarWhereWithAggregatesInput = BookingOrderScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], BookingOrderScalarWhereWithAggregatesInput);
exports.BookingOrderScalarWhereWithAggregatesInput = BookingOrderScalarWhereWithAggregatesInput;
