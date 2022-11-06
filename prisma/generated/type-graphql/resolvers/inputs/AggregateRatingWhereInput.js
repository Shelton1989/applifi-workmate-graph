"use strict";
var AggregateRatingWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const EpisodeRelationFilter_1 = require("../inputs/EpisodeRelationFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const SeasonSeriesRelationFilter_1 = require("../inputs/SeasonSeriesRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TopicRelationFilter_1 = require("../inputs/TopicRelationFilter");
let AggregateRatingWhereInput = AggregateRatingWhereInput_1 = class AggregateRatingWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRatingWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRatingWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRatingWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], AggregateRatingWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], AggregateRatingWhereInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AggregateRatingWhereInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AggregateRatingWhereInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], AggregateRatingWhereInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicRelationFilter_1.TopicRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicRelationFilter_1.TopicRelationFilter)
], AggregateRatingWhereInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AggregateRatingWhereInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesRelationFilter_1.SeasonSeriesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesRelationFilter_1.SeasonSeriesRelationFilter)
], AggregateRatingWhereInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AggregateRatingWhereInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeRelationFilter_1.EpisodeRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeRelationFilter_1.EpisodeRelationFilter)
], AggregateRatingWhereInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], AggregateRatingWhereInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AggregateRatingWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AggregateRatingWhereInput.prototype, "updatedAt", void 0);
AggregateRatingWhereInput = AggregateRatingWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingWhereInput", {
        isAbstract: true
    })
], AggregateRatingWhereInput);
exports.AggregateRatingWhereInput = AggregateRatingWhereInput;
