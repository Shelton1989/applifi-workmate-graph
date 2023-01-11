"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumPUBLISH_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PUBLISH_STATUS_1 = require("../../enums/PUBLISH_STATUS");
let EnumPUBLISH_STATUSFieldUpdateOperationsInput = class EnumPUBLISH_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PUBLISH_STATUS_1.PUBLISH_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumPUBLISH_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumPUBLISH_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumPUBLISH_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumPUBLISH_STATUSFieldUpdateOperationsInput);
exports.EnumPUBLISH_STATUSFieldUpdateOperationsInput = EnumPUBLISH_STATUSFieldUpdateOperationsInput;
