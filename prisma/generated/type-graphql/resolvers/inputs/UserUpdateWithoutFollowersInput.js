"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutFollowersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateManyWithoutUserInput_1 = require("../inputs/AddressUpdateManyWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InventoryUpdateOneWithoutUserInput_1 = require("../inputs/InventoryUpdateOneWithoutUserInput");
const NotificationSettingsUpdateOneWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateOneWithoutUserInput");
const NullableEnumROLEFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumROLEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateManyWithoutBuyerInput_1 = require("../inputs/OrderUpdateManyWithoutBuyerInput");
const OrderUpdateManyWithoutSellerInput_1 = require("../inputs/OrderUpdateManyWithoutSellerInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const ProductUpdateManyWithoutLikedByInput_1 = require("../inputs/ProductUpdateManyWithoutLikedByInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const RequestUpdateManyWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithoutReporterInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithoutFollowersInput");
const UserUpdatefollowerIdsInput_1 = require("../inputs/UserUpdatefollowerIdsInput");
const UserUpdatefollowingIdsInput_1 = require("../inputs/UserUpdatefollowingIdsInput");
const UserUpdateproductIdsInput_1 = require("../inputs/UserUpdateproductIdsInput");
let UserUpdateWithoutFollowersInput = class UserUpdateWithoutFollowersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput)
], UserUpdateWithoutFollowersInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput)
], UserUpdateWithoutFollowersInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput)
], UserUpdateWithoutFollowersInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput)
], UserUpdateWithoutFollowersInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput)
], UserUpdateWithoutFollowersInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput)
], UserUpdateWithoutFollowersInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateproductIdsInput_1.UserUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateproductIdsInput_1.UserUpdateproductIdsInput)
], UserUpdateWithoutFollowersInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput)
], UserUpdateWithoutFollowersInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutBuyerInput_1.OrderUpdateManyWithoutBuyerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutBuyerInput_1.OrderUpdateManyWithoutBuyerInput)
], UserUpdateWithoutFollowersInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutSellerInput_1.OrderUpdateManyWithoutSellerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutSellerInput_1.OrderUpdateManyWithoutSellerInput)
], UserUpdateWithoutFollowersInput.prototype, "PurchaseOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput)
], UserUpdateWithoutFollowersInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateWithoutFollowersInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutFollowersInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutFollowersInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutFollowersInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutFollowersInput.prototype, "updatedAt", void 0);
UserUpdateWithoutFollowersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutFollowersInput", {
        isAbstract: true
    })
], UserUpdateWithoutFollowersInput);
exports.UserUpdateWithoutFollowersInput = UserUpdateWithoutFollowersInput;
