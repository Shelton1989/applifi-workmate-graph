"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateOrConnectWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateWithoutBookingInput");
const BookingOrderLineItemWhereUniqueInput_1 = require("../inputs/BookingOrderLineItemWhereUniqueInput");
let BookingOrderLineItemCreateOrConnectWithoutBookingInput = class BookingOrderLineItemCreateOrConnectWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemWhereUniqueInput_1.BookingOrderLineItemWhereUniqueInput)
], BookingOrderLineItemCreateOrConnectWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateWithoutBookingInput_1.BookingOrderLineItemCreateWithoutBookingInput)
], BookingOrderLineItemCreateOrConnectWithoutBookingInput.prototype, "create", void 0);
BookingOrderLineItemCreateOrConnectWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateOrConnectWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateOrConnectWithoutBookingInput);
exports.BookingOrderLineItemCreateOrConnectWithoutBookingInput = BookingOrderLineItemCreateOrConnectWithoutBookingInput;
