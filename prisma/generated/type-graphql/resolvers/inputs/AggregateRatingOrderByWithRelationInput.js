"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeOrderByWithRelationInput_1 = require("../inputs/EpisodeOrderByWithRelationInput");
const SeasonSeriesOrderByWithRelationInput_1 = require("../inputs/SeasonSeriesOrderByWithRelationInput");
const TopicOrderByWithRelationInput_1 = require("../inputs/TopicOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AggregateRatingOrderByWithRelationInput = class AggregateRatingOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicOrderByWithRelationInput_1.TopicOrderByWithRelationInput)
], AggregateRatingOrderByWithRelationInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesOrderByWithRelationInput_1.SeasonSeriesOrderByWithRelationInput)
], AggregateRatingOrderByWithRelationInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeOrderByWithRelationInput_1.EpisodeOrderByWithRelationInput)
], AggregateRatingOrderByWithRelationInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "episodeId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingOrderByWithRelationInput.prototype, "updatedAt", void 0);
AggregateRatingOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingOrderByWithRelationInput", {
        isAbstract: true
    })
], AggregateRatingOrderByWithRelationInput);
exports.AggregateRatingOrderByWithRelationInput = AggregateRatingOrderByWithRelationInput;
