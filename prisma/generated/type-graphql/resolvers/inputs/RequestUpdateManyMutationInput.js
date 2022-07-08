"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREQUEST_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_STATUSFieldUpdateOperationsInput");
const EnumREQUEST_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_TYPEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RequestUpdatesocialLinksInput_1 = require("../inputs/RequestUpdatesocialLinksInput");
let RequestUpdateManyMutationInput = class RequestUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput)
], RequestUpdateManyMutationInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateManyMutationInput.prototype, "updatedAt", void 0);
RequestUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateManyMutationInput", {
        isAbstract: true
    })
], RequestUpdateManyMutationInput);
exports.RequestUpdateManyMutationInput = RequestUpdateManyMutationInput;
