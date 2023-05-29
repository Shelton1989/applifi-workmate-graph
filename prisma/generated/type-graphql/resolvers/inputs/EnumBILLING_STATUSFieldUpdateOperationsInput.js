"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBILLING_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BILLING_STATUS_1 = require("../../enums/BILLING_STATUS");
let EnumBILLING_STATUSFieldUpdateOperationsInput = class EnumBILLING_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BILLING_STATUS_1.BILLING_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumBILLING_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumBILLING_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumBILLING_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumBILLING_STATUSFieldUpdateOperationsInput);
exports.EnumBILLING_STATUSFieldUpdateOperationsInput = EnumBILLING_STATUSFieldUpdateOperationsInput;
