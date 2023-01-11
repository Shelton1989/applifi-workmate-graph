"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BOOKING_ORDER_STATUS_1 = require("../../enums/BOOKING_ORDER_STATUS");
let EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput = class EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BOOKING_ORDER_STATUS_1.BOOKING_ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput);
exports.EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput = EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput;
