"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutEpisodeInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutEpisodeInput");
const PostCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/PostCreateNestedManyWithoutEpisodeInput");
const SeasonSeriesCreateNestedOneWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput");
let EpisodeCreateWithoutReactionsInput = class EpisodeCreateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCreateWithoutReactionsInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutReactionsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutReactionsInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput)
], EpisodeCreateWithoutReactionsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutEpisodeInput_1.AggregateRatingCreateNestedOneWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutEpisodeInput_1.AggregateRatingCreateNestedOneWithoutEpisodeInput)
], EpisodeCreateWithoutReactionsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutReactionsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutReactionsInput.prototype, "updatedAt", void 0);
EpisodeCreateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateWithoutReactionsInput", {
        isAbstract: true
    })
], EpisodeCreateWithoutReactionsInput);
exports.EpisodeCreateWithoutReactionsInput = EpisodeCreateWithoutReactionsInput;
