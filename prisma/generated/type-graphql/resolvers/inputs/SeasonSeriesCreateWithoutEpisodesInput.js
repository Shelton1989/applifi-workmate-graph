"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutSeasonSeriesInput");
const PostCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/PostCreateNestedManyWithoutSeasonSeriesInput");
const ReactionCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput");
const TopicCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput");
let SeasonSeriesCreateWithoutEpisodesInput = class SeasonSeriesCreateWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutSeasonSeriesInput_1.PostCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutEpisodesInput.prototype, "updatedAt", void 0);
SeasonSeriesCreateWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesCreateWithoutEpisodesInput);
exports.SeasonSeriesCreateWithoutEpisodesInput = SeasonSeriesCreateWithoutEpisodesInput;
