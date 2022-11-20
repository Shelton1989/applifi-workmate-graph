"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../inputs/AggregateRatingOrderByWithRelationInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ReactionOrderByRelationAggregateInput_1 = require("../inputs/ReactionOrderByRelationAggregateInput");
const SeasonSeriesOrderByWithRelationInput_1 = require("../inputs/SeasonSeriesOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EpisodeOrderByWithRelationInput = class EpisodeOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput)
], EpisodeOrderByWithRelationInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput)
], EpisodeOrderByWithRelationInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput)
], EpisodeOrderByWithRelationInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], EpisodeOrderByWithRelationInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeOrderByWithRelationInput.prototype, "updatedAt", void 0);
EpisodeOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeOrderByWithRelationInput", {
        isAbstract: true
    })
], EpisodeOrderByWithRelationInput);
exports.EpisodeOrderByWithRelationInput = EpisodeOrderByWithRelationInput;
