"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Comment_1 = require("../../../models/Comment");
const Episode_1 = require("../../../models/Episode");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const Reply_1 = require("../../../models/Reply");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const Topic_1 = require("../../../models/Topic");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let ReactionRelationsResolver = class ReactionRelationsResolver {
    async Post(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Post({});
    }
    async Comment(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Comment({});
    }
    async Reply(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Reply({});
    }
    async Author(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Author({});
    }
    async Topic(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Topic({});
    }
    async SeasonSeries(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).SeasonSeries({});
    }
    async Episode(reaction, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reaction.findUnique({
            where: {
                id: reaction.id,
            },
        }).Episode({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Post_1.Post, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Post", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Comment_1.Comment, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Comment", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Reply_1.Reply, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Reply", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Author", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Topic", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "SeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Reaction_1.Reaction, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReactionRelationsResolver.prototype, "Episode", null);
ReactionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reaction_1.Reaction)
], ReactionRelationsResolver);
exports.ReactionRelationsResolver = ReactionRelationsResolver;
