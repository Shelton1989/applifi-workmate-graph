"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateWithoutAggregateRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutTopicInput_1 = require("../inputs/PostCreateNestedManyWithoutTopicInput");
const ReactionCreateNestedManyWithoutTopicInput_1 = require("../inputs/ReactionCreateNestedManyWithoutTopicInput");
const SeasonSeriesCreateNestedManyWithoutTopicInput_1 = require("../inputs/SeasonSeriesCreateNestedManyWithoutTopicInput");
const TopicCreateartistsInput_1 = require("../inputs/TopicCreateartistsInput");
const TopicCreateauthorsInput_1 = require("../inputs/TopicCreateauthorsInput");
const TopicCreatecastInput_1 = require("../inputs/TopicCreatecastInput");
const TopicCreatecreatorsInput_1 = require("../inputs/TopicCreatecreatorsInput");
const TopicCreatedirectorsInput_1 = require("../inputs/TopicCreatedirectorsInput");
const TopicCreategenresInput_1 = require("../inputs/TopicCreategenresInput");
const TopicCreateproducersInput_1 = require("../inputs/TopicCreateproducersInput");
const TopicCreatepublishersInput_1 = require("../inputs/TopicCreatepublishersInput");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let TopicCreateWithoutAggregateRatingInput = class TopicCreateWithoutAggregateRatingInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreategenresInput_1.TopicCreategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreategenresInput_1.TopicCreategenresInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecreatorsInput_1.TopicCreatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecreatorsInput_1.TopicCreatecreatorsInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateauthorsInput_1.TopicCreateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateauthorsInput_1.TopicCreateauthorsInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateartistsInput_1.TopicCreateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateartistsInput_1.TopicCreateartistsInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateproducersInput_1.TopicCreateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateproducersInput_1.TopicCreateproducersInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatedirectorsInput_1.TopicCreatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatedirectorsInput_1.TopicCreatedirectorsInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatepublishersInput_1.TopicCreatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatepublishersInput_1.TopicCreatepublishersInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecastInput_1.TopicCreatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecastInput_1.TopicCreatecastInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TopicCreateWithoutAggregateRatingInput.prototype, "tmdbId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutAggregateRatingInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutAggregateRatingInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutAggregateRatingInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutAggregateRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutAggregateRatingInput.prototype, "updatedAt", void 0);
TopicCreateWithoutAggregateRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateWithoutAggregateRatingInput", {
        isAbstract: true
    })
], TopicCreateWithoutAggregateRatingInput);
exports.TopicCreateWithoutAggregateRatingInput = TopicCreateWithoutAggregateRatingInput;
