"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPAYMENT_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PAYMENT_STATUS_1 = require("../../enums/PAYMENT_STATUS");
let EnumPAYMENT_STATUSFieldUpdateOperationsInput = class EnumPAYMENT_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PAYMENT_STATUS_1.PAYMENT_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPAYMENT_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPAYMENT_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPAYMENT_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPAYMENT_STATUSFieldUpdateOperationsInput);
exports.EnumPAYMENT_STATUSFieldUpdateOperationsInput = EnumPAYMENT_STATUSFieldUpdateOperationsInput;
