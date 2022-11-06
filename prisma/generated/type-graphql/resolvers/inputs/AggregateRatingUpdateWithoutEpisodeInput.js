"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const SeasonSeriesUpdateOneWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutAggregateRatingInput");
const TopicUpdateOneWithoutAggregateRatingInput_1 = require("../inputs/TopicUpdateOneWithoutAggregateRatingInput");
let AggregateRatingUpdateWithoutEpisodeInput = class AggregateRatingUpdateWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateOneWithoutAggregateRatingInput_1.TopicUpdateOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateOneWithoutAggregateRatingInput_1.TopicUpdateOneWithoutAggregateRatingInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutAggregateRatingInput_1.SeasonSeriesUpdateOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutAggregateRatingInput_1.SeasonSeriesUpdateOneWithoutAggregateRatingInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutEpisodeInput.prototype, "updatedAt", void 0);
AggregateRatingUpdateWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingUpdateWithoutEpisodeInput);
exports.AggregateRatingUpdateWithoutEpisodeInput = AggregateRatingUpdateWithoutEpisodeInput;
