"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderLineItemUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
let OrderLineItemUpdateManyMutationInput = class OrderLineItemUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], OrderLineItemUpdateManyMutationInput.prototype, "updatedAt", void 0);
OrderLineItemUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderLineItemUpdateManyMutationInput", {
        isAbstract: true
    })
], OrderLineItemUpdateManyMutationInput);
exports.OrderLineItemUpdateManyMutationInput = OrderLineItemUpdateManyMutationInput;
