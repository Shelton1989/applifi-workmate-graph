"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRating_1 = require("../../../models/AggregateRating");
const Episode_1 = require("../../../models/Episode");
const SeasonSeries_1 = require("../../../models/SeasonSeries");
const Topic_1 = require("../../../models/Topic");
const helpers_1 = require("../../../helpers");
let AggregateRatingRelationsResolver = class AggregateRatingRelationsResolver {
    async Topic(aggregateRating, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findUnique({
            where: {
                id: aggregateRating.id,
            },
        }).Topic({});
    }
    async SeasonSeries(aggregateRating, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findUnique({
            where: {
                id: aggregateRating.id,
            },
        }).SeasonSeries({});
    }
    async Episode(aggregateRating, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).aggregateRating.findUnique({
            where: {
                id: aggregateRating.id,
            },
        }).Episode({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Topic_1.Topic, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AggregateRating_1.AggregateRating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingRelationsResolver.prototype, "Topic", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => SeasonSeries_1.SeasonSeries, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AggregateRating_1.AggregateRating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingRelationsResolver.prototype, "SeasonSeries", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Episode_1.Episode, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [AggregateRating_1.AggregateRating, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRatingRelationsResolver.prototype, "Episode", null);
AggregateRatingRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => AggregateRating_1.AggregateRating)
], AggregateRatingRelationsResolver);
exports.AggregateRatingRelationsResolver = AggregateRatingRelationsResolver;
