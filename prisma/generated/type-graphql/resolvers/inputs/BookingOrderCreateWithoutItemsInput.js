"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ExperienceCreateNestedOneWithoutBookingsInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutBookingsInput");
const TenantCreateNestedOneWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutBookingOrdersInput");
const TransactionCreateNestedManyWithoutBookingOrderInput_1 = require("../inputs/TransactionCreateNestedManyWithoutBookingOrderInput");
const UserCreateNestedOneWithoutBookingsInput_1 = require("../inputs/UserCreateNestedOneWithoutBookingsInput");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let BookingOrderCreateWithoutItemsInput = class BookingOrderCreateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutItemsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutItemsInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutItemsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutBookingsInput_1.UserCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutItemsInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput)
], BookingOrderCreateWithoutItemsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutBookingOrderInput_1.TransactionCreateNestedManyWithoutBookingOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutBookingOrderInput_1.TransactionCreateNestedManyWithoutBookingOrderInput)
], BookingOrderCreateWithoutItemsInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutItemsInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutItemsInput.prototype, "updatedAt", void 0);
BookingOrderCreateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderCreateWithoutItemsInput);
exports.BookingOrderCreateWithoutItemsInput = BookingOrderCreateWithoutItemsInput;
