"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const DocumentCreateNestedManyWithoutCreatedByInput_1 = require("../inputs/DocumentCreateNestedManyWithoutCreatedByInput");
const LLMQueryCreateNestedManyWithoutUserInput_1 = require("../inputs/LLMQueryCreateNestedManyWithoutUserInput");
const NotificationCreateNestedManyWithoutActorInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActorInput");
const NotificationCreateNestedManyWithoutUserInput_1 = require("../inputs/NotificationCreateNestedManyWithoutUserInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const ReplyCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReplyCreateNestedManyWithoutAuthorInput");
const RequestCreateNestedManyWithoutReporterInput_1 = require("../inputs/RequestCreateNestedManyWithoutReporterInput");
const TenantCreateNestedOneWithoutUsersInput_1 = require("../inputs/TenantCreateNestedOneWithoutUsersInput");
const UserCreaterolesInput_1 = require("../inputs/UserCreaterolesInput");
let UserCreateWithoutReactionsInput = class UserCreateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput)
], UserCreateWithoutReactionsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreaterolesInput_1.UserCreaterolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreaterolesInput_1.UserCreaterolesInput)
], UserCreateWithoutReactionsInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutReactionsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutReactionsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutReactionsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutReactionsInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutReactionsInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutReactionsInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionsInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput)
], UserCreateWithoutReactionsInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LLMQueryCreateNestedManyWithoutUserInput_1.LLMQueryCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", LLMQueryCreateNestedManyWithoutUserInput_1.LLMQueryCreateNestedManyWithoutUserInput)
], UserCreateWithoutReactionsInput.prototype, "Queries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput)
], UserCreateWithoutReactionsInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutReactionsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutCreatedByInput_1.DocumentCreateNestedManyWithoutCreatedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DocumentCreateNestedManyWithoutCreatedByInput_1.DocumentCreateNestedManyWithoutCreatedByInput)
], UserCreateWithoutReactionsInput.prototype, "CreatedDocuments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutReactionsInput.prototype, "updatedAt", void 0);
UserCreateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutReactionsInput", {
        isAbstract: true
    })
], UserCreateWithoutReactionsInput);
exports.UserCreateWithoutReactionsInput = UserCreateWithoutReactionsInput;
