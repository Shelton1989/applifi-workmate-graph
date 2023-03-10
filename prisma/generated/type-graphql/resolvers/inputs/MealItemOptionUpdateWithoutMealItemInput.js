"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateWithoutMealItemInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemOptionUpdateWithoutMealItemInput = class MealItemOptionUpdateWithoutMealItemInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutMealItemInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutMealItemInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput)
], MealItemOptionUpdateWithoutMealItemInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutMealItemInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutMealItemInput.prototype, "updatedAt", void 0);
MealItemOptionUpdateWithoutMealItemInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateWithoutMealItemInput", {
        isAbstract: true
    })
], MealItemOptionUpdateWithoutMealItemInput);
exports.MealItemOptionUpdateWithoutMealItemInput = MealItemOptionUpdateWithoutMealItemInput;
