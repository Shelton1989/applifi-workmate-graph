"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpdateWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EpisodeUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/EpisodeUpdateManyWithoutSeasonSeriesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const PostUpdateManyWithoutSeasonSeriesInput_1 = require("../inputs/PostUpdateManyWithoutSeasonSeriesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateOneRequiredWithoutSeasonSeriesInput_1 = require("../inputs/TopicUpdateOneRequiredWithoutSeasonSeriesInput");
let SeasonSeriesUpdateWithoutReactionsInput = class SeasonSeriesUpdateWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneRequiredWithoutSeasonSeriesInput_1.TopicUpdateOneRequiredWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateManyWithoutSeasonSeriesInput_1.EpisodeUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "Episodes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutSeasonSeriesInput_1.PostUpdateManyWithoutSeasonSeriesInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SeasonSeriesUpdateWithoutReactionsInput.prototype, "updatedAt", void 0);
SeasonSeriesUpdateWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpdateWithoutReactionsInput", {
        isAbstract: true
    })
], SeasonSeriesUpdateWithoutReactionsInput);
exports.SeasonSeriesUpdateWithoutReactionsInput = SeasonSeriesUpdateWithoutReactionsInput;
