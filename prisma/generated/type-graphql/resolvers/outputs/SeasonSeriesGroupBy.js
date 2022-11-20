"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesAvgAggregate_1 = require("../outputs/SeasonSeriesAvgAggregate");
const SeasonSeriesCountAggregate_1 = require("../outputs/SeasonSeriesCountAggregate");
const SeasonSeriesMaxAggregate_1 = require("../outputs/SeasonSeriesMaxAggregate");
const SeasonSeriesMinAggregate_1 = require("../outputs/SeasonSeriesMinAggregate");
const SeasonSeriesSumAggregate_1 = require("../outputs/SeasonSeriesSumAggregate");
let SeasonSeriesGroupBy = class SeasonSeriesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], SeasonSeriesGroupBy.prototype, "seasonOrSeriesNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "year", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "poster", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "overview", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "trailer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "coverImage", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "tagline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesGroupBy.prototype, "releaseDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "topicId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], SeasonSeriesGroupBy.prototype, "aggregateRatingId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], SeasonSeriesGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCountAggregate_1.SeasonSeriesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCountAggregate_1.SeasonSeriesCountAggregate)
], SeasonSeriesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesAvgAggregate_1.SeasonSeriesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesAvgAggregate_1.SeasonSeriesAvgAggregate)
], SeasonSeriesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesSumAggregate_1.SeasonSeriesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesSumAggregate_1.SeasonSeriesSumAggregate)
], SeasonSeriesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMinAggregate_1.SeasonSeriesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMinAggregate_1.SeasonSeriesMinAggregate)
], SeasonSeriesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesMaxAggregate_1.SeasonSeriesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesMaxAggregate_1.SeasonSeriesMaxAggregate)
], SeasonSeriesGroupBy.prototype, "_max", void 0);
SeasonSeriesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("SeasonSeriesGroupBy", {
        isAbstract: true
    })
], SeasonSeriesGroupBy);
exports.SeasonSeriesGroupBy = SeasonSeriesGroupBy;
