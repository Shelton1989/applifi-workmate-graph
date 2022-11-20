"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCountAggregate_1 = require("../outputs/TopicCountAggregate");
const TopicMaxAggregate_1 = require("../outputs/TopicMaxAggregate");
const TopicMinAggregate_1 = require("../outputs/TopicMinAggregate");
const TOPIC_TYPE_1 = require("../../enums/TOPIC_TYPE");
let TopicGroupBy = class TopicGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "genres", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "creators", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "authors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "artists", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "producers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "directors", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "publishers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TopicGroupBy.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicGroupBy.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TOPIC_TYPE_1.TOPIC_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TopicGroupBy.prototype, "topicType", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TopicGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCountAggregate_1.TopicCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCountAggregate_1.TopicCountAggregate)
], TopicGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicMinAggregate_1.TopicMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicMinAggregate_1.TopicMinAggregate)
], TopicGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicMaxAggregate_1.TopicMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicMaxAggregate_1.TopicMaxAggregate)
], TopicGroupBy.prototype, "_max", void 0);
TopicGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicGroupBy", {
        isAbstract: true
    })
], TopicGroupBy);
exports.TopicGroupBy = TopicGroupBy;
