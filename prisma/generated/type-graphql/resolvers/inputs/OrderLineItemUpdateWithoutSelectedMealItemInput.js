"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutSelectedMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemOptionUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateOneRequiredWithoutItemsInput_1 = require("../inputs/OrderUpdateOneRequiredWithoutItemsInput");
let OrderLineItemUpdateWithoutSelectedMealItemInput = class OrderLineItemUpdateWithoutSelectedMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneRequiredWithoutItemsInput_1.OrderUpdateOneRequiredWithoutItemsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutSelectedMealItemInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutSelectedMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutSelectedMealItemInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutSelectedMealItemInput);
exports.OrderLineItemUpdateWithoutSelectedMealItemInput = OrderLineItemUpdateWithoutSelectedMealItemInput;
