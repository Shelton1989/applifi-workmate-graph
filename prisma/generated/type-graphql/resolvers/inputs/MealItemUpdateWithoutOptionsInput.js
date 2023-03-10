"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateWithoutOptionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemUpdatemealIdsInput_1 = require("../inputs/MealItemUpdatemealIdsInput");
const MealUpdateManyWithoutItemsInput_1 = require("../inputs/MealUpdateManyWithoutItemsInput");
const OrderLineItemUpdateManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemUpdateWithoutOptionsInput = class MealItemUpdateWithoutOptionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyWithoutItemsInput_1.MealUpdateManyWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateManyWithoutItemsInput_1.MealUpdateManyWithoutItemsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput)
], MealItemUpdateWithoutOptionsInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateWithoutOptionsInput.prototype, "updatedAt", void 0);
MealItemUpdateWithoutOptionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateWithoutOptionsInput", {
        isAbstract: true
    })
], MealItemUpdateWithoutOptionsInput);
exports.MealItemUpdateWithoutOptionsInput = MealItemUpdateWithoutOptionsInput;
