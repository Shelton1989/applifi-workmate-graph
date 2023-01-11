"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateInput_1 = require("../../../inputs/BookingOrderLineItemCreateInput");
const BookingOrderLineItemUpdateInput_1 = require("../../../inputs/BookingOrderLineItemUpdateInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../../../inputs/BookingOrderLineItemWhereUniqueInput");
let UpsertBookingOrderLineItemArgs = class UpsertBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], UpsertBookingOrderLineItemArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateInput_1.BookingOrderLineItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateInput_1.BookingOrderLineItemCreateInput)
], UpsertBookingOrderLineItemArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateInput_1.BookingOrderLineItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateInput_1.BookingOrderLineItemUpdateInput)
], UpsertBookingOrderLineItemArgs.prototype, "update", void 0);
UpsertBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertBookingOrderLineItemArgs);
exports.UpsertBookingOrderLineItemArgs = UpsertBookingOrderLineItemArgs;
