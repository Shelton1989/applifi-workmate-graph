"use strict";
var EpisodeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingRelationFilter_1 = require("../inputs/AggregateRatingRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const ReactionListRelationFilter_1 = require("../inputs/ReactionListRelationFilter");
const SeasonSeriesRelationFilter_1 = require("../inputs/SeasonSeriesRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let EpisodeWhereInput = EpisodeWhereInput_1 = class EpisodeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], EpisodeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], EpisodeWhereInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EpisodeWhereInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesRelationFilter_1.SeasonSeriesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesRelationFilter_1.SeasonSeriesRelationFilter)
], EpisodeWhereInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingRelationFilter_1.AggregateRatingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingRelationFilter_1.AggregateRatingRelationFilter)
], EpisodeWhereInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], EpisodeWhereInput.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionListRelationFilter_1.ReactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionListRelationFilter_1.ReactionListRelationFilter)
], EpisodeWhereInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], EpisodeWhereInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EpisodeWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], EpisodeWhereInput.prototype, "updatedAt", void 0);
EpisodeWhereInput = EpisodeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeWhereInput", {
        isAbstract: true
    })
], EpisodeWhereInput);
exports.EpisodeWhereInput = EpisodeWhereInput;
