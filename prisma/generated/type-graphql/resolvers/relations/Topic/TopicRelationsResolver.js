"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Post_1 = require("../../../models/Post");
const Reaction_1 = require("../../../models/Reaction");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const Topic_1 = require("../../../models/Topic");
const TopicPostsArgs_1 = require("./args/TopicPostsArgs");
const TopicReactionsArgs_1 = require("./args/TopicReactionsArgs");
const TopicSeasonSeriesArgs_1 = require("./args/TopicSeasonSeriesArgs");
const helpers_1 = require("../../../helpers");
let TopicRelationsResolver = class TopicRelationsResolver {
    async Reactions(topic, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).Reactions(args);
    }
    async SeasonSeries(topic, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).SeasonSeries(args);
    }
    async Posts(topic, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).topic.findUnique({
            where: {
                id: topic.id,
            },
        }).Posts(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Reaction_1.Reaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Topic_1.Topic, Object, TopicReactionsArgs_1.TopicReactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "Reactions", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [SeasonSeries_1.SeasonSeries], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Topic_1.Topic, Object, TopicSeasonSeriesArgs_1.TopicSeasonSeriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "SeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Post_1.Post], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Topic_1.Topic, Object, TopicPostsArgs_1.TopicPostsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TopicRelationsResolver.prototype, "Posts", null);
TopicRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Topic_1.Topic)
], TopicRelationsResolver);
exports.TopicRelationsResolver = TopicRelationsResolver;
