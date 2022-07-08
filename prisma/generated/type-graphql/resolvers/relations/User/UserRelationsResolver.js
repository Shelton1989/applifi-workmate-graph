"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Address_1 = require("../../../models/Address");
const Comment_1 = require("../../../models/Comment");
const Inventory_1 = require("../../../models/Inventory");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const Order_1 = require("../../../models/Order");
const Post_1 = require("../../../models/Post");
const Product_1 = require("../../../models/Product");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const Request_1 = require("../../../models/Request");
const User_1 = require("../../../models/User");
const UserAddressesArgs_1 = require("./args/UserAddressesArgs");
const UserCommentsArgs_1 = require("./args/UserCommentsArgs");
const UserFollowersArgs_1 = require("./args/UserFollowersArgs");
const UserFollowingArgs_1 = require("./args/UserFollowingArgs");
const UserLikedProductsArgs_1 = require("./args/UserLikedProductsArgs");
const UserMyOrdersArgs_1 = require("./args/UserMyOrdersArgs");
const UserPostsArgs_1 = require("./args/UserPostsArgs");
const UserPurchaseOrdersArgs_1 = require("./args/UserPurchaseOrdersArgs");
const UserReactionsArgs_1 = require("./args/UserReactionsArgs");
const UserRepliesArgs_1 = require("./args/UserRepliesArgs");
const UserRequestsArgs_1 = require("./args/UserRequestsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async Addresses(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Addresses(args);
    }
    async NotificationSettings(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).NotificationSettings({});
    }
    async Following(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Following(args);
    }
    async Followers(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Followers(args);
    }
    async LikedProducts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).LikedProducts(args);
    }
    async Inventory(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Inventory({});
    }
    async MyOrders(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).MyOrders(args);
    }
    async PurchaseOrders(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).PurchaseOrders(args);
    }
    async Requests(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Requests(args);
    }
    async Posts(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Posts(args);
    }
    async Comments(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Comments(args);
    }
    async Replies(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Replies(args);
    }
    async Reactions(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Reactions(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Address_1.Address], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserAddressesArgs_1.UserAddressesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Addresses", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => NotificationSettings_1.NotificationSettings, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "NotificationSettings", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserFollowingArgs_1.UserFollowingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Following", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [User_1.User], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserFollowersArgs_1.UserFollowersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Followers", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Product_1.Product], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserLikedProductsArgs_1.UserLikedProductsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "LikedProducts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Inventory_1.Inventory, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Inventory", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserMyOrdersArgs_1.UserMyOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "MyOrders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Order_1.Order], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserPurchaseOrdersArgs_1.UserPurchaseOrdersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "PurchaseOrders", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Request_1.Request], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserRequestsArgs_1.UserRequestsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Requests", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserPostsArgs_1.UserPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Posts", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserCommentsArgs_1.UserCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Comments", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reply_1.Reply], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserRepliesArgs_1.UserRepliesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Replies", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserReactionsArgs_1.UserReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Reactions", null);
UserRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
