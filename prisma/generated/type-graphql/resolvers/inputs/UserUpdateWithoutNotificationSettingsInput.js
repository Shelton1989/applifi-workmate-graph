"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutNotificationSettingsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NotificationUpdateManyWithoutActorInput_1 = require("../inputs/NotificationUpdateManyWithoutActorInput");
const NotificationUpdateManyWithoutUserInput_1 = require("../inputs/NotificationUpdateManyWithoutUserInput");
const NullableEnumROLEFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumROLEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const RequestUpdateManyWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithoutReporterInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithoutFollowersInput");
const UserUpdateManyWithoutFollowingInput_1 = require("../inputs/UserUpdateManyWithoutFollowingInput");
const UserUpdatefollowerIdsInput_1 = require("../inputs/UserUpdatefollowerIdsInput");
const UserUpdatefollowingIdsInput_1 = require("../inputs/UserUpdatefollowingIdsInput");
let UserUpdateWithoutNotificationSettingsInput = class UserUpdateWithoutNotificationSettingsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "uid", void 0);
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
    TypeGraphQL.Field(_type => NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "role", void 0);
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
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "isVerified", void 0);
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
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateWithoutNotificationSettingsInput.prototype, "Posts", void 0);
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
