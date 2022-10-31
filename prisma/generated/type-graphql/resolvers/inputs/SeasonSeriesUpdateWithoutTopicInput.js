"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EpisodeUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateManyWithoutSeasonSeriesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateManyWithoutSeasonSeriesInput");
const ReactionUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/ReactionUpdateManyWithoutSeasonSeriesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SeasonSeriesUpdateWithoutTopicInput = class SeasonSeriesUpdateWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutSeasonSeriesInput_1.ReactionUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutTopicInput.prototype, "updatedAt", void 0);
SeasonSeriesUpdateWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateWithoutTopicInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateWithoutTopicInput);
exports.SeasonSeriesUpdateWithoutTopicInput = SeasonSeriesUpdateWithoutTopicInput;
