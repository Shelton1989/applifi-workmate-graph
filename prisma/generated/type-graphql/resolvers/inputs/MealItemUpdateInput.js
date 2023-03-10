"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemOptionUpdateManyWithoutMealItemInput_1 = require("../inputs/MealItemOptionUpdateManyWithoutMealItemInput");
const MealItemUpdatemealIdsInput_1 = require("../inputs/MealItemUpdatemealIdsInput");
const MealUpdateManyWithoutItemsInput_1 = require("../inputs/MealUpdateManyWithoutItemsInput");
const OrderLineItemUpdateManyWithoutSelectedMealItemInput_1 = require("../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemUpdateInput = class MealItemUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateManyWithoutItemsInput_1.MealUpdateManyWithoutItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateManyWithoutItemsInput_1.MealUpdateManyWithoutItemsInput)
], MealItemUpdateInput.prototype, "Meals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput)
], MealItemUpdateInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateManyWithoutMealItemInput_1.MealItemOptionUpdateManyWithoutMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateManyWithoutMealItemInput_1.MealItemOptionUpdateManyWithoutMealItemInput)
], MealItemUpdateInput.prototype, "Options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderLineItemUpdateManyWithoutSelectedMealItemInput_1.OrderLineItemUpdateManyWithoutSelectedMealItemInput)
], MealItemUpdateInput.prototype, "OrderLineItems", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateInput.prototype, "updatedAt", void 0);
MealItemUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateInput", {
        isAbstract: true
    })
], MealItemUpdateInput);
exports.MealItemUpdateInput = MealItemUpdateInput;
