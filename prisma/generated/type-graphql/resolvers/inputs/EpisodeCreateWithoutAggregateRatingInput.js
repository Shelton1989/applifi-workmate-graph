"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/PostCreateNestedManyWithoutEpisodeInput");
const ReactionCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/ReactionCreateNestedManyWithoutEpisodeInput");
const SeasonSeriesCreateNestedOneWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput");
let EpisodeCreateWithoutAggregateRatingInput = class EpisodeCreateWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutAggregateRatingInput.prototype, "updatedAt", void 0);
EpisodeCreateWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeCreateWithoutAggregateRatingInput);
exports.EpisodeCreateWithoutAggregateRatingInput = EpisodeCreateWithoutAggregateRatingInput;
