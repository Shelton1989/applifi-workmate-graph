"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedManyWithoutUserInput_1 = require("../inputs/AddressCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const InventoryCreateNestedOneWithoutUserInput_1 = require("../inputs/InventoryCreateNestedOneWithoutUserInput");
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
let UserCreateInput = class UserCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput)
], UserCreateInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput)
], UserCreateInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput)
], UserCreateInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput)
], UserCreateInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput)
], UserCreateInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutUserInput_1.OrderCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedOneWithoutUserInput_1.OrderCreateNestedOneWithoutUserInput)
], UserCreateInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput)
], UserCreateInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateproductIdsInput_1.UserCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateproductIdsInput_1.UserCreateproductIdsInput)
], UserCreateInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput)
], UserCreateInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateInput.prototype, "updatedAt", void 0);
UserCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateInput", {
        isAbstract: true
    })
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
