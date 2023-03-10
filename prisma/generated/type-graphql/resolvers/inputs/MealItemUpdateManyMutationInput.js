"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealItemUpdatemealIdsInput_1 = require("../inputs/MealItemUpdatemealIdsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MealItemUpdateManyMutationInput = class MealItemUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdatemealIdsInput_1.MealItemUpdatemealIdsInput)
], MealItemUpdateManyMutationInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateManyMutationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MealItemUpdateManyMutationInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealItemUpdateManyMutationInput.prototype, "updatedAt", void 0);
MealItemUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateManyMutationInput", {
        isAbstract: true
    })
], MealItemUpdateManyMutationInput);
exports.MealItemUpdateManyMutationInput = MealItemUpdateManyMutationInput;
