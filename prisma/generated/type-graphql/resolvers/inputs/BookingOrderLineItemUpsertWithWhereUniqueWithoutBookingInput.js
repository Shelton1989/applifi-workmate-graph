"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutBookingInput");
const BookingOrderLineItemUpdateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpdateWithoutBookingInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput = class BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateWithoutBookingInput_1.BookingOrderLineItemUpdateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateWithoutBookingInput_1.BookingOrderLineItemUpdateWithoutBookingInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput)
], BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput.prototype, "create", void 0);
BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput);
exports.BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput = BookingOrderLineItemUpsertWithWhereUniqueWithoutBookingInput;
