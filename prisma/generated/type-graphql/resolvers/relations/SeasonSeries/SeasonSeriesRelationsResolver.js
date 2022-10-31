"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Episode_1 = require("../../../models/Episode");
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const Topic_1 = require("../../../models/Topic");
const SeasonSeriesEpisodesArgs_1 = require("./args/SeasonSeriesEpisodesArgs");
const SeasonSeriesPostsArgs_1 = require("./args/SeasonSeriesPostsArgs");
const SeasonSeriesReactionsArgs_1 = require("./args/SeasonSeriesReactionsArgs");
const helpers_1 = require("../../../helpers");
let SeasonSeriesRelationsResolver = class SeasonSeriesRelationsResolver {
    async Topic(seasonSeries, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            where: {
                id: seasonSeries.id,
            },
        }).Topic({});
    }
    async Reactions(seasonSeries, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            where: {
                id: seasonSeries.id,
            },
        }).Reactions(args);
    }
    async Episodes(seasonSeries, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            where: {
                id: seasonSeries.id,
            },
        }).Episodes(args);
    }
    async Posts(seasonSeries, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).seasonSeries.findUnique({
            where: {
                id: seasonSeries.id,
            },
        }).Posts(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SeasonSeries_1.SeasonSeries, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesRelationsResolver.prototype, "Topic", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SeasonSeries_1.SeasonSeries, Object, SeasonSeriesReactionsArgs_1.SeasonSeriesReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesRelationsResolver.prototype, "Reactions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Episode_1.Episode], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SeasonSeries_1.SeasonSeries, Object, SeasonSeriesEpisodesArgs_1.SeasonSeriesEpisodesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesRelationsResolver.prototype, "Episodes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [SeasonSeries_1.SeasonSeries, Object, SeasonSeriesPostsArgs_1.SeasonSeriesPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], SeasonSeriesRelationsResolver.prototype, "Posts", null);
SeasonSeriesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => SeasonSeries_1.SeasonSeries)
], SeasonSeriesRelationsResolver);
exports.SeasonSeriesRelationsResolver = SeasonSeriesRelationsResolver;
