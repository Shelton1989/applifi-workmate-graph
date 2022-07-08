"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutRepliesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCreateNestedManyWithoutUserInput_1 = require("../inputs/AddressCreateNestedManyWithoutUserInput");
const CommentCreateNestedManyWithoutAuthorInput_1 = require("../inputs/CommentCreateNestedManyWithoutAuthorInput");
const InventoryCreateNestedOneWithoutUserInput_1 = require("../inputs/InventoryCreateNestedOneWithoutUserInput");
const NotificationSettingsCreateNestedOneWithoutUserInput_1 = require("../inputs/NotificationSettingsCreateNestedOneWithoutUserInput");
const OrderCreateNestedManyWithoutBuyerInput_1 = require("../inputs/OrderCreateNestedManyWithoutBuyerInput");
const OrderCreateNestedManyWithoutSellerInput_1 = require("../inputs/OrderCreateNestedManyWithoutSellerInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const ProductCreateNestedManyWithoutLikedByInput_1 = require("../inputs/ProductCreateNestedManyWithoutLikedByInput");
const ReactionCreateNestedManyWithoutAuthorInput_1 = require("../inputs/ReactionCreateNestedManyWithoutAuthorInput");
const RequestCreateNestedManyWithoutReporterInput_1 = require("../inputs/RequestCreateNestedManyWithoutReporterInput");
const UserCreateNestedManyWithoutFollowersInput_1 = require("../inputs/UserCreateNestedManyWithoutFollowersInput");
const UserCreateNestedManyWithoutFollowingInput_1 = require("../inputs/UserCreateNestedManyWithoutFollowingInput");
const UserCreatefollowerIdsInput_1 = require("../inputs/UserCreatefollowerIdsInput");
const UserCreatefollowingIdsInput_1 = require("../inputs/UserCreatefollowingIdsInput");
const UserCreateproductIdsInput_1 = require("../inputs/UserCreateproductIdsInput");
const ROLE_1 = require("../../enums/ROLE");
let UserCreateWithoutRepliesInput = class UserCreateWithoutRepliesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ROLE_1.ROLE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutRepliesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRepliesInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutRepliesInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserCreateWithoutRepliesInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCreateNestedManyWithoutUserInput_1.AddressCreateNestedManyWithoutUserInput)
], UserCreateWithoutRepliesInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsCreateNestedOneWithoutUserInput_1.NotificationSettingsCreateNestedOneWithoutUserInput)
], UserCreateWithoutRepliesInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowersInput_1.UserCreateNestedManyWithoutFollowersInput)
], UserCreateWithoutRepliesInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowingIdsInput_1.UserCreatefollowingIdsInput)
], UserCreateWithoutRepliesInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateNestedManyWithoutFollowingInput_1.UserCreateNestedManyWithoutFollowingInput)
], UserCreateWithoutRepliesInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreatefollowerIdsInput_1.UserCreatefollowerIdsInput)
], UserCreateWithoutRepliesInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutLikedByInput_1.ProductCreateNestedManyWithoutLikedByInput)
], UserCreateWithoutRepliesInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateproductIdsInput_1.UserCreateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateproductIdsInput_1.UserCreateproductIdsInput)
], UserCreateWithoutRepliesInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryCreateNestedOneWithoutUserInput_1.InventoryCreateNestedOneWithoutUserInput)
], UserCreateWithoutRepliesInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutBuyerInput_1.OrderCreateNestedManyWithoutBuyerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutBuyerInput_1.OrderCreateNestedManyWithoutBuyerInput)
], UserCreateWithoutRepliesInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSellerInput_1.OrderCreateNestedManyWithoutSellerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateNestedManyWithoutSellerInput_1.OrderCreateNestedManyWithoutSellerInput)
], UserCreateWithoutRepliesInput.prototype, "PurchaseOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreateNestedManyWithoutReporterInput_1.RequestCreateNestedManyWithoutReporterInput)
], UserCreateWithoutRepliesInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRepliesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentCreateNestedManyWithoutAuthorInput_1.CommentCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRepliesInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutAuthorInput_1.ReactionCreateNestedManyWithoutAuthorInput)
], UserCreateWithoutRepliesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRepliesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutRepliesInput.prototype, "updatedAt", void 0);
UserCreateWithoutRepliesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutRepliesInput", {
        isAbstract: true
    })
], UserCreateWithoutRepliesInput);
exports.UserCreateWithoutRepliesInput = UserCreateWithoutRepliesInput;
