"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBookingOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateInput_1 = require("../../../inputs/BookingOrderLineItemCreateInput");
let CreateBookingOrderLineItemArgs = class CreateBookingOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateInput_1.BookingOrderLineItemCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateInput_1.BookingOrderLineItemCreateInput)
], CreateBookingOrderLineItemArgs.prototype, "data", void 0);
CreateBookingOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateBookingOrderLineItemArgs);
exports.CreateBookingOrderLineItemArgs = CreateBookingOrderLineItemArgs;
