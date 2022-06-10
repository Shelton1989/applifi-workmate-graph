"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let InventoryUpdateManyMutationInput = class InventoryUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], InventoryUpdateManyMutationInput.prototype, "updatedAt", void 0);
InventoryUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("InventoryUpdateManyMutationInput", {
        isAbstract: true
    })
], InventoryUpdateManyMutationInput);
exports.InventoryUpdateManyMutationInput = InventoryUpdateManyMutationInput;
