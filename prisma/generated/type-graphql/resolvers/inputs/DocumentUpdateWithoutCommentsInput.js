"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateWithoutCommentsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateOneRequiredWithoutDocumentsInput_1 = require("../inputs/TenantUpdateOneRequiredWithoutDocumentsInput");
let DocumentUpdateWithoutCommentsInput = class DocumentUpdateWithoutCommentsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "indexStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "documentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneRequiredWithoutDocumentsInput_1.TenantUpdateOneRequiredWithoutDocumentsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneRequiredWithoutDocumentsInput_1.TenantUpdateOneRequiredWithoutDocumentsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], DocumentUpdateWithoutCommentsInput.prototype, "updatedAt", void 0);
DocumentUpdateWithoutCommentsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateWithoutCommentsInput", {
        isAbstract: true
    })
], DocumentUpdateWithoutCommentsInput);
exports.DocumentUpdateWithoutCommentsInput = DocumentUpdateWithoutCommentsInput;
