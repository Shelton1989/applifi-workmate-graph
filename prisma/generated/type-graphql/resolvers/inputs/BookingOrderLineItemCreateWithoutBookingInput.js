"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemCreateWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PriceCreateNestedOneWithoutBookingLineItemsInput_1 = require("../inputs/PriceCreateNestedOneWithoutBookingLineItemsInput");
let BookingOrderLineItemCreateWithoutBookingInput = class BookingOrderLineItemCreateWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceCreateNestedOneWithoutBookingLineItemsInput_1.PriceCreateNestedOneWithoutBookingLineItemsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PriceCreateNestedOneWithoutBookingLineItemsInput_1.PriceCreateNestedOneWithoutBookingLineItemsInput)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderLineItemCreateWithoutBookingInput.prototype, "updatedAt", void 0);
BookingOrderLineItemCreateWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemCreateWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemCreateWithoutBookingInput);
exports.BookingOrderLineItemCreateWithoutBookingInput = BookingOrderLineItemCreateWithoutBookingInput;
