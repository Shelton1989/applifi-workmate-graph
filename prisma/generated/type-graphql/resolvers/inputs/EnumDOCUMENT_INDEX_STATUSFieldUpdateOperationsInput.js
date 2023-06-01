"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DOCUMENT_INDEX_STATUS_1 = require("../../enums/DOCUMENT_INDEX_STATUS");
let EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput = class EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DOCUMENT_INDEX_STATUS_1.DOCUMENT_INDEX_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput.prototype, "set", void 0);
EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput);
exports.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput = EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput;
