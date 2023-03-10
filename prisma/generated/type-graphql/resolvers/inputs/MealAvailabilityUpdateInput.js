"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealAvailabilityUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const MealUpdateOneRequiredWithoutAvailabilityInput_1 = require("../inputs/MealUpdateOneRequiredWithoutAvailabilityInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
let MealAvailabilityUpdateInput = class MealAvailabilityUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealUpdateOneRequiredWithoutAvailabilityInput_1.MealUpdateOneRequiredWithoutAvailabilityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealUpdateOneRequiredWithoutAvailabilityInput_1.MealUpdateOneRequiredWithoutAvailabilityInput)
], MealAvailabilityUpdateInput.prototype, "Meal", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MealAvailabilityUpdateInput.prototype, "startDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], MealAvailabilityUpdateInput.prototype, "endDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealAvailabilityUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MealAvailabilityUpdateInput.prototype, "updatedAt", void 0);
MealAvailabilityUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealAvailabilityUpdateInput", {
        isAbstract: true
    })
], MealAvailabilityUpdateInput);
exports.MealAvailabilityUpdateInput = MealAvailabilityUpdateInput;
