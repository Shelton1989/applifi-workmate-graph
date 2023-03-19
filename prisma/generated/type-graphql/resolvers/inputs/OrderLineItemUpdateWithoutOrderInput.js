"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateWithoutOrderInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemOptionUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput");
const MealItemUpdateOneWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpdateOneWithoutOrderLineItemsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
let OrderLineItemUpdateWithoutOrderInput = class OrderLineItemUpdateWithoutOrderInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "details", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateOneWithoutOrderLineItemsInput_1.MealItemUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "selectedMealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateOneWithoutOrderLineItemsInput_1.MealItemOptionUpdateOneWithoutOrderLineItemsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "selectedMealItemOption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateWithoutOrderInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateWithoutOrderInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateWithoutOrderInput", {
        isAbstract: true
    })
], OrderLineItemUpdateWithoutOrderInput);
exports.OrderLineItemUpdateWithoutOrderInput = OrderLineItemUpdateWithoutOrderInput;
