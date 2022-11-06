"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeAvgAggregate_1 = require("../outputs/EpisodeAvgAggregate");
const EpisodeCountAggregate_1 = require("../outputs/EpisodeCountAggregate");
const EpisodeMaxAggregate_1 = require("../outputs/EpisodeMaxAggregate");
const EpisodeMinAggregate_1 = require("../outputs/EpisodeMinAggregate");
const EpisodeSumAggregate_1 = require("../outputs/EpisodeSumAggregate");
let EpisodeGroupBy = class EpisodeGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], EpisodeGroupBy.prototype, "episodeNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeGroupBy.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeGroupBy.prototype, "seasonSeriesId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], EpisodeGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCountAggregate_1.EpisodeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCountAggregate_1.EpisodeCountAggregate)
], EpisodeGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeAvgAggregate_1.EpisodeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeAvgAggregate_1.EpisodeAvgAggregate)
], EpisodeGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeSumAggregate_1.EpisodeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeSumAggregate_1.EpisodeSumAggregate)
], EpisodeGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMinAggregate_1.EpisodeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMinAggregate_1.EpisodeMinAggregate)
], EpisodeGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMaxAggregate_1.EpisodeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMaxAggregate_1.EpisodeMaxAggregate)
], EpisodeGroupBy.prototype, "_max", void 0);
EpisodeGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EpisodeGroupBy", {
        isAbstract: true
    })
], EpisodeGroupBy);
exports.EpisodeGroupBy = EpisodeGroupBy;
