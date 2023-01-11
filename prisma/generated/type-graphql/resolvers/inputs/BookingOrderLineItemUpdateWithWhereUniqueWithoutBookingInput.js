"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpdateWithoutBookingInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput = class BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateWithoutBookingInput_1.BookingOrderLineItemUpdateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateWithoutBookingInput_1.BookingOrderLineItemUpdateWithoutBookingInput)
], BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput.prototype, "data", void 0);
BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput);
exports.BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput = BookingOrderLineItemUpdateWithWhereUniqueWithoutBookingInput;
