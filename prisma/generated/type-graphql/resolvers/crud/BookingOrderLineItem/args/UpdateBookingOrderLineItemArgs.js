"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateInput_1 = require("../../../inputs/BookingOrderLineItemUpdateInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../../../inputs/BookingOrderLineItemWhereUniqueInput");
let UpdateBookingOrderLineItemArgs = class UpdateBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateInput_1.BookingOrderLineItemUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateInput_1.BookingOrderLineItemUpdateInput)
], UpdateBookingOrderLineItemArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], UpdateBookingOrderLineItemArgs.prototype, "where", void 0);
UpdateBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateBookingOrderLineItemArgs);
exports.UpdateBookingOrderLineItemArgs = UpdateBookingOrderLineItemArgs;
