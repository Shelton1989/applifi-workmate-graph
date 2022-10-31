"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEpisode = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeAvgAggregate_1 = require("../outputs/EpisodeAvgAggregate");
const EpisodeCountAggregate_1 = require("../outputs/EpisodeCountAggregate");
const EpisodeMaxAggregate_1 = require("../outputs/EpisodeMaxAggregate");
const EpisodeMinAggregate_1 = require("../outputs/EpisodeMinAggregate");
const EpisodeSumAggregate_1 = require("../outputs/EpisodeSumAggregate");
let AggregateEpisode = class AggregateEpisode {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCountAggregate_1.EpisodeCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCountAggregate_1.EpisodeCountAggregate)
], AggregateEpisode.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeAvgAggregate_1.EpisodeAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeAvgAggregate_1.EpisodeAvgAggregate)
], AggregateEpisode.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeSumAggregate_1.EpisodeSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeSumAggregate_1.EpisodeSumAggregate)
], AggregateEpisode.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMinAggregate_1.EpisodeMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMinAggregate_1.EpisodeMinAggregate)
], AggregateEpisode.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeMaxAggregate_1.EpisodeMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeMaxAggregate_1.EpisodeMaxAggregate)
], AggregateEpisode.prototype, "_max", void 0);
AggregateEpisode = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEpisode", {
        isAbstract: true
    })
], AggregateEpisode);
exports.AggregateEpisode = AggregateEpisode;
