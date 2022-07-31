"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneWithoutActivityInput_1 = require("../inputs/UserUpdateOneWithoutActivityInput");
let NotificationUpdateWithoutUserInput = class NotificationUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], NotificationUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneWithoutActivityInput_1.UserUpdateOneWithoutActivityInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneWithoutActivityInput_1.UserUpdateOneWithoutActivityInput)
], NotificationUpdateWithoutUserInput.prototype, "Actor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], NotificationUpdateWithoutUserInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], NotificationUpdateWithoutUserInput.prototype, "hasBeenViewedBySubject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], NotificationUpdateWithoutUserInput.prototype, "updatedAt", void 0);
NotificationUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateWithoutUserInput", {
        isAbstract: true
    })
], NotificationUpdateWithoutUserInput);
exports.NotificationUpdateWithoutUserInput = NotificationUpdateWithoutUserInput;
