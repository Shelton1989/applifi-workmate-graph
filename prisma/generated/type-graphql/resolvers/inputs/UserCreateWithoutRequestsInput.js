"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutRequestsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedManyWithoutUserInput_1 = require("../inputs/AddressCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const InventoryCreateNestedOneWithoutUserInput_1 = require("../inputs/InventoryCreateNestedOneWithoutUserInput");
const NotificationCreateNestedManyWithoutActorInput_1 = require("../inputs/NotificationCreateNestedManyWithoutActorInput");
const NotificationCreateNestedManyWithoutUserInput_1 = require("../inputs/NotificationCreateNestedManyWithoutUserInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const OrderCreateNestedManyWithoutBuyerInput_1 = require("../inputs/OrderCreateNestedManyWithoutBuyerInput");
const OrderCreateNestedManyWithoutSellerInput_1 = require("../inputs/OrderCreateNestedManyWithoutSellerInput");
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
let UserCreateWithoutRequestsInput = class UserCreateWithoutRequestsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRequestsInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRequestsInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutRequestsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutRequestsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput)
], UserCreateWithoutRequestsInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutRequestsInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutUserInput_1.NotificationCreateNestedManyWithoutUserInput)
], UserCreateWithoutRequestsInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationCreateNestedManyWithoutActorInput_1.NotificationCreateNestedManyWithoutActorInput)
], UserCreateWithoutRequestsInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput)
], UserCreateWithoutRequestsInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput)
], UserCreateWithoutRequestsInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput)
], UserCreateWithoutRequestsInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput)
], UserCreateWithoutRequestsInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput)
], UserCreateWithoutRequestsInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateproductIdsInput_1.UserCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateproductIdsInput_1.UserCreateproductIdsInput)
], UserCreateWithoutRequestsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput)
], UserCreateWithoutRequestsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutBuyerInput_1.OrderCreateNestedManyWithoutBuyerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutBuyerInput_1.OrderCreateNestedManyWithoutBuyerInput)
], UserCreateWithoutRequestsInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSellerInput_1.OrderCreateNestedManyWithoutSellerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSellerInput_1.OrderCreateNestedManyWithoutSellerInput)
], UserCreateWithoutRequestsInput.prototype, "PurchaseOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRequestsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRequestsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyCreateNestedManyWithoutAuthorInput_1.ReplyCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRequestsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRequestsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRequestsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRequestsInput.prototype, "updatedAt", void 0);
UserCreateWithoutRequestsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutRequestsInput", {
        isAbstract: true
    })
], UserCreateWithoutRequestsInput);
exports.UserCreateWithoutRequestsInput = UserCreateWithoutRequestsInput;
