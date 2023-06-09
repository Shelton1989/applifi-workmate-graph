"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutActivityInput_1 = require("../inputs/UserUpdateOneWithoutActivityInput");
const UserUpdateOneWithoutNotificationsInput_1 = require("../inputs/UserUpdateOneWithoutNotificationsInput");
let NotificationUpdateInput = class NotificationUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutNotificationsInput_1.UserUpdateOneWithoutNotificationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutNotificationsInput_1.UserUpdateOneWithoutNotificationsInput)
], NotificationUpdateInput.prototype, "User", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActivityInput_1.UserUpdateOneWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutActivityInput_1.UserUpdateOneWithoutActivityInput)
], NotificationUpdateInput.prototype, "Actor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "mediaLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateInput.prototype, "updatedAt", void 0);
NotificationUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateInput", {
        isAbstract: true
    })
], NotificationUpdateInput);
exports.NotificationUpdateInput = NotificationUpdateInput;
