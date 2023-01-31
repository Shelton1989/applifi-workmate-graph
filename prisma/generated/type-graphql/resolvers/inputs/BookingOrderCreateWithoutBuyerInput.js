"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemCreateNestedManyWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput");
const ExperienceCreateNestedOneWithoutBookingsInput_1 = require("../inputs/ExperienceCreateNestedOneWithoutBookingsInput");
const TenantCreateNestedOneWithoutBookingOrdersInput_1 = require("../inputs/TenantCreateNestedOneWithoutBookingOrdersInput");
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let BookingOrderCreateWithoutBuyerInput = class BookingOrderCreateWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutBuyerInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ExperienceCreateNestedOneWithoutBookingsInput_1.ExperienceCreateNestedOneWithoutBookingsInput)
], BookingOrderCreateWithoutBuyerInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutBuyerInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutBuyerInput.prototype, "SelectedPaymentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BookingOrderCreateWithoutBuyerInput.prototype, "stripePaymentReference", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutBookingOrdersInput_1.TenantCreateNestedOneWithoutBookingOrdersInput)
], BookingOrderCreateWithoutBuyerInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemCreateNestedManyWithoutBookingInput_1.BookingOrderLineItemCreateNestedManyWithoutBookingInput)
], BookingOrderCreateWithoutBuyerInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutBuyerInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], BookingOrderCreateWithoutBuyerInput.prototype, "updatedAt", void 0);
BookingOrderCreateWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderCreateWithoutBuyerInput);
exports.BookingOrderCreateWithoutBuyerInput = BookingOrderCreateWithoutBuyerInput;
