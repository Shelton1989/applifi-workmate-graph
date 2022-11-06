"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateNestedOneWithoutTopicInput_1 = require("../inputs/AggregateRatingCreateNestedOneWithoutTopicInput");
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
let TopicCreateInput = class TopicCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreategenresInput_1.TopicCreategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreategenresInput_1.TopicCreategenresInput)
], TopicCreateInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecreatorsInput_1.TopicCreatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecreatorsInput_1.TopicCreatecreatorsInput)
], TopicCreateInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateauthorsInput_1.TopicCreateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateauthorsInput_1.TopicCreateauthorsInput)
], TopicCreateInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateartistsInput_1.TopicCreateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateartistsInput_1.TopicCreateartistsInput)
], TopicCreateInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateproducersInput_1.TopicCreateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateproducersInput_1.TopicCreateproducersInput)
], TopicCreateInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatedirectorsInput_1.TopicCreatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatedirectorsInput_1.TopicCreatedirectorsInput)
], TopicCreateInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatepublishersInput_1.TopicCreatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatepublishersInput_1.TopicCreatepublishersInput)
], TopicCreateInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecastInput_1.TopicCreatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecastInput_1.TopicCreatecastInput)
], TopicCreateInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateNestedOneWithoutTopicInput_1.AggregateRatingCreateNestedOneWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateNestedOneWithoutTopicInput_1.AggregateRatingCreateNestedOneWithoutTopicInput)
], TopicCreateInput.prototype, "AggregateRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput)
], TopicCreateInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput)
], TopicCreateInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput)
], TopicCreateInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateInput.prototype, "updatedAt", void 0);
TopicCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateInput", {
        isAbstract: true
    })
], TopicCreateInput);
exports.TopicCreateInput = TopicCreateInput;
