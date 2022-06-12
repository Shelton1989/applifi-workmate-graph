"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutInventoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateManyWithoutUserInput_1 = require("../inputs/AddressUpdateManyWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NotificationSettingsUpdateOneWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateOneWithoutUserInput");
const NullableEnumROLEFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumROLEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateOneWithoutUserInput_1 = require("../inputs/OrderUpdateOneWithoutUserInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const ProductUpdateManyWithoutLikedByInput_1 = require("../inputs/ProductUpdateManyWithoutLikedByInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithoutFollowersInput");
const UserUpdateManyWithoutFollowingInput_1 = require("../inputs/UserUpdateManyWithoutFollowingInput");
const UserUpdatefollowerIdsInput_1 = require("../inputs/UserUpdatefollowerIdsInput");
const UserUpdatefollowingIdsInput_1 = require("../inputs/UserUpdatefollowingIdsInput");
const UserUpdateproductIdsInput_1 = require("../inputs/UserUpdateproductIdsInput");
let UserUpdateWithoutInventoryInput = class UserUpdateWithoutInventoryInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput)
], UserUpdateWithoutInventoryInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput)
], UserUpdateWithoutInventoryInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput)
], UserUpdateWithoutInventoryInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput)
], UserUpdateWithoutInventoryInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput)
], UserUpdateWithoutInventoryInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput)
], UserUpdateWithoutInventoryInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneWithoutUserInput_1.OrderUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneWithoutUserInput_1.OrderUpdateOneWithoutUserInput)
], UserUpdateWithoutInventoryInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput)
], UserUpdateWithoutInventoryInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateproductIdsInput_1.UserUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateproductIdsInput_1.UserUpdateproductIdsInput)
], UserUpdateWithoutInventoryInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateWithoutInventoryInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutInventoryInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutInventoryInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutInventoryInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutInventoryInput.prototype, "updatedAt", void 0);
UserUpdateWithoutInventoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutInventoryInput", {
        isAbstract: true
    })
], UserUpdateWithoutInventoryInput);
exports.UserUpdateWithoutInventoryInput = UserUpdateWithoutInventoryInput;
