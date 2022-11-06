"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingCreateWithoutEpisodeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/SeasonSeriesCreateNestedOneWithoutAggregateRatingInput");
const TopicCreateNestedOneWithoutAggregateRatingInput_1 = require("../inputs/TopicCreateNestedOneWithoutAggregateRatingInput");
let AggregateRatingCreateWithoutEpisodeInput = class AggregateRatingCreateWithoutEpisodeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "ratingValue", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "countedPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "allPosts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "ratingCount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateNestedOneWithoutAggregateRatingInput_1.TopicCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateNestedOneWithoutAggregateRatingInput_1.TopicCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "Topic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateNestedOneWithoutAggregateRatingInput_1.SeasonSeriesCreateNestedOneWithoutAggregateRatingInput)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AggregateRatingCreateWithoutEpisodeInput.prototype, "updatedAt", void 0);
AggregateRatingCreateWithoutEpisodeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingCreateWithoutEpisodeInput", {
        isAbstract: true
    })
], AggregateRatingCreateWithoutEpisodeInput);
exports.AggregateRatingCreateWithoutEpisodeInput = AggregateRatingCreateWithoutEpisodeInput;
