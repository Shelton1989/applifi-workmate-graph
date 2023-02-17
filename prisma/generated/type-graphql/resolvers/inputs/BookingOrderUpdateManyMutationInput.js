"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput");
const EnumPAYMENT_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput");
let BookingOrderUpdateManyMutationInput = class BookingOrderUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput_1.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateManyMutationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPAYMENT_STATUSFieldUpdateOperationsInput_1.EnumPAYMENT_STATUSFieldUpdateOperationsInput)
], BookingOrderUpdateManyMutationInput.prototype, "PaymentStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], BookingOrderUpdateManyMutationInput.prototype, "updatedAt", void 0);
BookingOrderUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderUpdateManyMutationInput", {
        isAbstract: true
    })
], BookingOrderUpdateManyMutationInput);
exports.BookingOrderUpdateManyMutationInput = BookingOrderUpdateManyMutationInput;
