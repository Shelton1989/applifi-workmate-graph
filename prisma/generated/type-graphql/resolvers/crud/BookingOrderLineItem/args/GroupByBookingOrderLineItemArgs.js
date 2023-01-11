"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemOrderByWithAggregationInput_1 = require("../../../inputs/BookingOrderLineItemOrderByWithAggregationInput");
const BookingOrderLineItemScalarWhereWithAggregatesInput_1 = require("../../../inputs/BookingOrderLineItemScalarWhereWithAggregatesInput");
const BookingOrderLineItemWhereInput_1 = require("../../../inputs/BookingOrderLineItemWhereInput");
const BookingOrderLineItemScalarFieldEnum_1 = require("../../../../enums/BookingOrderLineItemScalarFieldEnum");
let GroupByBookingOrderLineItemArgs = class GroupByBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], GroupByBookingOrderLineItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemOrderByWithAggregationInput_1.BookingOrderLineItemOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookingOrderLineItemArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderLineItemScalarFieldEnum_1.BookingOrderLineItemScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookingOrderLineItemArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemScalarWhereWithAggregatesInput_1.BookingOrderLineItemScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemScalarWhereWithAggregatesInput_1.BookingOrderLineItemScalarWhereWithAggregatesInput)
], GroupByBookingOrderLineItemArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookingOrderLineItemArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookingOrderLineItemArgs.prototype, "skip", void 0);
GroupByBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBookingOrderLineItemArgs);
exports.GroupByBookingOrderLineItemArgs = GroupByBookingOrderLineItemArgs;
