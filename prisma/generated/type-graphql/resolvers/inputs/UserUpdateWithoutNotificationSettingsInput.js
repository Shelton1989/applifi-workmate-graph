"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NotificationUpdateManyWithoutActorInput_1 = require("../inputs/NotificationUpdateManyWithoutActorInput");
const NotificationUpdateManyWithoutUserInput_1 = require("../inputs/NotificationUpdateManyWithoutUserInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const QueryUpdateManyWithoutUserInput_1 = require("../inputs/QueryUpdateManyWithoutUserInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const RequestUpdateManyWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithoutReporterInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TenantUpdateOneWithoutUsersInput_1 = require("../inputs/TenantUpdateOneWithoutUsersInput");
const UserUpdaterolesInput_1 = require("../inputs/UserUpdaterolesInput");
let UserUpdateWithoutNotificationSettingsInput = class UserUpdateWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantUpdateOneWithoutUsersInput_1.TenantUpdateOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantUpdateOneWithoutUsersInput_1.TenantUpdateOneWithoutUsersInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdaterolesInput_1.UserUpdaterolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdaterolesInput_1.UserUpdaterolesInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QueryUpdateManyWithoutUserInput_1.QueryUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QueryUpdateManyWithoutUserInput_1.QueryUpdateManyWithoutUserInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "updatedAt", void 0);
UserUpdateWithoutNotificationSettingsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutNotificationSettingsInput", {
        isAbstract: true
    })
], UserUpdateWithoutNotificationSettingsInput);
exports.UserUpdateWithoutNotificationSettingsInput = UserUpdateWithoutNotificationSettingsInput;
