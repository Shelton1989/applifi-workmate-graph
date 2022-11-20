"use strict";
var SeasonSeriesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingRelationFilter_1 = require("../inputs/AggregateRatingRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EpisodeListRelationFilter_1 = require("../inputs/EpisodeListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const PostListRelationFilter_1 = require("../inputs/PostListRelationFilter");
const ReactionListRelationFilter_1 = require("../inputs/ReactionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TopicRelationFilter_1 = require("../inputs/TopicRelationFilter");
let SeasonSeriesWhereInput = SeasonSeriesWhereInput_1 = class SeasonSeriesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [SeasonSeriesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], SeasonSeriesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], SeasonSeriesWhereInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SeasonSeriesWhereInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicRelationFilter_1.TopicRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicRelationFilter_1.TopicRelationFilter)
], SeasonSeriesWhereInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], SeasonSeriesWhereInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingRelationFilter_1.AggregateRatingRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingRelationFilter_1.AggregateRatingRelationFilter)
], SeasonSeriesWhereInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SeasonSeriesWhereInput.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionListRelationFilter_1.ReactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionListRelationFilter_1.ReactionListRelationFilter)
], SeasonSeriesWhereInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeListRelationFilter_1.EpisodeListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeListRelationFilter_1.EpisodeListRelationFilter)
], SeasonSeriesWhereInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostListRelationFilter_1.PostListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostListRelationFilter_1.PostListRelationFilter)
], SeasonSeriesWhereInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SeasonSeriesWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SeasonSeriesWhereInput.prototype, "updatedAt", void 0);
SeasonSeriesWhereInput = SeasonSeriesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesWhereInput", {
        isAbstract: true
    })
], SeasonSeriesWhereInput);
exports.SeasonSeriesWhereInput = SeasonSeriesWhereInput;
