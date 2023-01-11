"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemWhereUniqueInput_1 = require("../../../inputs/BookingOrderLineItemWhereUniqueInput");
let FindUniqueBookingOrderLineItemArgs = class FindUniqueBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], FindUniqueBookingOrderLineItemArgs.prototype, "where", void 0);
FindUniqueBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBookingOrderLineItemArgs);
exports.FindUniqueBookingOrderLineItemArgs = FindUniqueBookingOrderLineItemArgs;
