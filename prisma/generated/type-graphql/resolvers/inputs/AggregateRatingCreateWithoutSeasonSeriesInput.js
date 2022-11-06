"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/EpisodeCreateNestedOneWithoutAggregateRatingInput");
const TopicCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateNestedOneWithoutAggregateRatingInput");
let AggregateRatingCreateWithoutSeasonSeriesInput = class AggregateRatingCreateWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutAggregateRatingInput_1.TopicCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutAggregateRatingInput_1.TopicCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateNestedOneWithoutAggregateRatingInput_1.EpisodeCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateNestedOneWithoutAggregateRatingInput_1.EpisodeCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "Episode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutSeasonSeriesInput.prototype, "updatedAt", void 0);
AggregateRatingCreateWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], AggregateRatingCreateWithoutSeasonSeriesInput);
exports.AggregateRatingCreateWithoutSeasonSeriesInput = AggregateRatingCreateWithoutSeasonSeriesInput;
