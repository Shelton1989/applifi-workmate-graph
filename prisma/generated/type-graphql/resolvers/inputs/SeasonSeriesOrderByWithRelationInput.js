"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../inputs/AggregateRatingOrderByWithRelationInput");
const EpisodeOrderByRelationAggregateInput_1 = require("../inputs/EpisodeOrderByRelationAggregateInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ReactionOrderByRelationAggregateInput_1 = require("../inputs/ReactionOrderByRelationAggregateInput");
const TopicOrderByWithRelationInput_1 = require("../inputs/TopicOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonSeriesOrderByWithRelationInput = class SeasonSeriesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput)
], SeasonSeriesOrderByWithRelationInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput)
], SeasonSeriesOrderByWithRelationInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput)
], SeasonSeriesOrderByWithRelationInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeOrderByRelationAggregateInput_1.EpisodeOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeOrderByRelationAggregateInput_1.EpisodeOrderByRelationAggregateInput)
], SeasonSeriesOrderByWithRelationInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], SeasonSeriesOrderByWithRelationInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesOrderByWithRelationInput.prototype, "updatedAt", void 0);
SeasonSeriesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesOrderByWithRelationInput", {
        isAbstract: true
    })
], SeasonSeriesOrderByWithRelationInput);
exports.SeasonSeriesOrderByWithRelationInput = SeasonSeriesOrderByWithRelationInput;
