"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutSeasonSeriesInput");
const EpisodeCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput");
const ReactionCreateNestedManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput");
const TopicCreateNestedOneWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput");
let SeasonSeriesCreateWithoutPostsInput = class SeasonSeriesCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesCreateWithoutPostsInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesCreateWithoutPostsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutPostsInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutSeasonSeriesInput_1.TopicCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutPostsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutSeasonSeriesInput_1.AggregateRatingCreateNestedOneWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutSeasonSeriesInput_1.ReactionCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedManyWithoutSeasonSeriesInput_1.EpisodeCreateNestedManyWithoutSeasonSeriesInput)
], SeasonSeriesCreateWithoutPostsInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesCreateWithoutPostsInput.prototype, "updatedAt", void 0);
SeasonSeriesCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateWithoutPostsInput);
exports.SeasonSeriesCreateWithoutPostsInput = SeasonSeriesCreateWithoutPostsInput;
