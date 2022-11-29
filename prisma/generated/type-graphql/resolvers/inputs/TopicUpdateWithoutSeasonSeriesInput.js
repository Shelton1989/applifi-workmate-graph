"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutTopicInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutTopicInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTOPIC_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumTOPIC_TYPEFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const PostUpdateManyWithoutTopicInput_1 = require("../inputs/PostUpdateManyWithoutTopicInput");
const ReactionUpdateManyWithoutTopicInput_1 = require("../inputs/ReactionUpdateManyWithoutTopicInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateartistsInput_1 = require("../inputs/TopicUpdateartistsInput");
const TopicUpdateauthorsInput_1 = require("../inputs/TopicUpdateauthorsInput");
const TopicUpdatecastInput_1 = require("../inputs/TopicUpdatecastInput");
const TopicUpdatecreatorsInput_1 = require("../inputs/TopicUpdatecreatorsInput");
const TopicUpdatedirectorsInput_1 = require("../inputs/TopicUpdatedirectorsInput");
const TopicUpdategenresInput_1 = require("../inputs/TopicUpdategenresInput");
const TopicUpdateproducersInput_1 = require("../inputs/TopicUpdateproducersInput");
const TopicUpdatepublishersInput_1 = require("../inputs/TopicUpdatepublishersInput");
let TopicUpdateWithoutSeasonSeriesInput = class TopicUpdateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdategenresInput_1.TopicUpdategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdategenresInput_1.TopicUpdategenresInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateauthorsInput_1.TopicUpdateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateauthorsInput_1.TopicUpdateauthorsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateartistsInput_1.TopicUpdateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateartistsInput_1.TopicUpdateartistsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateproducersInput_1.TopicUpdateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateproducersInput_1.TopicUpdateproducersInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatepublishersInput_1.TopicUpdatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatepublishersInput_1.TopicUpdatepublishersInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecastInput_1.TopicUpdatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecastInput_1.TopicUpdatecastInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "tmdbId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutTopicInput_1.AggregateRatingUpdateOneWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutTopicInput_1.AggregateRatingUpdateOneWithoutTopicInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutTopicInput_1.PostUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutTopicInput_1.PostUpdateManyWithoutTopicInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
TopicUpdateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicUpdateWithoutSeasonSeriesInput);
exports.TopicUpdateWithoutSeasonSeriesInput = TopicUpdateWithoutSeasonSeriesInput;
