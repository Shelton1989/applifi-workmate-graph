"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput");
const ExperienceCreateNestedOneWithoutBookingsInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutBookingsInput");
const TenantCreateNestedOneWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutBookingOrdersInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let BookingOrderCreateWithoutTransactionsInput = class BookingOrderCreateWithoutTransactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutTransactionsInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTransactionsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutTransactionsInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput)
], BookingOrderCreateWithoutTransactionsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput)
], BookingOrderCreateWithoutTransactionsInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTransactionsInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutTransactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutTransactionsInput.prototype, "updatedAt", void 0);
BookingOrderCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateWithoutTransactionsInput", {
        isAbstract: true
    })
], BookingOrderCreateWithoutTransactionsInput);
exports.BookingOrderCreateWithoutTransactionsInput = BookingOrderCreateWithoutTransactionsInput;
