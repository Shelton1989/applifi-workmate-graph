"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicUpdateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateOneWithoutTopicInput_1 = require("../inputs/AggregateRatingUpdateOneWithoutTopicInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumTOPIC_TYPEFieldUpdateOperationsInput_1 = require("../inputs/EnumTOPIC_TYPEFieldUpdateOperationsInput");
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
let TopicUpdateWithoutPostsInput = class TopicUpdateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdategenresInput_1.TopicUpdategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdategenresInput_1.TopicUpdategenresInput)
], TopicUpdateWithoutPostsInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecreatorsInput_1.TopicUpdatecreatorsInput)
], TopicUpdateWithoutPostsInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateauthorsInput_1.TopicUpdateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateauthorsInput_1.TopicUpdateauthorsInput)
], TopicUpdateWithoutPostsInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateartistsInput_1.TopicUpdateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateartistsInput_1.TopicUpdateartistsInput)
], TopicUpdateWithoutPostsInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdateproducersInput_1.TopicUpdateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdateproducersInput_1.TopicUpdateproducersInput)
], TopicUpdateWithoutPostsInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatedirectorsInput_1.TopicUpdatedirectorsInput)
], TopicUpdateWithoutPostsInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatepublishersInput_1.TopicUpdatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatepublishersInput_1.TopicUpdatepublishersInput)
], TopicUpdateWithoutPostsInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicUpdatecastInput_1.TopicUpdatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicUpdatecastInput_1.TopicUpdatecastInput)
], TopicUpdateWithoutPostsInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateOneWithoutTopicInput_1.AggregateRatingUpdateOneWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateOneWithoutTopicInput_1.AggregateRatingUpdateOneWithoutTopicInput)
], TopicUpdateWithoutPostsInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionUpdateManyWithoutTopicInput_1.ReactionUpdateManyWithoutTopicInput)
], TopicUpdateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateManyWithoutTopicInput_1.SeasonSeriesUpdateManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateManyWithoutTopicInput_1.SeasonSeriesUpdateManyWithoutTopicInput)
], TopicUpdateWithoutPostsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumTOPIC_TYPEFieldUpdateOperationsInput_1.EnumTOPIC_TYPEFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TopicUpdateWithoutPostsInput.prototype, "updatedAt", void 0);
TopicUpdateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicUpdateWithoutPostsInput", {
        isAbstract: true
    })
], TopicUpdateWithoutPostsInput);
exports.TopicUpdateWithoutPostsInput = TopicUpdateWithoutPostsInput;
