"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const NotificationCreateNestedManyWithoutActorInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActorInput");
const NotificationCreateNestedManyWithoutUserInput_1 = require("../inputs/NotificationCreateNestedManyWithoutUserInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const ReactionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReactionCreateNestedManyWithoutAuthorInput");
const ReplyCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReplyCreateNestedManyWithoutAuthorInput");
const RequestCreateNestedManyWithoutReporterInput_1 = require("../inputs/RequestCreateNestedManyWithoutReporterInput");
const UserCreateNestedManyWithoutFollowersInput_1 = require("../inputs/UserCreateNestedManyWithoutFollowersInput");
const UserCreatefollowerIdsInput_1 = require("../inputs/UserCreatefollowerIdsInput");
const UserCreatefollowingIdsInput_1 = require("../inputs/UserCreatefollowingIdsInput");
const ROLE_1 = require("../../enums/ROLE");
let UserCreateWithoutFollowersInput = class UserCreateWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutFollowersInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutFollowersInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutFollowersInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutFollowersInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutFollowersInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput)
], UserCreateWithoutFollowersInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput)
], UserCreateWithoutFollowersInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput)
], UserCreateWithoutFollowersInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput)
], UserCreateWithoutFollowersInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput)
], UserCreateWithoutFollowersInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput)
], UserCreateWithoutFollowersInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutFollowersInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutFollowersInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutFollowersInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutFollowersInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutFollowersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutFollowersInput.prototype, "updatedAt", void 0);
UserCreateWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutFollowersInput", {
        isAbstract: true
    })
], UserCreateWithoutFollowersInput);
exports.UserCreateWithoutFollowersInput = UserCreateWithoutFollowersInput;
