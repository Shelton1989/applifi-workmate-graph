"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateManyWithoutEpisodeInput_1 = require("../inputs/PostUpdateManyWithoutEpisodeInput");
const ReactionUpdateManyWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateManyWithoutEpisodeInput");
const SeasonSeriesUpdateOneRequiredWithoutEpisodesInput_1 = require("../inputs/SeasonSeriesUpdateOneRequiredWithoutEpisodesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let EpisodeUpdateWithoutAggregateRatingInput = class EpisodeUpdateWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneRequiredWithoutEpisodesInput_1.SeasonSeriesUpdateOneRequiredWithoutEpisodesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneRequiredWithoutEpisodesInput_1.SeasonSeriesUpdateOneRequiredWithoutEpisodesInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutEpisodeInput_1.ReactionUpdateManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutEpisodeInput_1.ReactionUpdateManyWithoutEpisodeInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutEpisodeInput_1.PostUpdateManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutEpisodeInput_1.PostUpdateManyWithoutEpisodeInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EpisodeUpdateWithoutAggregateRatingInput.prototype, "updatedAt", void 0);
EpisodeUpdateWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateWithoutAggregateRatingInput", {
        isAbstract: true
    })
], EpisodeUpdateWithoutAggregateRatingInput);
exports.EpisodeUpdateWithoutAggregateRatingInput = EpisodeUpdateWithoutAggregateRatingInput;
