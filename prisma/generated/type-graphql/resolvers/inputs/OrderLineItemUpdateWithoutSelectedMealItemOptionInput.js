"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutSelectedMealItemOptionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpdateOneWithoutOrderLineItemsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
let OrderLineItemUpdateWithoutSelectedMealItemOptionInput = class OrderLineItemUpdateWithoutSelectedMealItemOptionInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutSelectedMealItemOptionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutSelectedMealItemOptionInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutSelectedMealItemOptionInput);
exports.OrderLineItemUpdateWithoutSelectedMealItemOptionInput = OrderLineItemUpdateWithoutSelectedMealItemOptionInput;
