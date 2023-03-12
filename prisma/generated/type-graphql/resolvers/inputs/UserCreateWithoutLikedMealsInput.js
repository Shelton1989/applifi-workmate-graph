"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutLikedMealsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const NotificationCreateNestedManyWithoutActorInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActorInput");
const NotificationCreateNestedManyWithoutUserInput_1 = require("../inputs/NotificationCreateNestedManyWithoutUserInput");
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
let UserCreateWithoutLikedMealsInput = class UserCreateWithoutLikedMealsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TenantCreateNestedOneWithoutUsersInput_1.TenantCreateNestedOneWithoutUsersInput)
], UserCreateWithoutLikedMealsInput.prototype, "Tenant", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "uuid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreaterolesInput_1.UserCreaterolesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreaterolesInput_1.UserCreaterolesInput)
], UserCreateWithoutLikedMealsInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLikedMealsInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutLikedMealsInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutLikedMealsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutLikedMealsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutLikedMealsInput.prototype, "isVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutLikedMealsInput.prototype, "isActive", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutLikedMealsInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PatientProfileCreateNestedOneWithoutUserInput_1.PatientProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PatientProfileCreateNestedOneWithoutUserInput_1.PatientProfileCreateNestedOneWithoutUserInput)
], UserCreateWithoutLikedMealsInput.prototype, "PatientProfile", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput)
], UserCreateWithoutLikedMealsInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput)
], UserCreateWithoutLikedMealsInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatemealIdsInput_1.UserCreatemealIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatemealIdsInput_1.UserCreatemealIdsInput)
], UserCreateWithoutLikedMealsInput.prototype, "mealIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput)
], UserCreateWithoutLikedMealsInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutLikedMealsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutLikedMealsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutLikedMealsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutLikedMealsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutPatientInput_1.OrderCreateNestedManyWithoutPatientInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutPatientInput_1.OrderCreateNestedManyWithoutPatientInput)
], UserCreateWithoutLikedMealsInput.prototype, "Bookings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLikedMealsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutLikedMealsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WardCreateNestedOneWithoutUsersInput_1.WardCreateNestedOneWithoutUsersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WardCreateNestedOneWithoutUsersInput_1.WardCreateNestedOneWithoutUsersInput)
], UserCreateWithoutLikedMealsInput.prototype, "Ward", void 0);
UserCreateWithoutLikedMealsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutLikedMealsInput", {
        isAbstract: true
    })
], UserCreateWithoutLikedMealsInput);
exports.UserCreateWithoutLikedMealsInput = UserCreateWithoutLikedMealsInput;
