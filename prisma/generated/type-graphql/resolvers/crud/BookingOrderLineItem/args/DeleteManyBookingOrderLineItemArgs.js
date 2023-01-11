"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemWhereInput_1 = require("../../../inputs/BookingOrderLineItemWhereInput");
let DeleteManyBookingOrderLineItemArgs = class DeleteManyBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereInput_1.BookingOrderLineItemWhereInput)
], DeleteManyBookingOrderLineItemArgs.prototype, "where", void 0);
DeleteManyBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBookingOrderLineItemArgs);
exports.DeleteManyBookingOrderLineItemArgs = DeleteManyBookingOrderLineItemArgs;
