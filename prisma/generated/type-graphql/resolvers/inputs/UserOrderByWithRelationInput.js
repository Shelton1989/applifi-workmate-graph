"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressOrderByRelationAggregateInput_1 = require("../inputs/AddressOrderByRelationAggregateInput");
const CommentOrderByRelationAggregateInput_1 = require("../inputs/CommentOrderByRelationAggregateInput");
const InventoryOrderByWithRelationInput_1 = require("../inputs/InventoryOrderByWithRelationInput");
const NotificationOrderByRelationAggregateInput_1 = require("../inputs/NotificationOrderByRelationAggregateInput");
const NotificationSettingsOrderByWithRelationInput_1 = require("../inputs/NotificationSettingsOrderByWithRelationInput");
const OrderOrderByRelationAggregateInput_1 = require("../inputs/OrderOrderByRelationAggregateInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ProductOrderByRelationAggregateInput_1 = require("../inputs/ProductOrderByRelationAggregateInput");
const ReactionOrderByRelationAggregateInput_1 = require("../inputs/ReactionOrderByRelationAggregateInput");
const ReplyOrderByRelationAggregateInput_1 = require("../inputs/ReplyOrderByRelationAggregateInput");
const RequestOrderByRelationAggregateInput_1 = require("../inputs/RequestOrderByRelationAggregateInput");
const UserOrderByRelationAggregateInput_1 = require("../inputs/UserOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "biography", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressOrderByRelationAggregateInput_1.AddressOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressOrderByRelationAggregateInput_1.AddressOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsOrderByWithRelationInput_1.NotificationSettingsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsOrderByWithRelationInput_1.NotificationSettingsOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Notifications", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Activity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByRelationAggregateInput_1.UserOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByRelationAggregateInput_1.ProductOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryOrderByWithRelationInput_1.InventoryOrderByWithRelationInput)
], UserOrderByWithRelationInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderOrderByRelationAggregateInput_1.OrderOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "PurchaseOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestOrderByRelationAggregateInput_1.RequestOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestOrderByRelationAggregateInput_1.RequestOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentOrderByRelationAggregateInput_1.CommentOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyOrderByRelationAggregateInput_1.ReplyOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyOrderByRelationAggregateInput_1.ReplyOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput)
], UserOrderByWithRelationInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserOrderByWithRelationInput.prototype, "updatedAt", void 0);
UserOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationInput", {
        isAbstract: true
    })
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
