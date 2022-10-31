"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpdateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateManyWithoutEpisodeInput_1 = require("../inputs/PostUpdateManyWithoutEpisodeInput");
const ReactionUpdateManyWithoutEpisodeInput_1 = require("../inputs/ReactionUpdateManyWithoutEpisodeInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let EpisodeUpdateWithoutSeasonSeriesInput = class EpisodeUpdateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutEpisodeInput_1.ReactionUpdateManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutEpisodeInput_1.ReactionUpdateManyWithoutEpisodeInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutEpisodeInput_1.PostUpdateManyWithoutEpisodeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutEpisodeInput_1.PostUpdateManyWithoutEpisodeInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], EpisodeUpdateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
EpisodeUpdateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpdateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], EpisodeUpdateWithoutSeasonSeriesInput);
exports.EpisodeUpdateWithoutSeasonSeriesInput = EpisodeUpdateWithoutSeasonSeriesInput;
