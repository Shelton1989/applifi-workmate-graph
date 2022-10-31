"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Notification_1 = require("../../../models/Notification");
const NotificationSettings_1 = require("../../../models/NotificationSettings");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const Request_1 = require("../../../models/Request");
const User_1 = require("../../../models/User");
const UserActivityArgs_1 = require("./args/UserActivityArgs");
const UserCommentsArgs_1 = require("./args/UserCommentsArgs");
const UserFollowersArgs_1 = require("./args/UserFollowersArgs");
const UserFollowingArgs_1 = require("./args/UserFollowingArgs");
const UserNotificationsArgs_1 = require("./args/UserNotificationsArgs");
const UserPostsArgs_1 = require("./args/UserPostsArgs");
const UserReactionsArgs_1 = require("./args/UserReactionsArgs");
const UserRepliesArgs_1 = require("./args/UserRepliesArgs");
const UserRequestsArgs_1 = require("./args/UserRequestsArgs");
const helpers_1 = require("../../../helpers");
let UserRelationsResolver = class UserRelationsResolver {
    async NotificationSettings(user, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).NotificationSettings({});
    }
    async Notifications(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Notifications(args);
    }
    async Activity(user, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.findUnique({
            where: {
                id: user.id,
            },
        }).Activity(args);
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
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserNotificationsArgs_1.UserNotificationsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Notifications", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Notification_1.Notification], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [User_1.User, Object, UserActivityArgs_1.UserActivityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Activity", null);
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
