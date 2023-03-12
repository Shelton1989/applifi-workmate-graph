"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutNotificationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const MealCreateNestedManyWithoutLikedByInput_1 = require("../inputs/MealCreateNestedManyWithoutLikedByInput");
const NotificationCreateNestedManyWithoutActorInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActorInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const OrderCreateNestedManyWithoutPatientInput_1 = require("../inputs/OrderCreateNestedManyWithoutPatientInput");
const PatientProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/PatientProfileCreateNestedOneWithoutUserInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const ReactionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReactionCreateNestedManyWithoutAuthorInput");
const ReplyCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReplyCreateNestedManyWithoutAuthorInput");
const RequestCreateNestedManyWithoutReporterInput_1 = require("../inputs/RequestCreateNestedManyWithoutReporterInput");
const TenantCreateNestedOneWithoutUsersInput_1 = require("../inputs/TenantCreateNestedOneWithoutUsersInput");
const UserCreatemealIdsInput_1 = require("../inputs/UserCreatemealIdsInput");
const UserCreaterolesInput_1 = require("../inputs/UserCreaterolesInput");
const WardCreateNestedOneWithoutUsersInput_1 = require("../inputs/WardCreateNestedOneWithoutUsersInput");
let UserCreateWithoutNotificationsInput = class UserCreateWithoutNotificationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput)
], UserCreateWithoutNotificationsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreaterolesInput_1.UserCreaterolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreaterolesInput_1.UserCreaterolesInput)
], UserCreateWithoutNotificationsInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutNotificationsInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutNotificationsInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutNotificationsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutNotificationsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutNotificationsInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutNotificationsInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutNotificationsInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateNestedOneWithoutUserInput_1.PatientProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateNestedOneWithoutUserInput_1.PatientProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutNotificationsInput.prototype, "PatientProfile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput)
], UserCreateWithoutNotificationsInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealCreateNestedManyWithoutLikedByInput_1.MealCreateNestedManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealCreateNestedManyWithoutLikedByInput_1.MealCreateNestedManyWithoutLikedByInput)
], UserCreateWithoutNotificationsInput.prototype, "LikedMeals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatemealIdsInput_1.UserCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatemealIdsInput_1.UserCreatemealIdsInput)
], UserCreateWithoutNotificationsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput)
], UserCreateWithoutNotificationsInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutNotificationsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutNotificationsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutNotificationsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutNotificationsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutPatientInput_1.OrderCreateNestedManyWithoutPatientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutPatientInput_1.OrderCreateNestedManyWithoutPatientInput)
], UserCreateWithoutNotificationsInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutNotificationsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutNotificationsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateNestedOneWithoutUsersInput_1.WardCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateNestedOneWithoutUsersInput_1.WardCreateNestedOneWithoutUsersInput)
], UserCreateWithoutNotificationsInput.prototype, "Ward", void 0);
UserCreateWithoutNotificationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutNotificationsInput", {
        isAbstract: true
    })
], UserCreateWithoutNotificationsInput);
exports.UserCreateWithoutNotificationsInput = UserCreateWithoutNotificationsInput;
