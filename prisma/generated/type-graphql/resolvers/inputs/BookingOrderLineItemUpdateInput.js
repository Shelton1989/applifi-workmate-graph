"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/BookingOrderUpdateOneRequiredWithoutItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PriceUpdateOneRequiredWithoutBookingLineItemsInput_1 = require("../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput");
let BookingOrderLineItemUpdateInput = class BookingOrderLineItemUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "selectedQuantity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "selectedStartDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "selectedEndDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriceUpdateOneRequiredWithoutBookingLineItemsInput_1.PriceUpdateOneRequiredWithoutBookingLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PriceUpdateOneRequiredWithoutBookingLineItemsInput_1.PriceUpdateOneRequiredWithoutBookingLineItemsInput)
], BookingOrderLineItemUpdateInput.prototype, "LineItemPrice", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateOneRequiredWithoutItemsInput_1.BookingOrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateOneRequiredWithoutItemsInput_1.BookingOrderUpdateOneRequiredWithoutItemsInput)
], BookingOrderLineItemUpdateInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateInput.prototype, "updatedAt", void 0);
BookingOrderLineItemUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateInput);
exports.BookingOrderLineItemUpdateInput = BookingOrderLineItemUpdateInput;