"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUpdateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutDocumentInput_1 = require("../inputs/CommentUpdateManyWithoutDocumentInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput");
const EnumPUBLISH_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DocumentUpdateWithoutTenantInput = class DocumentUpdateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumPUBLISH_STATUSFieldUpdateOperationsInput_1.EnumPUBLISH_STATUSFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "publishStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput_1.EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "indexStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "source", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "documentType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutDocumentInput_1.CommentUpdateManyWithoutDocumentInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutDocumentInput_1.CommentUpdateManyWithoutDocumentInput)
], DocumentUpdateWithoutTenantInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], DocumentUpdateWithoutTenantInput.prototype, "updatedAt", void 0);
DocumentUpdateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("DocumentUpdateWithoutTenantInput", {
        isAbstract: true
    })
], DocumentUpdateWithoutTenantInput);
exports.DocumentUpdateWithoutTenantInput = DocumentUpdateWithoutTenantInput;
