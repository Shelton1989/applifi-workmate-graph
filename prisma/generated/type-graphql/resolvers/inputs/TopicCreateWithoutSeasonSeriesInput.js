"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCreateNestedManyWithoutTopicInput_1 = require("../inputs/PostCreateNestedManyWithoutTopicInput");
const ReactionCreateNestedManyWithoutTopicInput_1 = require("../inputs/ReactionCreateNestedManyWithoutTopicInput");
const TopicCreateartistsInput_1 = require("../inputs/TopicCreateartistsInput");
const TopicCreateauthorsInput_1 = require("../inputs/TopicCreateauthorsInput");
const TopicCreatecastInput_1 = require("../inputs/TopicCreatecastInput");
const TopicCreatecreatorsInput_1 = require("../inputs/TopicCreatecreatorsInput");
const TopicCreatedirectorsInput_1 = require("../inputs/TopicCreatedirectorsInput");
const TopicCreategenresInput_1 = require("../inputs/TopicCreategenresInput");
const TopicCreateproducersInput_1 = require("../inputs/TopicCreateproducersInput");
const TopicCreatepublishersInput_1 = require("../inputs/TopicCreatepublishersInput");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let TopicCreateWithoutSeasonSeriesInput = class TopicCreateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreategenresInput_1.TopicCreategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreategenresInput_1.TopicCreategenresInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecreatorsInput_1.TopicCreatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecreatorsInput_1.TopicCreatecreatorsInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateauthorsInput_1.TopicCreateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateauthorsInput_1.TopicCreateauthorsInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateartistsInput_1.TopicCreateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateartistsInput_1.TopicCreateartistsInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateproducersInput_1.TopicCreateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateproducersInput_1.TopicCreateproducersInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatedirectorsInput_1.TopicCreatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatedirectorsInput_1.TopicCreatedirectorsInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatepublishersInput_1.TopicCreatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatepublishersInput_1.TopicCreatepublishersInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecastInput_1.TopicCreatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecastInput_1.TopicCreatecastInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCreateNestedManyWithoutTopicInput_1.PostCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutSeasonSeriesInput.prototype, "Posts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutSeasonSeriesInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
TopicCreateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicCreateWithoutSeasonSeriesInput);
exports.TopicCreateWithoutSeasonSeriesInput = TopicCreateWithoutSeasonSeriesInput;