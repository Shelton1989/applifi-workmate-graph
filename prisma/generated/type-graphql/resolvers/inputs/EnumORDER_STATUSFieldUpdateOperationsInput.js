"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumORDER_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ORDER_STATUS_1 = require("../../enums/ORDER_STATUS");
let EnumORDER_STATUSFieldUpdateOperationsInput = class EnumORDER_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ORDER_STATUS_1.ORDER_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumORDER_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumORDER_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumORDER_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumORDER_STATUSFieldUpdateOperationsInput);
exports.EnumORDER_STATUSFieldUpdateOperationsInput = EnumORDER_STATUSFieldUpdateOperationsInput;
