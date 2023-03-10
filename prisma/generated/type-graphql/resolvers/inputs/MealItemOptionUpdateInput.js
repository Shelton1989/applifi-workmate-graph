"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemUpdateOneRequiredWithoutOptionsInput_1 = require("../inputs/MealItemUpdateOneRequiredWithoutOptionsInput");
const OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemOptionUpdateInput = class MealItemOptionUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateOneRequiredWithoutOptionsInput_1.MealItemUpdateOneRequiredWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateOneRequiredWithoutOptionsInput_1.MealItemUpdateOneRequiredWithoutOptionsInput)
], MealItemOptionUpdateInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput)
], MealItemOptionUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateInput.prototype, "updatedAt", void 0);
MealItemOptionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateInput", {
        isAbstract: true
    })
], MealItemOptionUpdateInput);
exports.MealItemOptionUpdateInput = MealItemOptionUpdateInput;
