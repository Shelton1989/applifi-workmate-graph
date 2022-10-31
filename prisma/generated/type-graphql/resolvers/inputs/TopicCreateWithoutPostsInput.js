"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
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
let TopicCreateWithoutPostsInput = class TopicCreateWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreategenresInput_1.TopicCreategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreategenresInput_1.TopicCreategenresInput)
], TopicCreateWithoutPostsInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecreatorsInput_1.TopicCreatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecreatorsInput_1.TopicCreatecreatorsInput)
], TopicCreateWithoutPostsInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateauthorsInput_1.TopicCreateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateauthorsInput_1.TopicCreateauthorsInput)
], TopicCreateWithoutPostsInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateartistsInput_1.TopicCreateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateartistsInput_1.TopicCreateartistsInput)
], TopicCreateWithoutPostsInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateproducersInput_1.TopicCreateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateproducersInput_1.TopicCreateproducersInput)
], TopicCreateWithoutPostsInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatedirectorsInput_1.TopicCreatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatedirectorsInput_1.TopicCreatedirectorsInput)
], TopicCreateWithoutPostsInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatepublishersInput_1.TopicCreatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatepublishersInput_1.TopicCreatepublishersInput)
], TopicCreateWithoutPostsInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecastInput_1.TopicCreatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecastInput_1.TopicCreatecastInput)
], TopicCreateWithoutPostsInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReactionCreateNestedManyWithoutTopicInput_1.ReactionCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutPostsInput.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedManyWithoutTopicInput_1.SeasonSeriesCreateNestedManyWithoutTopicInput)
], TopicCreateWithoutPostsInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateWithoutPostsInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutPostsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateWithoutPostsInput.prototype, "updatedAt", void 0);
TopicCreateWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateWithoutPostsInput", {
        isAbstract: true
    })
], TopicCreateWithoutPostsInput);
exports.TopicCreateWithoutPostsInput = TopicCreateWithoutPostsInput;
