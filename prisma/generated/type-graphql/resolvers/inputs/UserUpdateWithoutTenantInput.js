"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutTenantInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DocumentUpdateManyWithoutCreatedByInput_1 = require("../inputs/DocumentUpdateManyWithoutCreatedByInput");
const LLMQueryUpdateManyWithoutUserInput_1 = require("../inputs/LLMQueryUpdateManyWithoutUserInput");
const NotificationSettingsUpdateOneWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateOneWithoutUserInput");
const NotificationUpdateManyWithoutActorInput_1 = require("../inputs/NotificationUpdateManyWithoutActorInput");
const NotificationUpdateManyWithoutUserInput_1 = require("../inputs/NotificationUpdateManyWithoutUserInput");
const NullableBoolFieldUpdateOperationsInput_1 = require("../inputs/NullableBoolFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const RequestUpdateManyWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithoutReporterInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdaterolesInput_1 = require("../inputs/UserUpdaterolesInput");
let UserUpdateWithoutTenantInput = class UserUpdateWithoutTenantInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdaterolesInput_1.UserUpdaterolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdaterolesInput_1.UserUpdaterolesInput)
], UserUpdateWithoutTenantInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableBoolFieldUpdateOperationsInput_1.NullableBoolFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput)
], UserUpdateWithoutTenantInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput)
], UserUpdateWithoutTenantInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput)
], UserUpdateWithoutTenantInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryUpdateManyWithoutUserInput_1.LLMQueryUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryUpdateManyWithoutUserInput_1.LLMQueryUpdateManyWithoutUserInput)
], UserUpdateWithoutTenantInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput)
], UserUpdateWithoutTenantInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTenantInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTenantInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutTenantInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentUpdateManyWithoutCreatedByInput_1.DocumentUpdateManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentUpdateManyWithoutCreatedByInput_1.DocumentUpdateManyWithoutCreatedByInput)
], UserUpdateWithoutTenantInput.prototype, "CreatedDocuments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutTenantInput.prototype, "updatedAt", void 0);
UserUpdateWithoutTenantInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutTenantInput", {
        isAbstract: true
    })
], UserUpdateWithoutTenantInput);
exports.UserUpdateWithoutTenantInput = UserUpdateWithoutTenantInput;
