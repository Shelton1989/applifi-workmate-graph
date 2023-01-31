"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriceUpdateOneRequiredWithoutBookingLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput");
let BookingOrderLineItemUpdateWithoutBookingInput = class BookingOrderLineItemUpdateWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutBookingLineItemsInput_1.PriceUpdateOneRequiredWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutBookingLineItemsInput_1.PriceUpdateOneRequiredWithoutBookingLineItemsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutBookingInput.prototype, "updatedAt", void 0);
BookingOrderLineItemUpdateWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateWithoutBookingInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateWithoutBookingInput);
exports.BookingOrderLineItemUpdateWithoutBookingInput = BookingOrderLineItemUpdateWithoutBookingInput;
