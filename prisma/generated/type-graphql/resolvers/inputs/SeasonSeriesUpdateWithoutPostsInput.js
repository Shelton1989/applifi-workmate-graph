"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutSeasonSeriesInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutSeasonSeriesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EpisodeUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateManyWithoutSeasonSeriesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ReactionUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateManyWithoutSeasonSeriesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateOneRequiredWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpdateOneRequiredWithoutSeasonSeriesInput");
let SeasonSeriesUpdateWithoutPostsInput = class SeasonSeriesUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutSeasonSeriesInput_1.AggregateRatingUpdateOneWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutSeasonSeriesInput_1.AggregateRatingUpdateOneWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
SeasonSeriesUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateWithoutPostsInput);
exports.SeasonSeriesUpdateWithoutPostsInput = SeasonSeriesUpdateWithoutPostsInput;
