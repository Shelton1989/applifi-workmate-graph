"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumREQUEST_STATUSFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_STATUSFieldUpdateOperationsInput");
const EnumREQUEST_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumREQUEST_TYPEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RequestUpdatesocialLinksInput_1 = require("../inputs/RequestUpdatesocialLinksInput");
const UserUpdateOneWithoutRequestsInput_1 = require("../inputs/UserUpdateOneWithoutRequestsInput");
let RequestUpdateInput = class RequestUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "reporterName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "reporterEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_TYPEFieldUpdateOperationsInput_1.EnumREQUEST_TYPEFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdatesocialLinksInput_1.RequestUpdatesocialLinksInput)
], RequestUpdateInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumREQUEST_STATUSFieldUpdateOperationsInput_1.EnumREQUEST_STATUSFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutRequestsInput_1.UserUpdateOneWithoutRequestsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutRequestsInput_1.UserUpdateOneWithoutRequestsInput)
], RequestUpdateInput.prototype, "Reporter", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], RequestUpdateInput.prototype, "updatedAt", void 0);
RequestUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestUpdateInput", {
        isAbstract: true
    })
], RequestUpdateInput);
exports.RequestUpdateInput = RequestUpdateInput;
