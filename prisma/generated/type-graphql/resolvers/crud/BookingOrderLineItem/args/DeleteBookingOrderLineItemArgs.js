"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemWhereUniqueInput_1 = require("../../../inputs/BookingOrderLineItemWhereUniqueInput");
let DeleteBookingOrderLineItemArgs = class DeleteBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], DeleteBookingOrderLineItemArgs.prototype, "where", void 0);
DeleteBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteBookingOrderLineItemArgs);
exports.DeleteBookingOrderLineItemArgs = DeleteBookingOrderLineItemArgs;
