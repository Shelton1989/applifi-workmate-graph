"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateManyWithoutUserInput_1 = require("../inputs/AddressUpdateManyWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumROLEFieldUpdateOperationsInput_1 = require("../inputs/EnumROLEFieldUpdateOperationsInput");
const InventoryUpdateOneWithoutUserInput_1 = require("../inputs/InventoryUpdateOneWithoutUserInput");
const NotificationSettingsUpdateOneWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateOneWithoutUserInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateOneWithoutUserInput_1 = require("../inputs/OrderUpdateOneWithoutUserInput");
const ProductUpdateManyWithoutLikedByInput_1 = require("../inputs/ProductUpdateManyWithoutLikedByInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithoutFollowersInput");
const UserUpdateManyWithoutFollowingInput_1 = require("../inputs/UserUpdateManyWithoutFollowingInput");
const UserUpdatefollowerIdsInput_1 = require("../inputs/UserUpdatefollowerIdsInput");
const UserUpdatefollowingIdsInput_1 = require("../inputs/UserUpdatefollowingIdsInput");
const UserUpdateproductIdsInput_1 = require("../inputs/UserUpdateproductIdsInput");
let UserUpdateWithoutPostsInput = class UserUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumROLEFieldUpdateOperationsInput_1.EnumROLEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumROLEFieldUpdateOperationsInput_1.EnumROLEFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput)
], UserUpdateWithoutPostsInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput)
], UserUpdateWithoutPostsInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput)
], UserUpdateWithoutPostsInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput)
], UserUpdateWithoutPostsInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput)
], UserUpdateWithoutPostsInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput)
], UserUpdateWithoutPostsInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateOneWithoutUserInput_1.OrderUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateOneWithoutUserInput_1.OrderUpdateOneWithoutUserInput)
], UserUpdateWithoutPostsInput.prototype, "Order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput)
], UserUpdateWithoutPostsInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateproductIdsInput_1.UserUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateproductIdsInput_1.UserUpdateproductIdsInput)
], UserUpdateWithoutPostsInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput)
], UserUpdateWithoutPostsInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPostsInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPostsInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
UserUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutPostsInput", {
        isAbstract: true
    })
], UserUpdateWithoutPostsInput);
exports.UserUpdateWithoutPostsInput = UserUpdateWithoutPostsInput;
