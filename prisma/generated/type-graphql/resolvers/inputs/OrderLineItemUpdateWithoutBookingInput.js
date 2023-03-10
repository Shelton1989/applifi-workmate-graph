"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutBookingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemOptionUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput");
const MealItemUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpdateOneWithoutOrderLineItemsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let OrderLineItemUpdateWithoutBookingInput = class OrderLineItemUpdateWithoutBookingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutBookingInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutBookingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutBookingInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutBookingInput);
exports.OrderLineItemUpdateWithoutBookingInput = OrderLineItemUpdateWithoutBookingInput;
