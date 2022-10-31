"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReactionCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/ReactionCreateNestedManyWithoutEpisodeInput");
const SeasonSeriesCreateNestedOneWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput");
let EpisodeCreateWithoutPostsInput = class EpisodeCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCreateWithoutPostsInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutPostsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput)
], EpisodeCreateWithoutPostsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutPostsInput.prototype, "updatedAt", void 0);
EpisodeCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateWithoutPostsInput", {
        isAbstract: true
    })
], EpisodeCreateWithoutPostsInput);
exports.EpisodeCreateWithoutPostsInput = EpisodeCreateWithoutPostsInput;
