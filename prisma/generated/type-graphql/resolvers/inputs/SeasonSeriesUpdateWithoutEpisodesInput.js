"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateWithoutEpisodesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateManyWithoutSeasonSeriesInput");
const ReactionUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateManyWithoutSeasonSeriesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateOneRequiredWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpdateOneRequiredWithoutSeasonSeriesInput");
let SeasonSeriesUpdateWithoutEpisodesInput = class SeasonSeriesUpdateWithoutEpisodesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutEpisodesInput.prototype, "updatedAt", void 0);
SeasonSeriesUpdateWithoutEpisodesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateWithoutEpisodesInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateWithoutEpisodesInput);
exports.SeasonSeriesUpdateWithoutEpisodesInput = SeasonSeriesUpdateWithoutEpisodesInput;
