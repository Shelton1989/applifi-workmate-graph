"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderLineItemUpdateWithoutLineItemPriceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/BookingOrderUpdateOneRequiredWithoutItemsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let BookingOrderLineItemUpdateWithoutLineItemPriceInput = class BookingOrderLineItemUpdateWithoutLineItemPriceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutLineItemPriceInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutLineItemPriceInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderUpdateOneRequiredWithoutItemsInput_1.BookingOrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderUpdateOneRequiredWithoutItemsInput_1.BookingOrderUpdateOneRequiredWithoutItemsInput)
], BookingOrderLineItemUpdateWithoutLineItemPriceInput.prototype, "Booking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutLineItemPriceInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderLineItemUpdateWithoutLineItemPriceInput.prototype, "updatedAt", void 0);
BookingOrderLineItemUpdateWithoutLineItemPriceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderLineItemUpdateWithoutLineItemPriceInput", {
        isAbstract: true
    })
], BookingOrderLineItemUpdateWithoutLineItemPriceInput);
exports.BookingOrderLineItemUpdateWithoutLineItemPriceInput = BookingOrderLineItemUpdateWithoutLineItemPriceInput;
