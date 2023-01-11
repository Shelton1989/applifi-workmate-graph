"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBookingOrderArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderOrderByWithAggregationInput_1 = require("../../../inputs/BookingOrderOrderByWithAggregationInput");
const BookingOrderScalarWhereWithAggregatesInput_1 = require("../../../inputs/BookingOrderScalarWhereWithAggregatesInput");
const BookingOrderWhereInput_1 = require("../../../inputs/BookingOrderWhereInput");
const BookingOrderScalarFieldEnum_1 = require("../../../../enums/BookingOrderScalarFieldEnum");
let GroupByBookingOrderArgs = class GroupByBookingOrderArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderWhereInput_1.BookingOrderWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderWhereInput_1.BookingOrderWhereInput)
], GroupByBookingOrderArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderOrderByWithAggregationInput_1.BookingOrderOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookingOrderArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderScalarFieldEnum_1.BookingOrderScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBookingOrderArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderScalarWhereWithAggregatesInput_1.BookingOrderScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderScalarWhereWithAggregatesInput_1.BookingOrderScalarWhereWithAggregatesInput)
], GroupByBookingOrderArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookingOrderArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBookingOrderArgs.prototype, "skip", void 0);
GroupByBookingOrderArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBookingOrderArgs);
exports.GroupByBookingOrderArgs = GroupByBookingOrderArgs;
