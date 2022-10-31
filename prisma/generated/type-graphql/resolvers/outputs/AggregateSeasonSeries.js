"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSeasonSeries = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesAvgAggregate_1 = require("../outputs/SeasonSeriesAvgAggregate");
const SeasonSeriesCountAggregate_1 = require("../outputs/SeasonSeriesCountAggregate");
const SeasonSeriesMaxAggregate_1 = require("../outputs/SeasonSeriesMaxAggregate");
const SeasonSeriesMinAggregate_1 = require("../outputs/SeasonSeriesMinAggregate");
const SeasonSeriesSumAggregate_1 = require("../outputs/SeasonSeriesSumAggregate");
let AggregateSeasonSeries = class AggregateSeasonSeries {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCountAggregate_1.SeasonSeriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCountAggregate_1.SeasonSeriesCountAggregate)
], AggregateSeasonSeries.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesAvgAggregate_1.SeasonSeriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesAvgAggregate_1.SeasonSeriesAvgAggregate)
], AggregateSeasonSeries.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesSumAggregate_1.SeasonSeriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesSumAggregate_1.SeasonSeriesSumAggregate)
], AggregateSeasonSeries.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMinAggregate_1.SeasonSeriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMinAggregate_1.SeasonSeriesMinAggregate)
], AggregateSeasonSeries.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMaxAggregate_1.SeasonSeriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMaxAggregate_1.SeasonSeriesMaxAggregate)
], AggregateSeasonSeries.prototype, "_max", void 0);
AggregateSeasonSeries = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateSeasonSeries", {
        isAbstract: true
    })
], AggregateSeasonSeries);
exports.AggregateSeasonSeries = AggregateSeasonSeries;
