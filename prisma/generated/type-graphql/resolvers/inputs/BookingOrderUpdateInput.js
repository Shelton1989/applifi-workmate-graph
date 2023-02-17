"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderLineItemUpdateManyWithoutBookingInput_1 = require("../inputs/BookingOrderLineItemUpdateManyWithoutBookingInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput");
const EnumPAYMENT_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput");
const ExperienceUpdateOneRequiredWithoutBookingsInput_1 = require("../inputs/ExperienceUpdateOneRequiredWithoutBookingsInput");
const TenantUpdateOneRequiredWithoutBookingOrdersInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutBookingOrdersInput");
const TransactionUpdateManyWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateManyWithoutBookingOrderInput");
const UserUpdateOneRequiredWithoutBookingsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBookingsInput");
let BookingOrderUpdateInput = class BookingOrderUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateOneRequiredWithoutBookingsInput_1.ExperienceUpdateOneRequiredWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateOneRequiredWithoutBookingsInput_1.ExperienceUpdateOneRequiredWithoutBookingsInput)
], BookingOrderUpdateInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput)
], BookingOrderUpdateInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutBookingOrdersInput_1.TenantUpdateOneRequiredWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutBookingOrdersInput_1.TenantUpdateOneRequiredWithoutBookingOrdersInput)
], BookingOrderUpdateInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderLineItemUpdateManyWithoutBookingInput_1.BookingOrderLineItemUpdateManyWithoutBookingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderLineItemUpdateManyWithoutBookingInput_1.BookingOrderLineItemUpdateManyWithoutBookingInput)
], BookingOrderUpdateInput.prototype, "Items", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutBookingOrderInput_1.TransactionUpdateManyWithoutBookingOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutBookingOrderInput_1.TransactionUpdateManyWithoutBookingOrderInput)
], BookingOrderUpdateInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateInput.prototype, "updatedAt", void 0);
BookingOrderUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateInput", {
        isAbstract: true
    })
], BookingOrderUpdateInput);
exports.BookingOrderUpdateInput = BookingOrderUpdateInput;
