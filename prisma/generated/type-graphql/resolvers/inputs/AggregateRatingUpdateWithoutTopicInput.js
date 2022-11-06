"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingUpdateWithoutTopicInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EpisodeUpdateOneWithoutAggregateRatingInput_1 = require("../inputs/EpisodeUpdateOneWithoutAggregateRatingInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const SeasonSeriesUpdateOneWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesUpdateOneWithoutAggregateRatingInput");
let AggregateRatingUpdateWithoutTopicInput = class AggregateRatingUpdateWithoutTopicInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateOneWithoutAggregateRatingInput_1.SeasonSeriesUpdateOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateOneWithoutAggregateRatingInput_1.SeasonSeriesUpdateOneWithoutAggregateRatingInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateOneWithoutAggregateRatingInput_1.EpisodeUpdateOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateOneWithoutAggregateRatingInput_1.EpisodeUpdateOneWithoutAggregateRatingInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AggregateRatingUpdateWithoutTopicInput.prototype, "updatedAt", void 0);
AggregateRatingUpdateWithoutTopicInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingUpdateWithoutTopicInput", {
        isAbstract: true
    })
], AggregateRatingUpdateWithoutTopicInput);
exports.AggregateRatingUpdateWithoutTopicInput = AggregateRatingUpdateWithoutTopicInput;
