"use strict";
var UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressListRelationFilter_1 = require("../inputs/AddressListRelationFilter");
const BoolFilter_1 = require("../inputs/BoolFilter");
const CommentListRelationFilter_1 = require("../inputs/CommentListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EnumROLENullableFilter_1 = require("../inputs/EnumROLENullableFilter");
const InventoryRelationFilter_1 = require("../inputs/InventoryRelationFilter");
const NotificationSettingsRelationFilter_1 = require("../inputs/NotificationSettingsRelationFilter");
const OrderListRelationFilter_1 = require("../inputs/OrderListRelationFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const ReactionListRelationFilter_1 = require("../inputs/ReactionListRelationFilter");
const ReplyListRelationFilter_1 = require("../inputs/ReplyListRelationFilter");
const RequestListRelationFilter_1 = require("../inputs/RequestListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserListRelationFilter_1 = require("../inputs/UserListRelationFilter");
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "uid", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "username", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumROLENullableFilter_1.EnumROLENullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumROLENullableFilter_1.EnumROLENullableFilter)
], UserWhereInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "firstName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "lastName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "avatar", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "hasAcceptedTerms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], UserWhereInput.prototype, "isFirstTimeUser", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressListRelationFilter_1.AddressListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressListRelationFilter_1.AddressListRelationFilter)
], UserWhereInput.prototype, "Addresses", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationSettingsRelationFilter_1.NotificationSettingsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationSettingsRelationFilter_1.NotificationSettingsRelationFilter)
], UserWhereInput.prototype, "NotificationSettings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], UserWhereInput.prototype, "Following", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], UserWhereInput.prototype, "followingIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserListRelationFilter_1.UserListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserListRelationFilter_1.UserListRelationFilter)
], UserWhereInput.prototype, "Followers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], UserWhereInput.prototype, "followerIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], UserWhereInput.prototype, "LikedProducts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], UserWhereInput.prototype, "productIds", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InventoryRelationFilter_1.InventoryRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InventoryRelationFilter_1.InventoryRelationFilter)
], UserWhereInput.prototype, "Inventory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], UserWhereInput.prototype, "MyOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderListRelationFilter_1.OrderListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderListRelationFilter_1.OrderListRelationFilter)
], UserWhereInput.prototype, "PurchaseOrders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestListRelationFilter_1.RequestListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestListRelationFilter_1.RequestListRelationFilter)
], UserWhereInput.prototype, "Requests", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], UserWhereInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentListRelationFilter_1.CommentListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentListRelationFilter_1.CommentListRelationFilter)
], UserWhereInput.prototype, "Comments", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReplyListRelationFilter_1.ReplyListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReplyListRelationFilter_1.ReplyListRelationFilter)
], UserWhereInput.prototype, "Replies", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionListRelationFilter_1.ReactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionListRelationFilter_1.ReactionListRelationFilter)
], UserWhereInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
UserWhereInput = UserWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {
        isAbstract: true
    })
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
