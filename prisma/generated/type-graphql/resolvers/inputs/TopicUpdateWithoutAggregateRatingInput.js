"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTOPIC_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumTOPIC_TYPEFieldUpdateOperationsInput");
const NullableIntFieldUpdateOperationsInput_1 = require("../inputs/NullableIntFieldUpdateOperationsInput");
const PostUpdateManyWithoutTopicInput_1 = require("../inputs/PostUpdateManyWithoutTopicInput");
const ReactionUpdateManyWithoutTopicInput_1 = require("../inputs/ReactionUpdateManyWithoutTopicInput");
const SeasonSeriesUpdateManyWithoutTopicInput_1 = require("../inputs/SeasonSeriesUpdateManyWithoutTopicInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TopicUpdateartistsInput_1 = require("../inputs/TopicUpdateartistsInput");
const TopicUpdateauthorsInput_1 = require("../inputs/TopicUpdateauthorsInput");
const TopicUpdatecastInput_1 = require("../inputs/TopicUpdatecastInput");
const TopicUpdatecreatorsInput_1 = require("../inputs/TopicUpdatecreatorsInput");
const TopicUpdatedirectorsInput_1 = require("../inputs/TopicUpdatedirectorsInput");
const TopicUpdategenresInput_1 = require("../inputs/TopicUpdategenresInput");
const TopicUpdateproducersInput_1 = require("../inputs/TopicUpdateproducersInput");
const TopicUpdatepublishersInput_1 = require("../inputs/TopicUpdatepublishersInput");
let TopicUpdateWithoutAggregateRatingInput = class TopicUpdateWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdategenresInput_1.TopicUpdategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdategenresInput_1.TopicUpdategenresInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateauthorsInput_1.TopicUpdateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateauthorsInput_1.TopicUpdateauthorsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateartistsInput_1.TopicUpdateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateartistsInput_1.TopicUpdateartistsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateproducersInput_1.TopicUpdateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateproducersInput_1.TopicUpdateproducersInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatepublishersInput_1.TopicUpdatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatepublishersInput_1.TopicUpdatepublishersInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecastInput_1.TopicUpdatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecastInput_1.TopicUpdatecastInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableIntFieldUpdateOperationsInput_1.NullableIntFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "tmdbId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateManyWithoutTopicInput_1.SeasonSeriesUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateManyWithoutTopicInput_1.SeasonSeriesUpdateManyWithoutTopicInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutTopicInput_1.PostUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostUpdateManyWithoutTopicInput_1.PostUpdateManyWithoutTopicInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutAggregateRatingInput.prototype, "updatedAt", void 0);
TopicUpdateWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicUpdateWithoutAggregateRatingInput);
exports.TopicUpdateWithoutAggregateRatingInput = TopicUpdateWithoutAggregateRatingInput;
