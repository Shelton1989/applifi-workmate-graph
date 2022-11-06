"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateartistsInput_1 = require("../inputs/TopicCreateartistsInput");
const TopicCreateauthorsInput_1 = require("../inputs/TopicCreateauthorsInput");
const TopicCreatecastInput_1 = require("../inputs/TopicCreatecastInput");
const TopicCreatecreatorsInput_1 = require("../inputs/TopicCreatecreatorsInput");
const TopicCreatedirectorsInput_1 = require("../inputs/TopicCreatedirectorsInput");
const TopicCreategenresInput_1 = require("../inputs/TopicCreategenresInput");
const TopicCreateproducersInput_1 = require("../inputs/TopicCreateproducersInput");
const TopicCreatepublishersInput_1 = require("../inputs/TopicCreatepublishersInput");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let TopicCreateManyInput = class TopicCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreategenresInput_1.TopicCreategenresInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreategenresInput_1.TopicCreategenresInput)
], TopicCreateManyInput.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecreatorsInput_1.TopicCreatecreatorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecreatorsInput_1.TopicCreatecreatorsInput)
], TopicCreateManyInput.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateauthorsInput_1.TopicCreateauthorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateauthorsInput_1.TopicCreateauthorsInput)
], TopicCreateManyInput.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateartistsInput_1.TopicCreateartistsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateartistsInput_1.TopicCreateartistsInput)
], TopicCreateManyInput.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateproducersInput_1.TopicCreateproducersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateproducersInput_1.TopicCreateproducersInput)
], TopicCreateManyInput.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatedirectorsInput_1.TopicCreatedirectorsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatedirectorsInput_1.TopicCreatedirectorsInput)
], TopicCreateManyInput.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatepublishersInput_1.TopicCreatepublishersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatepublishersInput_1.TopicCreatepublishersInput)
], TopicCreateManyInput.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreatecastInput_1.TopicCreatecastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreatecastInput_1.TopicCreatecastInput)
], TopicCreateManyInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateManyInput.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicCreateManyInput.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TopicCreateManyInput.prototype, "updatedAt", void 0);
TopicCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateManyInput", {
        isAbstract: true
    })
], TopicCreateManyInput);
exports.TopicCreateManyInput = TopicCreateManyInput;
