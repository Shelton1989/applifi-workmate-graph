"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateWithoutItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput");
const EnumPAYMENT_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput");
const ExperienceUpdateOneRequiredWithoutBookingsInput_1 = require("../inputs/ExperienceUpdateOneRequiredWithoutBookingsInput");
const TenantUpdateOneRequiredWithoutBookingOrdersInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutBookingOrdersInput");
const TransactionUpdateManyWithoutBookingOrderInput_1 = require("../inputs/TransactionUpdateManyWithoutBookingOrderInput");
const UserUpdateOneRequiredWithoutBookingsInput_1 = require("../inputs/UserUpdateOneRequiredWithoutBookingsInput");
let BookingOrderUpdateWithoutItemsInput = class BookingOrderUpdateWithoutItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ExperienceUpdateOneRequiredWithoutBookingsInput_1.ExperienceUpdateOneRequiredWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ExperienceUpdateOneRequiredWithoutBookingsInput_1.ExperienceUpdateOneRequiredWithoutBookingsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "Experience", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutBookingsInput_1.UserUpdateOneRequiredWithoutBookingsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "Buyer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutBookingOrdersInput_1.TenantUpdateOneRequiredWithoutBookingOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutBookingOrdersInput_1.TenantUpdateOneRequiredWithoutBookingOrdersInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutBookingOrderInput_1.TransactionUpdateManyWithoutBookingOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutBookingOrderInput_1.TransactionUpdateManyWithoutBookingOrderInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "Transactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateWithoutItemsInput.prototype, "updatedAt", void 0);
BookingOrderUpdateWithoutItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateWithoutItemsInput", {
        isAbstract: true
    })
], BookingOrderUpdateWithoutItemsInput);
exports.BookingOrderUpdateWithoutItemsInput = BookingOrderUpdateWithoutItemsInput;
