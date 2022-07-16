"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateWithoutReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREQUEST_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_STATUSFieldUpdateOperationsInput");
const EnumREQUEST_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_TYPEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RequestUpdatesocialLinksInput_1 = require("../inputs/RequestUpdatesocialLinksInput");
let RequestUpdateWithoutReporterInput = class RequestUpdateWithoutReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "reporterName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "reporterEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput)
], RequestUpdateWithoutReporterInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateWithoutReporterInput.prototype, "updatedAt", void 0);
RequestUpdateWithoutReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateWithoutReporterInput", {
        isAbstract: true
    })
], RequestUpdateWithoutReporterInput);
exports.RequestUpdateWithoutReporterInput = RequestUpdateWithoutReporterInput;
