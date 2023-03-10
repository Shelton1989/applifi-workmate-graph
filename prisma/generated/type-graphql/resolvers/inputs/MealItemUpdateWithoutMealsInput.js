"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateWithoutMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemOptionUpdateManyWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateManyWithoutMealItemInput");
const MealItemUpdatemealIdsInput_1 = require("../inputs/MealItemUpdatemealIdsInput");
const OrderLineItemUpdateManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemUpdateWithoutMealsInput = class MealItemUpdateWithoutMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput)
], MealItemUpdateWithoutMealsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateWithoutMealsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateWithoutMealsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateManyWithoutMealItemInput_1.MealItemOptionUpdateManyWithoutMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateManyWithoutMealItemInput_1.MealItemOptionUpdateManyWithoutMealItemInput)
], MealItemUpdateWithoutMealsInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput)
], MealItemUpdateWithoutMealsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateWithoutMealsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateWithoutMealsInput.prototype, "updatedAt", void 0);
MealItemUpdateWithoutMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateWithoutMealsInput", {
        isAbstract: true
    })
], MealItemUpdateWithoutMealsInput);
exports.MealItemUpdateWithoutMealsInput = MealItemUpdateWithoutMealsInput;
