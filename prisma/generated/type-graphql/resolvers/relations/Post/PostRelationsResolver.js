"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Episode_1 = require("../../../models/Episode");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const Topic_1 = require("../../../models/Topic");
const User_1 = require("../../../models/User");
const PostCommentsArgs_1 = require("./args/PostCommentsArgs");
const PostReactionsArgs_1 = require("./args/PostReactionsArgs");
const helpers_1 = require("../../../helpers");
let PostRelationsResolver = class PostRelationsResolver {
    async Author(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Author({});
    }
    async Comments(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Comments(args);
    }
    async Reactions(post, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Reactions(args);
    }
    async Topic(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Topic({});
    }
    async SeasonSeries(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).SeasonSeries({});
    }
    async Episode(post, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).post.findUnique({
            where: {
                id: post.id,
            },
        }).Episode({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Comment_1.Comment], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, PostCommentsArgs_1.PostCommentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Comments", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object, PostReactionsArgs_1.PostReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Reactions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Topic", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "SeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Post_1.Post, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PostRelationsResolver.prototype, "Episode", null);
PostRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Post_1.Post)
], PostRelationsResolver);
exports.PostRelationsResolver = PostRelationsResolver;
