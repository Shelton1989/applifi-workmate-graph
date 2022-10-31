"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/PostCreateNestedManyWithoutEpisodeInput");
const ReactionCreateNestedManyWithoutEpisodeInput_1 = require("../inputs/ReactionCreateNestedManyWithoutEpisodeInput");
let EpisodeCreateWithoutSeasonSeriesInput = class EpisodeCreateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutEpisodeInput_1.ReactionCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutEpisodeInput_1.PostCreateNestedManyWithoutEpisodeInput)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeCreateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
EpisodeCreateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeCreateWithoutSeasonSeriesInput);
exports.EpisodeCreateWithoutSeasonSeriesInput = EpisodeCreateWithoutSeasonSeriesInput;
