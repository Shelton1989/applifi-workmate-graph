"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRating_1 = require("../../../models/AggregateRating");
const Episode_1 = require("../../../models/Episode");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const EpisodePostsArgs_1 = require("./args/EpisodePostsArgs");
const EpisodeReactionsArgs_1 = require("./args/EpisodeReactionsArgs");
const helpers_1 = require("../../../helpers");
let EpisodeRelationsResolver = class EpisodeRelationsResolver {
    async SeasonSeries(episode, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            where: {
                id: episode.id,
            },
        }).SeasonSeries({});
    }
    async AggregateRating(episode, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            where: {
                id: episode.id,
            },
        }).AggregateRating({});
    }
    async Reactions(episode, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            where: {
                id: episode.id,
            },
        }).Reactions(args);
    }
    async Posts(episode, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            where: {
                id: episode.id,
            },
        }).Posts(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => SeasonSeries_1.SeasonSeries, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Episode_1.Episode, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeRelationsResolver.prototype, "SeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => AggregateRating_1.AggregateRating, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Episode_1.Episode, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeRelationsResolver.prototype, "AggregateRating", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Episode_1.Episode, Object, EpisodeReactionsArgs_1.EpisodeReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeRelationsResolver.prototype, "Reactions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Episode_1.Episode, Object, EpisodePostsArgs_1.EpisodePostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EpisodeRelationsResolver.prototype, "Posts", null);
EpisodeRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], EpisodeRelationsResolver);
exports.EpisodeRelationsResolver = EpisodeRelationsResolver;
