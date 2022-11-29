"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../inputs/AggregateRatingOrderByWithRelationInput");
const PostOrderByRelationAggregateInput_1 = require("../inputs/PostOrderByRelationAggregateInput");
const ReactionOrderByRelationAggregateInput_1 = require("../inputs/ReactionOrderByRelationAggregateInput");
const SeasonSeriesOrderByRelationAggregateInput_1 = require("../inputs/SeasonSeriesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TopicOrderByWithRelationInput = class TopicOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "tmdbId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput)
], TopicOrderByWithRelationInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionOrderByRelationAggregateInput_1.ReactionOrderByRelationAggregateInput)
], TopicOrderByWithRelationInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesOrderByRelationAggregateInput_1.SeasonSeriesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesOrderByRelationAggregateInput_1.SeasonSeriesOrderByRelationAggregateInput)
], TopicOrderByWithRelationInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostOrderByRelationAggregateInput_1.PostOrderByRelationAggregateInput)
], TopicOrderByWithRelationInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicOrderByWithRelationInput.prototype, "updatedAt", void 0);
TopicOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicOrderByWithRelationInput", {
        isAbstract: true
    })
], TopicOrderByWithRelationInput);
exports.TopicOrderByWithRelationInput = TopicOrderByWithRelationInput;
