"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedManyWithoutUserInput_1 = require("../inputs/AddressCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const OrderCreateNestedOneWithoutUserInput_1 = require("../inputs/OrderCreateNestedOneWithoutUserInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const ProductCreateNestedManyWithoutLikedByInput_1 = require("../inputs/ProductCreateNestedManyWithoutLikedByInput");
const ReactionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReactionCreateNestedManyWithoutAuthorInput");
const ReplyCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReplyCreateNestedManyWithoutAuthorInput");
const UserCreateNestedManyWithoutFollowersInput_1 = require("../inputs/UserCreateNestedManyWithoutFollowersInput");
const UserCreateNestedManyWithoutFollowingInput_1 = require("../inputs/UserCreateNestedManyWithoutFollowingInput");
const UserCreatefollowerIdsInput_1 = require("../inputs/UserCreatefollowerIdsInput");
const UserCreatefollowingIdsInput_1 = require("../inputs/UserCreatefollowingIdsInput");
const UserCreateproductIdsInput_1 = require("../inputs/UserCreateproductIdsInput");
const ROLE_1 = require("../../enums/ROLE");
let UserCreateWithoutInventoryInput = class UserCreateWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "roles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutInventoryInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutInventoryInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutInventoryInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutInventoryInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput)
], UserCreateWithoutInventoryInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutInventoryInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput)
], UserCreateWithoutInventoryInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput)
], UserCreateWithoutInventoryInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput)
], UserCreateWithoutInventoryInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput)
], UserCreateWithoutInventoryInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutUserInput_1.OrderCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutUserInput_1.OrderCreateNestedOneWithoutUserInput)
], UserCreateWithoutInventoryInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput)
], UserCreateWithoutInventoryInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateproductIdsInput_1.UserCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateproductIdsInput_1.UserCreateproductIdsInput)
], UserCreateWithoutInventoryInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutInventoryInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutInventoryInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutInventoryInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutInventoryInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutInventoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutInventoryInput.prototype, "updatedAt", void 0);
UserCreateWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutInventoryInput", {
        isAbstract: true
    })
], UserCreateWithoutInventoryInput);
exports.UserCreateWithoutInventoryInput = UserCreateWithoutInventoryInput;