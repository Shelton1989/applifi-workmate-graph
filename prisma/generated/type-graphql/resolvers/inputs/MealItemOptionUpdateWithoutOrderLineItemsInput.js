"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemUpdateOneRequiredWithoutOptionsInput_1 = require("../inputs/MealItemUpdateOneRequiredWithoutOptionsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemOptionUpdateWithoutOrderLineItemsInput = class MealItemOptionUpdateWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateOneRequiredWithoutOptionsInput_1.MealItemUpdateOneRequiredWithoutOptionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateOneRequiredWithoutOptionsInput_1.MealItemUpdateOneRequiredWithoutOptionsInput)
], MealItemOptionUpdateWithoutOrderLineItemsInput.prototype, "MealItem", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutOrderLineItemsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutOrderLineItemsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutOrderLineItemsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemOptionUpdateWithoutOrderLineItemsInput.prototype, "updatedAt", void 0);
MealItemOptionUpdateWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionUpdateWithoutOrderLineItemsInput);
exports.MealItemOptionUpdateWithoutOrderLineItemsInput = MealItemOptionUpdateWithoutOrderLineItemsInput;
