"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/PostCreateNestedManyWithoutEpisodeInput");
const ReactionCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/ReactionCreateNestedManyWithoutEpisodeInput");
const SeasonSeriesCreateNestedOneWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput");
let EpisodeCreateInput = class EpisodeCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCreateInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutEpisodesInput_1.SeasonSeriesCreateNestedOneWithoutEpisodesInput)
], EpisodeCreateInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateInput.prototype, "updatedAt", void 0);
EpisodeCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateInput", {
        isAbstract: true
    })
], EpisodeCreateInput);
exports.EpisodeCreateInput = EpisodeCreateInput;
