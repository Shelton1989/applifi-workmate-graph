"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutPurchaseOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUpdateManyWithoutUserInput_1 = require("../inputs/AddressUpdateManyWithoutUserInput");
const BoolFieldUpdateOperationsInput_1 = require("../inputs/BoolFieldUpdateOperationsInput");
const CommentUpdateManyWithoutAuthorInput_1 = require("../inputs/CommentUpdateManyWithoutAuthorInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const InventoryUpdateOneWithoutUserInput_1 = require("../inputs/InventoryUpdateOneWithoutUserInput");
const NotificationSettingsUpdateOneWithoutUserInput_1 = require("../inputs/NotificationSettingsUpdateOneWithoutUserInput");
const NotificationUpdateManyWithoutActorInput_1 = require("../inputs/NotificationUpdateManyWithoutActorInput");
const NotificationUpdateManyWithoutUserInput_1 = require("../inputs/NotificationUpdateManyWithoutUserInput");
const NullableEnumROLEFieldUpdateOperationsInput_1 = require("../inputs/NullableEnumROLEFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const OrderUpdateManyWithoutBuyerInput_1 = require("../inputs/OrderUpdateManyWithoutBuyerInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const ProductUpdateManyWithoutLikedByInput_1 = require("../inputs/ProductUpdateManyWithoutLikedByInput");
const ReactionUpdateManyWithoutAuthorInput_1 = require("../inputs/ReactionUpdateManyWithoutAuthorInput");
const ReplyUpdateManyWithoutAuthorInput_1 = require("../inputs/ReplyUpdateManyWithoutAuthorInput");
const RequestUpdateManyWithoutReporterInput_1 = require("../inputs/RequestUpdateManyWithoutReporterInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateManyWithoutFollowersInput_1 = require("../inputs/UserUpdateManyWithoutFollowersInput");
const UserUpdateManyWithoutFollowingInput_1 = require("../inputs/UserUpdateManyWithoutFollowingInput");
const UserUpdatefollowerIdsInput_1 = require("../inputs/UserUpdatefollowerIdsInput");
const UserUpdatefollowingIdsInput_1 = require("../inputs/UserUpdatefollowingIdsInput");
const UserUpdateproductIdsInput_1 = require("../inputs/UserUpdateproductIdsInput");
let UserUpdateWithoutPurchaseOrdersInput = class UserUpdateWithoutPurchaseOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableEnumROLEFieldUpdateOperationsInput_1.NullableEnumROLEFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFieldUpdateOperationsInput_1.BoolFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressUpdateManyWithoutUserInput_1.AddressUpdateManyWithoutUserInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsUpdateOneWithoutUserInput_1.NotificationSettingsUpdateOneWithoutUserInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutUserInput_1.NotificationUpdateManyWithoutUserInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationUpdateManyWithoutActorInput_1.NotificationUpdateManyWithoutActorInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowersInput_1.UserUpdateManyWithoutFollowersInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowingIdsInput_1.UserUpdatefollowingIdsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateManyWithoutFollowingInput_1.UserUpdateManyWithoutFollowingInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdatefollowerIdsInput_1.UserUpdatefollowerIdsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateManyWithoutLikedByInput_1.ProductUpdateManyWithoutLikedByInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateproductIdsInput_1.UserUpdateproductIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateproductIdsInput_1.UserUpdateproductIdsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryUpdateOneWithoutUserInput_1.InventoryUpdateOneWithoutUserInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderUpdateManyWithoutBuyerInput_1.OrderUpdateManyWithoutBuyerInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderUpdateManyWithoutBuyerInput_1.OrderUpdateManyWithoutBuyerInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyWithoutReporterInput_1.RequestUpdateManyWithoutReporterInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentUpdateManyWithoutAuthorInput_1.CommentUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyUpdateManyWithoutAuthorInput_1.ReplyUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutAuthorInput_1.ReactionUpdateManyWithoutAuthorInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutPurchaseOrdersInput.prototype, "updatedAt", void 0);
UserUpdateWithoutPurchaseOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutPurchaseOrdersInput", {
        isAbstract: true
    })
], UserUpdateWithoutPurchaseOrdersInput);
exports.UserUpdateWithoutPurchaseOrdersInput = UserUpdateWithoutPurchaseOrdersInput;
