"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemScalarWhereInput_1 = require("../inputs/BookingOrderLineItemScalarWhereInput");
const BookingOrderLineItemUpdateManyMutationInput_1 = require("../inputs/BookingOrderLineItemUpdateManyMutationInput");
let BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput = class BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemScalarWhereInput_1.BookingOrderLineItemScalarWhereInput)
], BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateManyMutationInput_1.BookingOrderLineItemUpdateManyMutationInput)
], BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput.prototype, "data", void 0);
BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput);
exports.BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput = BookingOrderLineItemUpdateManyWithWhereWithoutBookingInput;
