"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput");
const ExperienceCreateNestedOneWithoutBookingsInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutBookingsInput");
const TransactionCreateNestedManyWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateNestedManyWithoutBookingOrderInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let BookingOrderCreateWithoutTenantInput = class BookingOrderCreateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTenantInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutTenantInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTenantInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutTenantInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput)
], BookingOrderCreateWithoutTenantInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutBookingOrderInput_1.TransactionCreateNestedManyWithoutBookingOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutBookingOrderInput_1.TransactionCreateNestedManyWithoutBookingOrderInput)
], BookingOrderCreateWithoutTenantInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutTenantInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutTenantInput.prototype, "updatedAt", void 0);
BookingOrderCreateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateWithoutTenantInput", {
        isAbstract: true
    })
], BookingOrderCreateWithoutTenantInput);
exports.BookingOrderCreateWithoutTenantInput = BookingOrderCreateWithoutTenantInput;
